sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
    
], (Controller, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("sync6.cl1.uitable0305.controller.AirView", {
    
        onInit : function() {

            var AirlineSRV = { // oData serv
                AirlineSet : [ // Entity ice id 를 뜻함

                    
                    {Carrid : "AA", Carrname : "America Airline", Url : "http://www.aa.com"},
                    {Carrid : "LH", Carrname : "Luft Hanza",      Url : "http://www.lufthanza.com" },
                    {Carrid : "KA", Carrname : "Korean air",      Url : "http://www.koreanair.co.kr" }

                ],

                ScheduleSet : [

                    {Carrid : 'AA', Connid : '0100', cityfrom : 'NewYork'},
                    {Carrid : 'AC', Connid : '0200', cityfrom : 'Seoul'},
                ]
            }

            var oModel  = new JSONModel(AirlineSRV);
            var oModel2 = new JSONModel("/json/airline.json");

            this.getView().setModel(oModel);
            this.getView().setModel(oModel2, "id");

        }
    });
});