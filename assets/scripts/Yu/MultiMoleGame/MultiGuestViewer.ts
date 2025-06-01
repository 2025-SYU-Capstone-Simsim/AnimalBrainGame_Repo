// import socket from "../../Socket";   // 실제 연결 시 사용
const { ccclass, property } = cc._decorator;

@ccclass
export default class OpponentMoleViewer extends cc.Component {
    /* ---------- Hole 노드 ---------- */
    @property(cc.Node) Hole1: cc.Node = null;
    @property(cc.Node) Hole2: cc.Node = null;
    @property(cc.Node) Hole3: cc.Node = null;
    @property(cc.Node) Hole4: cc.Node = null;
    @property(cc.Node) Hole5: cc.Node = null;
    @property(cc.Node) Hole6: cc.Node = null;
    @property(cc.Node) Hole7: cc.Node = null;
    @property(cc.Node) Hole8: cc.Node = null;
    @property(cc.Node) Hole9: cc.Node = null;

    /* ---------- 두더지 프리팹 ---------- */
    @property(cc.Prefab) molePrefab: cc.Prefab = null;
    @property(cc.Prefab) molePrefabGood: cc.Prefab = null;

    /* ---------- 맞은 표정 스프라이트 ---------- */
    @property(cc.SpriteFrame) moleHitSprite: cc.SpriteFrame = null;
    @property(cc.SpriteFrame) goodMoleHitSprite: cc.SpriteFrame = null;

    /* ---------- 점수 프리팹 ---------- */
    @property(cc.Prefab) scoreDisplayPrefab: cc.Prefab = null;

    /* ---------- 내부 상태 ---------- */
    private holes: cc.Node[] = [];
    private score: number = 0;
    private scoreLabel: cc.Label = null;

    /* ---------- 라이프사이클 ---------- */
    onLoad() {
        this.holes = [
            this.Hole1, this.Hole2, this.Hole3,
            this.Hole4, this.Hole5, this.Hole6,
            this.Hole7, this.Hole8, this.Hole9
        ];

        this.initScore();

        // 소켓 바인딩 예시 (추후 해제 풀기)
        // socket.on("spawn-mole", (data) => this.spawnMoleFromData(data));
        // socket.on("hit-mole",   (data) => this.hitMoleAnimation(data.index, data.type));
        // socket.on("sync-score", (data) => this.setScore(data.score));

        // ✨ 테스트
        this.scheduleOnce(() => {
            this.spawnMoleFromData({ index: 3, type: "bad", spawnTime: Date.now() });
            this.scheduleOnce(() => {
                this.hitMoleAnimation(3, "bad");
                this.setScore(10);
            }, 0.4);
        }, 1);
    }

    /* ---------- UI 초기화 ---------- */
    private initScore() {
        const scoreNode = cc.instantiate(this.scoreDisplayPrefab);
        this.node.addChild(scoreNode);
        this.scoreLabel = scoreNode.getChildByName("ScoreLabel").getComponent(cc.Label);
        this.updateScoreLabel();
    }

    private updateScoreLabel() {
        this.scoreLabel.string = `${this.score}`;
    }

    public setScore(value: number) {
        this.score = value;
        this.updateScoreLabel();
    }

    /* ---------- 두더지 등장 ---------- */
    public spawnMoleFromData(data: { index: number; type: string; spawnTime: number }) {
        const { index, type } = data;
        const hole = this.holes[index];
        if (!hole) return;

        const mole = cc.instantiate(type === "good" ? this.molePrefabGood : this.molePrefab);
        mole.name = "OpponentMole";
        mole.setPosition(0, -130);
        mole.active = true;
        hole.addChild(mole);

        cc.tween(mole)
            .to(0.2, { position: cc.v3(0, -20) }, { easing: "sineOut" })
            .delay(1.0)
            .call(() => {
                if (mole && mole.isValid) mole.destroy();
            })
            .start();
    }

    /* ---------- 맞았을 때 애니메이션 (스프라이트 교체) ---------- */
    public hitMoleAnimation(index: number, type: string) {
        const hole = this.holes[index];
        const mole = hole.getChildByName("OpponentMole");
        if (!mole || !mole.isValid) return;

        const sprite = mole.getComponent(cc.Sprite);
        if (sprite) {
            sprite.spriteFrame =
                type === "good" ? this.goodMoleHitSprite : this.moleHitSprite;
        }

        cc.tween(mole)
            .repeat(
                3,
                cc.tween()
                    .by(0.05, { angle: 15 })
                    .by(0.05, { angle: -30 })
                    .by(0.05, { angle: 15 })
            )
            .start();

        // 점수 갱신
        this.score += type === "good" ? -10 : 10;
        this.updateScoreLabel();
    }
}
