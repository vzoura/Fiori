sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("sync6.cl1.routertest.controller.SecondView", {
        onInit: function() {
        },

        onFirst: function() {

            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteFirstView");
        }
    });
});