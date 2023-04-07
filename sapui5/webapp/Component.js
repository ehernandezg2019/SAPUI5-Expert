// @ts-nocheck
sap.ui.define([
    "sap/ui/core/UIComponent",
    "logaligroup/sapui5/model/Models",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog"
],
    /**
     *  @param {typeof sap.ui.core.UIComponent} UIComponent 
     */
    function (UIComponent, Models, ResourceModel, HelloDialog) {

        return UIComponent.extend("logaligroup.sapui5.Component", {


            metadata: {
                manifest: "json"
                //ctrol+k+c cometar
                 //ctrol+k+u descometar
                // "rootView": {
                //     "viewName": "logaligroup.sapui5.view.App",
                //     "type": "XML",
                //     "async": true,
                //     "id": "app"
                // }
            },

            init: function () {
                //call the init function of the parent 

                UIComponent.prototype.init.apply(this, arguments);

                // set data model on the view //solo se puede pasar un namespace sin referencia y se hace en la sig. linea
                this.setModel(Models.createRecipient());

                // set i18n on the view aqui si se pasa el namespace en var i18nModel
                var i18nModel = new ResourceModel({ bundleName: "logaligroup.sapui5.i18n.i18n" });
                this.setModel(i18nModel, "i18n");
                
                this._helloDialog = new HelloDialog(this.getRootControl()); //regresa control a quien use la función 

            },

            exit: function(){
                this._helloDialog.destroy();
                delete this._helloDialog;   
            },
            openHelloDialog: function(){ // esta función es la que se usaria/llamaria en cualquier parte de app

                this._helloDialog.open();


            }

        });

    });