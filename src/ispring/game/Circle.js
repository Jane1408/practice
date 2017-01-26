goog.provide("ispring.game.Circle");


goog.scope(function() {

    /**
     * @constructor
     */
    ispring.game.Circle = goog.defineClass(null, {
        constructor: function (color) {
            /**@type {number}*/
            this.sAngle = 0;

            this.eAngle = Math.PI * 2;

            this.radius = 100;

            this.x = 0;
            this.y = 0;

            /**@type {string}*/
            this.color = color;
        },

        /***
         * @param {string} value
         */
        setColor: function (value) {
            this.color = value
        }


    });
});

