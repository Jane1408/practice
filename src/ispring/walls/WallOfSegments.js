goog.provide("ispring.walls.WallOfSegments");


goog.require("goog.Timer");
goog.require("goog.events");

goog.require("ispring.walls.Segment");

goog.scope(function() {

    /**
     * @constructor
     */
    ispring.walls.WallOfSegments = goog.defineClass(null, {
        constructor: function (segmentsPositions) {
            this.segmentsPositions = segmentsPositions;
            this.segments = [];
            //console.log(document.documentElement.clientHeight);
            this.posY = 0;
            this.createWall();

           
        },

        
        createWall: function()
        {
            for (var i = 0; i < this.segmentsPositions.length; ++i)
            {
                var segmentPos = this.segmentsPositions[i];
                var size = segmentPos[1] - segmentPos[0];
                var pos = segmentPos[0];

                var segment = new ispring.walls.Segment(pos, size);

                this.segments.push(segment);
            }

        },

        redraw: function () {
            goog.array.forEach(this.segments, function(segment){
                segment.redraw();
            })
        },
        
        offsetWall:function()
        {


                for (var i = 0; i < this.segments.length; ++i)
                {
                    this.posY = this.segments[i].posY + ispring.walls.WallOfSegments.DELTA;
                   

                    this.segments[i].move(this.posY);
                }

        },
        
        removeWall: function()
        {
            for (var i = 0; i < this.segments.length; ++i)
            {

                this.segments[i].removeSegment();


            }
            for (var i = 0; i < this.segments.length; ++i)
            {


                delete this.segments[i];


            }

        },

        isWallCanOffset: function()
        {
            return (this.posY < document.documentElement.clientHeight - 20);

        },

        statics: {
            /**@type {number}*/
            DELTA: 3,
            
        }


    });
});