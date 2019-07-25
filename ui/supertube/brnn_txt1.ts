/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module supertube {

	export class brnn_txt1 extends fairygui.GLabel {

		public c1:fairygui.Controller;

		public static URL:string = "ui://g45xfpn7qlzy18";

		public static createInstance():brnn_txt1 {
			return <brnn_txt1><any>(fairygui.UIPackage.createObject("supertube","brnn_txt1"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.c1 = this.getController("c1");
		}
	}
}