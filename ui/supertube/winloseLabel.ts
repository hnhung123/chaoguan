/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module supertube {

	export class winloseLabel extends fairygui.GLabel {

		public c1:fairygui.Controller;

		public static URL:string = "ui://g45xfpn7johh17";

		public static createInstance():winloseLabel {
			return <winloseLabel><any>(fairygui.UIPackage.createObject("supertube","winloseLabel"));
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