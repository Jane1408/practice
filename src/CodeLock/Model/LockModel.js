goog.provide("CodeLock.Model.LockModel");

goog.require("CodeLock.Model.NumButton");
goog.require("CodeLock.Model.DeleteButton");
goog.require("CodeLock.Model.CodeString");
goog.require("CodeLock.Model.EnterButton");
goog.require("CodeLock.Model.Checker");
goog.require("CodeLock.Model.TextBox");

goog.scope(function() {

    /**
     * @constructor
     */
    CodeLock.Model.LockModel = goog.defineClass(null, {
        constructor: function (dispatcher) {

            this._dispatcher = dispatcher;
            this.numButtons = [];
            this.deleteButton = new CodeLock.Model.DeleteButton(this._dispatcher);
            this.codeLine = new CodeLock.Model.CodeString();
            this.enterButton = new CodeLock.Model.EnterButton(this._dispatcher);
            this.checker = new CodeLock.Model.Checker(this._dispatcher);
            this.helpText = new CodeLock.Model.TextBox(CodeLock.Model.LockModel.HELP_TEXT);
            this._createButtons();
        },
        
        _createButtons: function()
        {
            var startPosX = document.documentElement.clientWidth/ 6;
            var startPosY =   document.documentElement.clientHeight / 4;
            var step = 70;

            for(var i = 0; i <= 9; i++)
            {
                var k = ((i % 3) == 0) ? 15 : 0;
                var button = new CodeLock.Model.NumButton(i, this._dispatcher);
                button.setPosition(startPosX + step * (i % 3) - k, startPosY + step * ((i / 3) - ((i / 3) % 1)));
                this.numButtons.push(button);
            }
            this.deleteButton.setPosition(startPosX + step * (i % 3), startPosY + step * ((10 / 3) - ((i / 3) % 1 )));
            this.codeLine.setPosition(document.documentElement.clientWidth / 2, startPosY );
            this.checker.setPosition(document.documentElement.clientWidth / 2 + 201, startPosY + 200 );
            this.enterButton.setPosition(document.documentElement.clientWidth / 2, startPosY + 200 );
            this.helpText.setPosition(50, 100);
            this.helpText.setSize(300, 300);
            
        },
        
        getInfo: function ()
        {
            var event = new CustomEvent(CodeLock.Controller.EventType.CREATE_USER_SCREEN, {
                "detail" :{
                    "numButtons" : this.numButtons,
                    "delButton" : this.deleteButton,
                    "codeLine" : this.codeLine,
                    "enterButton" : this.enterButton,
                    "checker" : this.checker,
                    "helpText" : this.helpText,
                }});
            this._dispatcher.dispatchEvent(event);
        },
        
        update: function()
        {
            var event = new CustomEvent(CodeLock.Controller.EventType.UPDATE_USER_SCREEN, {
                "detail" :{
                    "codeLineValue" : this.codeLine.getValue(),
                }});
            this._dispatcher.dispatchEvent(event);
        },

        updateValue: function(detail)
        {
            this.codeLine.setValue(detail.value);
            this.update();
        },

        clearValue: function()
        {
            this.codeLine.clearValue();
            this.update();
        },

        getCode: function()
        {
            return this.codeLine.getValue();
        },

        statics:
        {
            /**@type {string}*/
            HELP_TEXT: "Тестирование кодового замка: \r\n" +
            "Вкладка < Управление > : можно задать новый цифровой код или посмотреть текущий; \r\n" +
            "Вкладка < Замок > : необходимо проверить работоспособность кода и клавиатуры, \r\n" +
            "                   при вводе кода, будет выведено сообщение: разрешен или запрещен доступ; ",
        }
    });
});