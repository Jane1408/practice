goog.provide("ispring.project.Point");

goog.require("ispring.project.List");

goog.scope(function() {

    /**
     * @constructor
     */
    ispring.project.Point = goog.defineClass(null, {
        constructor: function (x, y) {
            this.x = x;
            this.y = y;
            this.list = new ispring.project.List();

        



        },


    });
});