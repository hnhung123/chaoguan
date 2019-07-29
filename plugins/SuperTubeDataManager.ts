class SuperTubeDataManager{
    public stpPanel:SuperTubePanel;
    private static _instance:SuperTubeDataManager;
    public cutAreaMoney_s:number[]=[];
    public cutPlayerBetData:gmgame.IPlayerBetInfo[];
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
    };
    public betPlayerDataMgr(data:gmgame.PlayersBetInfo){
        this.stpPanel.totalPlayer=data.player_count;
        this.cutPlayerBetData=[];
        this.cutPlayerBetData=data.players_info;
        this.stpPanel.showPlayerBetList(this.cutPlayerBetData)
    }
}

