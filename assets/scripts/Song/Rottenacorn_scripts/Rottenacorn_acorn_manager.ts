const { ccclass, property } = cc._decorator;

import Acorn from "./Rottenacorn_acorn"

@ccclass
export default class AcornManager extends cc.Component {

    @property(cc.Prefab)
    acornPrefab: cc.Prefab = null;

    @property(cc.Node)
    acornParent: cc.Node = null;

    private pool: cc.Node[] = [];

    onLoad() {
        this.initPool();
    }

    initPool(): void {
        for (let i = 0; i < 8; i++) {
            const acorn = cc.instantiate(this.acornPrefab);
            acorn.parent = this.acornParent;
            acorn.active = false;
            this.pool.push(acorn);
        }
    }

    getAcorn(isRotten: boolean): cc.Node | null {
        for (let acorn of this.pool) {
            if (!acorn.active) {
                this.setupAcorn(acorn, isRotten);
                return acorn;
            }
        }
        return null;
    }

    setupAcorn(node: cc.Node, isRotten: boolean): void {
        node.active = true;

        // activate() 호출로 물리 속도 + 벌레 처리
        const acornScript = node.getComponent(Acorn);
        if (acornScript) {
            acornScript.activate(isRotten);
        }

        // 랜덤 위치 분산 배치
        const x = Math.random() * 400 - 200;  // -200 ~ +200
        const y = Math.random() * 200 - 100;  // -100 ~ +100
        node.setPosition(x, y);
    }

    resetAll(): void {
        for (let acorn of this.pool) {
            acorn.active = false;
        }
    }
}
