/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module supertube {

	export class id_brnn extends fairygui.GComponent {

		public item_bg:fairygui.GImage;
		public playerwinLabel:winloseLabel;
		public playeritemList:fairygui.GList;

		public static URL:string = "ui://g45xfpn7f4ei21";

		public static createInstance():id_brnn {
			return <id_brnn><any>(fairygui.UIPackage.createObject("supertube","id_brnn"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.item_bg = <fairygui.GImage><any>(this.getChild("item_bg"));
			this.playerwinLabel = <winloseLabel><any>(this.getChild("playerwinLabel"));
			this.playeritemList = <fairygui.GList><any>(this.getChild("playeritemList"));
		}
	}
}