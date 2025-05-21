import Game_logic from "./Reversecorrect_Game_logic"
const { ccclass, property } = cc._decorator;

@ccclass
export default class Button extends cc.Component {
    @property(Game_logic)
    gameLogic: Game_logic = null;

    start() {
        this.node.children.forEach(child => {
            const btn = child.getComponent(cc.Button);
            if (btn) {
                btn.node.on('touchend', this.ButtonClicked, this);
            }
        });
    }

    ButtonClicked(event: cc.Event) {
        const btnNode = event.target as cc.Node;
        let num = 0;
        switch (btnNode.name) {
            case "number1": num = 1; break;
            case "number2": num = 2; break;
            case "number3": num = 3; break;
            case "number4": num = 4; break;
            case "number5": num = 5; break;
            case "number6": num = 6; break;
            case "number7": num = 7; break;
            case "number8": num = 8; break;
            case "number9": num = 9; break;
        }

        Game_logic.player_label_arr.push(num);
        Game_logic.count++;

        if (this.gameLogic) {
            this.gameLogic.updateInputLabel();
            this.gameLogic.checkAnswer();
        } 
    }
}
