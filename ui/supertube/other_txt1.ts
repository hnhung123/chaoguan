/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module supertube {

	export class other_txt1 extends fairygui.GLabel {

		public c1:fairygui.Controller;
		public xian:fairygui.GImage;

		public static URL:string = "ui://g45xfpn7zxm22i";

		public static createInstance():other_txt1 {
			return <other_txt1><any>(fairygui.UIPackage.createObject("supertube","other_txt1"));
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