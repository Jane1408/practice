goog.provide("ispring.game.Controller");


goog.scope(function() {

    /**
     * @constructor
     */
    ispring.game.Controller = goog.defineClass(null, {
        constructor: function (circle, triangle, colors) {
            this._circle = circle;
            this._triangle = triangle;
            
            this.colors = colors;

            /**@type {number}*/
            this.score = 0;
            this.bestScore  = 0;
        },

        /**
         * @returns {number}
         */
        getRandomColorId: function () {
            return  Math.floor(Math.random() * this.colors.length);
        },

        changeColorCircle: function () {
            var id = this.getRandomColorId();
            while (this.colors[id] ==  this._circle.color)
            {
                id = this.getRandomColorId();
            }
            this._circle.setColor(this.colors[id]);
        },

        changeColorTriangle: function () {
            var id = this.getRandomColorId();
            this._triangle.setColor(this.colors[id]);
            
        }
    });
});

