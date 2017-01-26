goog.provide("ispring.project.ListView");


goog.require("goog.dom");
goog.require("goog.style");
goog.require("goog.math");


goog.scope(function() {

    /**
     * @constructor
     */
    ispring.project.ListView = goog.defineClass(null, {
        constructor: function (list) {
            this.list = list;
            this.position = new goog.math.Coordinate(0, 0);
            this.size = new goog.math.Size(100, 200);
            this.itemsList = this.list.getList();
            this.title = this.list.getTitle();

            this.listView = goog.dom.createElement(goog.dom.TagName.DIV);
            this.listView.id = "list";

            this.titleView = goog.dom.createElement(goog.dom.TagName.INPUT);
            this.titleView.id = "list-title";
            this.titleView.type = "text";
            this.titleView.value = "Title";

            this.addItemView = goog.dom.createElement(goog.dom.TagName.INPUT);
            this.addItemView.id = "add-list-item";
            this.addItemView.type = "text";
            this.addItemView.value = "+ add item";

            this._viewItems = [];
            this._viewItems.push(this.addItemView);

            this._viewItemsRight = [];



            var check = this._viewItems[this._viewItems.length - 1];

            check.onchange = goog.bind(function ()
            {
                var itemView = goog.dom.createElement(goog.dom.TagName.INPUT);
                itemView.id = "list-item";
                itemView.type = "text";
                itemView.value = "+ add item";
                goog.style.setSize(itemView, 144,20);
                this._viewItems.push(itemView);
                document.body.appendChild(itemView);
                check = itemView;


                var itemViewRight = goog.dom.createElement(goog.dom.TagName.DIV);
                itemViewRight.id = "item";
                itemViewRight.type = "text";
                goog.style.setSize(itemViewRight, 144,20);



                itemViewRight.innerHTML = itemView.value;

                this._viewItemsRight.push(itemViewRight);
                document.body.appendChild(itemViewRight);


            }, this);



            goog.style.setSize(this.listView, 150,200);
            goog.style.setSize(this.titleView, 144,20);
            goog.style.setSize(this.addItemView, 144,20);

            this.listViewRight = goog.dom.createElement(goog.dom.TagName.DIV);
            this.listViewRight.id = "list";

            this.titleViewRight = goog.dom.createElement(goog.dom.TagName.DIV);
            this.titleViewRight.id = "list-title";
            this.titleViewRight.type = "text";

            goog.style.setSize(this.listViewRight, 150,200);
            goog.style.setSize(this.titleViewRight, 144,20);


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

            this.listPositionRight = new goog.math.Coordinate(x + document.documentElement.clientWidth / 2, y);
            this.titlePositionRight = new goog.math.Coordinate(x+ document.documentElement.clientWidth / 2 +3, y + 3);

            goog.style.setPosition(this.listViewRight,  this.listPositionRight);
            goog.style.setPosition(this.titleViewRight,  this.titlePositionRight);

            this.listPosition = new goog.math.Coordinate(x, y);
            this.titlePosition = new goog.math.Coordinate(x+ 3, y + 3);
            var itemPos = new goog.math.Coordinate(this.listPosition.x + 3, this.titlePosition.y + 23);
            goog.style.setPosition(this.listView,  this.listPosition);
            goog.style.setPosition(this.titleView,  this.titlePosition);
            if (this._viewItems.length > 0)
            {
                for (var i = 0; i < this._viewItems.length; ++i)
                {
                    goog.style.setPosition(this._viewItems[i],  itemPos);
                    itemPos = new goog.math.Coordinate(itemPos.x, itemPos.y + 23);

                }
            }

            itemPos = new goog.math.Coordinate(this.listPosition.x + 3 + document.documentElement.clientWidth / 2, this.titlePosition.y + 23);
            if (this._viewItemsRight.length > 0)
            {
                for (var i = 0; i < this._viewItemsRight.length; ++i)
                {
                    goog.style.setPosition(this._viewItemsRight[i],  itemPos);
                    itemPos = new goog.math.Coordinate(itemPos.x, itemPos.y + 23);

                }
            }

        },
        
        open: function()
        {

            document.body.appendChild(this.listView);
            document.body.appendChild(this.titleView);
            for (var i = 0; i < this._viewItems.length; ++i)
            {
                document.body.appendChild(this._viewItems[i]);

            }

            document.body.appendChild(this.listViewRight);
            document.body.appendChild(this.titleViewRight);

            this.list.setTitle(this.getTitle());
            this.title = this.getTitle();
            this.titleViewRight.innerHTML = this.title;

            for (var i = 0; i < this._viewItemsRight.length; ++i)
            {
                document.body.appendChild(this._viewItemsRight[i]);


            }





        },
        
        close: function()
        {
            document.body.removeChild(this.listView);
            document.body.removeChild(this.titleView);
        //    console.log(this.getTitle());
            for (var i = 0; i < this._viewItems.length; ++i)
            {
                document.body.removeChild(this._viewItems[i]);


            }

            document.body.removeChild(this.listViewRight);
            document.body.removeChild(this.titleViewRight);

            for (var i = 0; i < this._viewItemsRight.length; ++i)
            {
                document.body.removeChild(this._viewItemsRight[i]);


            }

        },

        getTitle: function()
        {
            return this.titleView.value;
        },
        
        

        
        
    });
});