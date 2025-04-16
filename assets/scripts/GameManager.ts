const { ccclass, property } = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {

    @property([cc.Button])
    optionButtons: cc.Button[] = [];

    @property(cc.Label)
    resultLabel: cc.Label = null;

    @property(cc.Node)
    blockParent: cc.Node = null;

    @property(cc.Prefab)
    blockPrefab: cc.Prefab = null;

    correctCount: number = 0;

    start() {
        this.generateQuestion();
    }

    generateQuestion() {
        // 1. 정답 블록 개수 결정 (1~20)
        this.correctCount = Math.floor(Math.random() * 20) + 1;

        // 2. 블록 생성
        this.spawnBlocks(this.correctCount);

        // 3. 보기 숫자들 만들기 (정답 포함 8개)
        const options = new Set<number>();
        options.add(this.correctCount);
        while (options.size < 8) {
            options.add(Math.floor(Math.random() * 30) + 1);
        }

        const optionList = Array.from(options);
        this.shuffleArray(optionList);

        // 4. 버튼에 숫자 세팅 + 클릭 이벤트 연결
        for (let i = 0; i < 8; i++) {
            const label = this.optionButtons[i].node.getComponentInChildren(cc.Label);
            label.string = optionList[i].toString();
        
            this.optionButtons[i].node.off('click');
            this.optionButtons[i].node.on('click', () => {
                this.checkAnswer(optionList[i]);
            });
        }
        

        // 5. 결과 초기화
        this.resultLabel.string = "";

        console.log("정답은", this.correctCount);
        console.log("보기 목록:", optionList);

    }

    spawnBlocks(count: number) {
        this.blockParent.removeAllChildren();
    
        const blockW = 50;
        const blockH = 25;
        const blockD = 26;
    
        const maxSize = 4;
        let placed = 0;
        const grid: Map<string, boolean> = new Map();
    
        // 기본 1층부터 시작, 반드시 2층 이상 구조 포함
        const minHeight = 2 + Math.floor(Math.random() * 2); // 2~3층 보장
    
        const basePositions: { x: number; y: number; z: number }[] = [];
    
        while (placed < count) {
            const x = Math.floor(Math.random() * maxSize);
            const y = Math.floor(Math.random() * maxSize);
            const z = 0;
    
            const key = `${x},${y},${z}`;
            if (grid.has(key)) continue;
    
            grid.set(key, true);
            basePositions.push({ x, y, z });
            this.createBlock(x, y, z, blockW, blockH, blockD);
            placed++;
        }
    
        // 위에 층 추가 (basePositions 중 일부 위에 올림)
        const availableForStack = [...basePositions];
        this.shuffleArray(availableForStack);
    
        for (const base of availableForStack) {
            if (placed >= count) break;
    
            const stackHeight = Math.min(
                minHeight + Math.floor(Math.random() * (maxSize - minHeight + 1)),
                maxSize
            );
    
            for (let z = 1; z < stackHeight && placed < count; z++) {
                const key = `${base.x},${base.y},${z}`;
                if (grid.has(key)) continue;
    
                grid.set(key, true);
                this.createBlock(base.x, base.y, z, blockW, blockH, blockD);
                placed++;
            }
        }
    
        console.log(`총 블록 생성 수: ${placed}`);
    }
    
    
    
    createBlock(x: number, y: number, z: number, blockW: number, blockH: number, blockD: number) {
        const block = cc.instantiate(this.blockPrefab);
        block.setParent(this.blockParent);
    
        const isoX = (x - y) * (blockW / 2);
        const isoY = -(x + y) * (blockH / 2) - z * blockD;
    
        block.setPosition(cc.v2(isoX, isoY));
        block.zIndex = x + y + z * 10;
    
        // 색상 통일
        const sprite = block.getComponent(cc.Sprite);
        if (sprite) {
            block.color = cc.color(100, 170, 255); // 고정된 색상
        }
    }
    
    // 블록 높이 확률 정의: 2층(30%), 3층~4층(70%)
    getTowerHeight(): number {
        const r = Math.random();
        if (r < 0.3) return 2;
        return Math.random() < 0.5 ? 3 : 4;
    }
    
    // 제네릭 배열 셔플 함수 (모든 타입 배열에 사용 가능)
    shuffleArray<T>(arr: T[]) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    
    
    

    checkAnswer(selected: number) {
        if (selected === this.correctCount) {
            this.resultLabel.string = "🎉 정답입니다!";
        } else {
            this.resultLabel.string = "❌ 틀렸습니다!";
        }
    }

    nextQuestion() {
        this.generateQuestion();
    }
}
