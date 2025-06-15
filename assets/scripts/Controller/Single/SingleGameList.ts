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

    private gameList = [
        { title: '두더지 게임', thumbnail: 'mole_thumb', scene: 'Mole_ExplainScene' },
        { title: '과일 퍼즐', thumbnail: 'three_thumb', scene: '3m_ExplainScene' },
        { title: '블록 개수 세기', thumbnail: 'block_thumb', scene: 'BlockCount_ExplainScene' },
        { title: '기억력 게임', thumbnail: 'remember_thumb', scene: 'RememberGame_ExplainScene' },
        { title: '숫자 뒤집어 맞추기', thumbnail: 'reverse_thumb', scene: 'Reversecorrect_ExplainScene' },
        { title: '집중력 게임', thumbnail: 'concetration_thumb', scene: 'Rottenacorn_Explain_scene' },
        { title: '미로 게임', thumbnail: 'maze_thumb', scene: 'Maze_ExplainScene' },
    ];

    onLoad() {
        this.selectButton.interactable = false;
        this.loadGameCards();

        this.registerArrowEvents(this.leftArrow, this.showPrevCard.bind(this));
        this.registerArrowEvents(this.rightArrow, this.showNextCard.bind(this));

        this.registerButtonEvents(this.selectButton.node, this.onSelectButtonClick.bind(this));
        this.registerButtonEvents(this.BackButton.node, this.onClickMain.bind(this));
    }

    registerButtonEvents(node: cc.Node, callback: () => void) {
    node.off(cc.Node.EventType.TOUCH_END); // 중복 방지
    node.on(cc.Node.EventType.TOUCH_END, callback);
    }

    registerArrowEvents(node: cc.Node, callback: () => void) {
    node.off(cc.Node.EventType.TOUCH_END); // 중복 방지
    node.on(cc.Node.EventType.TOUCH_END, callback);
    }


    loadGameCards() {
        this.gameList.forEach((game, index) => {
            const card = cc.instantiate(this.gameCardPrefab);
            // desc(게임 설명) 숨김 처리 (멀티에서만 씀)
            const descNode = card.getChildByName("GameDesc");
            if (descNode) descNode.active = false;

            const titleNode = card.getChildByName("GameTitleBox")?.getChildByName("GameTitle");
            if (titleNode && titleNode.getComponent(cc.Label)) {
                titleNode.getComponent(cc.Label).string = game.title;
            }

            const thumbnailNode = card.getChildByName("GameThumbnail");
            if (thumbnailNode && thumbnailNode.getComponent(cc.Sprite)) {
                cc.resources.load(`Images/Common/thumbnails/${game.thumbnail}`, cc.SpriteFrame, (err, spriteFrame) => {
                    if (!err && spriteFrame) {
                        thumbnailNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                });
            }

            card.active = false;
            this.cards.push(card);
            this.gameCardContainer.addChild(card);
        });

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

    public onSelectButtonClick() {
        if (this.selectedScene) {
            cc.director.loadScene(this.selectedScene);
        }
    }

    onClickMain() {
        cc.log("뒤로가기 버튼 클릭됨. Main 씬으로 이동.");
        cc.director.loadScene("MainScene");
    }
}
