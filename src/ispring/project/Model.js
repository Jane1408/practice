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

        addPoint: function(x, y)
        {

            this.points.push(ispring.project.Point(x, y, this.dispatcher));
            
            var event = new Event(EventType.POINT_ADDED);
            this.dispatcher.dispatchEvent(event);

        },


    });
});