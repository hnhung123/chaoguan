/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module supertube {

	export class SuperTubeView extends fairygui.GComponent {

		public c1:fairygui.Controller;
		public title:fairygui.GLoader;
		public closeButton:fairygui.GButton;
		public betAreacmpt:ST_FirstArea_Type;
		public playerlistcmpt:ST_SecondArea_ID;
		public timeStateLabel:fairygui.GTextField;
		public wxhhList:fairygui.GList;
		public brnnList0:fairygui.GList;
		public brnnList1:fairygui.GList;
		public bjlList0:fairygui.GList;
		public bjlList1:fairygui.GList;
		public fqzsList:fairygui.GList;
		public sgjList:fairygui.GList;
		public bcbmList:fairygui.GList;
		public lhdList:fairygui.GList;
		public controlArea:fairygui.GGroup;
		public pageNum:fairygui.GTextField;

		public static URL:string = "ui://g45xfpn7r1t10";

		public static createInstance():SuperTubeView {
			return <SuperTubeView><any>(fairygui.UIPackage.createObject("supertube","SuperTubeView"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.c1 = this.getController("c1");
			this.title = <fairygui.GLoader><any>(this.getChild("title"));
			this.closeButton = <fairygui.GButton><any>(this.getChild("closeButton"));
			this.betAreacmpt = <ST_FirstArea_Type><any>(this.getChild("betAreacmpt"));
			this.playerlistcmpt = <ST_SecondArea_ID><any>(this.getChild("playerlistcmpt"));
			this.timeStateLabel = <fairygui.GTextField><any>(this.getChild("timeStateLabel"));
			this.wxhhList = <fairygui.GList><any>(this.getChild("wxhhList"));
			this.brnnList0 = <fairygui.GList><any>(this.getChild("brnnList0"));
			this.brnnList1 = <fairygui.GList><any>(this.getChild("brnnList1"));
			this.bjlList0 = <fairygui.GList><any>(this.getChild("bjlList0"));
			this.bjlList1 = <fairygui.GList><any>(this.getChild("bjlList1"));
			this.fqzsList = <fairygui.GList><any>(this.getChild("fqzsList"));
			this.sgjList = <fairygui.GList><any>(this.getChild("sgjList"));
			this.bcbmList = <fairygui.GList><any>(this.getChild("bcbmList"));
			this.lhdList = <fairygui.GList><any>(this.getChild("lhdList"));
			this.controlArea = <fairygui.GGroup><any>(this.getChild("controlArea"));
			this.pageNum = <fairygui.GTextField><any>(this.getChild("pageNum"));
		}
	}
}