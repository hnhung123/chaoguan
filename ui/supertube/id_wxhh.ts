/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module supertube {

	export class id_wxhh extends fairygui.GComponent {

		public c1:fairygui.Controller;
		public item_bg:fairygui.GImage;
		public playerwinLabel:winloseLabel;
		public playeritemList:fairygui.GList;

		public static URL:string = "ui://g45xfpn7f4ei20";

		public static createInstance():id_wxhh {
			return <id_wxhh><any>(fairygui.UIPackage.createObject("supertube","id_wxhh"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.c1 = this.getController("c1");
			this.item_bg = <fairygui.GImage><any>(this.getChild("item_bg"));
			this.playerwinLabel = <winloseLabel><any>(this.getChild("playerwinLabel"));
			this.playeritemList = <fairygui.GList><any>(this.getChild("playeritemList"));
		}
	}
}