/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module supertube {

	export class wxhh_txt1 extends fairygui.GLabel {

		public c1:fairygui.Controller;
		public xian:fairygui.GImage;

		public static URL:string = "ui://g45xfpn7xsc815";

		public static createInstance():wxhh_txt1 {
			return <wxhh_txt1><any>(fairygui.UIPackage.createObject("supertube","wxhh_txt1"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.c1 = this.getController("c1");
			this.xian = <fairygui.GImage><any>(this.getChild("xian"));
		}
	}
}