class SuperTubePanel extends JTPanel<supertube.SuperTubeView>{
    private plus: SuperTubeNetPlus;
    public static cutEnterGame:number=0
    private areaBetData:number[]=[];
    private _ares:number[]=[];
    private cutOperating: number[] = [];//当前选中区域
    constructor(){
        super();
        this.loadAsset("supertube");
    }
    protected nodityComplete():void{
        this.build(supertube.SuperTubeView,supertube.supertubeBinder,this);
        this.plus = new SuperTubeNetPlus();
        super.nodityComplete();
        SuperTubeDataManager.getInstance.stpPanel=this;

        this.initUI();
    }
    public get view():supertube.SuperTubeView{
        return this.componentUI;
    }
    private initUI():void{
       this.view.closeButton.onClick(this, this.closeGameEndView);
       this.view.c1.selectedIndex = SuperTubePanel.cutEnterGame;
       this.view.betAreacmpt.c1.selectedIndex = SuperTubePanel.cutEnterGame;
       this.view.playerlistcmpt.c1.selectedIndex = SuperTubePanel.cutEnterGame;
       SuperTubeDataManager.getInstance
    };
    public showBetAreaData(aemoneys:number[],areas:number[]=[]):void{
        this.areaBetData=aemoneys;
        this._ares=areas;
        console.log("区域11：", aemoneys, areas);
        let _arealist=this.view.betAreacmpt["arealist_"+SuperTubePanel.cutEnterGame] as fairygui.GList;
        for(var i=0;i<=aemoneys.length;i++){
            if(i<=_arealist.numItems-1){
                let areaitem=_arealist.getChildAt(i).asLabel;
                areaitem.title=RandomUtil.formatGold(aemoneys[i],1)
            }
        }
        (this.view.betAreacmpt["win_label"] as fairygui.GLabel).title="0";
        
    };

    public closeGameEndView():void{
        this.plus.remove();
        JTPopUpManager.remove(this);
    }
}