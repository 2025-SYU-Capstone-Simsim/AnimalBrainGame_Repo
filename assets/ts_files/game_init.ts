const {ccclass, property} = cc._decorator;

@ccclass
export default class game_init extends cc.Component {
    @property(cc.Layout)
    Background_layout:cc.Layout = null;

    @property({type:cc.Prefab})
    Bubble_Prefabs: Array<cc.Prefab> = [];

    BubblePool:Array<Array<cc.Node>>=[];
    
    delta : number


    onLoad () {
    }
        
    start () {
        this.initBubble();
        
        
    }

    initBubble(){       //각 비눗방울 프리팹을 14개씩 초기화, 클릭했다가 때면 game_logic에 전달
        for (var i = 0; i < this.Bubble_Prefabs.length; i++)
            {
                var pool= [];
                
                for (var j = 0; j < 14; j++)
                {
                    var bubble = cc.instantiate(this.Bubble_Prefabs[i]);
                    bubble.active = false;
                    this.Background_layout.node.addChild(bubble);
                   pool.push(bubble);
                }
                
                this.BubblePool.push(pool);
            }
        }
    getBubble(idx:number):cc.Node
    {
        var target = this.BubblePool[idx];

        for(let i = 0; i<target.length; i++){
            if(!target[i].active){
                target[i].active=true;
                var middlenumb = Math.floor(Math.random()*9+1);
                let labelNode= new cc.Node("BubbleLabel");
                let label = labelNode.addComponent(cc.Label)
                //이미 써져있는 숫자가 있으면 label 중복제거를 위해 label 삭제
                if(target[i].getChildByName("BubbleLabel"))
                    target[i].getChildByName("BubbleLabel").destroy();
                label.string=middlenumb.toString();
                labelNode.color=new cc.Color(255,128,0);
                label.fontSize=60;
                label.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
                label.verticalAlign = cc.Label.VerticalAlign.CENTER;
                target[i].addChild(labelNode)
                labelNode.setPosition(cc.v2(0, 0));
                target[i].on(cc.Node.EventType.TOUCH_END,(event: cc.Event.EventTouch)=>{
                    const game_logic= cc.find("Canvas").getComponent("game_logic");
                    if(game_logic){
                        game_logic.onBubbleClick(target[i]);
                    }
                }, this)
                return target[i];

            }
        }
        
        }
        SpawnBubble(dt : number){
            this.delta+= dt;
            if(this.delta<3){
                return;
            }
            this.delta = 0;
            var randnumb=Math.floor(Math.random()*this.Bubble_Prefabs.length);
            var bubble = this.getBubble(randnumb);
            var layer = this.Background_layout;
            var positionsize=layer.node.getContentSize();
            bubble.setPosition(0,-1000);
            

            
        }
        
        // 비눗방울 비활성화
        remove_bubble(bubble:cc.Node){
            bubble.active=false;
        }
        
        
    
    update (dt) {
        this.SpawnBubble(dt);
    }
}

