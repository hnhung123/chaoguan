/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module supertube {

	export class benzbmw_txt1 extends fairygui.GLabel {

		public c1:fairygui.Controller;

		public static URL:string = "ui://g45xfpn7f4ei1m";

		public static createInstance():benzbmw_txt1 {
			return <benzbmw_txt1><any>(fairygui.UIPackage.createObject("supertube","benzbmw_txt1"));
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