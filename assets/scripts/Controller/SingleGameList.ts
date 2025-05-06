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

    
    loadMazeGame() {
        console.log("미로찾기 게임으로 이동");
        cc.director.loadScene('StartMazeScene');
    }
    
    loadReverseCorrectGame() {
        console.log("숫자 거꾸로 맞추기 게임으로 이동");
        cc.director.loadScene('Reversecorrect_mainscene');
    }

    loadRottenacornGame() {
        console.log("도토리리 게임으로 이동");
        cc.director.loadScene('Rottenacorn_mainscene');
    }
    
 // 추후 실제 씬이름 추가 , 코코스 내 빌드파일에도 추가
    // loadGame3() {
    //     cc.director.loadScene('Game3Scene');  
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
