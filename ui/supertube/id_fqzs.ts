/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module supertube {

	export class id_fqzs extends fairygui.GComponent {

		public item_bg:fairygui.GImage;
		public cutwin_bg:fairygui.GImage;
		public playerwinLabel:fairygui.GTextField;
		public playeritemList:fairygui.GList;

		public static URL:string = "ui://g45xfpn7f4ei25";

		public static createInstance():id_fqzs {
			return <id_fqzs><any>(fairygui.UIPackage.createObject("supertube","id_fqzs"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.item_bg = <fairygui.GImage><any>(this.getChild("item_bg"));
			this.cutwin_bg = <fairygui.GImage><any>(this.getChild("cutwin_bg"));
			this.playerwinLabel = <fairygui.GTextField><any>(this.getChild("playerwinLabel"));
			this.playeritemList = <fairygui.GList><any>(this.getChild("playeritemList"));
		}
	}
}