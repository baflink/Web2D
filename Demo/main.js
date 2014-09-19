registerCanvas(document.getElementById("canvas"), 1.0, 1.0);
var mario = new Mario();

var brickImage = new Image();
brickImage.src = "images/brick.png";

var brick = null;

brickImage.onload = function() {
	brick = new Brick(new $Rectangle(0, Canvas.elm.height - 25, 25, 25), this);
	Collision.Add(brick.rect);
	Canvas.drawing.Register(brick.Draw, brick);
}

function CheckCollision() {
	var hit = Collision.CheckCollision(mario.rect);
	if (hit != null) {
		mario.Floored(hit);
	}
}

Canvas.updating.Register(CheckCollision);
