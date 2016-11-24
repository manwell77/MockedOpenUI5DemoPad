sap.ui.define(["sap/ui/core/mvc/Controller"], 
		
	function (Controller) { 
	
		"use strict";

		return Controller.extend("sap.ui.demopad.controller.app", {
	
			/* initialization */
			onInit : function () { 
				
				var oModel = this.getView().getModel("tile");
			},	
			
			onTilePress: function(oEvent) {
				
				// get tile app
				var sApp = oEvent.getSource().getBindingContext("tile").getObject().TileApp;
				
				// get parameters
				var sURL= $(location).attr("href");
				
				// SAP Host
				var sNEW = sURL.replace("zmockopenui5pad",sApp);
				
				// No SAP Host
				if (sNEW===sURL) { sNEW = sURL.replace("OpenUI5DemoPad","OpenUI5Demo"); }
				
				// redirect
				sap.m.URLHelper.redirect(sNEW);
			}

		});

});