goog.provide("CodeLock");

goog.require("CodeLock.Controller.Controller");

/**
 * @export
 */
CodeLock.start = function()
{
    new CodeLock.Controller.Controller();

};
