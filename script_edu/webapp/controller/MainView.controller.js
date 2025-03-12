sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast", // 1. 사용하고자 하는 라이브러리의 import 경로를 기록
    "sap/ui/model/json/JSONModel"
], 
// 2. import 대상을 매개변수로 기록
// 3. 매개변수의 순서는 import 받은 순서와 일치해야 한다 
function (Controller, MessageToast, JSONModel) { //
    "use strict";

    return Controller.extend("sync6.cl1.scriptedu.controller.MainView", {
        
        onInit() {

            console.log("Fiori loaded");

            // Make oData for JSONModel
            var oData = {

                Btntext : "OData text",
                Btnicon : "sap-icon://action",

                gs_input : {

                    Intext : "OData input",
                    Inholder : "OData place holder"

                },

                gs_label : {

                    Latext  : "OData label"
                }

            }

            var gs_change = {

                Btext : "Change width",
                Bicon : "sap-icon://journey-change"
            }
            
            // Get Model (Binding)
            var oModel  = new JSONModel(oData);
            var oModel2 = new JSONModel(gs_change);
            var oModel3 = new JSONModel("/json/student.json");

            // Bind Model
            this.getView().setModel(oModel);
            this.getView().setModel(oModel2, "button");
            this.getView().setModel(oModel3, "student");

        },

        onFruits: function() {

            // View에서 입력한 값을 받아온다 
            var vWord = this.getView().byId("word").getValue();
            var vFruits;

            // 입력받은 값으로 과일 이름을 출력
            switch (vWord) {
                case "하이":
                    vFruits = "안냐세요"
                    break;

                case "P":
                    vFruits = "pineapple"
                    break;

                default :
                    vFruits = "올바른 코드를 입력하삼"
                    break;

            }
            MessageToast.show(vFruits);

        },

        onAdd : function () {
            var vNum1, vNum2, vResult;

            // View로부터 값을 받아온다
            vNum1 = this.getView().byId("num1").getValue();
            vNum2 = this.getView().byId("num2").getValue();

            vResult = parseInt(vNum1) + parseInt(vNum2);

            MessageToast.show("result = " + vResult);

            this.getView().byId('result').setValue(vResult);
        },


        onFor : function () {

            // 배열선언
            var aData = ["A", "B", "C"];

            for (let i = 0; i < aData.length; i++) {

                console.log("aData["+i+"] = " + aData[i]);

            }

            /*--------2차원 배열---------*/
            let gt_data = [
                {
                    value1 : "Jongro",
                    value2 : "Euljiro",
                    value3 : "Gwancheol",
                },
                {
                    value1 : "Seongbuk",
                    value2 : "Gilum",
                    value3 : "Samyang",
                }

            ];

            for (const sy_index in gt_data) {
                console.log("gt_data["+sy_index+"] = ",gt_data[sy_index]);

            }
        },

        onWidth: function() {
            
            // id=word인 input 객체로부터 값을 받아올 것임임
            var vWidth = this.getView().byId('word').getValue();
            
            // 입력받은 값을 메소드에 할당(입력값 + px를 붙여주면 사이즈가 조절될 것)
            this.getView().byId('word').setWidth(vWidth + 'px');
        },

        onClear : function() {

            this.getView().byId('num1').setValue("");
            this.getView().byId('num2').setValue("");

        }
        
    });
});

