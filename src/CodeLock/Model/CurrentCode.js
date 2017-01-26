goog.provide("CodeLock.Model.CurrentCode");

goog.scope(function() {

    /**
     * @constructor
     */
    CodeLock.Model.CurrentCode = goog.defineClass(null, {
        constructor: function (dispatcher) {
            this._dispatcher = dispatcher;
            this._value = "0000";
            this._position = new goog.math.Coordinate(document.documentElement.clientWidth / 4, document.documentElement.clientHeight / 4);
            this._size = new goog.math.Size(400, 100);
        },

        getValue: function()
        {
            return this._value;
        },

        setValue: function(value)
        {
            this._value = value;
        },
        
        getPosition: function ()
        {
            return this._position;
        },

        getSize: function ()
        {
            return this._size;
        },
        
    });


});