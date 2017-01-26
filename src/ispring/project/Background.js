goog.provide("ispring.project.Background");

goog.require("goog.dom");
goog.require("goog.style");
goog.require("goog.math");

goog.scope(function() {

    /**
     * @constructor
     */
    ispring.project.Background = goog.defineClass(null, {
        constructor: function () {
            this._points = [];

            /**@private {number}*/
            this._width = (document.documentElement.clientWidth / 2) ;

            /**@private {number}*/
            this._height = document.documentElement.clientHeight ;

            /**@private {goog.math.Coordinate}*/
            this._position = new goog.math.Coordinate(0, 100);
            this._backgroundLeft = goog.dom.createElement(goog.dom.TagName.DIV);
            this._backgroundLeft.id = "background";


            this._backgroundRight = goog.dom.createElement(goog.dom.TagName.DIV);
            this._backgroundRight.id = "background";
            goog.style.setPosition(this._backgroundLeft, new goog.math.Coordinate(0, 0));
            goog.style.setSize(this._backgroundLeft, new goog.math.Size(this._width, this._height));
            document.body.appendChild(this._backgroundLeft);

            goog.style.setPosition(this._backgroundRight, new goog.math.Coordinate(this._width, 0));
            goog.style.setSize(this._backgroundRight, new goog.math.Size(this._width, this._height));
            document.body.appendChild(this._backgroundRight);





        },



    });
});
