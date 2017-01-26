goog.provide("ispring.walls.Game");

//goog.require("goog.dom");
//goog.require("goog.style");
goog.require("goog.Timer");
goog.require("ispring.walls.Barriers");
goog.require("ispring.walls.Ball");

goog.scope(function() {
    ispring.walls.Game = goog.defineClass(null, {
        constructor: function () {
            this._barriers = new ispring.walls.Barriers();
            this._ball = new ispring.walls.Ball();
            goog.events.listen(this._ball.ballTimerD, goog.Timer.TICK, this._ballD, false, this);
            goog.events.listen(this._ball.ballTimerC, goog.Timer.TICK, this._ballC, false, this);
            
            goog.events.listen(document, goog.events.EventType.MOUSEDOWN, this._onMouseDown, false, this);
            goog.events.listen(document, goog.events.EventType.MOUSEUP, this._onMouseUp, false, this);


            goog.events.listen(window, goog.events.EventType.FOCUS, this._onFocusIn, false, this);
            goog.events.listen(window, goog.events.EventType.BLUR, this._onFocusOut, false, this);
            this.timer = new goog.Timer(1000);

            goog.events.listen(this.timer, goog.Timer.TICK, this._barrier, false, this);

            this.timer.start();
        },

        _onFocusIn: function ()
        {
            this._barriers.redraw();
            this._barrier();
            this.timer.start();
        },

        _onFocusOut: function ()
        {
            this.timer.stop();
        },

        _barrier: function () {
            this._barriers.createBarrier();
        },



        _onMouseDown: function () {
            console.log("_onMouseDown");
            this._ball.ballTimerC.stop();
            
            this._ball.ballTimerD.start();

        //    this._ball.differenceOfBalls();
            
        },

        _onMouseUp: function () {
            console.log("_onMouseUp");
            this._ball.ballTimerD.stop();
            this._ball.ballTimerC.start();

            //    this._ball.differenceOfBalls();

        },

        _ballD: function () {
            this._ball.differenceOfBalls();
        },

        _ballC: function () {
            this._ball.convergenceOfBalls();
        },
    });
});
