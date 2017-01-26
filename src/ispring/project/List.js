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
            this.title = "www";

            this.id = id;



        },
        
        addItem: function()
        {
            this.items.push(new ispring.project.Item(this.id));
            this.items[this.items.length - 1].num = this.items.length - 1



            var event = new Event(ispring.project.EventType.ITEM_ADDED);
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

            var event = new Event(ispring.project.EventType.ITEM_DELETED);
            this.dispatcher.dispatchEvent(event);



        },

        getTitle: function()
        {
            return this.title;
        },
        getList: function()
        {
            return this.items;
        },

        setTitle: function(title)
        {
            this.title = title;
        },







    });
});