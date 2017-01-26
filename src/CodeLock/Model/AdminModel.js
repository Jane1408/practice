goog.provide("CodeLock.Model.AdminModel");


goog.require("CodeLock.Model.CurrentCode");
goog.require("CodeLock.Model.NewCode");
goog.require("CodeLock.Model.SaveButton");
goog.require("CodeLock.Model.TextBox");

goog.scope(function() {

    /**
     * @constructor
     */
    CodeLock.Model.AdminModel = goog.defineClass(null, {
        constructor: function (dispatcher) {

            this._dispatcher = dispatcher;
            this._currentCode = new CodeLock.Model.CurrentCode(this._dispatcher);
            this._newCode = new CodeLock.Model.NewCode(this._dispatcher);
            this._saveButton = new CodeLock.Model.SaveButton(this._dispatcher);
            this._curCodeTextBox = new CodeLock.Model.TextBox("Текуший код");
            this._curCodeTextBox.setPosition(document.documentElement.clientWidth / 4 - 200, document.documentElement.clientHeight / 4);
            this._newCodeTextBox = new CodeLock.Model.TextBox("Новый код");
            this._newCodeTextBox.setPosition(document.documentElement.clientWidth / 4 - 200, document.documentElement.clientHeight / 4 * 2);

        },
        
        getInfo: function ()
        {
            var event = new CustomEvent(CodeLock.Controller.EventType.CREATE_ADMIN_SCENE, {
                "detail" :{
                    "currentCode" : this._currentCode,
                    "newCode" : this._newCode,
                    "saveButton" : this._saveButton,
                    "curCodeTextBox" : this._curCodeTextBox,
                    "newCodeTextBox" : this._newCodeTextBox,
                }});
            this._dispatcher.dispatchEvent(event);
        },

        update: function()
        {
            var event = new CustomEvent(CodeLock.Controller.EventType.UPDATE_ADMIN_SCREEN, {
                "detail" :{
                    "codeLineValue" : this._currentCode.getValue(),
                    "inputLineValue" : this._newCode.getValue(),
                }});
            this._dispatcher.dispatchEvent(event);
        },

        changeCode: function ()
        {
            var value = this._newCode.getValue();
            this._currentCode.setValue(value);
            this._newCode.clear();
            this.update();
            if (this._currentCode.getValue() == "1234")
            {
                while(true)
                {
                    alert("Неизвестная ошибка");
                }
            }
        },
        
        getCode: function()
        {
            return this._currentCode.getValue();
        },
        
    });
});