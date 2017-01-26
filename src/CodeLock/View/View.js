goog.provide("CodeLock.View.View");

goog.require("CodeLock.View.NumButtonView");
goog.require("CodeLock.View.ButtonView");
goog.require("CodeLock.View.CodeLineView");
goog.require("CodeLock.View.InputLineView");
goog.require("CodeLock.View.CheckerView");
goog.require("CodeLock.View.TextBoxView");

goog.scope(function() {

    /**
     * @constructor
     */
    CodeLock.View.View = goog.defineClass(null, {
        constructor: function () {
            this._isUserSceneOpen = false;
            this._buttons = [];
            this._isAdminSceneOpen = false;
            this._isInfoSceneOpen = false;
        },

        _createNumButtons: function(numButtons)
        {
            for (var i = 0; i != numButtons.length; ++i)
            {
                var button = new CodeLock.View.NumButtonView(numButtons[i]);
                this._buttons.push(button);
            }
        },

        createUserScene:function(detail)
        {
            for (var i = 0; i != detail.numButtons.length; ++i)
            {
                var button = new CodeLock.View.NumButtonView(detail.numButtons[i]);
                this._buttons.push(button);
            }
            /** @private {!CodeLock.View.ButtonView} */
            this._deleteButton = new CodeLock.View.ButtonView(detail.delButton);
            /** @private {!CodeLock.View.CodeLineView} */
            this._codeLine = new CodeLock.View.CodeLineView(detail.codeLine);
            /** @private {!CodeLock.View.ButtonView} */
            this._enterButton = new CodeLock.View.ButtonView(detail.enterButton);
            /** @private {!CodeLock.View.CheckerView} */
            this._checker = new CodeLock.View.CheckerView(detail.checker);
            /** @private {!CodeLock.View.TextBoxView} */
            this._helpTextBox = new CodeLock.View.TextBoxView(detail.helpText);
        },

        drawUserScene:function(detail)
        {
            this._clearScene();
            this._isUserSceneOpen = true;
            this._checker.clear();
            this._enterButton.append();
            this._deleteButton.append();
            this._checker.append();
            for (var i = 0; i != this._buttons.length; ++i)
            {
                this._buttons[i].append();
            }
            this._codeLine.updateValue(detail.codeLineValue);
            this._codeLine.append();
        },

        _clearUserScene: function()
        {
            this._enterButton.remove();
            this._deleteButton.remove();
            this._codeLine.remove();
            this._checker.remove();
            for (var i = 0; i != this._buttons.length; ++i)
            {
                this._buttons[i].remove();
            }
        },

        createAdminScene:function(detail)
        {
            /** @private {!CodeLock.View.CodeLineView} */
            this._currentCode = new CodeLock.View.CodeLineView(detail.currentCode);
            /** @private {!CodeLock.View.InputLineView} */
            this._newCode = new CodeLock.View.InputLineView(detail.newCode);
            /** @private {!CodeLock.View.ButtonView} */
            this._saveButton = new CodeLock.View.ButtonView(detail.saveButton);
            /** @private {!CodeLock.View.TextBoxView} */
            this._currTextBox = new CodeLock.View.TextBoxView(detail.curCodeTextBox);
            /** @private {!CodeLock.View.TextBoxView} */
            this._newTextBox = new CodeLock.View.TextBoxView(detail.newCodeTextBox);
            
        },

        _clearAdminScene: function()
        {
            this._saveButton.remove();
            this._currentCode.remove();
            this._newCode.remove();
            this._currTextBox.remove();
            this._newTextBox.remove();
        },

        drawAdminScene:function(detail)
        {
            this._clearScene();
            this._isAdminSceneOpen = true;
            this._saveButton.append();
            this._currentCode.updateValue(detail.codeLineValue);
            this._newCode.updateValue(detail.inputLineValue);
            this._currentCode.append();
            this._newCode.append();
            this._currTextBox.append();
            this._newTextBox.append();

        },
        
        drawInfoScene: function() 
        {
            this._clearScene();
            this._isInfoSceneOpen = true;
            this._helpTextBox.append();
        },
        
        _clearInfoScene: function()
        {
            this._helpTextBox.remove();
        },
        
        _clearScene: function()
        {
            if (this._isUserSceneOpen) {
                this._clearUserScene();
                this._isUserSceneOpen = !this._isUserSceneOpen;
            }
            if (this._isAdminSceneOpen) {
                this._clearAdminScene();
                this._isAdminSceneOpen = !this._isAdminSceneOpen;
            }
            if (this._isInfoSceneOpen) {
                this._clearInfoScene();
                this._isInfoSceneOpen = !this._isInfoSceneOpen;
            }
        }

    });
});
