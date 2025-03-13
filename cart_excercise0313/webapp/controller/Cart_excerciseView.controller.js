sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    'sap/ui/model/Filter', 
    'sap/ui/model/FilterOperator'
], (Controller, MessageToast, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("sync6.cl1.cartexcercise0313.controller.Cart_excerciseView", {
        onInit() {
        },

        onClear : function() {
            this.getView().byId('Shop').setValue("");
            this.getView().byId('CustomId').setValue("");
            this.getView().byId('CartNo').setValue("");
            this.getView().byId('Matnr').setValue("");
            this.getView().byId('Maktx').setValue("");
            this.getView().byId('Amount').setValue("");
            this.getView().byId('Waers').setValue("");
            this.getView().byId('GoodsCnt').setValue("");
            this.getView().byId('Kind').setValue("");
        },

        onSearch : function() {
            
            // 검색어 받아오기
            var vMaktx = this.getView().byId('IMAKTX').getValue();
            var vCustomId = this.getView().byId('ICUSTOM_ID').getValue();

            var oTable = this.getView().byId('carttable'),
                oBinding = oTable.getBinding('rows'),
                oFilter = null,
                aFilter = [];

            // Filter 구성
            /***** vMaktx data *****/
            if ( vMaktx != "" ) {
                oFilter = new Filter (
                    {
                        path : 'Maktx',
                        operator : FilterOperator.Contains,
                        value1 : vMaktx
                    }
                );

                // Filter 구성을 배열에 담아줌
                aFilter.push(oFilter);
                oFilter = null;
            }

            /***** vCustomId data *****/
            if ( vMaktx != "" ) {
                oFilter = new Filter (
                    {
                        path : 'CustomId',
                        operator : FilterOperator.Contains,
                        value1 : vCustomId
                    }
                );

                // Filter 구성을 배열에 담아줌
                aFilter.push(oFilter);
                oFilter = null;
            }

            oBinding.filter(aFilter);


        },

        onDisplay : function() {

            var oModel   = this.getView().getModel(),
                oTable   = this.getView().byId('carttable'),
                aIndex   = oTable.getSelectedIndices(),
                oContext = oTable.getContextByIndex(aIndex[0]),
                oData    = oContext.getObject();

            // set Value
            this.getView().byId('Shop').setValue(oData.Shop);
            this.getView().byId('CustomId').setValue(oData.CustomId);
            this.getView().byId('CartNo').setValue(oData.CartNo);
            this.getView().byId('Matnr').setValue(oData.Matnr);
            this.getView().byId('Maktx').setValue(oData.Maktx);
            this.getView().byId('Amount').setValue(oData.Amount);
            this.getView().byId('Waers').setValue(oData.Waers);
            this.getView().byId('GoodsCnt').setValue(oData.GoodsCnt);
            this.getView().byId('Kind').setValue(oData.Kind);

        },

        onCreate: function() {

            var oModel = this.getView().getModel(),
                vWrbtr = this.getView().byId('Amount').getValue().replaceAll(',', '');
                

            let oCreate = {
                Shop    : this.getView().byId('Shop').getValue(),
                CustomId: this.getView().byId('CustomId').getValue(),
                CartNo  : parseInt(this.getView().byId('CartNo').getValue()),
                Matnr   : this.getView().byId('Matnr').getValue(),
                Maktx   : this.getView().byId('Maktx').getValue(),
                Amount  : vWrbtr,
                Waers   : this.getView().byId('Waers').getValue(),
                GoodsCnt: parseInt(this.getView().byId('GoodsCnt').getValue()),
                Kind    : this.getView().byId('Kind').getValue()
            }

            oModel.create( '/CartSet', oCreate,
                {
                    method : 'POST',
                    success : function() {
                        MessageToast.show('Create Successfully!!'),
                        oModel.refresh();
                    },
                    error : function() {
                        MessageToast.show('Failure for Create')
                    }
                });
        },

        onUpdate : function() {

            var oModel = this.getView().getModel(),
                vWrbtr = this.getView().byId('Amount').getValue().replaceAll(',', '');

            let oUpdate = {
             
                    Shop    : this.getView().byId('Shop').getValue(),
                    CustomId: this.getView().byId('CustomId').getValue(),
                    CartNo  : parseInt(this.getView().byId('CartNo').getValue()),
                    Matnr   : this.getView().byId('Matnr').getValue(),
                    Maktx   : this.getView().byId('Maktx').getValue(),
                    Amount  : vWrbtr,
                    Waers   : this.getView().byId('Waers').getValue(),
                    GoodsCnt: parseInt(this.getView().byId('GoodsCnt').getValue()),
                    Kind    : this.getView().byId('Kind').getValue()
                
            }

            oModel.update("/CartSet(Shop='" + oUpdate.Shop + "',CustomId='" + oUpdate.CustomId + "')",

                oUpdate,
                {
                    method : "MERGE",
                    success : function() {
                        MessageToast.show('Update Successfully!!'),
                        oModel.refresh();
                    },
                    error : function() {
                        MessageToast.show('Failure for Update')
                    }
                }
            )
        },

        onDelete : function() {

            var oModel = this.getView().getModel(),
                oTable   = this.getView().byId('carttable'),
                aIndex   = oTable.getSelectedIndices(), // go_gird->get_selected_rows와 같음
                oContext = oTable.getContextByIndex(aIndex[0]), // read table gt_body INTO gs_body INDEX Index 와 같음
                oData    = oContext.getObject();


            oModel.remove("/CartSet(Shop='" + oData.Shop + "',CustomId='" + oData.CustomId + "')",
                {
                    method : "DELETE",
                    success : function() {
                        MessageToast.show('Delete Successfully!!'),
                        oModel.refresh();
                    },
                    error : function() {
                        MessageToast.show('Failure for Delete')
                    }
                }

            )

        }

    });
});