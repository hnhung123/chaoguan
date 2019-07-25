/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module supertube {

	export class other_label extends fairygui.GComponent {

		public idLabel:other_txt1;
		public playerIdLabel:other_txt1;
		public stateLabel:other_txt1;
		public remarksLabel:other_txt1;

		public static URL:string = "ui://g45xfpn7zxm22j";

		public static createInstance():other_label {
			return <other_label><any>(fairygui.UIPackage.createObject("supertube","other_label"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.idLabel = <other_txt1><any>(this.getChild("idLabel"));
			this.playerIdLabel = <other_txt1><any>(this.getChild("playerIdLabel"));
			this.stateLabel = <other_txt1><any>(this.getChild("stateLabel"));
			this.remarksLabel = <other_txt1><any>(this.getChild("remarksLabel"));
		}
	}
}