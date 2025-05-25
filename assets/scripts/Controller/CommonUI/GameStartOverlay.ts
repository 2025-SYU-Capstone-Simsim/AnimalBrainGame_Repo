const { ccclass, property } = cc._decorator;

@ccclass
export default class GameStartOverlay extends cc.Component {
    @property(cc.Node)
    letterContainer: cc.Node = null; // GameRow + StartRow 포함하는 부모

    onLoad() {
        this.playDropAnimations();
    }

    playDropAnimations() {
        const gameRow = this.letterContainer.getChildByName("GameRow");
        const startRow = this.letterContainer.getChildByName("StartRow");

        if (!gameRow || !startRow) {
            console.warn("GameRow 또는 StartRow 노드를 찾을 수 없습니다.");
            return;
        }

        this.animateLetterRow(gameRow.children, 0);
        this.animateLetterRow(startRow.children, 0.5); // 0.5초 딜레이로 START 등장

        const totalDelay = gameRow.children.length * 0.1 + startRow.children.length * 0.1 + 1;

        this.scheduleOnce(() => {
            cc.tween(this.node)
                .to(0.5, { opacity: 0 })
                .call(() => this.node.destroy())
                .start();
        }, totalDelay);
    }

    animateLetterRow(letters: cc.Node[], delayOffset: number) {
        letters.forEach((letterNode, index) => {
            letterNode.opacity = 0;
            letterNode.setPosition(letterNode.x, 100); // 위에서 시작

            cc.tween(letterNode)
                .delay(delayOffset + index * 0.1)
                .to(0.25, { position: cc.v3(letterNode.x, 0), opacity: 255 }, { easing: "backOut" })
                .start();
        });
    }
}
