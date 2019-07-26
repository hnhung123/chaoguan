class SuperTubePanel extends JTPanel<supertube.SuperTubeView>{
    private plus: SuperTubeNetPlus;
    public static cutGameEnter:number=0
    private areaBetData:number[]=[];
    private _ares:number[]=[];
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
    };
    public showBetAreaData(aemoneys:number[],areas:number[]=[]):void{
        this.areaBetData=aemoneys;
        this._ares=areas;
        console.log("区域11：", aemoneys, areas);
        let _arealist=this.view.betAreacmpt["arealist_"+SuperTubePanel.cutGameEnter] as fairygui.GList
    }
    public closeGameEndView():void{
        this.plus.remove();
        JTPopUpManager.remove(this);
    }
}