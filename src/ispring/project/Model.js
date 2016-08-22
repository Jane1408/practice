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
            this.addEventListener('point added', function () {
                this.addPoint(event.clientX, event.clientY);
            }, false);

        },

        addPoint: function(x, y)
        {
            var event = new Event(EventType.POINT_ADDED);
            this.dispatcher.dispatchEvent(event);


            this.points.push(ispring.project.Point(x, y));

        },


    });
});