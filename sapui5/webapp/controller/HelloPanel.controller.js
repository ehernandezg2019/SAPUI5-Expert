// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"


],
    /**
     *  @param {typeof sap.ui.core.mvc.Controller} Controller
     *  @param {typeof sap.m.MessageToast} MessageToast
     *  @param {typeof sap.ui.core.Fragment} Fragment
     */
    function (Controller, MessageToast, Fragment) {
        "use strict";

        return Controller.extend("logaligroup.sapui5.controller.HelloPanel", {

            onInit: function () {


            },

            onShowHello: function () {
                //read text from i18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                //read property from data model
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);

                MessageToast.show(sMsg);

            },
            onOpenDialog: function () {

                const oView = this.getView();

                if (!this.byId("helloDialog")) { //se usa para crear el objeto solo una vez


                    Fragment.load({

                        id: oView.getId(),
                        name: "logaligroup.sapui5.view.HelloDialog",
                        controller: this
                    }).then(function (oDialog) {
                        oView.addDependent(oDialog);
                        oDialog.open();
                    });
                } else {

                    this.byId("helloDialog").open();

                }
            },

            onCloseDialog : function(){

                this.byId("helloDialog").close();

            }

        });
    });
