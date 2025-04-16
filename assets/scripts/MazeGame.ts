
import MazeLogic from "./MazeLogic";
import PlayerController from "./PlayerController";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MazeGame extends cc.Component {
    @property(cc.Node)
    mazeContainer: cc.Node = null!;  // 미로를 그릴 노드드
    @property(cc.Node)
    playerNode: cc.Node = null!;     // 플레이어 노드
    @property(cc.Node)
    goalNode: cc.Node = null!;       // 목표 노드

    private mazeLogic: MazeLogic;

    start() {
        // MazeContainer의 앵커와 위치를 (0, 0)으로 설정
        this.mazeContainer.setAnchorPoint(0, 0);
        this.mazeContainer.setPosition(0, 0);
        // 21×21 그리드, 각 셀 50픽셀 전체 크기는 1050×1050 픽셀
        this.mazeContainer.setContentSize(21 * 50, 21 * 50);

        // 미로 생성 및 렌더링
        this.mazeLogic = new MazeLogic(21, 21, this.mazeContainer);
        this.mazeLogic.generateMaze();
        this.mazeLogic.renderMaze();

        // 플레이어 위치를 시작 셀(1,1)에 맞게 설정
        const startPos = this.mazeLogic.getStartPosition();
        this.playerNode.setPosition(startPos.x * this.mazeLogic.cellSize, startPos.y * this.mazeLogic.cellSize);
        this.updatePlayerAppearance();

        // 목표 위치를 (cols - 2, rows - 2)로 설정
        const goalPos = this.mazeLogic.getGoalPosition();
        this.goalNode.setPosition(goalPos.x * this.mazeLogic.cellSize, goalPos.y * this.mazeLogic.cellSize);
        this.updateGoalAppearance();

        // 플레이어, 목표 잘보이도록 zindex 조절절
        this.playerNode.zIndex = 10;
        this.goalNode.zIndex = 10;

        // PlayerController에 미로 정보를 전달
        const playerCtrl = this.playerNode.getComponent(PlayerController);
        if (playerCtrl) {
            playerCtrl.mazeLogic = this.mazeLogic;
            playerCtrl.cellSize = this.mazeLogic.cellSize;
            playerCtrl.gridCols = 21;
            playerCtrl.gridRows = 21;
        }
    }

    updatePlayerAppearance() {
        if (this.playerNode.getComponent(cc.Sprite)) return;
        let graphics = this.playerNode.getComponent(cc.Graphics);
        if (!graphics) graphics = this.playerNode.addComponent(cc.Graphics);
        graphics.clear();
        graphics.fillColor = cc.Color.RED;
        // 플레이어: 각 셀 중앙에 그려지는 원 (반지름 = 셀 크기의 1/3)
        graphics.circle(this.mazeLogic.cellSize / 2, this.mazeLogic.cellSize / 2, this.mazeLogic.cellSize / 3);
        graphics.fill();
    }

    updateGoalAppearance() {
        if (this.goalNode.getComponent(cc.Sprite)) return;
        let graphics = this.goalNode.getComponent(cc.Graphics);
        if (!graphics) graphics = this.goalNode.addComponent(cc.Graphics);
        graphics.clear();
        graphics.fillColor = cc.Color.GREEN;
        // 목표: 셀의 전체 크기를 채우는 사각형
        graphics.rect(0, 0, this.mazeLogic.cellSize, this.mazeLogic.cellSize);
        graphics.fill();
    }

    update() {
        const playerPos = this.playerNode.getPosition();
        const goalPos = this.goalNode.getPosition();
        const threshold = 5; // 픽셀 단위 임계값 (필요에 따라 조정)

        if (Math.abs(playerPos.x - goalPos.x) < threshold &&
            Math.abs(playerPos.y - goalPos.y) < threshold) {
            cc.log("You Win!");
            cc.director.loadScene("GameOver"); // 게임오버 씬씬
        }
    }
    }