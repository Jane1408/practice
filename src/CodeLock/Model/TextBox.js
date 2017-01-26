goog.provide("CodeLock.Model.TextBox");

goog.scope(function() {

    /**
     * @constructor
     */
    CodeLock.Model.TextBox = goog.defineClass(null, {
        constructor: function (value) {
            this._value = value;
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

        setSize: function (w, h)
        {
            this._size = new goog.math.Size(w,h);
        },

        getSize: function ()
        {
            return this._size;
        },

    });


});