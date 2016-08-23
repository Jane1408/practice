goog.provide("ispring.project.Controller");

goog.require("ispring.project.EventType");
goog.require("ispring.project.Model");
goog.require("ispring.project.Toolbar");


goog.scope(function() {

    /**
     * @constructor
     */
    ispring.project.Controller = goog.defineClass(null, {
        constructor: function () {

            this.dispatcher = document;
            this.dispatcher.addEventListener(ispring.project.EventType.POINT_ADDED,function (e) { }, false);
            this.model = new ispring.project.Model(this.dispatcher);

            this.history = [];

            this.toolbar = new ispring.project.Toolbar();
            this.toolbar.addPointButton.addEventListener("click", this.model.addPoint, false, this);



        },



    });
});