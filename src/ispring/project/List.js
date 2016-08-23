goog.provide("ispring.project.List");

goog.require("ispring.project.Item");

goog.scope(function() {

    /**
     * @constructor
     */
    ispring.project.List = goog.defineClass(null, {
        constructor: function (id, dispatcher) {


            this.dispatcher = dispatcher;
            this.items = [];
            /**
             * @type {String}
             */
            this.title = "";

            this.id = id;



        },
        
        addItem: function()
        {
            this.items.push(ispring.project.Item(id));

            var event = new Event(EventType.POINT_ADDED);
            this.dispatcher.dispatchEvent(event);
        },

        deleteItem: function()
        {

        },



        


    });
});