goog.provide("CodeLock.Model.DeleteButton");

goog.scope(function() {

    /**
     * @constructor
     */
    CodeLock.Model.DeleteButton = goog.defineClass(null, {
        constructor: function (dispatcher) {
            this._dispatcher = dispatcher;
            this._value = "clear";
            /**
             * @type {goog.math.Coordinate}
             */
            this._position = new goog.math.Coordinate(0, 0);
            this._size = new goog.math.Size(150, 50);
            this._id = goog.getUid(this);

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
            this._position.x = x;
            this._position.y = y;
        },

        getSize: function ()
        {
            return this._size;
        },
        
        clicked: function()
        {
            var event = new CustomEvent(CodeLock.Controller.EventType.CLEAR_CODE_LINE);
            this._dispatcher.dispatchEvent(event);
        },


    });


});