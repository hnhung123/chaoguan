/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module supertube {

	export class loongtiger_txt2 extends fairygui.GLabel {

		public c1:fairygui.Controller;

		public static URL:string = "ui://g45xfpn7f4ei2a";

		public static createInstance():loongtiger_txt2 {
			return <loongtiger_txt2><any>(fairygui.UIPackage.createObject("supertube","loongtiger_txt2"));
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