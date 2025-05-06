const { ccclass, property } = cc._decorator;

@ccclass
export default class show_QnA extends cc.Component {
    @property(cc.Label)
    random_label: cc.Label = null;

    @property(cc.Node)
    buttonLayout: cc.Node = null;

    @property(cc.Label)
    sequence_label: cc.Label = null; // 

    private cnt: number = 3;
    private hideDelay: number = 1.5;
    private defaultHideDelay: number = 2; // 기본값 유지용
    private minHideDelay: number = 0.1;   // 최소 표시 시간
    static correctCount: number = 0;
    static qa: number[] = [];
    static isGameOver: boolean = false;
    static isReverse: boolean = false; //

    start() {
        this.showNewQuestion();
    }

    //문제 보여주는 로직 + 문제 맞출 수록 시간 초 조정 처음 1.6초 다음 1.4 다음 1.2
    public showNewQuestion() {
        const roundIndex = show_QnA.correctCount % 3; 
        this.hideDelay = 1.6 - (roundIndex * 0.2);
        show_QnA.isReverse = Math.random() < 0.5; // 

        const randomNum = this.print_randnum();
        this.random_label.string = `${randomNum}`;
        this.random_label.node.active = true;
        this.setButtonsInteractable(false);

        if (this.sequence_label) {
            this.sequence_label.string = "";
            this.sequence_label.node.active = false;
        }

        this.scheduleOnce(() => {
            this.random_label.node.active = false;
            if (this.sequence_label) {
                this.sequence_label.string = show_QnA.isReverse ? "역방향" : "정방향";
                this.sequence_label.node.active = true;
            }
            if (!show_QnA.isGameOver) {
                this.setButtonsInteractable(true);
            }
        }, this.hideDelay);
    }

    //비교 가능한 랜덤 난수 배열로 만드는 로직 + 3문제 마다 시간을 다시 초기화 
    make_randnum(): number[] {
        show_QnA.qa = [];
        let candid = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        if (show_QnA.correctCount > 0 && show_QnA.correctCount % 3 === 0) {
            this.cnt++;
            this.hideDelay = this.defaultHideDelay; // 3문제 맞췄으면 시간 초기화
        }
        for (let i = 0; i < this.cnt; i++) {
            const rand = candid[Math.floor(Math.random() * candid.length)];
            show_QnA.qa.push(rand);
        }
        return show_QnA.qa;
    }

    // 랜덤 난수 생성 로직
    print_randnum(): number {
        const numbers = this.make_randnum();
        let result = 0;
        for (let i = 0; i < numbers.length; i++) {
            result = result * 10 + numbers[i];
        }
        return result;
    }

    //숫자 버튼 클릭 로직
    setButtonsInteractable(state: boolean) {
        const buttons = this.buttonLayout.getComponentsInChildren(cc.Button);
        for (let btn of buttons) {
            btn.interactable = state;
            if (state) {
                btn.node.resumeSystemEvents(true);
            } else {
                btn.node.pauseSystemEvents(true);
            }
        }
    }
}
