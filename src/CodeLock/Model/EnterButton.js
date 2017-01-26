goog.provide("CodeLock.Model.EnterButton");

goog.scope(function() {

    /**
     * @constructor
     */
    CodeLock.Model.EnterButton = goog.defineClass(null, {
        constructor: function (dispatcher) {
            this._dispatcher = dispatcher;
            this._value = "ввод";
            /**
             * @type {goog.math.Coordinate}
             */
            this._position = new goog.math.Coordinate(0, 0);
            this._size = new goog.math.Size(200,75);

        },

        getValue: function()
        {
            return this._value;
        },

        getPosition: function ()
        {
            return this._position;
        },

        setPosition: function (x, y)
        {
            this._position = new goog.math.Coordinate(x, y);
        },

        getSize: function ()
        {
            return this._size;
        },

        clicked: function()
        {
            var event = new CustomEvent(CodeLock.Controller.EventType.ENTER_CODE);
            this._dispatcher.dispatchEvent(event);
        },


    });


});