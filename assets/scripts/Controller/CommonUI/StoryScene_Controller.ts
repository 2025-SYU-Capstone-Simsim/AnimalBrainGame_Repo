const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    start() {
        cc.director.preloadScene("StoryScene_2");
        cc.director.preloadScene("StoryScene_3");

        this.node.on("touchend", () => {
            const ButtonName = this.node.name;
            if (ButtonName === "Movefir_Arrow"){
                cc.director.loadScene("StoryScene_1");
            }
            if (ButtonName === "Movesec_Arrow") {
                cc.director.loadScene("StoryScene_2");
            }
            if (ButtonName === "Movethir_Arrow"){
                cc.director.loadScene("StoryScene_3");
            }
            if (ButtonName === "SKIP"||"Go_Button"){
                cc.director.loadScene("LoginScene");
            }
        });
    }
}
