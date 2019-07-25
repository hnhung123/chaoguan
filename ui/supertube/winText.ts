/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module supertube {

	export class winText extends fairygui.GLabel {

		public c1:fairygui.Controller;

		public static URL:string = "ui://g45xfpn7f4ei1i";

		public static createInstance():winText {
			return <winText><any>(fairygui.UIPackage.createObject("supertube","winText"));
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