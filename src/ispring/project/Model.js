goog.provide("ispring.project.Model");

goog.require("ispring.project.EventType");
//goog.require("ispring.project.Point");


goog.scope(function() {

    /**
     * @constructor
     */
    ispring.project.Model = goog.defineClass(null, {
        constructor: function (dispatcher) {
            this.dispatcher = dispatcher;
            this._points = [];
            

        },

        addPoint: function(point)
        {

            this._points.push(point);

            var event = new CustomEvent(ispring.project.EventType.POINT_ADDED, {
                "detail" :{
                    "point" : point
                }});
            this.dispatcher.dispatchEvent(event);


        },

        getPointUId: function (detail)
        {

            for(var i = 0; i != this._points.length; ++i)
            {
                var point = this._points[i];
                var position = point.getPosition();
                var size = point.getSize();
                if ((position.x <= detail.pageX && detail.pageX <= position.x + size.width) &&
                    position.y <= detail.pageY && detail.pageY <= position.y + size.height)
                {
                    return point.getId();
                }
            }

        },

        getPointById:function(id ) {
            for (var i = 0; i != this._points.length; ++i)
            {
                if (id == this._points[i].getId())
                {
                    return this._points[i];
                }
            }
        },


        deletePoint: function(point)
        {
            for (var i = 0; i != this._points.length; ++i)
            {
                if (point.getId() == this._points[i].getId())
                {
                    this._points.splice(i--, 1);
                    break;
                }
            }

        }


    });
});