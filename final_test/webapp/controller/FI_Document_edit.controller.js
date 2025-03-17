sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator'
], (Controller, MessageToast, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("finaltest.finaltest.controller.FI_Document_edit", {
        onInit() {
        },

        onSearch: function () {

            // 검색어 받아오기
            var vRemark = this.getView().byId('IRemark').getValue();
            var vBelnr = this.getView().byId('IBelnr').getValue();

            var oTable = this.getView().byId('fitable'),
                oBinding = oTable.getBinding('rows'),
                oFilter = null,
                aFilter = [];


            if (vRemark != "") {
                oFilter = new Filter(
                    {
                        path: 'Remark',
                        operator: FilterOperator.EQ,
                        value: vRemark
                    }
                );

                aFilter.push(oFilter);
                oFilter = null;
            }
            oBinding.filter(aFilter);

            if (vBelnr != "") {
                oFilter = new Filter(
                    {
                        path: 'Belnr',
                        operator: FilterOperator.EQ,
                        value: vBelnr
                    }
                );

                aFilter.push(oFilter);
                oFilter = null;
            }
            oBinding.filter(aFilter);

        },

        onClear: function () {
            this.getView().byId("Ryear").setValue("");
            this.getView().byId("Rbukrs").setValue("");
            this.getView().byId("Belnr").setValue("");
            this.getView().byId("Racct").setValue("");
            this.getView().byId("Remark").setValue("");
            this.getView().byId("Hsl").setValue("");
            this.getView().byId("Rtcur").setValue("");
            this.getView().byId("PostYn").setValue("");
        },

        onDisplay: function () {
            var oModel   = this.getView().getModel(),
                oTable   = this.getView().byId('fitable'),
                aIndex   = oTable.getSelectedIndices(),
                oContext = oTable.getContextByIndex(aIndex[0]),
                oData    = oContext.getObject();

            this.getView().byId('Ryear').setValue(oData.Ryear);
            this.getView().byId('Rbukrs').setValue(oData.Rbukrs);  
            this.getView().byId('Belnr').setValue(oData.Belnr);  
            this.getView().byId('Racct').setValue(oData.Racct); 
            this.getView().byId('Remark').setValue(oData.Remark);   
            this.getView().byId('Hsl').setValue(oData.Hsl);  
            this.getView().byId('Rtcur').setValue(oData.Rtcur);  
            this.getView().byId('PostYn').setValue(oData.PostYn);    
        },

        onCreate : function() {
            
            var oModel = this.getView().getModel();
            
            let oCreate =  {
                Ryear   : this.getView().byId("Ryear").getValue(),
                Rbukrs  : this.getView().byId("Rbukrs").getValue(),
                Belnr   : this.getView().byId('Belnr').getValue(),
                Racct   : this.getView().byId('Racct').getValue(),
                Remark  : this.getView().byId('Remark').getValue(),
                Hsl     : this.getView().byId('Hsl').getValue(),
                Rtcur   : this.getView().byId('Rtcur').getValue(),
                PostYn  : this.getView().byId('PostYn').getValue()
            }

            oModel.create('/testSet', oCreate,
            {
                method : 'POST',
                success: function() {
                    MessageToast.show('Create Successfully!!! >0<');
                    oModel.refresh();
                },
                error: function() {
                    MessageToast.show('Create fail...n0n');
                }
            }
            )
        },

        onUpdate: function() {

            var oModel = this.getView().getModel();


            let oUpdate =  {
                Ryear   : this.getView().byId("Ryear").getValue(),
                Rbukrs  : this.getView().byId("Rbukrs").getValue(),
                Belnr   : this.getView().byId('Belnr').getValue(),
                Racct   : this.getView().byId('Racct').getValue(),
                Remark  : this.getView().byId('Remark').getValue(),
                Hsl     : this.getView().byId('Hsl').getValue(),
                Rtcur   : this.getView().byId('Rtcur').getValue(),
                PostYn  : this.getView().byId('PostYn').getValue()
            }

            oModel.update("/testSet(Ryear='" + oUpdate.Ryear + "',Rbukrs='" + oUpdate.Rbukrs + "',Belnr='" + oUpdate.Belnr + "')",
                        
                            oUpdate,
                            {
                                method: 'MERGE',
                                success: function() {
                                    oModel.refresh();
                                    MessageToast.show('Update 완료료');
                                },
                                error: function() {
                                    MessageToast.show('update 실퍀ㅋ');
                                }
                            }
                        );
        },

        onDelete: function() {

            var oModel   = this.getView().getModel(), // Gateway service 실행개체(read, create, update, remove)
                oTable   = this.getView().byId('fitable'),
                aIndex   = oTable.getSelectedIndices(), // go_gird->get_selected_rows와 같음
                oContext = oTable.getContextByIndex(aIndex[0]), // read table gt_body INTO gs_body INDEX Index 와 같음
                oData    = oContext.getObject();      // gs_body (single record) 
                

            oModel.remove("/testSet(Ryear='" + oData.Ryear + "',Rbukrs='" + oData.Rbukrs + "',Belnr='" + oData.Belnr + "')",
                        {
                            method:'DELETE',
                            success: function() {
                                oModel.refresh();
                                MessageToast.show("Delete success");
                            },
                            error: function() {
                                MessageToast.show('Delete error');
                            }
                        }
            )
        }
    });
});