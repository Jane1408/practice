goog.provide("CodeLock.View.CodeLineView");

goog.require("goog.math");

goog.scope(function() {

    /**
     * @constructor
     */
    CodeLock.View.CodeLineView = goog.defineClass(null, {
        constructor: function (data) {
            this._data = data;
            this.position = this._data.getPosition();
            this.size = this._data.getSize();
            this._codeLine = goog.dom.createElement(goog.dom.TagName.OUTPUT);

            this._codeLine.id = "codeLine";
            this._codeLine.type = "text";
            this._codeLine.value = this._data.getValue();
            goog.style.setPosition(this._codeLine, new goog.math.Coordinate(this.position.x, this.position.y));
            goog.style.setSize(this._codeLine,  new goog.math.Size(this.size.width, this.size.height));

        },
        
        updateValue: function(value)
        {
            this._codeLine.value = value;
        },

        getPosition:function ()
        {
            return this.position;
        },

        getSize:function ()
        {
            return this.size;
        },

        setPosition: function (x, y)
        {
            this.position = new goog.math.Coordinate(x, y);
        },

        append: function()
        {
            document.body.appendChild(this._codeLine);
        },

        remove: function()
        {
            document.body.removeChild(this._codeLine);
        }

    });
});