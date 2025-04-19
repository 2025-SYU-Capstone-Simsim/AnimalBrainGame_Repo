const { ccclass, property } = cc._decorator;

@ccclass
export default class MainController extends cc.Component {

    loadMoleGame() {
        console.log("두더지 게임으로 이동");
        cc.director.loadScene('MoleGameScene');
    }
    
    loadThreeMatchGame() {
        console.log("쓰리매치 게임으로 이동");
        cc.director.loadScene('3M_GameScene');
    }
    

    // loadGame3() {
    //     cc.director.loadScene('Game3Scene');  // 나중에 실제 씬 이름으로 바꿔줘
    // }

    // loadGame4() {
    //     cc.director.loadScene('Game4Scene');
    // }

    // loadGame5() {
    //     cc.director.loadScene('Game5Scene');
    // }

    // loadGame6() {
    //     cc.director.loadScene('Game6Scene');
    // }

    // loadGame7() {
    //     cc.director.loadScene('Game7Scene');
    // }
}
