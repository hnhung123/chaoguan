/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module supertube {

	export class sgj_txt1 extends fairygui.GLabel {

		public c1:fairygui.Controller;

		public static URL:string = "ui://g45xfpn7f4ei1l";

		public static createInstance():sgj_txt1 {
			return <sgj_txt1><any>(fairygui.UIPackage.createObject("supertube","sgj_txt1"));
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