class SuperTubePanel extends JTPanel<supertube.SuperTubeView>{
    constructor(){
        super();
        this.loadAsset("supertube");
    }
    protected nodityComplete():void{
        this.build(supertube.SuperTubeView,supertube.supertubeBinder,this);
        super.nodityComplete();
    }
}