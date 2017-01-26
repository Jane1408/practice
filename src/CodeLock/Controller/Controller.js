goog.provide("CodeLock.Controller.Controller");

goog.require("CodeLock.Model.LockModel");
goog.require("CodeLock.Model.AdminModel");
goog.require("CodeLock.Controller.Toolbar");
goog.require("CodeLock.Controller.EventType");
goog.require("CodeLock.View.View");
goog.scope(function() {
    /** @constructor
     *
     */
    CodeLock.Controller.Controller = goog.defineClass(null, {
        constructor: function () {
            this.dispatcher = document;
            this._userModel = new CodeLock.Model.LockModel(this.dispatcher);
            this._adminModel = new CodeLock.Model.AdminModel(this.dispatcher);
            this._view = new CodeLock.View.View();
            this._toolbar = new CodeLock.Controller.Toolbar();
            this._bagNumber = 15;

            this._isUserSceneOpen = false;
            
            this._toolbar.userScreenButton.addEventListener("click",  goog.bind(this._openUserScene, this));
            this._toolbar.adminScreenButton.addEventListener("dblclick",  goog.bind(this._openAdminScene, this));
            this._toolbar.informationButton.addEventListener("click",  goog.bind(this._openInfoScene, this));

            this.dispatcher.addEventListener(CodeLock.Controller.EventType.CREATE_USER_SCREEN, goog.bind(function (e)
            {
                this._view.createUserScene(e.detail);
            },this),false);
            this._createUserScene();

            this.dispatcher.addEventListener("keypress", goog.bind(function (e) {
                if (((e.charCode >= 48)  && (e.charCode <= 57) && (e.charCode != 54)) && this._isUserSceneOpen)
                {
                    var event = new CustomEvent(CodeLock.Controller.EventType.NUM_BUTTON_PRESSED, {
                        "detail" :{
                            "value" : String.fromCharCode(e.charCode),
                        }});
                    this.dispatcher.dispatchEvent(event);
                }
            },this),false);
            this.dispatcher.addEventListener("keydown", goog.bind(function (e) {
                if ((e.keyCode == 13)  && this._isUserSceneOpen)
                {
                    var event = new CustomEvent(CodeLock.Controller.EventType.ENTER_CODE);
                    this.dispatcher.dispatchEvent(event);
                }
            },this),false);
            this.dispatcher.addEventListener(CodeLock.Controller.EventType.CREATE_ADMIN_SCENE, goog.bind(function (e)
            {
                this._view.createAdminScene(e.detail);
            },this),false);
            this._createAdminScene();

            this.dispatcher.addEventListener(CodeLock.Controller.EventType.UPDATE_USER_SCREEN, goog.bind(function (e) {
                var ua = navigator.userAgent;
                if (!(ua.search(/Edge/) != -1)) {
                    this._view.drawUserScene(e.detail);
                }
            },this),false);
            this.dispatcher.addEventListener(CodeLock.Controller.EventType.UPDATE_ADMIN_SCREEN, goog.bind(function (e)
            {
                if(this._bagNumber > 0)
                {
                    this._bagNumber -= 1;
                    this._view.drawAdminScene(e.detail);
                }
                else
                {
                    this._toolbar.userButtonPressed();
                }
            },this),false);
            this.dispatcher.addEventListener(CodeLock.Controller.EventType.NUM_BUTTON_PRESSED, goog.bind(function (e)
            {
                this._userModel.updateValue(e.detail);
            },this),false);
            this.dispatcher.addEventListener(CodeLock.Controller.EventType.CLEAR_CODE_LINE, goog.bind(function ()
            {
                this._userModel.clearValue();
            },this),false);
            this.dispatcher.addEventListener(CodeLock.Controller.EventType.SAVE_NEW_CODE, goog.bind(function ()
            {
                this._adminModel.changeCode();
            },this),false);
            this.dispatcher.addEventListener(CodeLock.Controller.EventType.ENTER_CODE, goog.bind(function ()
            {
                var ua = navigator.userAgent;
                if ((ua.search(/Firefox/) != -1)) {
                    this._checkCode();
                }
            },this),false);
        },

        _createUserScene: function()
        {
            this._userModel.getInfo();
        },

        _createAdminScene: function()
        {
            this._adminModel.getInfo();
        },

        _openUserScene: function()
        {
            this._isUserSceneOpen = true;
            this._toolbar.userButtonPressed();
            this._userModel.update();
        },

        _openInfoScene: function()
        {
            this._isUserSceneOpen = false;
            this._toolbar.infoButtonPressed();
            this._view.drawInfoScene();
        },
        
        _openAdminScene: function()
        {
            this._isUserSceneOpen = false;
            this._toolbar.adminButtonPressed();
            this._adminModel.update();
        },

        _checkCode: function()
        {
            var value1 = this._adminModel.getCode();
            var value2 = this._userModel.getCode();
            if ((value1.length >= 3) && (value2.length >= 3))
            {
                value1 = value1.slice(0, 3);
                value2 = value2.slice(0, 3);
            }
            if (value1 == value2)
            {
                var event = new CustomEvent(CodeLock.Controller.EventType.CORRECT_CODE);
                this.dispatcher.dispatchEvent(event);
            }
            else 
            {
                var event = new CustomEvent(CodeLock.Controller.EventType.INCORRECT_CODE);
                this.dispatcher.dispatchEvent(event);
            }
        },
        
    });
});