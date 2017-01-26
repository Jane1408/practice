goog.provide("CodeLock.View.CheckerView");

goog.require("goog.math");

goog.scope(function() {

    /**
     * @constructor
     */
    CodeLock.View.CheckerView = goog.defineClass(null, {
        constructor: function (data) {
            this._data = data;
            this._size = this._data.getSize();
            /**
             * @type {goog.math.Coordinate}
             */
            this._position = this._data.getPosition();
            this._codeLine = goog.dom.createElement(goog.dom.TagName.OUTPUT);
            this._dispatcher = this._data.dispatcher;
            this._codeLine.id = "checker";
            this._codeLine.type = "text";
            this._codeLine.value = this._data.getValue();
            goog.style.setPosition(this._codeLine, new goog.math.Coordinate(this._position.x, this._position.y));
            goog.style.setSize(this._codeLine,  new goog.math.Size(this._size.width, this._size.height));

            this._dispatcher.addEventListener(CodeLock.Controller.EventType.CORRECT_CODE, goog.bind(function ()
            {
                goog.style.setStyle(this._codeLine, "background-color", "#FF574F");
                this._codeLine.value = "доступ разрешен";
            },this),false);
            this._dispatcher.addEventListener(CodeLock.Controller.EventType.INCORRECT_CODE, goog.bind(function ()
            {
                goog.style.setStyle(this._codeLine, "background-color", "#33EA21" );
                this._codeLine.value = "доступ запрещен";
            },this),false);

        },

        clear: function()
        {
            this._codeLine.value = "";
            goog.style.setStyle(this._codeLine, "background-color", "white");
        },

        getPosition:function ()
        {
            return this._position;
        },

        getSize:function ()
        {
            return this._size;
        },
        
        setPosition: function (x, y)
        {
            this._position.x = x;
            this._position.y = y;
        },

        append: function()
        {
            document.body.appendChild(this._codeLine);
        },

        remove: function()
        {
            document.body.removeChild(this._codeLine);
        }

    });
});