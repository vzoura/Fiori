sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"


], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("sync6cl1.ui5component.controller.StudyView", {
        onInit() {

            console.log("Fiori loaded");

            // Make oData for JSONModel
            var oData = {

            

            }

            var oModel   = new JSONModel("/json/student.json");
            var oModel2  = new JSONModel(oData);

            this.getView().setModel(oModel, "id");
            this.getView().setModel(oModel2, "id2");

        }
    });
});