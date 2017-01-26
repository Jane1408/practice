goog.provide("ispring.walls.Ball");

goog.require("goog.dom");
goog.require("goog.style");

goog.scope(function() {

    /**
     * @constructor
     */
    ispring.walls.Ball = goog.defineClass(null, {
        constructor: function () {
            this.centerPosX = 1000 / 2;
            this.posY = document.documentElement.clientHeight - 50;
            this.posX = this.centerPosX;
            this._upperBall = goog.dom.createElement(goog.dom.TagName.DIV);
            this._upperBall.id = "ball";
            document.body.appendChild(this._upperBall);

            goog.style.setPosition(this._upperBall,  new goog.math.Coordinate(this.centerPosX , this.posY));
            this._lowerBall = goog.dom.createElement(goog.dom.TagName.DIV);
            this._lowerBall.id = "ball";
            document.body.appendChild(this._lowerBall);
            goog.style.setPosition(this._lowerBall,  new goog.math.Coordinate(this.centerPosX , this.posY));

            this.ballTimerD = new goog.Timer(10);
            this.ballTimerC = new goog.Timer(10);
        },

        removeSegment: function()
        {
            document.body.removeChild(this._segment);
            this._segment = null;

        },

        differenceOfBalls:function ()
        {
            if (this.posX > 0)
            {
                this.posX -= 5;
                goog.style.setPosition(this._upperBall, new goog.math.Coordinate(this.posX, this.posY));
                goog.style.setPosition(this._lowerBall, new goog.math.Coordinate(
                    1000 - this.posX, this.posY));

            }
            else
            {
                this.ballTimerD.stop();
            }

        },

        convergenceOfBalls:function ()
        {
            if (this.posX < this.centerPosX)
            {
                this.posX += 5;
                goog.style.setPosition(this._upperBall, new goog.math.Coordinate(this.posX, this.posY));
                goog.style.setPosition(this._lowerBall, new goog.math.Coordinate(
                    1000 - this.posX, this.posY));
}
            else {
                this.ballTimerC.stop();
            }
        },

        statics: {
            /**@type {number}*/

        }


    });
});