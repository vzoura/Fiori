sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("sync6.cl1.paymentchart.controller.ChartView", {
        onInit() {
            let oVizFrame = this.getView().byId("idVizFrame");

            oVizFrame.setVizProperties({
                plotArea: {
                    colorPalette: ["orange", "skyblue", "pink"], // 원하는 색상 배열
                    dataLabel: {
                        visible: true // 데이터 라벨 추가 옵션
                    }
                },
                title: {
                    text: "항공사별 지불 금액"
                }
            });

            // Popover 연결 (툴팁 기능 추가)
            let oPopOver = this.getView().byId("idPopOver");
            oPopOver.connect(oVizFrame.getVizUid());
        }
    });
});