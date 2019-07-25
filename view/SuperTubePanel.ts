class SuperTubePanel extends JTPanel<supertube.SuperTubeView>{
    private plus: SuperTubeNetPlus;
    constructor(){
        super();
        this.loadAsset("supertube");
    }
    protected nodityComplete():void{
        this.build(supertube.SuperTubeView,supertube.supertubeBinder,this);
        this.plus = new SuperTubeNetPlus();
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
        this.plus.remove();
        JTPopUpManager.remove(this);
    }
}