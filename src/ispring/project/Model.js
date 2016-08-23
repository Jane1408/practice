goog.provide("ispring.project.Model");

goog.require("ispring.project.EventType");
goog.require("ispring.project.Point");
goog.require("goog.events");


goog.scope(function() {

    /**
     * @constructor
     */
    ispring.project.Model = goog.defineClass(null, {
        constructor: function (dispatcher) {
            this.dispatcher = dispatcher;
            this.points = [];
            

        },

        addPoint: function()
        {
            var point = new ispring.project.Point(event.clientX, event.clientY, this.dispatcher);

            this.points.push(point);
            
            var event = new Event(ispring.project.EventType.POINT_ADDED);
            this.dispatcher.dispatchEvent(event);

        },


    });
});