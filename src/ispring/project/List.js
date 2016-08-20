goog.provide("ispring.project.List");

goog.require("ispring.project.Item");

goog.scope(function() {

    /**
     * @constructor
     */
    ispring.project.List = goog.defineClass(null, {
        constructor: function () {
            
            this.items = [];
            /**
             * @type {String}
             */
            this.title;



        },
        
        addItem: function()
        {
            this.items.push(ispring.project.Item());
        },

        deleteItem: function()
        {

        },



        


    });
});