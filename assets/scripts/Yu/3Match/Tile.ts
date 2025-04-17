const { ccclass, property } = cc._decorator;
import ThreeMatchBoard from "./3MatchBoard";
@ccclass
export default class Tile extends cc.Component {
    @property(cc.Sprite) // 스프라이트 컴포넌트 연결
    sprite: cc.Sprite = null;  // 기존 sprite 속성 복구

    @property(cc.Prefab) // 폭발 효과 프리팹 속성 추가
    explosionPrefab: cc.Prefab = null;

    private colors: cc.Color[] = [
        cc.Color.RED, cc.Color.BLUE, cc.Color.GREEN, cc.Color.YELLOW, cc.Color.ORANGE
    ];

    public row: number = 0;
    public col: number = 0;

    private touchStartPos: cc.Vec2 = null;
    private static selectedTile: Tile = null;

    // 노드가 씬에 생성되면서 초기화 단계.
    // 이 시점에 컴포넌트, 스프라이트, 이벤트 리스너 등을 등록
    onLoad() {
        // 스프라이트 컴포넌트가 없으면 추가
        if (!this.sprite) {
            this.sprite = this.node.addComponent(cc.Sprite);
        }

        // this.node.on(cc.Node.EventType.TOUCH_END, this.onTileClicked, this);
        // 드래그 감지용 이벤트 등록
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);

    }

    setRandomColor() {
        let randomIndex = Math.floor(Math.random() * this.colors.length);
        this.node.color = this.colors[randomIndex];
    }

    setRandomColorExcluding(excludeColors: cc.Color[]) {
        let availableColors = this.colors.filter(color => {
            return !excludeColors.some(ex => ex.equals(color));
        });
    
        // 혹시 모든 색이 제외되면 그냥 랜덤으로 (안전장치)
        if (availableColors.length === 0) {
            availableColors = this.colors;
        }
    
        const randomIndex = Math.floor(Math.random() * availableColors.length);
        const color = availableColors[randomIndex];
        this.node.color = color;
    }
    

    addOutline() {
        // 기존에 있던 Graphics가 있으면 제거
        let existingGraphics = this.node.getComponent(cc.Graphics);
        if (existingGraphics) {
            this.node.removeComponent(existingGraphics);
        }
    
        // 새 Graphics 노드 생성
        let graphicsNode = new cc.Node();
        graphicsNode.parent = this.node;
        graphicsNode.setPosition(0, 0);
    
        let graphics = graphicsNode.addComponent(cc.Graphics);
        graphics.lineWidth = 5; // 테두리 두께
        graphics.strokeColor = cc.Color.BLACK; // 테두리 색상
    
        let size = this.node.getContentSize();
        console.log("Tile Size:", size); // 디버깅 로그
    
        // 테두리 그리기
        graphics.rect(-size.width / 2, -size.height / 2, size.width, size.height);
        graphics.stroke();
    }

    onTouchStart(event: cc.Event.EventTouch) {
        this.touchStartPos = event.getLocation();
        // 또는 this.touchStartPos = this.node.convertToNodeSpaceAR(event.getLocation());
        console.log("드래그 시작 위치:", this.touchStartPos);
    }
    
    onTouchEnd(event: cc.Event.EventTouch) {
        const endPos = event.getLocation();
        const delta = endPos.sub(this.touchStartPos);

        console.log("드래그 끝 위치:", endPos);
        console.log("드래그 거리:", delta);

        // 최소 거리 체크 (조금 더 유연하게, 예: 3픽셀 이상이면 처리)
        if (delta.len() < 3) {
            console.log("드래그 너무 짧아서 무시됨");
            return;
        }

        let absX = Math.abs(delta.x);
        let absY = Math.abs(delta.y);

        // 아주 작은 delta.x나 delta.y일 경우, 방향 보정
        if (absX < 1 && absY < 1) {
            console.log("움직임이 너무 작아서 무시됨");
            return;
        }

        let direction: string = "";

        if (absX > absY) {
            direction = delta.x > 0 ? "right" : "left";
        } else {
            direction = delta.y > 0 ? "up" : "down";
        }

        console.log("드래그 방향:", direction);
        
        const board = this.node.parent.getComponent(ThreeMatchBoard);
        if (!board || !board["board"]) {
            console.warn("ThreeMatchBoard를 찾을 수 없음");
            return;
        }

        let targetTile: Tile = null;
        const row = this.row;
        const col = this.col;

        switch (direction) {
            case "up":
                if (row > 0) targetTile = board["board"][row - 1][col];
                break;
            case "down":
                if (row < board["boardSize"] - 1) targetTile = board["board"][row + 1][col];
                break;
            case "left":
                if (col > 0) targetTile = board["board"][row][col - 1];
                break;
            case "right":
                if (col < board["boardSize"] - 1) targetTile = board["board"][row][col + 1];
                break;
        }

        if (targetTile) {
            console.log(`타일 교환: (${row}, ${col}) <-> (${targetTile.row}, ${targetTile.col})`);
            board.swapTiles(this, targetTile);
        }
    }

    explode() {
        console.log(`explode() 실행: (${this.row}, ${this.col})`);
    
        // 이펙트 생성
        if (this.explosionPrefab) {
            console.log(`폭발 이펙트 생성: (${this.row}, ${this.col})`);
            const effect = cc.instantiate(this.explosionPrefab);
            effect.parent = this.node.parent;
            effect.setPosition(this.node.getPosition());
    
            // 효과가 끝나면 자동 제거
            const ps = effect.getComponent(cc.ParticleSystem);
            ps && ps.resetSystem();
    
            this.scheduleOnce(() => {
                console.log(`폭발 이펙트 제거: (${this.row}, ${this.col})`);
                effect.destroy();
            }, 1);
        }
    
        // 애니메이션 + 파괴
        this.node.runAction(
            cc.sequence(
                cc.spawn(
                    cc.scaleTo(0.2, 1.5).easing(cc.easeBackOut()),
                    cc.fadeOut(0.2)
                ),
                cc.callFunc(() => {
                    if (Tile.selectedTile === this) {
                        Tile.selectedTile = null;  // 사라질 때 선택 해제
                    }
                    this.node.destroy();
                })
            )
        );
    }
    
    

    
}
