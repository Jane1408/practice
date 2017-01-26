goog.provide("ispring.blocks.Controller");

goog.require("ispring.blocks.GamePlay");
goog.require("goog.events");
goog.require("goog.dom");
goog.require("goog.style");
goog.require("goog.Timer");

goog.scope(function() {

    /**
     * @constructor
     */
    ispring.blocks.Controller = goog.defineClass(null, {
        constructor: function() {
            this.game = new ispring.blocks.GamePlay();
            this.timer = new goog.Timer(ispring.blocks.Controller.TIME_INTERVAL);
        },
        
        restart: function()
        {
            this.game.isGameOver = false;

            goog.style.setStyle(this.btn, "display", this.game.isGameOver ? "block" : "none");

            this.game.deleteAllBlocks();
            this.game.createFirstBlock();
            this.game.score = 0;
            this.timer.start();
            
        },

        block: function()
        {
            if (!this.game.isGameOver) {

                this.game.deleteOldBlock();
                this.game.blockOffsetY();
                this.game.addNewBlock();
                this.game.installationOfBlock();

                this.scoreDiv.innerHTML = this.game.score;
            }

            if (this.game.isGameOver)
            {
                goog.style.setStyle( this.btn, "display",  this.game.isGameOver ? "block" : "none");
                this.timer.stop();
            }
        },

        startGame: function()
        {
            goog.style.setStyle(this.btn, "display", this.game.isGameOver ? "block" : "none");

            goog.events.listen(document, goog.events.EventType.CLICK, goog.bind(this.block, this));
            this.game.createFirstBlock();
            
            this.timer.start();
            goog.events.listen(this.btn, goog.events.EventType.CLICK, goog.bind(this.restart, this));
        },

        initialization: function()
        {
            this.scoreDiv = goog.dom.createElement("div");
            this.scoreDiv.id = "score";
            document.body.appendChild(this.scoreDiv);

            this.btn = goog.dom.createElement("div");
            this.btn.id = "restart";
            this.btn.innerHTML = "RESTART!";
            document.body.appendChild(this.btn);
        },

        statics:{
            /**@type {number}*/
            TIME_INTERVAL: 1,
        }
  
    });
});