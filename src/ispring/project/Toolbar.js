goog.provide("ispring.project.Toolbar");


goog.require("goog.dom");
goog.require("goog.style");
goog.require("goog.math");

goog.scope(function() {

    /**
     * @constructor
     */
    ispring.project.Toolbar = goog.defineClass(null, {
        constructor: function () {
            this.addPointButton = goog.dom.createElement(goog.dom.TagName.INPUT);
            this.addPointButton.id = "addPointButton";
            this.addPointButton.type = "submit";
            this.addPointButton.value = "ADD POINT";
            goog.style.setPosition(this.addPointButton, new goog.math.Coordinate(50, 0));
            document.body.appendChild(this.addPointButton);



        },


    });
});