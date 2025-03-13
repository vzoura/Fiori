sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    'sap/ui/model/Filter', 
    'sap/ui/model/FilterOperator'
], (Controller, MessageToast, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("sync6.cl1.docuedit0312.controller.DOCUView", {
        onInit() {
        },

        onClear : function() {
            this.getView().byId("Bukrs").setValue("");
            this.getView().byId("Belnr").setValue("");
            this.getView().byId("Gjahr").setValue("");
            this.getView().byId("Budat").setValue("");
            this.getView().byId("Blart").setValue("");
            this.getView().byId("Bktxt").setValue("");
            this.getView().byId("Waers").setValue("");
            this.getView().byId("Wrbtr").setValue("");
        },

        onSearch : function() {

            // 검색어 받아오기
            var vBktxt = this.getView().byId('IBktxt').getValue();
            var vBlart = this.getView().byId('IBlart').getValue();

            var oTable = this.getView().byId('docuTable'), // View의 테이블 개체 받아오기(entitySet)
                oBinding = oTable.getBinding('rows'),      // 검색을 해주는 개체, filter사용 가능
                oFilter  = null,                           // 검색어를 구성해주는 개체
                aFilter  = [];                             // 배열에 검색어를 담아줌

            // MessageToast.show(vBktxt); 

            // Filter 구성
            /***** vBktxt data *****/
            if( vBktxt != "" ) { // 검색어가 존재할 때만 filter를 활성화
                oFilter = new Filter(
                    {
                        path: 'Bktxt',
                        operator: FilterOperator.Contains,
                        value1 : vBktxt  

                    }
                );
                
                // Filter 구성을 배열에 담아줌
                aFilter.push(oFilter); // filter에 대한 구성이 끝나면, 배열에 담아 줌
                oFilter = null;        // ofilter를 비워줌

            }

            oBinding.filter(aFilter); // 배열에 담긴 검색정보를 binding filter에 넘겨준다 
            
            /***** vBlart data *****/
            if( vBlart != "" ) {
                oFilter = new Filter(
                    {
                        path: 'Blart',
                        operator: FilterOperator.EQ,
                        value1 : vBlart.toUpperCase() // code같은 경우에는 대문자로 변환해준다(사용자의 소문자입력 방지)
                    }
                );

                // Filter 구성을 배열에 담아줌
                aFilter.push(oFilter); // filter에 대한 구성이 끝나면, 배열에 담아 줌
                oFilter = null;        // ofilter를 비워줌
            }

            oBinding.filter(aFilter); // 배열에 담긴 검색정보를 binding filter에 넘겨준다 

        },

        onDisplay: function () {

            var oModel   = this.getView().getModel(), // Gateway service 실행개체(read, create, update, remove)
                oTable   = this.getView().byId('docuTable'),
                aIndex   = oTable.getSelectedIndices(), // go_gird->get_selected_rows와 같음
                oContext = oTable.getContextByIndex(aIndex[0]), // read table gt_body INTO gs_body INDEX Index 와 같음
                oData    = oContext.getObject();        // gs_body (single record) 

            // Set value
            this.getView().byId('Bukrs').setValue(oData.Bukrs);
            this.getView().byId('Gjahr').setValue(oData.Gjahr);  
            this.getView().byId('Blart').setValue(oData.Blart);  
            this.getView().byId('Budat').setValue(oData.Budat); 
            this.getView().byId('Belnr').setValue(oData.Belnr);   
            this.getView().byId('Bktxt').setValue(oData.Bktxt);  
            this.getView().byId('Waers').setValue(oData.Waers);  
            this.getView().byId('Wrbtr').setValue(oData.Wrbtr);    

            // console.log("oData", oData);
        
        },

        onCreate: function() {

            var oModel = this.getView().getModel();
            var vWrbtr = this.getView().byId('Wrbtr').getValue().replaceAll(',', ''), 
                // 콤마를 공백으로 바꿔줌(사용자가 금액에 ,를 넣는 경우를 방지함)
                vBudat = this.getView().byId('Budat').getValue();
            const cBudat = new Date(vBudat).toISOString().split('T')[0]; 

            let oCreate = {
                Bukrs: this.getView().byId("Bukrs").getValue(),
                Gjahr: this.getView().byId("Gjahr").getValue(),
                Blart: this.getView().byId("Blart").getValue(),
                Budat: cBudat,
                Belnr: this.getView().byId("Belnr").getValue(),
                Bktxt: this.getView().byId("Bktxt").getValue(),
                Waers: this.getView().byId("Waers").getValue(),
                Wrbtr: vWrbtr,
            }

            oModel.create('/DocumentSet', oCreate,
            {
                method:'POST',
                success: function() {
                    MessageToast.show('Create Successfully!!');
                    oModel.refresh(); 
                    // 생성에 성공하면 model data를 refresh 
                    // 현재 버전에서는 자동으로 refresh되지만, 낮은 버전에서는 안통할 수 있으니 추가할 것
                    
                },
                error: function() {
                    MessageToast.show('Error on Create');
                }
            });
        },

        onUpdate: function() {

            var oModel = this.getView().getModel();
            var vWrbtr = this.getView().byId('Wrbtr').getValue().replaceAll(',', ''), // 콤마를 공백으로 바꿔줌
                vBudat = this.getView().byId('Budat').getValue();
            const cBudat = new Date(vBudat).toISOString().split('T')[0];

            // let oUpdate2 = {
            //     Bukrs: this.getView().byId("Bukrs").getValue(),
            //     Gjahr: this.getView().byId("Gjahr").getValue(),
            //     Blart: this.getView().byId("Blart").getValue(),
            //     Budat: cBudat,
            //     Belnr: this.getView().byId("Belnr").getValue(),
            //     Bktxt: this.getView().byId("Bktxt").getValue(),
            //     Waers: this.getView().byId("Waers").getValue(),
            //     Wrbtr: vWrbtr,
            // }

            let oUpdate = {
                Bukrs: this.getView().byId("Bukrs").getValue(),
                Gjahr: this.getView().byId("Gjahr").getValue(),
                Blart: this.getView().byId("Blart").getValue(),
                Budat: cBudat,
                Belnr: this.getView().byId("Belnr").getValue().toString().padStart(10, '0'),
                Bktxt: this.getView().byId("Bktxt").getValue(),
                Waers: this.getView().byId("Waers").getValue(),
                Wrbtr: vWrbtr,
            }

            oModel.update("/DocumentSet(Bukrs='" + oUpdate.Bukrs + "',Belnr='" + oUpdate.Belnr + "',Gjahr='" + oUpdate.Gjahr + "')",
                        
                            oUpdate,
                            {
                                method: 'MERGE',
                                success: function() {
                                    oModel.refresh();
                                    MessageToast.show('Update Successfully!!');
                                },
                                error: function() {
                                    MessageToast.show('Error on Update');
                                }

                            })
        },

        onDelete: function() {

            var oModel   = this.getView().getModel(), // Gateway service 실행개체(read, create, update, remove)
                oTable   = this.getView().byId('docuTable'),
                aIndex   = oTable.getSelectedIndices(), // go_gird->get_selected_rows와 같음
                oContext = oTable.getContextByIndex(aIndex[0]), // read table gt_body INTO gs_body INDEX Index 와 같음
                oData    = oContext.getObject();      // gs_body (single record) 
                

            oModel.remove("/DocumentSet(Bukrs='" + oData.Bukrs + "',Belnr='" + oData.Belnr.padStart(10, '0') + "',Gjahr='" + oData.Gjahr + "')",
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