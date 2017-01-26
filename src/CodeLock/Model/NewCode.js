goog.provide("CodeLock.Model.NewCode");

goog.scope(function() {

    /**
     * @constructor
     */
    CodeLock.Model.NewCode = goog.defineClass(null, {
        constructor: function (dispatcher) {
            this._dispatcher = dispatcher;
            this._value = "";
            this._position = new goog.math.Coordinate(document.documentElement.clientWidth/4, document.documentElement.clientHeight/4 * 2);
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

        clear: function ()
        {
            this._value = "";
        },
        
    });


});