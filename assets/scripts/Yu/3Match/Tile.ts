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

    private static selectedTile: Tile = null;

    // 노드가 씬에 생성되면서 초기화 단계.
    // 이 시점에 컴포넌트, 스프라이트, 이벤트 리스너 등을 등록
    onLoad() {
        // 스프라이트 컴포넌트가 없으면 추가
        if (!this.sprite) {
            this.sprite = this.node.addComponent(cc.Sprite);
        }

        this.node.on(cc.Node.EventType.TOUCH_END, this.onTileClicked, this);

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

    onTileClicked() {
        if (!cc.isValid(this.node)) return;
    
        if (Tile.selectedTile === null) {
            Tile.selectedTile = this;
            this.highlight(true);
        } else {
            if (!cc.isValid(Tile.selectedTile.node)) {
                Tile.selectedTile = null;
                return;
            }
    
            if (Tile.selectedTile === this) {
                this.highlight(false);
                Tile.selectedTile = null;
                return;
            }
    
            this.highlight(false);
            Tile.selectedTile.highlight(false);
    
            const board = this.node.parent.getComponent(ThreeMatchBoard);
            if (board) {
                board.swapTiles(this, Tile.selectedTile);
            }
    
            Tile.selectedTile = null;
        }
    }
    
    

    highlight(enable: boolean) {
        if (!this.node || !cc.isValid(this.node)) return;  // 추가
        this.node.scale = enable ? 1.1 : 1.0;
    }
    

    swapPosition(otherTile: Tile) {
        // 위치 바꾸기
        const tempPos = this.node.getPosition();
        this.node.setPosition(otherTile.node.getPosition());
        otherTile.node.setPosition(tempPos);

        // row, col 교환
        const tempRow = this.row;
        const tempCol = this.col;
        this.row = otherTile.row;
        this.col = otherTile.col;
        otherTile.row = tempRow;
        otherTile.col = tempCol;
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
