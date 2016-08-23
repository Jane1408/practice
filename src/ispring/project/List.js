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
            this.items[length - 1].num = length - 1



            var event = new Event(EventType.ITEM_ADDED);
            this.dispatcher.dispatchEvent(event);
        },

        deleteItem: function(item)
        {
            var number = item.num;
            this.items.splice(number, 1);
            for (var i = number; i < this.items.length; ++i)
            {
                this.items[i].num = i;
            }

            var event = new Event(EventType.ITEM_DELETED);
            this.dispatcher.dispatchEvent(event);



        },



        


    });
});