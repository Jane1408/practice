goog.provide("ispring.walls.Segment");

goog.require("goog.dom");
goog.require("goog.style");

goog.scope(function() {

    /**
     * @constructor
     */
    ispring.walls.Segment = goog.defineClass(null, {
        constructor: function (positionX, size) {
            
            this.size = ispring.walls.Segment.SEGMENT_SIZE * size;
            this.posX = positionX * ispring.walls.Segment.SEGMENT_SIZE;
            this.posY = ispring.walls.Segment.START_POSITION_Y;
            this._segment = goog.dom.createElement(goog.dom.TagName.DIV);
            this._segment.id = "segment";
            document.body.appendChild(this._segment);
            goog.style.setSize(this._segment, this.size, ispring.walls.Segment.SEGMENT_HEIGHT);
            goog.style.setPosition(this._segment,  new goog.math.Coordinate(this.posX , this.posY));

        },

        removeSegment: function()
        {
            document.body.removeChild(this._segment);
            this._segment = null;

        },

        move:function (y)
        {
            this.posY  = y;
            this.redraw();
        },

        redraw: function () {
           // console.log("redraw", this.posX, this.posY);
            goog.style.setPosition(this._segment,  new goog.math.Coordinate(this.posX, this.posY));
        },

        getRect: function () {
            return new goog.math.Rect(this.posX, this.posY, this.size, ispring.walls.Segment.SEGMENT_HEIGHT)
        },

        statics: {
            /**@type {number}*/
            SEGMENT_SIZE: 100,
            /**@type {number}*/
            SEGMENT_HEIGHT:20,
            /**@type {number}*/
            START_POSITION_Y: 0,
        }


    });
});