goog.provide("ispring.walls.Barriers");

goog.require("goog.dom");
//goog.require("goog.style");

goog.require("ispring.walls.WallOfSegments");

goog.scope(function() {

    /**
     * @constructor
     */
    ispring.walls.Barriers = goog.defineClass(null, {
        constructor: function () {
            this.barrierType1 = [[0, 2], [8, 10]];
            this.barrierType2 = [[3, 6]];
            this.barrierType3 = [[1 ,3], [5, 7]];
            this.barrierType4 = [[2, 3], [4, 5], [6, 7]];
            this.barrierType5 = [[0, 1], [3, 5], [9, 10]];
            this.barrierType6 = [[2, 4], [6, 8]];

            this.variationBarriers = [this.barrierType1, this.barrierType2,
                this.barrierType3, this.barrierType4,this.barrierType5, this.barrierType6];

            this._walls = [];

            this._timer = new goog.Timer(7);

            goog.events.listen(this._timer, goog.Timer.TICK, goog.bind(this.offsetWalls, this));

            this._timer.start();
        },

        getRandomBarrierId: function () {
            return  Math.floor(Math.random() * this.variationBarriers.length);
        },
        
        redraw: function () {
            goog.array.forEach(this._walls, function(wall){
                wall.redraw();
            })
        },

        createBarrier: function()
        {
            var ThisClass = ispring.walls.Barriers;
            var H = ThisClass.HEIGHT;
            var SIZE = ThisClass.SECTOR_SIZE;

            var id = this.getRandomBarrierId();
            var barrierType = this.variationBarriers[id];
            var wall = new ispring.walls.WallOfSegments(barrierType);
            this._walls.push(wall);
           
        },

        offsetWalls: function()
        {
            for (var i = 0; i < this._walls.length; ++i)
            {
                if ( this._walls[i].isWallCanOffset())
                {
                    this._walls[i].offsetWall();
                }
                else 
                {
                    this._walls[i].removeWall();
                //    this._walls.splice(0, 1);
                    delete this._walls[i];
                }
                
            }
        },


        statics: {
            /**@type {number}*/
            SECTOR_SIZE: 100,
            /**@type {number}*/
            HEIGHT:20,
        }


    });
});

