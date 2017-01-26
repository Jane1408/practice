goog.provide("Sample");

goog.require("goog.events");
goog.require("goog.dom");
goog.require("goog.style");
goog.require("goog.Timer");
goog.require("ispring.blocks.Controller");

/**
 * @export
 */
Sample.start = function()
{
	var controller = new ispring.blocks.Controller();
	controller.initialization();
	goog.events.listen(controller.timer, goog.Timer.TICK, function() {
		controller.game.blockOffsetX();
	});
	controller.startGame()
};


goog.provide('__tmp.Module0');
