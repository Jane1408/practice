goog.provide("ispring.project.Toolbar");


goog.require("goog.dom");
goog.require("goog.style");
goog.require("goog.math");

goog.require("ispring.project.Controller");

goog.scope(function() {

    /**
     * @constructor
     */
    ispring.project.Toolbar = goog.defineClass(null, {
        constructor: function () {
            this.addPointButton = goog.dom.createElement(goog.dom.TagName.INPUT);
            this.addPointButton.id = "button";
            this.addPointButton.type = "submit";
            this.addPointButton.value = "point added";
            goog.style.setPosition(this.addPointButton, new goog.math.Coordinate(300, 0));
            document.body.appendChild(this.addPointButton);



        },


    });
});