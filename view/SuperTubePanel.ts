class SuperTubePanel extends JTPanel<supertube.SuperTubeView>{
    constructor(){
        super();
        this.loadAsset("supertube");
    }
    protected nodityComplete():void{
        this.build(supertube.SuperTubeView,supertube.supertubeBinder,this);
        super.nodityComplete();
        this.initUI();
    }
    public get view():supertube.SuperTubeView{
        return this.componentUI;
    }
    private initUI():void{
       this.view.closeButton.onClick(this, this.closeGameEndView);
    }
    public closeGameEndView():void{
        JTPopUpManager.remove(this)
    }
}