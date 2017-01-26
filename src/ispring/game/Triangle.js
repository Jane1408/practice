goog.provide("ispring.game.Triangle");


goog.scope(function() {

    /**
     * @constructor
     */
    ispring.game.Triangle = goog.defineClass(null, {
        constructor: function (color) {
            /**@type {number}*/
            this.width = 50;
            /**
             * @type {number}
             */
            this.height =  50;

            /**
             * @type {string}
             */
            this.color = color;

            /**
             * @type {Array.<number>}
             */
            this.point1 = [];

            /**
             * @type {Array.<number>}
             */
            this.point2 = [];

            /**
             * @type {Array.<number>}
             */
            this.point3 = [];
            
        },

        /***
         * @param {string} value
         */
        setColor: function (value) {
            this.color = value
        }


    });
});