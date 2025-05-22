const { ccclass, property } = cc._decorator;

@ccclass
export default class SingleGameListController extends cc.Component {

    @property(cc.Node)
    gameCardContainer: cc.Node = null;

    @property(cc.Prefab)
    gameCardPrefab: cc.Prefab = null;

    @property(cc.Button)
    selectButton: cc.Button = null;

    @property(cc.Node)
    leftArrow: cc.Node = null;

    @property(cc.Node)
    rightArrow: cc.Node = null;

    
    @property(cc.Button)
    BackButton: cc.Button = null;

    private currentIndex: number = 0;
    private cards: cc.Node[] = [];

    private selectedScene: string = null;
    private selectScene(sceneName: string, selectedCard: cc.Node) {
        this.selectedScene = sceneName;
        this.gameCardContainer.children.forEach(card => {
            card.scale = card === selectedCard ? 1.1 : 1;
            card.opacity = card === selectedCard ? 255 : 180;
        });
        this.selectButton.interactable = true;
    }

    // 각 게임 정보 구성
    private gameList = [
        { title: '두더지 게임', thumbnail: 'mole_thumb', scene: 'Mole_ExplainScene' },
        { title: '과일 퍼즐', thumbnail: 'three_thumb', scene: '3m_ExplainScene' },
        { title: '블록 개수 세기', thumbnail: 'block_thumb', scene: 'BlockCountGameScene' },
        { title: '기억력 게임', thumbnail: 'remember_thumb', scene: 'RememberGameScene' },
        // { title: '숫자뒤집기', thumbnail: 'reverse_thumb', scene: 'Reversecorrect_mainscene' },
        // { title: '썩은도토리', thumbnail: 'acorn_thumb', scene: 'Rottenacorn_mainscene' },
    ];

    onLoad() {
        this.selectButton.interactable = false;
        this.loadGameCards();

        this.leftArrow.on(cc.Node.EventType.MOUSE_DOWN, this.showPrevCard, this);
        this.rightArrow.on(cc.Node.EventType.MOUSE_DOWN, this.showNextCard, this);
    }

    loadGameCards() {
        this.gameList.forEach((game, index) => {
            const card = cc.instantiate(this.gameCardPrefab);

            const titleNode = card.getChildByName("GameTitleBox")?.getChildByName("GameTitle");
            if (titleNode && titleNode.getComponent(cc.Label)) {
                titleNode.getComponent(cc.Label).string = game.title;
            }

            const thumbnailNode = card.getChildByName("GameThumbnail");
            if (thumbnailNode && thumbnailNode.getComponent(cc.Sprite)) {
                cc.resources.load(`Images/Common/thumbnails/${game.thumbnail}`, cc.SpriteFrame, (err, spriteFrame) => {
                    if (!err && spriteFrame) {
                        thumbnailNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    } else {
                        cc.error("썸네일 로드 실패:", game.thumbnail, err);
                    }
                });
            }

            card.active = false; // 처음엔 모두 비활성화
            this.cards.push(card);
            this.gameCardContainer.addChild(card);
        });

        // 첫 카드만 보여줌
        this.showCardAtIndex(0);
    }

    showCardAtIndex(index: number) {
        this.cards.forEach((card, i) => {
            card.active = i === index;
        });
        this.currentIndex = index;
        this.selectScene(this.gameList[index].scene, this.cards[index]);
    }

    showNextCard() {
        const nextIndex = (this.currentIndex + 1) % this.cards.length;
        this.showCardAtIndex(nextIndex);
    }

    showPrevCard() {
        const prevIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
        this.showCardAtIndex(prevIndex);
    }

    // SingleGameListController.ts
    public onSelectButtonClick() {
        if (this.selectedScene) {
            cc.director.loadScene(this.selectedScene);
        }
    }

    onClickMain() {
        cc.log("뒤로가기 버튼 클릭됨. Login 씬으로 이동.");
        cc.director.loadScene("MainScene");
    }


}
