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
				var sNEW = sURL.replace("zdemopad",sApp);
				
				// No SAP Host
				if (sNEW===sURL) { sNEW = sURL.replace("DemoPadOpenUI5","DemoOpenUI5"); }
				
				// redirect
				sap.m.URLHelper.redirect(sNEW);
			}

		});

});