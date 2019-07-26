class SuperTubeDataManager{
    public stpPanel:SuperTubePanel;
    private static _instance:SuperTubeDataManager;
    public cutAreaMoney_s:number[]=[];
    public static get getInstance():SuperTubeDataManager{
        if(this._instance==null){
            this._instance=new SuperTubeDataManager();
        }
        return this._instance;
    }
    constructor(){

    }
    public betAreaDataMgr(data:gmgame.AreasBetInfo){
        this.cutAreaMoney_s=[];
        this.cutAreaMoney_s=data.gold as number[];
        this.stpPanel.showBetAreaData(this.cutAreaMoney_s,data.area)
    }
}