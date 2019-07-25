/**
 * net 协议
 */
class SuperTubeActionID{
    static PLAYERS_BET_INFO=6100;
    static AREA_BET_INFO=6101;
    static GET_BLAKC_LIST=6200;
    static SET_WIN_AREAS=6003;
}
class SuperTubeNetPlus implements IPlugin, ISpriteCommand{
    executeCommand(note:NetPackage){
        switch(note.head.protoid){

        }
    };
    get commandMap():number[]{
        return[
            SuperTubeActionID.PLAYERS_BET_INFO
        ]
    }
    exec(...arg: any[]) {

    };
    remove() {
        ISpriteCommandUtil.unregister(this);
        console.log("SuperTubeNetPlus   remove");
    }
}