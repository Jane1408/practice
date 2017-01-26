goog.provide("CodeLock.Controller.Toolbar");


goog.require("goog.dom");
goog.require("goog.style");
goog.require("goog.math");

goog.scope(function() {

    /**
     * @constructor
     */
    CodeLock.Controller.Toolbar = goog.defineClass(null, {
        constructor: function () {
            this.userScreenButton = goog.dom.createElement(goog.dom.TagName.INPUT);
            this.userScreenButton.id = "userScreenButton";
            this.userScreenButton.type = "submit";
            this.userScreenButton.value = "Замок";
            goog.style.setPosition(this.userScreenButton, new goog.math.Coordinate(0, 0));
            goog.style.setSize(this.userScreenButton, new goog.math.Size(document.documentElement.clientWidth / 2 + 50, 50));
            document.body.appendChild(this.userScreenButton);

            this.adminScreenButton = goog.dom.createElement(goog.dom.TagName.INPUT);
            this.adminScreenButton.id = "adminScreenButton";
            this.adminScreenButton.type = "submit";
            this.adminScreenButton.value = "Управление";
            goog.style.setPosition(this.adminScreenButton, new goog.math.Coordinate(document.documentElement.clientWidth / 2 + 50, 0));
            goog.style.setSize(this.adminScreenButton, new goog.math.Size(document.documentElement.clientWidth / 2 + 50, 50));
            document.body.appendChild(this.adminScreenButton);

            this.informationButton = goog.dom.createElement(goog.dom.TagName.INPUT);
            this.informationButton.id = "informationButton";
            this.informationButton.type = "submit";
            this.informationButton.value = "Информация";
            goog.style.setPosition(this.informationButton, new goog.math.Coordinate(50, document.documentElement.clientHeight - 50));
            goog.style.setSize(this.informationButton, new goog.math.Size(175, 50));
            document.body.appendChild(this.informationButton);

            this.icon = goog.dom.createElement(goog.dom.TagName.A);
            this.icon.id = "reference"
            this.icon.href = "NEDOSTUPNO";
            this.icon.innerHTML = "";
            goog.style.setPosition(this.icon, new goog.math.Coordinate(document.documentElement.clientWidth - 30,
                document.documentElement.clientHeight - 30));
            goog.style.setSize(this.icon, new goog.math.Size(30, 30));

            this.iconImg = new Image(30, 30);
            this.iconImg.src = '../../../src/CodeLock/iconImg.png';
            this.iconImg.style.position = "absolute";
            goog.style.setPosition( this.iconImg, new goog.math.Coordinate(document.documentElement.clientWidth - 30,
                document.documentElement.clientHeight - 30));
            document.body.appendChild(this.iconImg);
            document.body.appendChild(this.icon);

        },

        
        userButtonPressed: function()
        {
            goog.style.setStyle(this.userScreenButton, "background-color", "#6f0ba1");
            goog.style.setStyle(this.adminScreenButton, "background-color", "#A4A4A4");
        },

        adminButtonPressed: function()
        {
            goog.style.setStyle(this.userScreenButton, "background-color", "#A4A4A4");
            goog.style.setStyle(this.adminScreenButton, "background-color", "#b33c12");
        },

        infoButtonPressed: function()
        {
            goog.style.setStyle(this.userScreenButton, "background-color", "#A4A4A4");
            goog.style.setStyle(this.adminScreenButton, "background-color", "#A4A4A4");
        },
    });
});