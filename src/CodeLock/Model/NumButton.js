goog.provide("CodeLock.Model.NumButton");

goog.scope(function() {

    /**
     * @constructor
     */
    CodeLock.Model.NumButton = goog.defineClass(null, {
        constructor: function (value, dispatcher) {
            this._dispatcher = dispatcher;
            var v = (value == "3") ? "З" : value;
            this._value = (value == "1") ? "l" : v;

            this._size = new goog.math.Size(50, 50);
            /**
             * @type {goog.math.Coordinate}
             */
            this._position = new goog.math.Coordinate(0, 0);
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
            var value = (this._value == "8") ? "" : this._value;
            value = (this._value == "9") ? "99" : value;
            var event = new CustomEvent(CodeLock.Controller.EventType.NUM_BUTTON_PRESSED, {
                "detail" :{
                    "value" : value,
                }});
            this._dispatcher.dispatchEvent(event);
        }

    });
    
   
});