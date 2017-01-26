goog.provide("ispring.project.PointView");


goog.require("ispring.project.ListView");
goog.require("goog.math");

goog.scope(function() {

    /**
     * @constructor
     */
    ispring.project.PointView = goog.defineClass(null, {
        constructor: function (point) {
            this._point = point;

            this.position = this._point.getPosition();
            this.size = this._point.getSize();
            this.id = this._point.getId();
            this.list = this._point.getList();
            this._listView = new ispring.project.ListView(this.list);

            this._isClosed = true;
            
        },

        getPosition:function ()
        {
            return this.position;
        },

        getSize:function ()
        {
            return this.size;
        },

        getId: function()
        {
            return this.id;
        },

        setPosition: function (x, y)
        {
            this.position = new goog.math.Coordinate(x, y);
        },

        openEditList: function()
        {
            this._listView.open();
            this._listView.setPosition(this.position.x + this.size.width /2, this.position.y + this.size.height /2);
            this._isClosed = false;
            
        },
        
        closeEditList: function()
        {
            this._listView.close();
            this._isClosed = true;
        },

        getListPosition: function () {
            return  this._listView.getPosition();
        },

        getListSize: function () {
            return  this._listView.getSize();

        },

        isListClosed: function () {
            return  this._isClosed;

        },

        openResultList: function()
        {
            this._listView.open();
            this._listView.setPosition(this.position.x + this.size.width /2, this.position.y + this.size.height /2);
            this._isClosed = false;

        },
        
    });
});