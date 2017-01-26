goog.provide("CodeLock.View.ButtonView");

goog.require("goog.math");

goog.scope(function() {

    /**
     * @constructor
     */
    CodeLock.View.ButtonView = goog.defineClass(null, {
        constructor: function (data) {
            this._data = data;

            this.button = goog.dom.createElement(goog.dom.TagName.INPUT);
            this.button.id = "button";
            this.button.type = "submit";
            /**
             * @type {goog.math.Coordinate}
             */
            this.position = this._data.getPosition();
            this.size = this._data.getSize();
            this.button.value = this._data.getValue();
            goog.style.setPosition(this.button, new goog.math.Coordinate(this.position.x, this.position.y));
            goog.style.setSize(this.button, new goog.math.Size(this.size.width, this.size.height));

            this.button.addEventListener("click",  goog.bind(function ()
            {
                this._data.clicked();
            },this),false);
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
            document.body.appendChild(this.button);
        },

        remove: function()
        {
            document.body.removeChild(this.button);
        }

    });
});