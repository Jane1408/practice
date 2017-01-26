goog.provide("Sample");

goog.require("goog.events");
goog.require("goog.dom");
goog.require("goog.style");
goog.require("ispring.game.Circle");
goog.require("ispring.game.CircleView");
goog.require("ispring.game.Controller");
goog.require("ispring.game.Triangle");
goog.require("ispring.game.TriangleView");

/**
 * @export
 */
Sample.start = function()
{
	goog.events.listen(document, goog.events.EventType.CLICK, VerifyColors);

	var colors = ['#F00', '#00F', '#008000', '#FF0'];




	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

	var circle = new ispring.game.Circle(colors[0]);
	var circleView = new ispring.game.CircleView(context, circle);

	var triangle = new ispring.game.Triangle(colors[0]);
	var triangleView = new ispring.game.TriangleView(context, triangle);

	var controller = new ispring.game.Controller(circle, triangle, colors);

	circle.x = canvas.width / 2;
	circle.y = canvas.height / 2;

	triangle.point1 = [canvas.width / 2, canvas.height / 2 + circle.radius];
	triangle.point2 = [canvas.width / 2 - triangle.width / 2, canvas.height / 2 + triangle.height + circle.radius];
	triangle.point3 = [canvas.width / 2 + triangle.width / 2, canvas.height / 2 + triangle.height + circle.radius];


	function Draw() {
		context.clearRect(0,0, canvas.width, canvas.height);

		context.textBaseline = "top";
		context.font = "30px Arial";
		context.fillStyle = "black";
		context.fillText("Score : " + controller.score, 5, 10);
		context.fillText("Best score : " + controller.bestScore, 5, 50);

		circleView.draw();
		triangleView.draw();
		
	}

	function VerifyColors(){
		if (circle.color == triangle.color)
		{
			++controller.score;
			controller.changeColorTriangle();
			controller.bestScore = (controller.score > controller.bestScore) ? controller.score :controller.bestScore;
		}
		else
		{
			alert("GAME OVER");
			controller.score = 0;
		}
	}

	var timerId = setTimeout(function run() {
		controller.changeColorCircle();
		Draw();
		timerId = setTimeout(run, 700);
	}, 0);

};

;
goog.provide('__tmp.Module0');
