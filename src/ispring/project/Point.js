goog.provide("ispring.project.Point");

goog.require("ispring.project.List");
//goog.require("goog.getUid");
goog.require("goog.math");


goog.scope(function() {

    /**
     * @constructor
     */
    ispring.project.Point = goog.defineClass(null, {
        constructor: function (x, y) {

            this.dispatcher = document;

            this.position = new goog.math.Coordinate(document.documentElement.clientWidth / 4, document.documentElement.clientHeight / 2);
            this.size = new goog.math.Size(20, 20);
            this.id = goog.getUid(this);
            this.list = new ispring.project.List(this.id, this.dispatcher);

        },


        getId: function()
        {
            return this.id;
        },
        
        getPosition: function ()
        {
            return this.position;
        },

        getSize: function ()
        {
            return this.size;
        },


        setPosition: function (x, y)
        {
            this.position = new goog.math.Coordinate(x, y);
        },
        
        getList: function()
        {
            return this.list;
        }

    });
});