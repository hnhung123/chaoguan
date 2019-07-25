/**
 * net 协议
 */
class SuperTubeActionID {
    static PLAYERS_BET_INFO = 6100;
    static AREAS_BET_INFO = 6101;
    static GET_BLACK_LIST = 6200;
    static SET_WIN_AREAS = 6003;
}
class SuperTubeNetPlus implements IPlugin, ISpriteCommand {
    constructor() {
        ISpriteCommandUtil.register(this);
    }
    initICommand?() {
        if (roger.DebugTool.isDebug == false) {
            return;
        }
    };
    get commandMap(): number[] {
        return [
            SuperTubeActionID.PLAYERS_BET_INFO,
            SuperTubeActionID.AREAS_BET_INFO,
            SuperTubeActionID.GET_BLACK_LIST,
            SuperTubeActionID.SET_WIN_AREAS
        ]
    };
    executeCommand(note: NetPackage) {
        switch (note.head.protoid) {
            case SuperTubeActionID.PLAYERS_BET_INFO:
                this.onPlayerBetInfo(note);
                break;
            case SuperTubeActionID.AREAS_BET_INFO:
                this.onAreaBetInfo(note);
                break;
            case SuperTubeActionID.GET_BLACK_LIST:
                this.onGetBlackList(note);
                break;
            case SuperTubeActionID.SET_WIN_AREAS:
                this.setWinAreas(note);
                break;
            default:
                console.log("未处理协议weichulixieyi",note)
        }
    };
    private onPlayerBetInfo(note:NetPackage):void{
        let cmd=gmgame.PlayersBetInfo.decode(note.body);
        console.log("GM玩家下注信息回包",cmd);
    };
    private onAreaBetInfo(note:NetPackage):void{
        let cmd=gmgame.AreasBetInfo.decode(note.body);
        console.log("GM区域下注信息回包",cmd);
    };
    private onGetBlackList(note:NetPackage):void{   
        let cmd=gmcommon.GetBlackListResp.decode(note.body);
        console.log("GM异常名单列表回报",cmd);
    };
    private setWinAreas(note:NetPackage):void{
        let cmd=gmgame.WinAreasResp.decode(note.body);
        console.log("GM设置结果回包",cmd)
    }
    exec(...arg: any[]) {

    };
    remove() {
        ISpriteCommandUtil.unregister(this);
        console.log("SuperTubeNetPlus   remove");
    }
}