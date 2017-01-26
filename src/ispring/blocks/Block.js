goog.provide("ispring.blocks.Block");

goog.require("goog.dom");
goog.require("goog.style");

goog.scope(function() {

    /**
     * @constructor
     */
    ispring.blocks.Block = goog.defineClass(null, {
        constructor: function (y) {

            this.id = Math.random();

            /**@type {number}*/
            this.width = ispring.blocks.Block.START_WIDTH;
            /**
             * @type {number}
             */
            this.height =  ispring.blocks.Block.HEIGHT;
            /**
             * @type {array<string>}
             */
            this.colors = ["red", "blue", "green", "yellow"];

            this.x = 0;
            this.y = y;
            
        },

        createBlock : function()
        {
            var block = goog.dom.createElement(goog.dom.TagName.DIV);
            block.id = "block";
            document.body.appendChild(block);
            goog.style.setPosition(block,  new goog.math.Coordinate(this.x, this.y ));
            goog.style.setSize(block, this.width, this.height);
            var id = this.getRandomColorId();
            goog.style.setStyle(block, "background-color", this.colors[id]);

            this._element = block;
        },

        removeBlock: function ()
        {
            document.body.removeChild(this._element);
            this._element = null;
        },

        setWidth: function (w) {
            this.width = w;
            goog.style.setSize(this._element, this.width, this.height);
        },

        setPosY: function(y)
        {
            this.y = y;
            goog.style.setPosition(this._element,  new goog.math.Coordinate(this.x, this.y));
        },

        setPosX: function(x)
        {
            this.x = x;
            goog.style.setPosition(this._element,  new goog.math.Coordinate(this.x, this.y));
        },

        move: function(x, y)
        {
            this.x = x;
            this.y = y;
            goog.style.setPosition(this._element,  new goog.math.Coordinate(x, y));
        },

        getRandomColorId: function () {
            return  Math.floor(Math.random() * this.colors.length);
        },

        statics:{
            /**@type {number}*/
            START_WIDTH: 300,
            HEIGHT: 50
        }
    });
});

