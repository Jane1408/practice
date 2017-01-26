goog.provide("ispring.blocks.GamePlay");

goog.require("ispring.blocks.Block");

goog.scope(function() {

    /**
     * @constructor
     */
    ispring.blocks.GamePlay = goog.defineClass(null, {
        constructor: function() {
            this.posY =  ispring.blocks.GamePlay.START_Y;

            this.width = ispring.blocks.Block.START_WIDTH;
            this.isGameOver = false;
            this.score = 0;

            this._currentBlock = null;
            this._blocks = [];

            this._direction = 1;
        },
        
        createFirstBlock: function()
        {
            this.posY = ispring.blocks.GamePlay.START_Y;
            var block = new ispring.blocks.Block(this.posY);
            block.createBlock();
            block.move(ispring.blocks.GamePlay.START_X, this.posY);
            this._blocks.push(block);
            this._direction = 1;
        },

        deleteOldBlock: function()
        {
            if (this._blocks.length > ispring.blocks.GamePlay.MAX_BLOCKS_COUNT)
            {
                this._blocks[0].removeBlock();
                this._blocks.splice(0, 1);
            }
        },

        blockOffsetY: function()
        {
            if (this.posY > ispring.blocks.GamePlay.START_Y / 2)
            {
                this.posY = this.posY - ispring.blocks.Block.HEIGHT;
            }
            else
            {
                for (var i = 0; i < this._blocks.length; ++i)
                {
                    this._blocks[i].setPosY(this._blocks[i].y + ispring.blocks.Block.HEIGHT);
                }
            }
        },

        blockOffsetX: function()
        {
           if (this._currentBlock) {
                var x = this._currentBlock.x + this._direction * ispring.blocks.GamePlay.DELTA;
                if (x > ispring.blocks.GamePlay.RIGHT_BORDER) {
                    this._direction = -1;
                }
                else if (x < 0) {
                    this._direction = 1;
                }
               this._currentBlock.move(x, this._currentBlock.y);
            }
        },

        addNewBlock: function()
        {
            var block = new ispring.blocks.Block(this.posY);
            block.createBlock();
            this._currentBlock = block;
            this._blocks.push(block);
        },

        setToZeroScore: function()
        {
            this.score = 0;
        },

        setGameOver: function()
        {
            this.isGameOver = !this.isGameOver;
        },

        installationOfBlock: function()
        {
            if (this._blocks.length > 2)
            {
                var topBlock = this._blocks[this._blocks.length - 2];
                var bottomBlock = this._blocks[this._blocks.length - 3];

                var oldBlockLeft = bottomBlock.x;
                var oldBlockRight = oldBlockLeft + bottomBlock.width;

                var newBlockLeft = topBlock.x;
                var newBlockRight = newBlockLeft + topBlock.width;

                if (oldBlockLeft < newBlockLeft && newBlockLeft < oldBlockRight) {
                    this.width = oldBlockRight - newBlockLeft;
                    ++this.score;

                }
                else if (newBlockLeft < oldBlockLeft && newBlockRight > oldBlockLeft) {
                    this.width = newBlockRight - oldBlockLeft;
                    topBlock.setPosX(oldBlockLeft);
                    ++this.score;
                }
                else if (newBlockLeft == oldBlockLeft){
                    this.score += 5;

                }
                else {
                    this.isGameOver = true;
                    this.width = 0;
                    
                }

                topBlock.setWidth(this.width);
                this._currentBlock.setWidth(this.width);
            }
        },

        deleteAllBlocks: function()
        {
            var len = this._blocks.length;
            for (var i = 0; i < len; i++)
            {
                this._blocks[0].removeBlock();
                this._blocks.splice(0, 1);
            }  
        },

        statics:{
            /**@type {number}*/
            START_Y: 500,
            HEIGHT: 50,
            MAX_BLOCKS_COUNT: 6,
            START_X: 500,
            DELTA: 3,
            RIGHT_BORDER: 1000,
        }
    });
});