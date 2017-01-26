goog.provide("ispring.project.MovePointCommand");

goog.require("ispring.project.EventType");
goog.require("goog.math");

goog.scope(function() {

    /**
     * @constructor
     */
    ispring.project.MovePointCommand = goog.defineClass(null, {
        constructor: function (point, x, y) {
            this._point = point;

            this.position = this._point.getPosition();

            /**@private {number}*/
            this._oldX = this.position.x;

            /**@private {number}*/
            this._oldY = this.position.y;

            /**@private {number}*/
            this._newX = x;

            /**@private {number}*/
            this._newY = y;

            ///**@private {CustomEvent}*/
            this._redrawEvent = new CustomEvent(ispring.project.EventType.REDRAW_POINT, {
                "detail":{
                    "point" : this._point
                }
            });
        },

        /**
         * @public
         */

        execute: function () {
            this._point.setPosition(this._newX, this._newY);
            document.dispatchEvent(this._redrawEvent);
        },

        /**
         * @public
         */

        unExecute: function(){
            this._point.setPosition(this._oldX, this._oldY);
            document.dispatchEvent(this._redrawEvent);

        },



    });
});