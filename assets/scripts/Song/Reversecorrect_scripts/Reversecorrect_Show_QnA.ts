const { ccclass, property } = cc._decorator;

@ccclass
export default class show_QnA extends cc.Component {
    @property(cc.Label)
    random_label: cc.Label = null;

    @property(cc.Node)
    buttonLayout: cc.Node = null;

    @property(cc.Label)
    sequence_label: cc.Label = null;

    private cnt: number = 3; // 시작 문제 자리수
    private hideDelay: number = 1.5;
    private defaultHideDelay: number = 2;
    private minHideDelay: number = 0.1;

    private lastMilestone: number = 0; //

    static correctCount: number = 0;
    static qa: number[] = [];
    static isGameOver: boolean = false;
    static isReverse: boolean = false;

    start() {
        this.showNewQuestion();
    }

    // 문제 표시 및 방향 설정, 숨김 시간 조절
    public showNewQuestion() {
        const roundIndex = show_QnA.correctCount % 3;
        this.hideDelay = 1.6 - (roundIndex * 0.2);

        show_QnA.isReverse = Math.random() < 0.5;

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
                this.setButtonsInteractable(true);
            }

            if (show_QnA.isGameOver === true) {
                this.setButtonsInteractable(false);
            }
        }, this.hideDelay);
    }

    // 문제 숫자 배열 생성 + 자리수 조절
    make_randnum(): number[] {
        show_QnA.qa = [];
        let candid = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        const milestone = Math.floor(show_QnA.correctCount / 3);
        if (milestone > this.lastMilestone) {
            this.cnt++;
            this.lastMilestone = milestone;
            this.hideDelay = this.defaultHideDelay;
        }

        for (let i = 0; i < this.cnt; i++) {
            const rand = candid[Math.floor(Math.random() * candid.length)];
            show_QnA.qa.push(rand);
        }

        return show_QnA.qa;
    }

    // 숫자 배열을 실제 숫자 값으로 출력
    print_randnum(): number {
        const numbers = this.make_randnum();
        let result = 0;
        for (let i = 0; i < numbers.length; i++) {
            result = result * 10 + numbers[i];
        }
        return result;
    }

    // 버튼 인터랙션 켜고 끄기
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
