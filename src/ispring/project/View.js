goog.provide("ispring.project.View");

goog.require("ispring.project.PointView");

goog.require("goog.dom");
goog.require("goog.style");
goog.require("goog.math");

goog.scope(function() {

    /**
     * @constructor
     */
    ispring.project.View = goog.defineClass(null, {
        constructor: function () {
            this._points = [];

            /**@private {number}*/
            this._width = (document.documentElement.clientWidth / 2) ;

            /**@private {number}*/
            this._height = document.documentElement.clientHeight ;

            /**@private {goog.math.Coordinate}*/
            this._position = new goog.math.Coordinate(0, 100);
            
            this._body = goog.dom.createElement(goog.dom.TagName.DIV);
            this._body.id = "view";
            goog.style.setPosition(this._body, this._position);
            goog.style.setSize(this._body, new goog.math.Size(this._width, this._height));
            document.body.appendChild(this._body);

        },

        getBody:function() {
            return this._body;
        },

        addPoint:function(detail)
        {
            var point = new ispring.project.PointView(detail.point);
            this._points.push(point);

            this.draw();
        },


        draw: function()
        {

            var background = "";

            for(var i = 0; i != this._points.length; ++i) {
                var view = this._points[i];
                var position = null;
                var size = null;
                var posi = view.getPosition();

                position = (posi.x) + "px " +
                    (posi.y) + "px";
                background += "radial-gradient(circle closest-side at " +  10 + "px "
                    + 10 + "px, red ,transparent, red ,transparent) " + position;

                if (i + 1 != this._points.length) {
                    background += ", ";
                }
            }


            this._body.style.background = background;
            this._body.style.backgroundRepeat = "no-repeat";
            

        },

        redraw: function(point)
        {
            for (var i = 0; i != this._points.length; ++i) {
                if (point.getId() == this._points[i].getId()) {
                    var position = point.getPosition();
                    this._points[i].setPosition(position.x, position.y);
                    break;
                }
            }
            this.draw();
        },

        getPointById: function (id)
        {
            for (var i = 0; i != this._points.length; ++i) {
                if (id == this._points[i].getId()) {
                    return this._points[i];
                }
            }

        },


        checkOutputAbroad: function(position, size) {
            return ((position.x >= this._position.x) && (position.x + size.width <= this._position.x + this._width) &&
            (position.y >= this._position.y) && (position.y + size.height <= this._position.y + this._height));

        },


    });
});
