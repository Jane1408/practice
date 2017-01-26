goog.provide("ispring.game.TriangleView");


goog.scope(function() {

    /**
     * @constructor
     */
    ispring.game.TriangleView = goog.defineClass(null, {
        constructor: function (context, triangle) {
            this._context = context;
            this._triangle = triangle;
        },

        
        draw: function () {
            this._context.beginPath();
            this._context.moveTo(this._triangle.point1[0], this._triangle.point1[1]);
            this._context.lineTo(this._triangle.point2[0], this._triangle.point2[1]);
            this._context.lineTo(this._triangle.point3[0], this._triangle.point3[1]);
            this._context.closePath();
            this._context.stroke();
            this._context.fillStyle = this._triangle.color;
            this._context.fill();
        }


    });
});