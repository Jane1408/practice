goog.provide("ispring.game.CircleView");


goog.scope(function() {

    /**
     * @constructor
     */
    ispring.game.CircleView = goog.defineClass(null, {
        constructor: function (context, circle) {
           this._context = context;
            this._circle = circle;

        },
        
        draw: function () {
            this._context.arc(this._circle.x, this._circle.y, this._circle.radius, this._circle.sAngle, this._circle.eAngle, true);
            this._context.fillStyle = this._circle.color;
            this._context.fill();
        }


    });
});

