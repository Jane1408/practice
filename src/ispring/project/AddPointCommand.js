goog.provide("ispring.project.AddPointCommand");

goog.require("ispring.project.Point");


goog.scope(function() {

    /**
     * @constructor
     */
    ispring.project.AddPointCommand = goog.defineClass(null, {
        constructor: function (model) {
            this._model = model;
            this._newPoint = new ispring.project.Point(window.screen.availWidth / 2,
                window.screen.availHeight / 2);

        },

        /**
         * @public
         */

        execute: function () {
            this._model.addPoint(this._newPoint);
            console.log(this._newPoint.getId());
        },

        /**
         * @public
         */

        unExecute: function(){
            this._model.deletePoint(this._newPoint);

        },



    });
});