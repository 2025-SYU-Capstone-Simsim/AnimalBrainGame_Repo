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

    loadBlockCountGame() {
        console.log("블록 개수 세기 게임으로 이동");
        const result = cc.director.loadScene('BlockCountGameScene');
        console.log("씬 로드 결과:", result);
    }

    loadRememberGame() {
        console.log("기억력 게임으로 이동");
        cc.director.loadScene('RememberGameScene');
    }
  
    loadReverseCorrectGame() {
        console.log("숫자 거꾸로 맞추기 게임으로 이동");
        cc.director.loadScene('Reversecorrect_mainscene');
    }

    loadRottenacornGame() {
        console.log("도토리리 게임으로 이동");
        cc.director.loadScene('Rottenacorn_mainscene');
    }
    

}
