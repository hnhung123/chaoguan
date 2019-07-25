/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module supertube {

	export class wxhh_txt2 extends fairygui.GLabel {

		public c1:fairygui.Controller;

		public static URL:string = "ui://g45xfpn7f4ei1x";

		public static createInstance():wxhh_txt2 {
			return <wxhh_txt2><any>(fairygui.UIPackage.createObject("supertube","wxhh_txt2"));
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