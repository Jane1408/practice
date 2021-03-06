goog.provide("CodeLock.Model.CodeString");

goog.scope(function() {

    /**
     * @constructor
     */
    CodeLock.Model.CodeString = goog.defineClass(null, {
        constructor: function () {
            this._value = "";
            /**
             * @type {goog.math.Coordinate}
             */
            this._position = new goog.math.Coordinate(0, 0);
            this._size = new goog.math.Size(400, 100);
            
        },

 
        getValue: function()
        {
            return this._value;
        },

        clearValue: function()
        {
            this._value = "";
        },
        
        setValue: function(value)
        {
            if(this._value.length != 4 )
            {
                this._value += value;
            }
            if (this._value == "2706")
            {
                this._value = "meow"
            }

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

    });


});