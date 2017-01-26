goog.provide("ispring.project.History");

goog.scope(function() {

    /**
     * @constructor
     */
    ispring.project.History = goog.defineClass(null, {
        constructor: function () {

            this._history = [];
        },

        addCommand: function(command)
        {
            this._history.push(command);
            command.execute();
        },


    });
});