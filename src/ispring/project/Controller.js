goog.provide("ispring.project.Controller");

goog.require("ispring.project.EventType");
goog.require("ispring.project.Model");
goog.require("ispring.project.Toolbar");
goog.require("ispring.project.View");
goog.require("ispring.project.RightView");
goog.require("ispring.project.History");
goog.require("ispring.project.Background");


goog.require("ispring.project.AddPointCommand");
goog.require("ispring.project.MovePointCommand");


goog.scope(function() {

    /**
     * @constructor
     */
    ispring.project.Controller = goog.defineClass(null, {
        constructor: function () {
            this._backgroud = new ispring.project.Background();

            this.dispatcher = document;
            this._model = new ispring.project.Model(this.dispatcher);
            this._view = new ispring.project.View();
            this._viewRight = new ispring.project.RightView();
            this._history = new ispring.project.History();
            this.toolbar = new ispring.project.Toolbar();
            
            this.toolbar.addPointButton.addEventListener("click",  goog.bind(this._addPoint, this));
            
            this.dispatcher.addEventListener(ispring.project.EventType.POINT_ADDED, goog.bind(function (e)
            {
                this._view.addPoint(e.detail);
                this._viewRight.addPoint(e.detail);
            },this),false);

            this.dispatcher.addEventListener(ispring.project.EventType.REDRAW_POINT, goog.bind(function (e) {
                this._view.redraw(e.detail.point);
                this._viewRight.redraw(e.detail.point);

            }, this), false);

           var view = this._view.getBody();

            view.ondblclick = goog.bind(function(e){
                var id = this._model.getPointUId(e);
                var pointViewLeft = this._view.getPointById(id);
                if (pointViewLeft != undefined) {
                    pointViewLeft.openEditList();
                    var listPosition = pointViewLeft.getListPosition();
                    var listSize = pointViewLeft.getListSize();
                    view.onmousedown = goog.bind(function (e) {
                        if (!pointViewLeft.isListClosed()) {
                            if (listPosition.x <= e.pageX && e.pageX <= listPosition.x + listSize.width &&
                                listPosition.y <= e.pageY && e.pageY <= listPosition.y + listSize.height) {

                            }

                            else {

                                pointViewLeft.closeEditList();

                                document.ondblclick = null;
                                document.onmousedown = null;
                            }
                        }
                        else {

                            this._movePoint(view, e);
                        }
                    }, this);
                }
            }, this);

            view.onmousedown = goog.bind(function (e) {
                this._movePoint(view, e);

            }, this);
     
        },


        _addPoint: function()
        {
            var command = new ispring.project.AddPointCommand(this._model);
            this._history.addCommand(command);
        },

        _movePoint: function(view, detail)
        {

                var id = this._model.getPointUId(detail);
                var pointView = this._view.getPointById(id);

                if (pointView != undefined) {
                    var posPoint = pointView.getPosition();
                    var shiftX = detail.pageX - posPoint.x;
                    var shiftY = detail.pageY - posPoint.y;

                    var oldPos = new goog.math.Coordinate(posPoint.x, posPoint.y);

                    document.onmousemove = goog.bind(function (e) {
                        var pos = new goog.math.Coordinate(e.pageX - shiftX, e.pageY - shiftY);
                        if (this._view.checkOutputAbroad(pos, pointView.getSize()))
                        {
                            pointView.setPosition(pos.x, pos.y);
                            this._view.draw();



                        }
                    }, this);

                    view.onmouseup = goog.bind(function (e) {
                        var newPos = pointView.getPosition();
                        if (oldPos.x != newPos.x || oldPos.y != newPos.y)
                        {
                            oldPos = newPos;
                            var shapeModel = this._model.getPointById(id);
                            var command = new ispring.project.MovePointCommand(shapeModel, newPos.x, newPos.y);
                            this._history.addCommand(command);
                        }

                        document.onmouseup = null;
                        document.onmousemove = null;
                    }, this);
                }


        }



    });
});