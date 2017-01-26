goog.provide("ispring.project.Item");


goog.scope(function() {

    /**
     * @constructor
     */
    ispring.project.Item = goog.defineClass(null, {
        constructor: function (id) {
            /**
             * @type {String}
             */
            this.text = 'dd';

            /**
             * @type {Boolean}
             */
            this.checked;

            this.id = id;
            
            this.num  =0;;




        },

        getText: function()
        {
            return this.text;
        },


    });
});