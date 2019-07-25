/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module supertube {

	export class ST_FirstArea_Type extends fairygui.GComponent {

		public c1:fairygui.Controller;
		public win_lose:winText;
		public win_label:winloseLabel;
		public arealist_0:fairygui.GList;
		public wxhh:fairygui.GGroup;
		public arealist_1:fairygui.GList;
		public brnn:fairygui.GGroup;
		public arealist_2:fairygui.GList;
		public bjl:fairygui.GGroup;
		public arealist_3:fairygui.GList;
		public fqzs:fairygui.GGroup;
		public arealist_4:fairygui.GList;
		public sgj:fairygui.GGroup;
		public arealist_5:fairygui.GList;
		public benzbmw:fairygui.GGroup;
		public arealist_6:fairygui.GList;
		public loongtiger:fairygui.GGroup;

		public static URL:string = "ui://g45xfpn7sz29m";

		public static createInstance():ST_FirstArea_Type {
			return <ST_FirstArea_Type><any>(fairygui.UIPackage.createObject("supertube","ST_FirstArea_Type"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.c1 = this.getController("c1");
			this.win_lose = <winText><any>(this.getChild("win_lose"));
			this.win_label = <winloseLabel><any>(this.getChild("win_label"));
			this.arealist_0 = <fairygui.GList><any>(this.getChild("arealist_0"));
			this.wxhh = <fairygui.GGroup><any>(this.getChild("wxhh"));
			this.arealist_1 = <fairygui.GList><any>(this.getChild("arealist_1"));
			this.brnn = <fairygui.GGroup><any>(this.getChild("brnn"));
			this.arealist_2 = <fairygui.GList><any>(this.getChild("arealist_2"));
			this.bjl = <fairygui.GGroup><any>(this.getChild("bjl"));
			this.arealist_3 = <fairygui.GList><any>(this.getChild("arealist_3"));
			this.fqzs = <fairygui.GGroup><any>(this.getChild("fqzs"));
			this.arealist_4 = <fairygui.GList><any>(this.getChild("arealist_4"));
			this.sgj = <fairygui.GGroup><any>(this.getChild("sgj"));
			this.arealist_5 = <fairygui.GList><any>(this.getChild("arealist_5"));
			this.benzbmw = <fairygui.GGroup><any>(this.getChild("benzbmw"));
			this.arealist_6 = <fairygui.GList><any>(this.getChild("arealist_6"));
			this.loongtiger = <fairygui.GGroup><any>(this.getChild("loongtiger"));
		}
	}
}