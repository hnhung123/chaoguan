/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module supertube {

	export class fqzs_txt2 extends fairygui.GLabel {

		public c1:fairygui.Controller;

		public static URL:string = "ui://g45xfpn7f4ei24";

		public static createInstance():fqzs_txt2 {
			return <fqzs_txt2><any>(fairygui.UIPackage.createObject("supertube","fqzs_txt2"));
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