/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module supertube {

	export class AbnormalListPanel extends fairygui.GComponent {

		public nameList:fairygui.GList;
		public uppageBtn:fairygui.GButton;
		public downpageBtn:fairygui.GButton;
		public closeBtn:fairygui.GButton;

		public static URL:string = "ui://g45xfpn7zxm22h";

		public static createInstance():AbnormalListPanel {
			return <AbnormalListPanel><any>(fairygui.UIPackage.createObject("supertube","AbnormalListPanel"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.nameList = <fairygui.GList><any>(this.getChild("nameList"));
			this.uppageBtn = <fairygui.GButton><any>(this.getChild("uppageBtn"));
			this.downpageBtn = <fairygui.GButton><any>(this.getChild("downpageBtn"));
			this.closeBtn = <fairygui.GButton><any>(this.getChild("closeBtn"));
		}
	}
}