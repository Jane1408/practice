goog.provide("ispring.project.Model");

goog.require("ispring.project.Point");

goog.scope(function() {

    /**
     * @constructor
     */
    ispring.project.Model = goog.defineClass(null, {
        constructor: function () {
            this.points = [];

        },

        addPoint: function(x, y)
        {
            this.points.push(ispring.project.Point(x, y));

        },


    });
});