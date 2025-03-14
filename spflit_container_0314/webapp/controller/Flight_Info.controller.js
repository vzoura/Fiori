sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("flightinfo0314.flightinfo0314.controller.Flight_Info", {
        onInit() {
        },

        onSpfli: function (oEvent) {

            let oData = oEvent.getSource().getBindingContext().getObject(), // getObject()는 선택한 행의 wa(한줄) data를 갖고있다
                oTable = this.getView().byId("spfli"), // 이벤트를 적용할 Element를 읽어옴
                oBinding = oTable.getBinding("rows"),  // EntitySet 정보
                oFilter = null,
                aFilter = [];

            oFilter = new Filter({
                path: 'Carrid', // 검색하고자하는 모델의 프로퍼티
                operator: FilterOperator.EQ,
                value1: oData.Carrid
            });

            aFilter.push(oFilter);   // 검색조건을 배열에 담아줌
            oBinding.filter(aFilter) // 검색조건을 실행

        },

        onSflight: function (oEvent) {
            let oData = oEvent.getParameter("rowBindingContext").getObject(), // getObject()는 선택한 행의 wa(한줄) data를 갖고있다
                oTable = this.getView().byId("sflight"), // 이벤트를 적용할 Element를 읽어옴
                oBinding = oTable.getBinding("rows"),  // EntitySet 정보
                oFilter = null,
                aFilter = [];
            console.log(oData);
            oFilter = new Filter({
                path: 'Carrid', // 검색하고자하는 모델의 프로퍼티
                operator: FilterOperator.EQ,
                value1: oData.Carrid
            });

            aFilter.push(oFilter);
            oFilter = new Filter({
                path: 'Connid', // 검색하고자하는 모델의 프로퍼티
                operator: FilterOperator.EQ,
                value1: oData.Connid
            });

            aFilter.push(oFilter);   // 검색조건을 배열에 담아줌
            oBinding.filter(aFilter) // 검색조건을 실행


        }


    });
});