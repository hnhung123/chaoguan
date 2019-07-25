/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module supertube {

	export class ST_SecondArea_ID extends fairygui.GComponent {

		public c1:fairygui.Controller;
		public upPageBtn:fairygui.GButton;
		public downPageBtn:fairygui.GButton;
		public playerlist_0:fairygui.GList;
		public wxhh:fairygui.GGroup;
		public playerlist_1:fairygui.GList;
		public brnn:fairygui.GGroup;
		public playerlist_2:fairygui.GList;
		public bjl:fairygui.GGroup;
		public playerlist_3:fairygui.GList;
		public fqzs:fairygui.GGroup;
		public playerlist_4:fairygui.GList;
		public sqj:fairygui.GGroup;
		public playerlist_5:fairygui.GList;
		public benz:fairygui.GGroup;
		public playerlist_6:fairygui.GList;
		public loongtiger:fairygui.GGroup;

		public static URL:string = "ui://g45xfpn7sz29n";

		public static createInstance():ST_SecondArea_ID {
			return <ST_SecondArea_ID><any>(fairygui.UIPackage.createObject("supertube","ST_SecondArea_ID"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.c1 = this.getController("c1");
			this.upPageBtn = <fairygui.GButton><any>(this.getChild("upPageBtn"));
			this.downPageBtn = <fairygui.GButton><any>(this.getChild("downPageBtn"));
			this.playerlist_0 = <fairygui.GList><any>(this.getChild("playerlist_0"));
			this.wxhh = <fairygui.GGroup><any>(this.getChild("wxhh"));
			this.playerlist_1 = <fairygui.GList><any>(this.getChild("playerlist_1"));
			this.brnn = <fairygui.GGroup><any>(this.getChild("brnn"));
			this.playerlist_2 = <fairygui.GList><any>(this.getChild("playerlist_2"));
			this.bjl = <fairygui.GGroup><any>(this.getChild("bjl"));
			this.playerlist_3 = <fairygui.GList><any>(this.getChild("playerlist_3"));
			this.fqzs = <fairygui.GGroup><any>(this.getChild("fqzs"));
			this.playerlist_4 = <fairygui.GList><any>(this.getChild("playerlist_4"));
			this.sqj = <fairygui.GGroup><any>(this.getChild("sqj"));
			this.playerlist_5 = <fairygui.GList><any>(this.getChild("playerlist_5"));
			this.benz = <fairygui.GGroup><any>(this.getChild("benz"));
			this.playerlist_6 = <fairygui.GList><any>(this.getChild("playerlist_6"));
			this.loongtiger = <fairygui.GGroup><any>(this.getChild("loongtiger"));
		}
	}
}