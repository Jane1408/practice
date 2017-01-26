goog.provide("CodeLock.Model.SaveButton");

goog.scope(function() {

    /**
     * @constructor
     */
    CodeLock.Model.SaveButton = goog.defineClass(null, {
        constructor: function (dispatcher) {
            this._dispatcher = dispatcher;
            this._value = "сохранить";
            /**
             * @type {goog.math.Coordinate}
             */
            this._position = new goog.math.Coordinate(document.documentElement.clientWidth/4, document.documentElement.clientHeight/4 * 3);
            this._size = new goog.math.Size(200, 75);
        },

        getValue: function ()
        {
            return this._value;
        },
        
        getPosition: function ()
        {
            return this._position;
        },

        getSize: function ()
        {
            return this._size;
        },

        clicked: function()
        {
            var event = new CustomEvent(CodeLock.Controller.EventType.SAVE_NEW_CODE);
            this._dispatcher.dispatchEvent(event);
        },

    });
});