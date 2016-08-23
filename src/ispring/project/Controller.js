goog.provide("ispring.project.Controller");


goog.require("ispring.project.EventType");
goog.require("ispring.project.Model");


goog.scope(function() {

    /**
     * @constructor
     */
    ispring.project.Controller = goog.defineClass(null, {
        constructor: function () {
            this.dispatcher = document;
            this.dispatcher.addEventListener(EventType.POINT_ADDED);
            this.model = new ispring.project.Model(this.dispatcher);



        },



    });
});