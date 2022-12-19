(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"B4B27_atlas_1", frames: [[0,0,623,434],[0,436,278,280],[581,467,153,408],[625,0,180,465],[280,669,192,322],[0,718,231,138],[280,436,299,231],[474,877,312,103]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_8 = function() {
	this.initialize(ss["B4B27_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["B4B27_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["B4B27_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["B4B27_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["B4B27_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["B4B27_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["B4B27_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["B4B27_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7660,5107);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhXqA6dMAAAh05MCvVAAAMAAAB05g");
	mask.setTransform(561.1,374.075);

	// 圖層_3
	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.1465,0.1465);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,1122.1,748.1), null);


(lib.手握筆 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_13
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(561.1,374.1,1,1,0,0,0,561.1,374.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.手握筆, new cjs.Rectangle(0,0,1122.2,748.2), null);


// stage content:
(lib.B4B27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_5
	this.instance = new lib.手握筆();
	this.instance.setTransform(380.4,432.25,1,1,0,0,0,561.1,374.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(122).to({_off:false},0).wait(1).to({x:389.5,y:433.35},0).wait(1).to({x:381.35,y:434.75},0).wait(1).to({x:389.85,y:436.15},0).wait(1).to({x:380.95,y:437.65},0).wait(1).to({x:390.15,y:438.05},0).wait(1).to({x:381.25,y:439.65},0).wait(1).to({x:386.25,y:440.35},0).wait(1));

	// mask10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_122 = new cjs.Graphics().p("AgZAKQgLgEAAgGQAAgFALgEQALgFAOAAQAQAAAKAFQALAEAAAFQAAAGgLAEQgKAFgQAAQgOAAgLgFg");
	var mask_graphics_123 = new cjs.Graphics().p("AggATQgNgIABgLQgBgKANgIQAOgJASAAQATAAANAJQAOAIgBAKQABALgOAIQgNAJgTAAQgSAAgOgJg");
	var mask_graphics_124 = new cjs.Graphics().p("AglAcQgQgMAAgQQAAgPAQgMQAQgMAVAAQAXAAAPAMQAQAMAAAPQAAAQgQAMQgPAMgXAAQgVAAgQgMg");
	var mask_graphics_125 = new cjs.Graphics().p("AgsAlQgRgQgBgVQABgVARgPQATgQAZAAQAaAAASAQQATAPAAAVQAAAVgTAQQgSAQgaAAQgZAAgTgQg");
	var mask_graphics_126 = new cjs.Graphics().p("AgyAuQgTgUgBgaQABgZATgUQAWgTAcAAQAeAAATATQAWAUAAAZQAAAagWAUQgTATgeAAQgcAAgWgTg");
	var mask_graphics_127 = new cjs.Graphics().p("Ag3A3QgXgYAAgfQAAgeAXgXQAXgYAgAAQAhAAAWAYQAYAXAAAeQAAAfgYAYQgWAXghAAQggAAgXgXg");
	var mask_graphics_128 = new cjs.Graphics().p("Ag+BAQgZgbAAglQAAgkAZgbQAbgbAjAAQAlAAAZAbQAaAbAAAkQAAAlgaAbQgZAbglAAQgjAAgbgbg");
	var mask_graphics_129 = new cjs.Graphics().p("AhEBIQgbgfAAgpQAAgpAbgeQAdgfAnAAQAoAAAbAfQAdAeAAApQAAApgdAfQgbAfgoAAQgnAAgdgfg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(122).to({graphics:mask_graphics_122,x:171.4,y:261.05}).wait(1).to({graphics:mask_graphics_123,x:171.4,y:261.125}).wait(1).to({graphics:mask_graphics_124,x:171.4,y:261.175}).wait(1).to({graphics:mask_graphics_125,x:171.4,y:261.25}).wait(1).to({graphics:mask_graphics_126,x:171.4,y:261.325}).wait(1).to({graphics:mask_graphics_127,x:171.4,y:261.4}).wait(1).to({graphics:mask_graphics_128,x:171.4,y:261.45}).wait(1).to({graphics:mask_graphics_129,x:171.4,y:261.525}).wait(1));

	// lady10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CD2335").s().p("Ag4A5QgXgYAAghQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgQAAAhgXAYQgYAXghAAQggAAgYgXg");
	this.shape.setTransform(170.825,260.625);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(122).to({_off:false},0).wait(8));

	// pen下
	this.instance_1 = new lib.手握筆();
	this.instance_1.setTransform(434.3,438.7,1,1,0,0,0,561.1,374.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(115).to({_off:false},0).wait(1).to({x:441.95,y:441.55},0).wait(1).to({x:449.95,y:445.7},0).wait(1).to({x:458.95,y:448.35},0).wait(1).to({x:467.45},0).wait(1).to({x:474.2,y:445},0).wait(1).to({x:478.95,y:444.4},0).to({_off:true},1).wait(8));

	// mask下 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_115 = new cjs.Graphics().p("AgEBLQgXgCgSgPQgTgOgHgWQgGgVAGgWQAHgXASgOQARgOAYgBQAXgCATALQATALALAWQAKAVgDAVQgCAKgDAHQgKAXgUAMQgSAMgVAAIgEAAg");
	var mask_1_graphics_116 = new cjs.Graphics().p("AgGA+QgSAKgUgCQgXgBgSgPQgTgPgHgVQgGgVAGgWQAHgXASgOQARgOAYgCQAYgBATALIAIAGQAIgEAIgCQATgEATAFQATAFAOAPQAOAPAFASQAFASgFAUQgGATgOAOQgVAUgcACIgDAAQgaAAgUgRg");
	var mask_1_graphics_117 = new cjs.Graphics().p("AAwBZQgUgKgLgSIgBgBIgNABQgcABgVgRQgSAJgVgBQgWgCgTgPQgSgOgHgWQgHgUAHgXQAHgXARgOQASgOAYgBQAXgCAUALIAJAHQAHgEAIgCQATgFATAFQATAGAOAOQAGAHAFAIIABAAQATgEATAGQATAGANAOQANAOAFATQAFAUgGASQgGAVgRAPQgRAOgWADIgJAAQgQAAgRgHg");
	var mask_1_graphics_118 = new cjs.Graphics().p("ABwBxQgTgDgPgLQgNgJgIgOIgIACQgWACgUgJQgUgKgLgSIgBgBIgNABQgdABgVgRQgSAJgUgBQgXgCgSgPQgTgOgHgVQgGgVAGgXQAHgXASgOQARgOAYgBQAYgCATALIAJAHQAHgEAJgCQATgFATAFQATAGANAOQAHAHAEAIIABAAQATgEAUAGQATAGANAOQAGAHAEAIIABgBQAVgFAUAHQAUAGAOARQAOAQADAUQABAQgDALQgEATgMAOQgNAOgSAHQgMAEgNAAIgLgBg");
	var mask_1_graphics_119 = new cjs.Graphics().p("ACBBxQgKgEgIgIIgEABQgSAHgTgDQgTgDgPgLQgNgKgHgNIgJABQgUADgVgKQgUgJgLgTIgBgBIgNACQgdABgVgSQgSAKgVgCQgWgBgTgPQgSgOgHgVQgHgWAHgWQAHgXARgOQASgOAYgCQAXgBAUALIAJAGQAHgEAIgCQAUgEATAFQATAFAOAPQAGAHAFAIIABgBQASgEATAGQATAGANAOQAGAHAFAIIABAAQAVgFAUAGQAQAGAMALQAZgMAcAJQAWAHAOASQAXAcgJAkQgEAQgLAOQgLANgQAHQgPAHgSAAQgRgBgPgIg");
	var mask_1_graphics_120 = new cjs.Graphics().p("ABbBxQgKgEgIgIIgEABQgSAHgTgDQgSgDgPgLQgMgKgIgNIgJABQgVADgVgKQgUgJgLgTIgBgBIgNACQgdABgVgSQgSAKgVgCQgWgBgTgPQgSgOgHgVQgHgWAHgWQAHgXARgOQASgOAYgCQAXgBAUALIAJAGQAHgEAIgCQAUgEATAFQATAFAOAPQAHAHAEAIIABgBQATgEATAGQASAGANAOQAHAHAEAIIABAAQAVgFAUAGQAQAGAMALQAZgMAcAJIAHADQAHgGAJgEQATgIAVADQAWADAQANQAQANAHATQAHAVgFAUQgFAUgPAQQgPAPgUAFQgTAFgVgGIgHgCQgHAFgJAEQgPAHgSAAQgRgBgPgIg");
	var mask_1_graphics_121 = new cjs.Graphics().p("AAxBxQgKgEgIgIIgEABQgSAHgSgDQgTgDgPgLQgNgKgHgNIgJABQgVADgVgKQgUgJgLgTIgBgBIgNACQgdABgVgSQgSAKgVgCQgWgBgTgPQgSgOgHgVQgHgWAHgWQAHgXARgOQASgOAYgCQAXgBAUALIAJAGQAHgEAIgCQAUgEATAFQATAFAOAPQAGAHAFAIIABgBQATgEATAGQATAGANAOQAGAHAFAIIABAAQAUgFAUAGQAPAGAMALQAagMAcAJIAHADQAHgGAJgEQATgIAVADQAKABAKAEQAGgHAKgGQATgMAVAAQAVAAASAMQATAMAJATQAJASgDAWQgDAWgNARQgOAQgVAHQgVAHgUgGIgMgDIgCACQgPAPgUAFQgUAFgUgGIgHgCQgHAFgJAEQgPAHgSAAQgRgBgPgIg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(115).to({graphics:mask_1_graphics_115,x:214.4063,y:267.4488}).wait(1).to({graphics:mask_1_graphics_116,x:218.4065,y:267.8686}).wait(1).to({graphics:mask_1_graphics_117,x:222.4638,y:269.617}).wait(1).to({graphics:mask_1_graphics_118,x:226.6375,y:271.4134}).wait(1).to({graphics:mask_1_graphics_119,x:230.7661,y:272.166}).wait(1).to({graphics:mask_1_graphics_120,x:234.5505,y:272.166}).wait(1).to({graphics:mask_1_graphics_121,x:238.7897,y:272.166}).wait(9));

	// 下嘴唇
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CD2335").s().p("AhhAiQgWgWgpggIgsglQgJgJACgHIBLAKIgCAAQAYAAA7ARQBEAUANACQAYAEAsgEIA8gFIA5AJQAEADgHAJIgWAUIgkAmQgdAYggAAQiSAAgogog");
	this.shape_1.setTransform(243.4226,274.825);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(115).to({_off:false},0).wait(15));

	// pen上
	this.instance_2 = new lib.手握筆();
	this.instance_2.setTransform(434.75,439.15,1,1,0,0,0,561.1,374.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(108).to({_off:false},0).wait(1).to({x:443.95,y:436.85},0).wait(1).to({x:452.9,y:434.35},0).wait(1).to({x:460.7,y:434.65},0).wait(1).to({x:469.7,y:436.45},0).wait(1).to({x:475.1,y:441.6},0).wait(1).to({y:443.95},0).to({_off:true},1).wait(15));

	// mask上 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_108 = new cjs.Graphics().p("AgOBJQgRgDgOgLQgOgKgHgQQgKgSACgVQADgWAMgRQANgQAVgIQAUgIAUAFQAUAEAQAPQAQAPAFAUQAGATgHAVQgHAVgQAOQgNALgRAEQgJADgJAAQgHAAgHgCg");
	var mask_2_graphics_109 = new cjs.Graphics().p("Ag5BcQgQgDgOgLQgOgKgIgQQgJgSACgWQACgVANgRQANgQAUgIQAVgIAUAFIAEAAIAHgKQANgRATgHQAVgIAUAEQAVAEAQAPQAQAQAFAUQAFAUgHAUQgHAVgQANQgNALgQAFQgRAEgRgDIgEgBQgHAMgLAKQgMALgQAEQgKADgJAAQgHAAgIgCg");
	var mask_2_graphics_110 = new cjs.Graphics().p("AhmBqQgQgEgOgKQgOgLgIgPQgJgTACgWQACgVANgQQANgRAUgHQAVgIAUAEIAEABIAHgLQANgQAUgIQAVgIATAFIANAEIADgEQANgRAUgHQAVgIAUAEQAVAEAQAPQAQAQAFAUQAFAUgHAVQgHAUgQANQgNALgQAFQgRAEgRgDIgNgEQgGAIgIAHQgNALgQAEQgQAFgRgEIgEgBQgHANgLAJQgNALgQAFQgKACgJAAQgHAAgIgBg");
	var mask_2_graphics_111 = new cjs.Graphics().p("AiOB2QgQgDgOgLQgOgKgIgQQgJgSACgWQACgWANgQQANgQAUgIQAVgIAUAFIAEABIAHgLQANgRAUgHQAVgIAUAEIANAEIADgEQAMgQAUgIQAVgIAUAFIAHABQANgPATgIQAVgIAUAFQAVAEAQAPQAQAPAFAUQAFAUgHAVQgHAVgQANQgNALgQAEQgRAFgRgEIgHgBIgKAKQgNALgQAEQgRAFgRgEIgNgEQgGAJgIAGQgMALgQAFQgRAEgRgDIgEgBQgHANgLAJQgNALgQAEQgKADgJAAQgHAAgIgCg");
	var mask_2_graphics_112 = new cjs.Graphics().p("Ai5B2QgRgDgOgLQgOgKgHgQQgKgSACgWQADgWAMgQQANgQAVgIQAUgIAVAFIADABIAHgLQANgRAVgHQAUgIAVAEIANAEIACgEQANgQAVgIQAUgIAUAFIAGABQANgPAUgIQAUgIAVAFQAUAEAQAPIAGAGIAEgCQAVgIAUAFQAVAEAQAPQAQAPAFAUQAFAUgHAVQgHAUgQAOQgNALgQAEQgRAFgRgEQgQgDgOgLQgHgFgFgGIgMAEQgRAFgQgEIgHgBIgKAKQgNALgRAEQgRAFgPgEIgOgEQgFAJgIAGQgNALgRAFQgRAEgQgDIgFgBQgGANgLAJQgNALgRAEQgJADgKAAQgHAAgHgCg");
	var mask_2_graphics_113 = new cjs.Graphics().p("AjhB2QgRgDgOgLQgOgKgHgQQgKgSACgWQADgWAMgQQANgQAVgIQAUgIAVAFIADABIAHgLQANgRAVgHQAUgIAVAEIANAEIACgEQANgQAVgIQAUgIAVAFIAGABQANgPATgIQAUgIAVAFQAUAEAQAPIAGAGIAEgCQAVgIAUAFQAVAEAQAPIAFAGQATgHATAEQAVAEAQAPQAQAQAFAUQAFAUgHAUQgHAVgQANQgNALgQAFQgRAEgRgDQgQgEgOgKQgHgFgFgGIgEABQgRAFgRgEQgQgDgOgLQgHgFgFgGIgMAEQgRAFgQgEIgHgBIgKAKQgMALgRAEQgRAFgQgEIgOgEQgFAJgIAGQgNALgRAFQgRAEgQgDIgFgBQgGANgLAJQgNALgRAEQgJADgKAAQgHAAgHgCg");
	var mask_2_graphics_114 = new cjs.Graphics().p("ADUB4QgVgIgLgSQgKgNgCgRIgCAAQgQgDgOgLQgHgFgFgGIgEACQgRAEgRgDQgQgEgOgKQgHgFgFgHIgMAFQgRAEgPgDIgHgCIgKAKQgNALgRAFQgRAEgQgDIgOgFQgFAJgIAHQgNALgRAEQgRAFgQgEIgEgBQgHANgLAJQgNALgRAFQgRAEgQgDQgRgEgOgKQgOgLgHgPQgKgTACgWQADgVAMgQQANgRAVgHQAUgIAVAEIAEABIAGgLQANgQAVgIQAUgIAVAFIANADIACgDQANgRAVgHQAUgIAVAEIAGACQANgQAUgHQATgIAVAEQAUAEAQAPIAGAGIAEgBQAVgIAUAEQAVAEAQAPIAFAGQATgHATAFQAVAEAQAPQAQAPAFAUIABAHQAVAEAQAOQAPANAGAVQAGAWgGAUQgGAUgRAOQgRAPgUADIgMABQgPAAgOgHg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(108).to({graphics:mask_2_graphics_108,x:215.5036,y:271.2706}).wait(1).to({graphics:mask_2_graphics_109,x:219.7536,y:269.3956}).wait(1).to({graphics:mask_2_graphics_110,x:224.2536,y:268.0206}).wait(1).to({graphics:mask_2_graphics_111,x:228.2536,y:266.7706}).wait(1).to({graphics:mask_2_graphics_112,x:232.6286,y:266.7706}).wait(1).to({graphics:mask_2_graphics_113,x:236.6286,y:266.7706}).wait(1).to({graphics:mask_2_graphics_114,x:239.6076,y:267.443}).wait(16));

	// 上嘴唇
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CD2335").s().p("ACbA9QgwgwgMAAQgmAFgVAAQgLgBgQgFQgPgFgLAAQgNAAg3ALIg1AKQgUAIg1gPQgBgIAJgCQAwgVAmgUQBKgnAkAAQAGAAASAIQAUAIAJAAQAEgBAXgHQARgHARAIQAaAKAhAmQAmAqAIAog");
	this.shape_2.setTransform(243.3643,265.7);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(108).to({_off:false},0).wait(22));

	// pen08
	this.instance_3 = new lib.手握筆();
	this.instance_3.setTransform(525.35,525.4,1,1,0,0,0,561.1,374.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(99).to({_off:false},0).wait(1).to({x:503.65,y:526.4},0).wait(1).to({x:483,y:537.2},0).wait(1).to({x:464.3,y:548},0).wait(1).to({x:443.55,y:555},0).wait(1).to({x:418.75,y:563.8},0).wait(1).to({x:397.05,y:569.8},0).wait(1).to({x:381.05,y:570.8},0).wait(1).to({x:365.3},0).to({_off:true},1).wait(22));

	// mask08 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_99 = new cjs.Graphics().p("AgjCQQgxgMgegkQgjgqACg7QADg8AmgnQAbgbAmgLQAmgKAkAIQAuALAhAmQAgAlAEAvQAEAugbArQgaAqgrASQgaALgcAAQgSAAgTgFg");
	var mask_3_graphics_100 = new cjs.Graphics().p("AiDCYQgrgGgggaQgWgSgPgaQgOgagDgdQgDgcAIgdQAIgcASgXQAggpA3gLQA3gLAuAYQAVAMARASIAKgNQAbgbAmgLQAmgKAlAIQAuALAhAmQAgAlAEAvQAEAugbArQgaAqgrASQgsASgwgMQgtgLgdgfQgWAcggAPQgdANggAAIgUgBg");
	var mask_3_graphics_101 = new cjs.Graphics().p("AkVC+QgwgUgZgqQgYgqAGgzQAHgzAigjQAcgbAngLQAogLAmAKQARAFAQAJIACgIQAIgdASgXQAggoA3gMQA2gLAtAZQAWALARASIALgMQAbgbAmgLQAmgLAlAJQAtAKAhAmQAhAmADAvQAEAvgaApQgaArgsASQgrARgxgMQgsgLgegfQgWAdghAOQglASgqgGQgdgDgYgOQgHAegVAbQgfAqgvAMQgSAFgTAAQgdAAgdgMg");
	var mask_3_graphics_102 = new cjs.Graphics().p("AmQDmQgrgegOg3QgOg2AWgvQAXguAzgXQAzgYAyAOIADABQAJgpAdgdQAcgcAngLQAogKAmAKQARAEAPAJIADgIQAIgcASgXQAfgpA3gLQA3gLAtAYQAWAMAQASIAMgNQAbgbAmgLQAmgKAlAIQAtALAhAmQAhAlADAvQAEAvgaArQgaApgsASQgrASgxgMQgsgLgegfQgWAcghAPQglARgrgFQgdgEgYgNQgHAegUAbQgfApgvANQgpAKgpgNQgJArgeAeQglAlg4AEIgPABQguAAglgag");
	var mask_3_graphics_103 = new cjs.Graphics().p("AnkEeQgygXgWguQgTgmAFgtQAFgsAbghQAcgjAugNQAtgMArAMQAOAFANAHQADgLAGgKQAWgvAzgXQAzgYAyAOIADABQAJgpAdgdQAcgcAogLQAngKAlAKQASAFAPAIIACgIQAIgcASgXQAggpA3gLQA3gLAuAYQAVAMARASIALgNQAbgbAmgLQAmgKAlAIQAuALAhAmQAgAlAEAvQAEAvgbArQgaAqgrASQgsARgwgLQgtgLgdgfQgXAcggAPQgmAQgrgFQgdgEgYgMQgHAdgUAbQggApgvANQgnALgpgNQgKAqgeAeQglAlg4AEQgvAEgmgVQgHAXgQAWQggAtgyANQgSAEgSAAQggAAgggOg");
	var mask_3_graphics_104 = new cjs.Graphics().p("ApxFEQgmgYgSgtQgSgsAJgsQAJglAageQAagdAkgNQAkgMAnAHQAnAHAeAYIABABQAGgqAaggQAcgiAtgNQAtgNArANQAPAFANAHQADgLAFgLQAXgvAzgXQAzgYAyAOIADABQAJgpAdgdQAbgcAngLQAogKAmAKQARAFAQAIIACgIQAIgcASgXQAggpA3gLQA3gLAtAYQAWAMARASIALgNQAbgbAmgLQAmgKAlAIQAtALAhAmQAhAlADAvQAEAvgaArQgaAqgsASQgrASgxgMQgsgLgegfQgWAcghAPQglARgrgFQgdgEgYgNQgHAegVAbQgfAogvANQgpALgpgNQgJArgeAdQgkAlg4AEQgvAEgmgVQgIAXgQAWQggAtgyANQgxANgygXQgUgJgPgNQgEAmgXAfQghAtg8ALQgRADgPAAQgpAAgjgWg");
	var mask_3_graphics_105 = new cjs.Graphics().p("AqQGAQgygDgkgeQglgdgNgxQgNgwARgsQARgrApgbQAqgbAuACQAiACAfARQAJgXARgTQAbgeAkgMQAkgNAnAHQAnAHAdAYIACACQAFgqAagfQAcgjAugNQAtgOArAOQAOAFANAHQAEgMAFgLQAWgvAzgXQAygXAyAOIAEABQAJgpAcgeQAcgbAogLQAngLAmAKQASAFAPAJIACgIQAIgdASgXQAggoA3gMQA3gLAuAZQAWALAQATIALgNQAbgbAmgLQAmgLAlAJQAuAKAhAmQAgAmAEAvQAEAvgbAqQgaArgrASQgsARgwgMQgtgLgdgfQgWAdghAOQgmASgrgGQgdgDgYgNQgHAdgUAbQggApgvAMQgoALgpgNQgJArgfAeQglAkg4AFQguAEgmgWQgHAYgQAWQggAtgyAMQgyANgygXQgUgJgPgMQgEAlgWAfQgiAug8ALQg2AKgsgYQgSArgmAZQgkAYgsAAIgJAAg");
	var mask_3_graphics_106 = new cjs.Graphics().p("AsXF8QgugVgXgxQgXgxALgxQALgxAqghQAqgiAyAAQAhAAAeAPIANgJQAqgbAuACQAiABAfARQAJgXARgTQAbgdAkgNQAkgLAnAGQAnAHAdAYIACABQAFgpAaggQAcgjAugNQAtgNArANQAOAFANAHQADgLAGgLQAWgvAygXQAzgYAyAOIADABQAJgpAdgdQAcgcAogLQAngKAmAKQASAEAPAJIACgIQAIgcASgXQAggpA3gLQA3gLAuAYQAVAMARASIALgNQAbgbAmgLQAmgKAlAIQAuALAhAmQAgAlAEAvQAEAvgbArQgaAqgrASQgsASgwgMQgtgLgdggQgXAdggAPQgmARgrgFQgdgEgYgNQgHAegUAbQggApgvAMQgoAKgpgNQgKArgeAeQglAlg4AEQgvAEgmgVQgHAXgQAWQgfAtgyANQgyANgygXQgUgKgPgMQgEAmgWAfQgiAtg8ALQg2ALgtgZQgRAsgmAZQgnAagygDQgegCgagLQgZAUgjAIQgUAFgSAAQggAAgcgOg");
	var mask_3_graphics_107 = new cjs.Graphics().p("At6F0QgpgagSgwQgTgxAOguQAOguAqgfQApgeAxAAQApABAkAXIAFADQAmgbAtAAQAgAAAfAPIANgJQApgbAuACQAjABAeARQAKgXARgTQAagdAkgNQAkgLAnAGQAnAHAeAYIABABQAGgpAaggQAcgjAtgNQAtgNAqANQAPAFANAHQADgLAFgLQAXgvAzgXQAzgYAyAOIADABQAJgpAdgdQAcgcAngLQAogKAmAKQARAEAPAJIADgIQAIgcASgXQAggpA3gLQA3gLAtAYQAWAMARASIALgNQAbgbAmgLQAmgKAlAIQAtALAhAmQAhAlADAvQAEAvgaArQgaAqgsASQgrASgxgMQgsgLgeggQgWAdghAPQglARgrgFQgdgEgYgNQgHAegVAbQgfApgvAMQgpAKgpgNQgJArgeAeQglAlg4AEQgwAEglgVQgIAXgQAWQggAtgyANQgwANgygXQgUgKgPgMQgEAmgXAfQghAtg8ALQg3ALgsgZQgSAsglAZQgoAagxgDQgfgCgZgLQgaAUgjAIQg0ANgugWQgKgFgJgGQgfAVgoADIgPABQgqAAgjgWg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(99).to({graphics:mask_3_graphics_99,x:324.4929,y:352.3289}).wait(1).to({graphics:mask_3_graphics_100,x:313.0871,y:352.8006}).wait(1).to({graphics:mask_3_graphics_101,x:302.3081,y:357.679}).wait(1).to({graphics:mask_3_graphics_102,x:292.9327,y:363.0392}).wait(1).to({graphics:mask_3_graphics_103,x:282.098,y:367.5196}).wait(1).to({graphics:mask_3_graphics_104,x:269.9151,y:372.1173}).wait(1).to({graphics:mask_3_graphics_105,x:259.4696,y:375.8708}).wait(1).to({graphics:mask_3_graphics_106,x:251.5983,y:376.8396}).wait(1).to({graphics:mask_3_graphics_107,x:243.2247,y:376.8431}).wait(23));

	// lady08
	this.instance_4 = new lib.CachedBmp_1();
	this.instance_4.setTransform(153.35,351.75,0.5,0.5);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(99).to({_off:false},0).wait(31));

	// pen07
	this.instance_5 = new lib.手握筆();
	this.instance_5.setTransform(496.05,450.9,1,1,0,0,0,561.1,374.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(88).to({_off:false},0).wait(1).to({x:489.55,y:473.4},0).wait(1).to({x:490.55,y:497.4},0).wait(1).to({x:508.05,y:515.4},0).wait(1).to({x:530.55},0).wait(1).to({x:556.05,y:509.4},0).wait(1).to({x:582.55,y:509.9},0).wait(1).to({x:605.55,y:520.95},0).wait(1).to({x:619.55,y:537.45},0).wait(1).to({x:628.05,y:553.45},0).wait(1).to({x:633.05,y:568.45},0).to({_off:true},1).wait(31));

	// mask07 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_88 = new cjs.Graphics().p("AhHCDQglgUgVgnQgVgmACgoQACgrAagkQAaglAngQQAogQArAJQAsAIAfAdQAYAXANAgQAMAggDAgQgCAhgRAeQgRAegcATQgiAYgsACIgIAAQgmAAgggSg");
	var mask_4_graphics_89 = new cjs.Graphics().p("AhnD0QglgUgVgmQgVgmACgqQACgqAaglQAagjAngQIgKgQQgVgmACgqQACgqAaglQAagkAngQQAngQAsAIQAsAJAfAdQAYAXANAgQAMAggDAhQgCAhgRAeQgRAegcASQgNAJgPAGQALAQAIATQAMAggDAhQgCAhgRAeQgRAegcATQgiAXgrACIgJABQgmAAgggTg");
	var mask_4_graphics_90 = new cjs.Graphics().p("AiBFuQgkgUgVgmQgVgmACgpQACgrAagkQAaglAogQQgPgOgKgUQgWgmACgoQADgrAZgkQAaglAogQIgKgQQgWgmACgpQADgrAZgkQAaglAngQQAngQAsAJQAsAIAfAdQAZAXAMAgQAMAggCAhQgCAhgSAeQgRAegbATQgOAKgPAGQAMAPAHATQAMAggCAgQgDAigRAdQgRAegbATQgOAKgQAGQAXAXALAeQAMAggCAhQgDAhgRAeQgRAegcASQghAYgsACIgHAAQgnAAghgTg");
	var mask_4_graphics_91 = new cjs.Graphics().p("AgdHnQgkgVgVgmQgVgmACgpQACgrAagkIAEgGQgegDgagPQgkgUgVgmQgVgmACgpQACgrAagkQAagkAogQQgPgOgKgUQgWgmACgpQADgrAZgkQAaglAogQIgKgQQgWgmACgpQADgrAZgkQAaglAngQQAngQAsAJQAsAIAfAdQAZAXAMAgQAMAggCAhQgCAhgSAeQgRAegbATQgOAKgPAGQAMAPAHATQAMAggCAhQgDAigRAdQgRAegbATQgOAJgQAGQAXAXALAeQAMAggCAhQgDAhgRAeIgMASIALABQAsAIAfAeQAYAXAMAgQAMAggCAhQgDAhgRAeQgRAegbASQgjAYgrACIgJAAQgnAAgfgSg");
	var mask_4_graphics_92 = new cjs.Graphics().p("AB/IiQgkgHgdgYQgegXgPgiIgEgMQgbAOgiACQgrACglgUQgkgVgVgmQgVgmACgpQACgrAagkIAFgGQgegDgbgPQgkgUgVgmQgVgmACgpQADgrAagjQAaglAngQQgOgPgLgTQgVgmACgpQACgrAagkQAaglAngQIgKgQQgVgmACgpQACgrAagkQAaglAngQQAogQAsAJQArAIAfAdQAYAXANAgQAMAggDAhQgCAhgRAeQgRAegcATQgNAJgPAGQAMAQAHATQAMAggDAhQgCAigRAdQgRAegbATQgOAKgPAGQAWAWAMAeQAMAggDAhQgCAhgSAeIgLARIAKACQArAIAfAeQAYAXANAgIACAFQARgIATgFQAdgGAeAFQAeAGAZAQQAZAQASAaQARAZAGAdQAHAkgLAkQgLAlgaAaQgZAagkALQgXAHgWAAQgOAAgOgCg");
	var mask_4_graphics_93 = new cjs.Graphics().p("AAEIiQgjgHgegYQgegXgOgiIgFgMQgcAOghACQgsACgkgUQgkgVgVgmQgVgmACgpQACgrAagkIAEgGQgegDgagPQgkgUgVgmQgVgmACgpQACgrAagjQAaglAogQQgPgPgKgTQgWgmACgpQADgrAZgkQAaglAogQIgKgQQgWgmACgpQADgrAZgkQAaglAogQQAngQAsAJQAsAIAfAdQAZAXAMAgQAMAggCAhQgCAhgSAeQgRAegbATQgOAJgPAGQAMAQAHATQAMAggCAhQgDAigRAdQgRAegbATQgOAKgQAGQAXAWALAeQAMAggCAhQgDAhgRAeIgMARIALACQAsAIAfAeQAYAXAMAgIACAFQARgIAUgFQAcgGAeAFQAeAGAZAQQANAIALAMQAHgWAPgUQAagkAngQQAogQAsAJQAsAJAeAdQAYAXANAgQAMAggDAhQgCAhgSAeQgRAdgbATQgiAYgsACQgrACglgVQgSgKgOgOQgLAjgZAZQgaAagkALQgXAHgWAAQgOAAgNgCg");
	var mask_4_graphics_94 = new cjs.Graphics().p("AiAIiQgkgHgdgYQgegXgPgiIgEgMQgcAOgiACQgrACglgUQgkgVgVgmQgVgmACgpQACgrAagkIAEgGQgegDgagPQgkgUgVgmQgVgmACgpQADgrAagjQAaglAngQQgOgPgLgTQgVgmACgpQACgrAagkQAaglAngQIgKgQQgVgmACgpQACgrAagkQAaglAngQQAogQAsAJQAsAIAfAdQAYAXANAgQAMAggDAhQgCAhgRAeQgRAegcATQgNAJgPAGQALAQAIATQAMAggDAhQgCAigRAdQgRAegcATQgOAKgQAGQAXAWAMAeQAMAggDAhQgCAhgSAeIgLARIAKACQAsAIAfAeQAYAXANAgIACAFQAQgIAUgFQAdgGAeAFQAeAGAZAQQANAIALAMQAHgWAOgUQAagkAogQQAngQAsAJQAsAJAfAdQANANAKAPQAGgQALgPQAaglAogQQAogQAsAJQAsAIAeAdQAZAXAMAgQAMAggCAiQgDAhgRAeQgRAegbASQgiAYgsACQgsACgkgUQghgTgUghQgEALgGAKQgRAdgcATQgiAYgrACQgsACgkgVQgSgKgPgOQgLAjgZAZQgYAagkALQgXAHgXAAQgNAAgOgCg");
	var mask_4_graphics_95 = new cjs.Graphics().p("Aj9IiQgkgHgdgYQgegXgPgiIgEgMQgcAOgiACQgrACglgUQgkgVgVgmQgVgmACgpQACgrAagkIAEgGQgegDgagPQgkgUgVgmQgVgmACgpQADgrAagjQAaglAngQQgOgPgLgTQgVgmACgpQACgrAagkQAaglAngQIgKgQQgVgmACgpQACgrAagkQAaglAngQQAogQAsAJQAsAIAfAdQAYAXANAgQAMAggDAhQgCAhgRAeQgRAegcATQgNAJgPAGQALAQAIATQAMAggDAhQgCAigRAdQgRAegcATQgOAKgQAGQAXAWAMAeQAMAggDAhQgCAhgSAeIgLARIAKACQAsAIAfAeQAYAXANAgIACAFQAQgIAUgFQAdgGAeAFQAeAGAZAQQANAIAMAMQAHgWAOgUQAagkAogQQAmgQAsAJQAsAJAfAdQANANAKAPQAGgQALgPQAaglAogQQAogQAsAJQAsAIAeAdQAZAXAMAgIAFAOQAVgWAdgMQAogPAsAIQAsAIAfAeQAYAXAMAgQAMAggCAhQgDAhgRAeQgRAegbASQgiAYgsACQgsACgkgUQgkgUgVgnQgJgQgFgQQgKAKgLAIQgiAYgsACQgsACgkgUQghgTgUghQgEALgGAKQgRAdgcATQgiAYgrACQgrACgkgVQgSgKgPgOQgLAjgZAZQgZAagkALQgXAHgXAAQgNAAgOgCg");
	var mask_4_graphics_96 = new cjs.Graphics().p("AIqJDQgkgUgVgmQgNgXgEgYQgNADgNAAQgsADgkgVQgkgUgVgmQgJgQgFgQQgKAKgLAIQgiAXgsACQgsADgkgVQghgSgUghQgEAKgGAKQgRAegcATQghAXgrACQgsACgkgUQgSgKgPgOQgLAigZAZQgZAagkAMQglALgkgHQgkgGgdgYQgegYgPgiIgEgLQgcAOgiABQgrADglgVQgkgUgVgmQgVgmACgqQACgqAaglIAEgFQgegDgagPQgkgVgVglQgVgnACgpQADgqAagkQAaglAngPQgOgPgLgTQgVgmACgqQACgqAaglQAagkAngQIgKgQQgVgmACgqQACgqAaglQAagkAngQQAogQAsAIQAsAJAfAdQAYAXANAgQAMAggDAhQgCAhgRAeQgRAegcATQgNAJgPAGQALAQAIATQAMAggDAhQgCAhgRAeQgRAegcATQgOAKgQAGQAXAWAMAfQAMAfgDAhQgCAhgSAeIgLARIAKACQAsAIAfAdQAYAXANAgIACAGQAQgJAUgEQAdgHAeAGQAeAFAZAQQANAJAMAMQAHgWAOgUQAagkAogQQAngQAsAJQArAIAfAeQANANAKAPQAGgQALgQQAagkAogQQAogQAsAIQAsAJAeAdQAZAXAMAgIAFAOQAVgWAdgMQAogQAsAJQAsAIAfAdQAYAXAMAgQAFAOADAOQAdgGAgAGQAsAIAfAdQAYAXAMAgQAMAggCAhQgDAhgRAeQgRAegbATQgiAXgsACIgKABQgmAAgggTg");
	var mask_4_graphics_97 = new cjs.Graphics().p("AJXKTQgkgUgVgmQgWgmACgqIACgOIgPgIQgkgUgVgmQgNgXgEgYQgNADgNAAQgsADgkgVQgkgUgVgmQgJgQgFgQQgKAKgLAIQgiAXgsACQgsADgkgVQghgSgUghQgEAKgGAKQgQAegcATQgiAXgrACQgsACgkgUQgSgKgPgOQgLAigZAZQgZAagkAMQglALgkgHQgkgGgdgYQgegYgPgiIgEgLQgcAOgiABQgrADglgVQgkgUgVgmQgVgmACgqQACgqAaglIAEgFQgegDgagPQgkgVgVglQgVgmACgpQADgrAagkQAaglAngPQgOgPgLgTQgVgmACgqQACgqAaglQAagkAngQIgKgQQgVgmACgqQACgqAaglQAagkAngQQAogQAsAIQAsAJAfAdQAYAXANAgQAMAggDAhQgCAhgRAeQgRAegcATQgNAJgPAGQALAQAIATQAMAggDAhQgCAhgRAeQgRAegcATQgOAKgQAGQAXAWAMAfQAMAggDAhQgCAhgSAdIgLARIAKACQAsAIAfAdQAYAXANAgIACAGQAQgJAUgEQAdgHAeAGQAeAFAZAQQANAJAMAMQAHgWAOgUQAagkAogQQAngQAsAJQAsAIAfAeQAMANAKAPQAGgQALgQQAagkAogQQAogQAsAIQAsAJAeAdQAZAXAMAgIAFAOQAVgWAdgMQAogQAsAJQAsAIAfAdQAYAXAMAgQAFAOADAOQAdgGAgAGQAsAIAfAdQAYAXAMAgQAMAggCAhIgCALQAZAKAUATQAZAXAMAgQAMAggCAhQgDAhgRAeQgRAegbATQgiAXgsACIgKABQgmAAgggTg");
	var mask_4_graphics_98 = new cjs.Graphics().p("AKGL6QgkgVgVgmQgVgmACgpQABgcAMgaQgQgFgPgIQglgUgVgnQgVgmACgpIABgPIgOgHQglgVgVgmQgMgWgFgYQgMACgOABQgrACgkgUQglgUgVgnQgJgPgEgRQgKAKgMAIQgiAYgsACQgrACglgUQgfgTgVghQgEALgGAKQgRAdgbATQgiAYgsACQgrACglgVQgSgKgOgOQgLAjgZAZQgaAagkALQgkAMgkgHQgkgHgegYQgegXgOgiIgFgMQgcAOghACQgsACgkgUQgkgVgVgmQgVgmACgpQACgrAagjIAEgGQgegDgagPQgkgUgVgmQgVgmACgpQACgrAagkQAaglAogQQgPgOgKgUQgWgmACgpQADgrAZgkQAaglAogQIgKgQQgWgmACgpQADgrAZgkQAaglAogQQAngQAsAJQAsAIAfAdQAZAXAMAgQAMAggCAhQgCAhgSAeQgRAegbATQgOAKgPAGQAMAPAHATQAMAggCAhQgDAigRAdQgRAegbATQgOAKgQAGQAXAXALAeQAMAggCAhQgDAhgRAeIgMASIALABQAsAIAfAeQAYAXAMAfIACAFQARgIAUgFQAdgGAeAFQAeAGAZAQQANAJALALQAHgWAPgUQAagjAngQQAogQAsAJQAsAJAeAdQANAMAKAQQAHgRALgOQAZglAngQQAogQAsAJQAsAIAfAdQAYAXANAfIAEAPQAWgXAdgMQAngOAsAHQAsAIAfAeQAYAXANAgQAFAOACAOQAegHAfAGQAsAIAfAeQAYAXANAgQAMAfgDAiIgBALQAZAKAUASQAYAXANAgQAMAggDAhQgCAbgLAYQAkAKAaAYQAYAXANAgQAMAggDAiQgCAhgRAeQgRAegcASQgiAYgsACIgJAAQgmAAghgSg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(88).to({graphics:mask_4_graphics_88,x:285.388,y:267.2161}).wait(1).to({graphics:mask_4_graphics_89,x:282.188,y:278.5661}).wait(1).to({graphics:mask_4_graphics_90,x:279.7129,y:290.8114}).wait(1).to({graphics:mask_4_graphics_91,x:279.7129,y:302.8161}).wait(1).to({graphics:mask_4_graphics_92,x:289.5563,y:307.135}).wait(1).to({graphics:mask_4_graphics_93,x:301.9379,y:307.135}).wait(1).to({graphics:mask_4_graphics_94,x:315.1879,y:307.135}).wait(1).to({graphics:mask_4_graphics_95,x:327.6879,y:307.135}).wait(1).to({graphics:mask_4_graphics_96,x:336.6879,y:312.0661}).wait(1).to({graphics:mask_4_graphics_97,x:341.1879,y:320.0661}).wait(1).to({graphics:mask_4_graphics_98,x:345.9379,y:330.3161}).wait(32));

	// lady07
	this.instance_6 = new lib.CachedBmp_2();
	this.instance_6.setTransform(270.45,282.15,0.5,0.5);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(88).to({_off:false},0).wait(42));

	// pen06
	this.instance_7 = new lib.手握筆();
	this.instance_7.setTransform(508.5,421.5,1,1,0,0,0,561.1,374.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(79).to({_off:false},0).wait(1).to({x:500,y:444},0).wait(1).to({x:488,y:464},0).wait(1).to({x:471.55,y:476},0).wait(1).to({x:452.55,y:481.5},0).wait(1).to({x:431.05,y:471.5},0).wait(1).to({x:413.55,y:456.5},0).wait(1).to({x:401.05,y:438.5},0).wait(1).to({x:393.55,y:418},0).to({_off:true},1).wait(42));

	// mask06 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_79 = new cjs.Graphics().p("AgLCVQgngDgigWQgYgRgQgYQgQgZgGgcQgGgcAGgcQAFgdAPgYQAYglAmgSQAfgPAjAAQAjABAfAPQAeAQAWAdQAVAcAGAiQAHAggKAjQgKAigXAZQgXAaghANQgbALgbAAIgMgBg");
	var mask_5_graphics_80 = new cjs.Graphics().p("AhvDxQgogSgXgkQgbgoACgyQADgrAagkQAZgjAogPQAKgFALgCQgIgRgEgSQgGgcAGgdQAFgdAPgYQAYglAmgSQAegPAkAAQAjABAfAPQAeAQAWAdQAVAcAGAiQAHAhgKAjQgKAigXAZQgXAZghANQgKAEgLADQAGAMADAOQAMAqgNApQgMAogiAdQgiAcgoAGIgVACQgfAAgfgOg");
	var mask_5_graphics_81 = new cjs.Graphics().p("AinFYQgkgUgWgnQgVgmACgqQADgqAaglQAagkAngQIAOgFQgUgkACgqQADgrAagkQAZgkAogPQAKgFALgCQgIgRgEgSQgGgcAGgdQAFgdAPgYQAYglAlgSQAfgPAkAAQAjABAfAPQAeAQAWAdQAVAcAGAiQAHAhgKAjQgKAigXAZQgXAaghANQgKAEgLADQAGAMADAOQAMApgNApQgMAogiAdQgZAVgeAJIAIASQAMAggCAhQgDAhgRAeQgRAegaASQgjAYgrACIgKAAQgmAAgggSg");
	var mask_5_graphics_82 = new cjs.Graphics().p("AjoGsQgkgUgVgmQgVgmACgpQACgrAagkQAaglAngPQASgIAUgCQgDgOABgQQADgqAaglQAagkAngPIAOgEQgUglACgrQADgrAagkQAZgkAngPQAKgEALgDQgIgRgEgSQgGgcAGgdQAFgdAPgYQAYglAmgSQAfgPAkAAQAjABAfAPQAeAQAWAdQAVAcAGAiQAHAhgKAjQgKAigXAZQgXAaghANQgKAFgLACQAFAMAEAOQAMAqgNApQgMAogiAcQgZAVgeAJIAIASQAMAggCAhQgDAhgRAeQgRAegbASQgfAVgkAEQADARgBARQgDAhgRAdQgRAegbATQgjAXgrACIgKABQglAAghgTg");
	var mask_5_graphics_83 = new cjs.Graphics().p("Ak/HkQglgUgVgnQgVgmACgpQADgrAZgkQAaglAogPQAngQAtAIIABAAQAHgaARgYQAaglAogPQASgIATgCQgCgPABgPQACgqAagkQAagkAngQIAOgFQgUgkADgrQABgrAagkQAagkAngPQAKgFALgCQgIgRgDgSQgGgcAFgdQAFgdAQgYQAXglAngSQAfgPAjAAQAkABAeAPQAfAQAVAdQAVAcAHAiQAGAhgKAjQgJAigXAZQgYAaggANQgLAEgLADQAGAMAEAOQALAqgMApQgNAoghAdQgaAVgeAIIAJASQAMAggDAhQgCAhgRAeQgRAegcASQgeAVglAEQACARgBARQgCAhgSAdQgRAegbATQghAXgsACQgTABgSgDQgFAUgKATQgRAegcASQgiAYgrACIgIAAQgnAAghgSg");
	var mask_5_graphics_84 = new cjs.Graphics().p("AjHHkQgfgRgUgeQgNARgTAMQgiAYgsACQgrACglgUQgkgVgVgmQgVgmACgpQACgrAagkQAaglAngQQAogQAsAJQAsAIAfAdQAMAMAKAOQAYgfAkgOQAngQAtAIIACAAQAGgaARgYQAaglAogPQARgIATgCQgCgPABgPQACgqAagkQAagkAogQIAOgFQgUgkACgrQACgrAagkQAagkAngPQALgFALgCQgJgRgDgSQgGgcAFgdQAFgdAQgYQAXglAngSQAfgPAjAAQAkABAeAPQAfAQAVAdQAVAcAHAiQAGAhgKAjQgJAigXAZQgYAaggANQgLAEgKADQAFAMAEAOQALAqgMApQgNAoghAdQgaAVgdAIIAIASQAMAggDAhQgCAhgRAeQgRAegcASQgeAVglAEQADARgCARQgCAhgSAdQgRAegbATQgiAXgsACQgTABgSgDQgFAUgKATQgQAegcASQgiAYgrACIgIAAQgnAAghgSg");
	var mask_5_graphics_85 = new cjs.Graphics().p("AhoHkQgfgRgUgeQgOARgSAMQgiAYgsACQgrACglgUQgkgVgVgmQgUgjAAgmQgQAEgRABQgrACglgUQgkgVgVgmQgVgmACgpQADgrAZgkQAaglAogQQAngPAtAIQArAIAfAeQAYAXANAgQAKAaAAAcQAggJAkAHQAsAIAfAdQAMAMAJAOQAZgfAkgOQAngQAtAIIABAAQAGgaARgYQAaglAogPQASgIATgCQgCgPABgPQACgqAagkQAagkAogQIAOgFQgVgkADgrQACgrAagkQAagkAngPQAKgFALgCQgIgRgDgSQgGgcAFgdQAFgdAQgYQAXglAngSQAfgPAjAAQAkABAeAPQAfAQAVAdQAVAcAHAiQAGAhgKAjQgJAigXAZQgYAaggANQgLAEgLADQAGAMAEAOQALAqgMApQgNAoghAdQgaAVgeAIIAJASQAMAggDAhQgCAhgRAeQgRAegcASQgeAVglAEQACARgBARQgCAhgSAdQgRAegbATQgiAXgsACQgTABgSgDQgFAUgKATQgRAegcASQgiAYgqACIgIAAQgnAAghgSg");
	var mask_5_graphics_86 = new cjs.Graphics().p("AgZHkQgfgRgTgeQgOARgSAMQgjAYgrACQgsACgkgUQgkgVgVgmQgUgjAAgmQgQAEgRABQgsACgkgUQgkgVgVgmQgTgiAAglIgFABQgkABghgQQgigQgWgdQgRgWgHgbQgIgbADgcQADghASgcQARgdAbgSQAcgTAhgFQAigFAfAKQAgAJAZAXQAZAXANAeQAMAaAAAdQASgBAUAEQAsAIAfAeQAYAXAMAgQAKAaAAAcQAhgJAkAHQAsAIAeAdQANAMAJAOQAZgfAjgOQAngQAsAIIACAAQAHgaARgYQAaglAngPQATgIATgCQgCgPAAgPQADgqAagkQAagkAngQIAOgFQgUgkACgrQADgrAagkQAZgkAogPQAKgFALgCQgIgRgEgSQgGgcAGgdQAFgdAPgYQAYglAmgSQAfgPAkAAQAjABAfAPQAeAQAWAdQAVAcAGAiQAHAhgKAjQgKAigXAZQgXAaghANQgKAEgLADQAGAMADAOQAMAqgNApQgMAogiAdQgZAVgeAIIAIASQAMAggCAhQgDAhgRAeQgRAegbASQgeAVgmAEQADARgBARQgDAhgRAdQgRAegbATQgjAXgrACQgTABgSgDQgFAUgLATQgRAegbASQgiAYgsACIgIAAQgnAAgggSg");
	var mask_5_graphics_87 = new cjs.Graphics().p("AAeHkQgegRgUgeQgNARgSAMQgjAYgrACQgsACgkgUQgkgVgVgmQgUgjAAgmQgQAEgRABQgsACgkgUQgkgVgVgmQgTgigBglIgEABQgkABghgQQgigQgWgdQgRgWgHgbQgIgbADgcQADghASgcIAEgHQgagCgZgLQgigQgWgcQgRgXgIgbQgIgcADgcQADghASgeQARgdAcgSQAcgTAhgFQAigEAgAJQAfAKAZAXQAZAXANAeQAOAhgDAmQgEAkgTAfIgCADQAPABAPAFQAgAJAZAXQAZAXANAeQALAaAAAdQATgBAUAEQAsAIAfAeQAYAXAMAgQAKAaAAAcQAhgJAkAHQAsAIAeAdQANAMAJAOQAXgfAkgOQAogQAsAIIACAAQAHgaARgYQAaglAngPQASgIAUgCQgDgPABgPQADgqAagkQAagkAngQIAOgFQgUgkACgrQADgrAagkQAZgkAogPQAKgFALgCQgIgRgEgSQgGgcAGgdQAFgdAPgYQAYglAmgSQAfgPAkAAQAjABAfAPQAeAQAWAdQAVAcAGAiQAHAhgKAjQgKAigXAZQgXAaghANQgKAEgLADQAFAMAEAOQAMAqgNApQgMAogiAdQgZAVgeAIIAIASQAMAggCAhQgDAhgRAeQgRAegbASQgfAVglAEQADARgBARQgDAhgRAdQgRAegbATQgjAXgrACQgTABgSgDQgFAUgLATQgRAegbASQgiAYgsACIgIAAQgnAAghgSg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(79).to({graphics:mask_5_graphics_79,x:301.5215,y:239.9273}).wait(1).to({graphics:mask_5_graphics_80,x:296.5174,y:250.4227}).wait(1).to({graphics:mask_5_graphics_81,x:292.0193,y:261.1378}).wait(1).to({graphics:mask_5_graphics_82,x:285.5443,y:269.6128}).wait(1).to({graphics:mask_5_graphics_83,x:276.7943,y:275.1333}).wait(1).to({graphics:mask_5_graphics_84,x:264.7695,y:275.1333}).wait(1).to({graphics:mask_5_graphics_85,x:255.2943,y:275.1333}).wait(1).to({graphics:mask_5_graphics_86,x:247.3218,y:275.1333}).wait(1).to({graphics:mask_5_graphics_87,x:241.7371,y:275.1333}).wait(43));

	// lady06
	this.instance_8 = new lib.CachedBmp_3();
	this.instance_8.setTransform(179.55,246.75,0.5,0.5);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(79).to({_off:false},0).wait(51));

	// pen05
	this.instance_9 = new lib.手握筆();
	this.instance_9.setTransform(396.55,438,1,1,0,0,0,561.1,374.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(69).to({_off:false},0).wait(1).to({x:397.55,y:463},0).wait(1).to({x:400.55,y:488.5},0).wait(1).to({x:401.55,y:515.5},0).wait(1).to({x:397.55,y:540.5},0).wait(1).to({x:378.55,y:556.5},0).wait(1).to({x:357.55,y:566},0).wait(1).to({x:334.55,y:576},0).wait(1).to({x:319.55,y:587.5},0).wait(1).to({x:310.55,y:600.5},0).to({_off:true},1).wait(51));

	// mask05 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_69 = new cjs.Graphics().p("AhVB6QglgagQgsQgQgsAKgqQAMguAnggQAnghAvgCQAugDArAcQAqAcAQAsQARAtgOAvQgOAwgmAdQgmAdgyABIgDAAQgwAAglgbg");
	var mask_6_graphics_70 = new cjs.Graphics().p("Ag5EFQgigQgWgdQgRgWgHgbQgIgbACgcQADghASgdQAQgdAagSIgLgGQgkgagQgsQgRgsALgrQALguAnggQAnghAvgCQAvgDAqAcQAqAcARAsQAQAtgOAwQgOAwgmAdIgEAEQANAGALALQAaAXAMAeQAOAigDAlQgEAlgTAeQgTAeghATQggASgkACIgGAAQggAAgegOg");
	var mask_6_graphics_71 = new cjs.Graphics().p("AgyGHQgigQgWgdQgRgWgHgbQgIgcACgcQADghASgdQARgdAbgTIADgCQgfgQgVgbQgRgWgIgbQgIgbADgbQADghARgdQARgdAagSIgLgHQglgagQgsQgQgsAKgrQAMguAnggQAnghAvgCQAugDArAcQAqAcAQAsQARAtgOAwQgOAwgmAdIgFAEQANAHAMALQAZAXANAeQANAigDAkQgDAlgUAeQgRAbgcASQATAJAPAOQAZAXANAfQAOAhgDAlQgDAlgTAeQgUAfggASQggATgkACIgHAAQgfAAgfgOg");
	var mask_6_graphics_72 = new cjs.Graphics().p("AgiILQgigQgWgcQgRgWgHgcQgIgbACgcQADghASgdQARgdAcgTIACgBIgNgFQgigQgWgdQgRgWgHgbQgIgcACgcQADghASgdQARgdAbgSIADgCQgfgQgVgbQgRgWgIgbQgIgbADgcQADghARgdQAQgdAagSIgKgHQglgagQgsQgQgsAKgrQAMguAnggQAnghAvgCQAugDArAcQAqAcAQAsQARAtgOAwQgOAwgmAdIgFAEQANAHAMALQAZAXANAeQANAigDAlQgDAlgUAeQgRAbgcASQASAJAQANQAZAXANAfQAOAhgDAlQgDAlgTAeQgSAcgcARQAcAKAWAVQAZAXANAeQAOAigDAlQgEAlgTAeQgTAeghATQggASgkACIgGAAQggAAgegPg");
	var mask_6_graphics_73 = new cjs.Graphics().p("AgsKLQgigQgWgdQgRgVgIgcQgIgbACgcQADghASgdQARgdAbgTIALgHQgUgOgPgTQgRgWgHgcQgIgbACgcQADghASgdQARgdAcgTIACgBIgNgFQgigQgWgdQgRgWgHgbQgIgcACgbQADghASgdQARgdAbgTIADgCQgfgQgVgbQgRgWgIgbQgIgbADgcQADghARgdQAQgdAagSIgKgHQglgagQgsQgQgsAKgrQAMguAnggQAnghAvgCQAugDArAcQAqAcAQAsQARAtgOAwQgOAwgmAdIgFAEQANAHAMALQAZAXANAeQANAigDAlQgDAlgUAeQgRAbgcASQASAJAQAOQAZAXANAfQAOAhgDAkQgDAlgTAeQgSAcgcARQAcAKAWAVQAZAXANAeQAOAigDAlQgEAlgTAeQgTAeghATIgBAAIAQANQAZAXANAeQAOAhgDAmQgDAlgTAeQgTAfghASQggATgkACIgGAAQggAAgegOg");
	var mask_6_graphics_74 = new cjs.Graphics().p("Ah2MAQgigQgWgdQgQgWgIgbQgHgbACgcQADghASgdQARgdAcgTQAcgSAhgFIABAAQgQgVgHgaQgIgcACgbQADghASgeQARgdAbgTIAMgHQgVgNgPgUQgRgWgHgbQgIgcACgbQADghASgeQARgdAcgSIACgBIgNgGQgigPgWgcQgRgWgHgcQgIgbACgcQADghASgeQARgdAbgSIADgCQgfgQgVgbQgRgWgIgcQgIgbADgbQADghARgeQARgcAagSIgLgHQglgagQgsQgQgsAKgsQAMguAnggQAnggAvgDQAugCArAbQAqAcAQAtQARAsgOAwQgOAxgmAdIgFADQANAIAMAKQAZAXANAfQANAhgDAlQgDAlgUAfQgRAbgcARQATAJAPAPQAZAWANAfQAOAhgDAlQgDAlgTAfQgSAbgcARQAcAKAWAUQAZAXANAfQAOAhgDAlQgEAlgTAeQgTAfghASIgBABIAQANQAZAWANAfQAOAhgDAlQgDAlgTAfQgTAeghATQgaAPgcAEQALAPAHARQAOAhgEAlQgDAlgUAfQgTAeggASQggATgkABIgGAAQghAAgegPg");
	var mask_6_graphics_75 = new cjs.Graphics().p("AjcM6QgigQgVgdQgRgWgIgbQgIgbACgcQADghASgdQARgeAbgSQAcgTAigFQAhgFAgAJIAPAGQAFgcAPgZQARgdAcgSQAcgTAggFIABAAQgQgVgHgaQgHgbACgcQACghASgdQARgdAbgTIALgHQgUgOgPgTQgRgWgHgcQgIgbACgcQADghASgdQARgcAcgTIACgBIgNgFQgigQgWgdQgQgWgHgbQgIgcACgcQADghASgdQAQgdAbgTIADgCQgfgQgUgbQgRgWgIgbQgIgbADgcQADghARgdQAQgdAZgSIgKgHQgkgagQgsQgQgsAKgrQAMguAmggQAnghAvgCQAvgDArAcQAqAcAQAsQARAtgOAwQgOAwgmAdIgFAEQANAHAMALQAZAXANAeQANAigDAlQgDAlgUAeQgRAbgcASQATAJAPAOQAZAXANAfQAOAhgDAlQgDAlgTAeQgSAcgcARQAcAKAWAVQAZAXANAdQAOAigDAlQgEAlgTAeQgTAeghATIgBAAIAQANQAZAXANAeQAOAhgDAmQgDAlgTAeQgTAfghASQgaAPgcAEQALAPAHARQAOAigEAlQgDAlgUAeQgTAeggATQghASgkABQghABgdgNQgFAfgQAaQgUAeggATQggASgkACIgHAAQggAAgfgOg");
	var mask_6_graphics_76 = new cjs.Graphics().p("AlPNuQgigQgWgdQgQgWgIgbQgIgcADgbQADghASgeQARgdAcgSQAbgTAigFQAigEAfAJQAUAGASALQAEgdAPgaQARgeAcgSQAbgTAigFQAigFAfAJIAPAGQAEgcAPgZQASgdAbgSQAcgTAigFIABAAQgQgVgIgaQgHgbACgcQADghARgdQARgdAcgTIALgHQgUgOgPgTQgRgWgIgcQgIgbADgcQADggARgdQASgdAbgTIACgBIgMgFQgigQgWgdQgRgWgIgbQgIgcADgcQADghARgdQARgdAcgTIADgCQgggQgVgbQgRgWgHgbQgIgbACgcQADghASgdQAQgdAagSIgLgHQgkgagQgsQgRgsALgrQALguAnggQAnghAvgCQAwgDAqAcQAqAcARAsQAQAtgOAwQgOAwgmAdIgEAEQANAHALALQAaAXAMAeQAOAigDAlQgEAlgTAeQgRAbgcASQASAJAQAOQAZAXANAfQAOAhgDAlQgEAlgTAeQgRAcgcARQAcAKAWAVQAZAXANAeQANAhgDAlQgDAlgUAeQgTAeggATIgCAAIAQANQAaAXANAeQAOAhgDAmQgEAlgTAeQgTAfggASQgaAPgcAEQAKAPAIARQANAigDAlQgEAlgTAeQgUAeggATQggASgkABQghABgfgNQgFAfgQAaQgTAeggATQggASgkACQgjABgigPIgSgKQgEAhgSAcQgUAeggATQghASgkACIgEAAQgiAAgfgPg");
	var mask_6_graphics_77 = new cjs.Graphics().p("AmpOMQgigQgVgcQgRgXgIgbQgIgcADgcQADghASgdQARgdAcgSQAcgTAhgFQAigEAgAJIAJAEQARgcAbgSQAbgSAigFQAigFAfAKQAUAGASALQAEgdAPgbQARgdAcgTQAbgTAhgFQAigFAgAKIAPAFQAEgbAPgZQASgdAbgTQAcgSAigFIABAAQgQgVgIgaQgHgcACgbQADghARgeQARgdAcgTIALgHQgUgNgPgUQgRgWgIgbQgIgcADgaQADghARgeQASgdAbgSIACgBIgMgGQgigQgWgcQgRgWgIgcQgIgbADgcQADghARgeQARgdAcgSIADgCQgggQgVgbQgRgWgHgcQgIgbACgbQADghASgeQAQgcAagSIgLgHQgkgagQgsQgRgsALgsQALguAnggQAnggAvgDQAwgCAqAbQAqAcARAtQAQAsgOAwQgOAxgmAdIgEADQANAIALAKQAaAXAMAfQAOAhgDAlQgEAlgTAfQgRAbgcARQASAJAQAPQAZAWANAfQAOAhgDAlQgEAlgTAfQgRAbgcASQAcAKAWAUQAZAXANAfQANAhgDAkQgDAlgUAeQgTAfggASIgCABIAQANQAaAWANAfQAOAhgDAlQgEAlgTAfQgTAeggATQgaAPgcAEQAKAPAIARQANAhgDAlQgEAlgTAfQgUAeggASQggATgkABQghABgfgNQgFAegQAaQgTAfggASQghATgkABQgjACghgQIgSgKQgEAigSAbQgUAfggASQghATgkABQgeABgcgLIgBACQgUAeggATQghASgjACIgGAAQghAAgfgPg");
	var mask_6_graphics_78 = new cjs.Graphics().p("AnvPBQghgQgWgdQgRgWgIgbQgIgbACgcQADghASgeQARgdAcgTQAbgSAigFIAVgCQAFgQAJgQQASgdAbgSQAcgTAigFQAhgEAgAJIAKAEQARgcAagSQAcgSAhgFQAigFAgAKQAUAGARALQAEgdAQgbQAQgdAbgTQAcgTAigFQAhgFAgAKIAQAFQAEgbAPgZQARgdAcgTQAcgSAhgFIABAAQgQgVgHgaQgIgcACgbQADghASgeQARgdAbgTIAMgHQgVgNgPgUQgRgWgHgaQgIgcACgbQADghASgeQARgdAcgSIACgBIgNgGQgigQgWgcQgRgWgHgcQgIgbACgcQADghASgeQARgdAbgSIADgCQgfgQgVgbQgRgWgIgcQgIgbADgbQADghARgeQARgcAagSIgLgHQglgagQgsQgQgsAKgsQAMguAnggQAnggAvgDQAvgCArAbQAqAcAQAtQARAsgOAwQgOAxgmAdIgFADQANAIAMAKQAZAXANAfQANAhgDAlQgDAlgUAfQgRAbgcARQATAJAPAPQAZAWANAfQAOAhgDAlQgDAlgTAfQgSAbgcASQAcAKAWAUQAZAXANAfQAOAhgDAlQgEAkgTAeQgTAfghASIgBABIAQANQAZAWANAfQAOAhgDAlQgDAlgTAfQgTAeghATQgaAPgcAEQALAPAHARQAOAhgEAlQgDAlgUAfQgTAeggASQghATgkABQggABgfgNQgFAegQAaQgUAfggASQggATgkABQgkACgigQIgSgKQgEAigSAbQgSAfghASQggATgkABQgeABgcgLIgCACQgTAeghATQggASgkACIgFAAQgFASgLARQgTAeggATQghASgjACIgHAAQggAAgfgOg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(69).to({graphics:mask_6_graphics_69,x:182.3921,y:253.8413}).wait(1).to({graphics:mask_6_graphics_70,x:182.9231,y:266.4462}).wait(1).to({graphics:mask_6_graphics_71,x:183.6723,y:279.4462}).wait(1).to({graphics:mask_6_graphics_72,x:185.1981,y:292.746}).wait(1).to({graphics:mask_6_graphics_73,x:185.1981,y:305.4462}).wait(1).to({graphics:mask_6_graphics_74,x:182.471,y:317.271}).wait(1).to({graphics:mask_6_graphics_75,x:172.1812,y:322.9462}).wait(1).to({graphics:mask_6_graphics_76,x:160.721,y:328.2425}).wait(1).to({graphics:mask_6_graphics_77,x:151.721,y:331.271}).wait(1).to({graphics:mask_6_graphics_78,x:144.6725,y:336.4712}).wait(52));

	// lady05
	this.instance_10 = new lib.CachedBmp_4();
	this.instance_10.setTransform(96.75,268.65,0.5,0.5);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(69).to({_off:false},0).wait(61));

	// pen04
	this.instance_11 = new lib.手握筆();
	this.instance_11.setTransform(403.5,327,1,1,0,0,0,561.1,374.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(54).to({_off:false},0).wait(1).to({x:381,y:335.5},0).wait(1).to({x:355,y:337.5},0).wait(1).to({x:333.5,y:349.5},0).wait(1).to({x:321.5,y:370},0).wait(1).to({x:319,y:394},0).wait(1).to({x:330.5,y:415},0).wait(1).to({x:346,y:430.5},0).wait(1).to({x:351.5,y:442},0).wait(1).to({x:332.5,y:461},0).wait(1).to({x:338.5,y:480.5},0).wait(1).to({x:361,y:497.5},0).wait(1).to({x:348,y:520.45},0).wait(1).to({x:359,y:539.95},0).wait(1).to({x:378,y:561.45},0).to({_off:true},1).wait(61));

	// mask04 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_54 = new cjs.Graphics().p("AgcCSQgygJgigrQgjgqgBgzQAAgyAigqQAigrAygLQAxgKAxAZQAwAZAVAvQAUAvgPAzQgPA1gpAdQgZASgeAGQgQADgPAAQgOAAgOgDg");
	var mask_7_graphics_55 = new cjs.Graphics().p("AibDcQgkgUgVgmQgVgmACgqQACgqAaglQAagjAogQQAkgPApAGQgEgPAAgPQgBgzAjgrQAhgqAygLQAygLAwAaQAxAZAUAuQAVAvgPA1QgPA0gqAdQgZARgeAGQgaAGgZgEQAFAVgCAWQgDAigRAdQgRAegbATQghAXgsACIgJAAQgmAAghgSg");
	var mask_7_graphics_56 = new cjs.Graphics().p("AkfDrQglgUgVgmQgVgmACgqQACgqAaglQAagjAogQQAngQAtAJQArAIAfAdQANAMAKAPQAHgTAMgQQAagkAngQQAkgOAoAGQgDgPgBgQQAAgzAigrQAigqAygLQAygLAxAaQAwAZAVAuQAUAvgPA1QgPA1gpAcQgZARgeAGQgaAGgagEQAFAWgCAVQgCAigRAdQgRAegcATQgiAXgsACQgrADgjgVQgggRgUggQgFAMgHALQgRAdgbATQgiAYgsACIgJAAQgmAAgggSg");
	var mask_7_graphics_57 = new cjs.Graphics().p("AmdD9QgkgVgVgmQgVgmACgqQADgqAZglQAagjAogQQAngPAsAIQAsAIAfAdIAMAMQAGgNAIgMQAagkAogQQAngPAtAIQArAIAeAeQANAMAKAOQAHgRAMgRQAagkAngQQAlgPAoAGQgDgPgBgQQAAgzAigqQAigrAygLQAygKAxAZQAwAZAVAvQAUAvgPA0QgPA1gpAcQgZASgeAGQgaAFgagDQAFAVgCAWQgCAhgRAeQgRAegcASQgiAYgsACQgrACgkgUQgggSgUggQgFAMgHALQgRAegaATQgiAXgsACQgrADgkgVQgYgNgRgVIgHAOQgRAegcASQgiAYgsACIgJAAQgmAAghgSg");
	var mask_7_graphics_58 = new cjs.Graphics().p("AnlFZQgkgVgVgmQgVgmACgpQACgrAagkQAagkAogQQAbgLAcABQgFgWABgWQACgqAagkQAaglAngPQAogQAsAJQAsAIAfAdIALAMQAGgNAJgMQAagkAngQQAogQArAJQAsAIAfAdQANANAJAOQAHgSAMgRQAagkAogQQAkgPApAGQgEgOAAgQQgBgzAjgrQAigqAygLQAygLAwAaQAxAZAUAuQAVAvgPA1QgPA1gqAdQgZARgeAGQgaAGgZgEQAFAVgCAWQgDAhgRAdQgRAegbATQgiAXgsACQgsADgkgVQgggRgUggQgEALgHAMQgRAdgcATQgiAYgqACQgsACgkgUQgXgNgSgVIgHANQgRAegbATQgjAXgrACIgHAAQAGAYgCAYQgDAigRAdQgRAegbATQgjAXgrACIgIAAQgnAAghgSg");
	var mask_7_graphics_59 = new cjs.Graphics().p("AoVHHQgkgVgVglQgVgnACgpQACgqAaglQAagkAogQQALgEALgDIgCgDQgVgmACgpQADgrAagkQAagjAngQQAbgLAdABQgGgWABgWQADgrAZgkQAaglAogPQAngQAsAJQAsAIAfAdIAMAMQAGgNAIgMQAagkAogQQAmgQAtAJQArAIAfAdQANANAKAOQAHgSAMgRQAagkAngQQAlgPAoAGQgDgOgBgQQAAgzAigrQAigqAygLQAygLAxAaQAwAZAVAuQAUAvgPA1QgPA1gpAdQgZARgeAGQgaAGgagEQAFAVgCAWQgCAigRAdQgRAegcATQgiAWgsACQgrADgkgUQgggRgUggQgFALgHAMQgRAdgbASQgiAYgsACQgqACgkgUQgYgNgRgUIgHANQgRAdgcATQgiAXgsACIgHAAQAGAYgCAYQgCAigRAdQgRAegcATQgXAQgcAGQAGAKAFAMQAMAfgDAiQgCAhgSAdQgRAegbATQgiAXgsACIgGAAQgoAAgigSg");
	var mask_7_graphics_60 = new cjs.Graphics().p("AoFJJQglgUgVgmQgVgmACgqQACgqAaglQARgYAYgQIgIgDQgkgVgVglQgVgnACgpQACgqAaglQAagkAogQQALgFALgCIgCgDQgVgmACgoQADgrAagkQAagkAngQQAbgLAdABQgGgWABgWQADgrAZgkQAaglAogPQAngQAsAJQAsAIAfAdIAMAMQAGgNAIgMQAagkAogQQAmgQAtAJQArAIAfAdQANAMAKAPQAHgSAMgRQAagkAngQQAlgPAoAGQgDgPgBgPQAAgzAigrQAigqAygLQAygLAxAaQAwAZAVAuQAUAvgPA1QgPA1gpAdQgZARgeAGQgaAGgagEQAFAVgCAWQgCAigRAdQgRAegcATQgiAXgsACQgrADgkgVQgggRgUggQgFALgHAMQgRAdgbATQgiAYgsACQgqACgkgUQgYgNgRgVIgHANQgRAegcATQgiAXgsACIgHAAQAGAYgCAYQgCAhgRAdQgRAegcATQgXAQgcAGQAGAKAFAMQAMAfgDAiQgCAhgSAdQgRAegbATIgEACQAUAKARAQQAYAXANAgQAMAggDAhQgCAhgRAeQgRAegcATQgiAXgsACIgJAAQgmAAgggSg");
	var mask_7_graphics_61 = new cjs.Graphics().p("AlvKXQglgVgVgmQgUglABgpQgoABghgTQglgUgVgnQgVgmACgpQACgrAagkQARgZAYgPIgIgEQgkgUgVgmQgVgmACgpQACgrAagkQAagkAogQQALgEALgDIgCgCQgVgmACgqQADgqAagkQAaglAngPQAbgLAdAAQgGgVABgXQADgqAZglQAagkAogQQAngPAsAIQAsAIAfAeIAMAMQAGgNAIgMQAaglAogQQAmgPAtAIQArAIAfAeQANAMAKAPQAHgSAMgRQAagkAngQQAlgPAoAGQgDgPgBgQQAAgzAigqQAigrAygLQAygKAxAZQAwAZAVAvQAUAvgPA0QgPA1gpAdQgZASgeAGQgaAFgagDQAFAVgCAWQgCAhgRAeQgRAegcASQgiAYgsACQgrACgkgUQgggSgUggQgFAMgHALQgRAegbATQgiAXgsACQgqADgkgVQgYgNgRgVIgHAOQgRAegcASQgiAYgsACIgHAAQAGAYgCAYQgCAhgRAeQgRAdgcASQgXAQgcAGQAGALAFALQAMAggDAhQgCAhgSAeQgRAdgbATIgEADQAUAJARAQQAYAXANAgQALAegBAeQAOAAAOADQAsAIAfAeQAYAWANAgQAMAggDAiQgCAhgRAdQgRAegcATQgiAYgrACIgJAAQgnAAgggSg");
	var mask_7_graphics_62 = new cjs.Graphics().p("Ai2K8QglgUgVgmIgDgHQgVAHgXABQgsADgkgVQglgUgVgmQgUgmABgpQgoABghgTQglgUgVgmQgVgmACgqQACgqAaglQARgYAYgQIgIgDQgkgVgVglQgVgnACgpQACgqAagkQAagkAogQQALgFALgCIgCgDQgVgmACgpQADgrAagkQAagkAngQQAbgLAdABQgGgWABgWQADgrAZgkQAaglAogPQAngQAsAJQAsAIAfAdIAMAMQAGgNAIgMQAagkAogQQAmgQAtAJQArAIAfAdQANAMAKAPQAHgSAMgRQAagkAngQQAlgPAoAGQgDgPgBgPQAAgzAigrQAigqAygLQAygLAxAaQAwAZAVAuQAUAvgPA1QgPA1gpAdQgZARgeAGQgaAGgagEQAFAVgCAWQgCAigRAdQgRAegcATQgiAXgsACQgrADgkgVQgggRgUggQgFALgHAMQgRAdgbATQgiAYgsACQgqACgkgUQgYgNgRgVIgHANQgRAegcATQgiAXgsACIgHAAQAGAYgCAYQgCAigRAdQgRAegcATQgXAQgcAFQAGAKAFAMQAMAfgDAiQgCAhgSAdQgRAegbATIgEACQAUAKARAQQAYAXANAgQALAdgBAfQAOAAAOADQAsAIAfAdQAUASAMAZQAlgNApAHQAsAJAeAdQAYAWAMAgQANAggDAiQgCAhgRAeQgRAegbATQgiAXgrACIgJAAQgnAAgggSg");
	var mask_7_graphics_63 = new cjs.Graphics().p("AkqMvQgkgUgVgmQgVgmACgqQACgqAaglQAagkAngQQAXgJAYgCIgGgIIgDgHQgVAHgXABQgsADgkgVQglgUgVgmQgUgmABgpQgoABghgTQglgUgVgmQgVgmACgqQACgqAaglQARgYAYgQIgIgDQgkgVgVglQgVgmACgpQACgqAaglQAagkAogQQALgFALgCIgCgDQgVgmACgpQADgrAagkQAagkAngQQAbgLAdABQgGgWABgWQADgrAZgkQAaglAogPQAngQAsAJQAsAIAfAdIAMAMQAGgNAIgMQAagkAogQQAmgQAtAJQArAIAfAdQANAMAKAPQAHgSAMgRQAagkAngQQAlgPAoAGQgDgPgBgPQAAgzAigrQAigqAygLQAygLAxAaQAwAZAVAuQAUAvgPA1QgPA1gpAdQgZARgeAGQgaAGgagEQAFAVgCAWQgCAigRAdQgRAegcATQgiAXgsACQgrADgkgVQgggRgUggQgFALgHAMQgRAdgbATQgiAYgsACQgqACgkgUQgYgNgRgVIgHANQgRAegcATQgiAXgsACIgHAAQAGAYgCAYQgCAigRAdQgRAegcATQgXAQgcAGQAGAKAFAMQAMAfgDAiQgCAggSAdQgRAegbATIgEACQAUAKARAQQAYAXANAgQALAdgBAfQAOAAAOADQAsAIAfAdQAUASAMAZQAlgNApAHQAsAJAeAdQAYAWAMAgQANAggDAiQgCAhgRAeQgRAegbATQggAWgqADQAIANAGAPQAMAggDAhQgCAhgRAeQgRAegcATQgiAXgsACIgJAAQgmAAghgSg");
	var mask_7_graphics_64 = new cjs.Graphics().p("AmhOEQglgUgVgmQgVgmACgqQACgqAaglQAagkAngQQAOgGAPgDQgDgOABgQQACgqAaglQAagkAngQQAXgJAYgCIgGgIIgDgHQgVAHgXABQgsADgkgVQglgUgVgmQgUgmABgpQgoABghgTQglgUgVgmQgVgmACgqQACgqAaglQARgYAYgQIgIgDQgkgUgVglQgVgnACgpQACgqAaglQAagkAogQQALgFALgCIgCgDQgVgmACgpQADgrAagkQAagkAngQQAbgLAdABQgGgWABgWQADgrAZgkQAaglAogPQAngQAsAJQAsAIAfAdIAMAMQAGgNAIgMQAagkAogQQAmgQAtAJQArAIAfAdQANAMAKAPQAHgSAMgRQAagkAngQQAlgPAoAGQgDgPgBgPQAAgzAigrQAigqAygLQAygLAxAaQAwAZAVAuQAUAvgPA1QgPA1gpAdQgZARgeAGQgaAGgagEQAFAVgCAWQgCAigRAdQgRAegcATQgiAXgsACQgrADgkgVQgggRgUggQgFALgHAMQgRAdgbATQgiAYgsACQgqACgkgUQgYgNgRgVIgHANQgRAegcATQgiAXgsACIgHAAQAGAYgCAYQgCAigRAdQgRAegcATQgXAQgcAGQAGAKAFAMQAMAfgDAiQgCAhgSAdQgRAegbASIgEACQAUAKARAQQAYAXANAgQALAdgBAfQAOAAAOADQAsAIAfAdQAUASAMAZQAlgNApAHQAsAJAeAdQAYAWAMAgQANAggDAiQgCAhgRAeQgRAegbATQggAWgqADQAIANAGAPQAMAggDAhQgCAhgRAeQgRAegcATQgZARggAGQADARgCASQgCAhgRAeQgRAegcATQgiAXgsACIgJAAQgmAAgggSg");
	var mask_7_graphics_65 = new cjs.Graphics().p("AjjPoQglgUgVgmQgVgmACgqQACgcAMgZQgWAIgaABQgrADgkgVQglgUgVgmQgVgmACgqQACgqAaglQAagkAngQQAOgGAPgDQgDgOABgQQACgqAaglQAagkAngQQAXgJAYgCIgGgIIgDgHQgVAHgXABQgsADgkgVQglgUgVgmQgUgmABgpQgoABghgTQglgUgVgmQgVgmACgqQACgpAaglQARgYAYgQIgIgDQgkgVgVglQgVgnACgpQACgqAaglQAagkAogQQALgFALgCIgCgDQgVgmACgpQADgrAagkQAagkAngQQAbgLAdABQgGgWABgWQADgrAZgkQAaglAogPQAngQAsAJQAsAIAfAdIAMAMQAGgNAIgMQAagkAogQQAmgQAtAJQArAIAfAdQANAMAKAPQAHgSAMgRQAagkAngQQAlgPAoAGQgDgPgBgPQAAgzAigrQAigqAygLQAygLAxAaQAwAZAVAuQAUAvgPA1QgPA1gpAdQgZARgeAGQgaAGgagEQAFAVgCAWQgCAigRAdQgRAegcATQgiAXgsACQgrADgkgVQgggRgUggQgFALgHAMQgRAdgbATQgiAYgsACQgqACgkgUQgYgNgRgVIgHANQgRAegcATQgiAXgsACIgHAAQAGAYgCAYQgCAigRAdQgRAegcATQgXAQgcAGQAGAKAFAMQAMAfgDAiQgCAhgSAdQgRAegbATIgEACQAUAKARAQQAYAXANAgQALAcgBAfQAOAAAOADQAsAIAfAdQAUASAMAZQAlgNApAHQAsAJAeAdQAYAWAMAgQANAggDAiQgCAhgRAeQgRAegbATQggAWgqADQAIANAGAPQAMAggDAhQgCAhgRAeQgRAegcATQgZARggAGQADARgCASQgCAagKAXQAmgPArAJQAsAIAfAdQAYAXANAgQAMAggDAhQgCAhgRAeQgRAegcATQgiAXgrACIgJAAQgnAAgggSg");
	var mask_7_graphics_66 = new cjs.Graphics().p("AieRMQgkgUgVgmQgVgmACgqQACgeANgcIgIgEQglgUgVgmQgVgmACgqQACgcAMgZQgWAIgaABQgrADgkgVQglgUgVgmQgVgmACgqQACgqAaglQAagkAngQQAOgGAPgDQgDgOABgQQACgqAaglQAagkAngQQAXgJAYgCIgGgIIgDgHQgVAHgXABQgsADgkgVQglgUgVgmQgUgmABgpQgoABghgTQglgUgVgmQgVglACgqQACgqAaglQARgYAYgQIgIgDQgkgVgVglQgVgnACgpQACgqAaglQAagkAogQQALgFALgCIgCgDQgVgmACgpQADgrAagkQAagkAngQQAbgLAdABQgGgWABgWQADgrAZgkQAaglAogPQAngQAsAJQAsAIAfAdIAMAMQAGgNAIgMQAagkAogQQAmgQAtAJQArAIAfAdQANAMAKAPQAHgSAMgRQAagkAngQQAlgPAoAGQgDgPgBgPQAAgzAigrQAigqAygLQAygLAxAaQAwAZAVAuQAUAvgPA1QgPA1gpAdQgZARgeAGQgaAGgagEQAFAVgCAWQgCAigRAdQgRAegcATQgiAXgsACQgrADgkgVQgggRgUggQgFALgHAMQgRAdgbATQgiAYgsACQgqACgkgUQgYgNgRgVIgHANQgRAegcATQgiAXgsACIgHAAQAGAYgCAYQgCAigRAdQgRAegcATQgXAQgcAGQAGAKAFAMQAMAfgDAiQgCAhgSAdQgRAegbATIgEACQAUAKARAQQAYAXANAgQALAdgBAfQAOAAAOADQAsAIAfAdQAUARAMAZQAlgNApAHQAsAJAeAdQAYAWAMAgQANAggDAiQgCAhgRAeQgRAegbATQggAWgqADQAIANAGAPQAMAggDAhQgCAhgRAeQgRAegcATQgZARggAGQADARgCASQgCAagKAXQAmgPArAJQAsAIAfAdQAYAXANAgQAMAggDAhQgCAcgMAaQAUAKARAQQAYAXANAgQAMAggDAhQgCAhgRAeQgRAegbATQgiAXgsACIgJAAQgmAAghgSg");
	var mask_7_graphics_67 = new cjs.Graphics().p("Aj4THQgkgVgVgmQgVgmACgpQACgrAagkQAaglAngQQARgGAQgDQgJgLgIgOQgVgmACgpQACgfANgbIgIgEQglgVgVgmQgVgmACgpQACgcAMgaQgWAIgaACQgrACgkgUQglgUgVgnQgVgmACgpQACgrAagkQAaglAngQQAOgFAPgDQgDgPABgPQACgrAagkQAaglAngQQAXgJAYgBIgGgJIgDgHQgVAIgXABQgsACgkgUQglgVgVgmQgUglABgoQgoABghgTQglgUgVgnQgVgmACgpQACgrAagkQARgZAYgPIgIgEQgkgUgVgmQgVgmACgpQACgrAagkQAaglAogQQALgEALgDIgCgCQgVgmACgqQADgqAagkQAaglAngPQAbgLAdAAQgGgVABgXQADgqAZglQAagkAogQQAngPAsAIQAsAIAfAeIAMAMQAGgNAIgMQAaglAogQQAmgPAtAIQArAIAfAeQANAMAKAPQAHgSAMgRQAagkAngQQAlgPAoAGQgDgPgBgQQAAgzAigqQAigrAygLQAygKAxAZQAwAZAVAvQAUAvgPA0QgPA1gpAdQgZASgeAGQgaAFgagDQAFAVgCAWQgCAhgRAeQgRAegcASQgiAYgsACQgrACgkgUQgggSgUggQgFAMgHALQgRAegbATQgiAXgsACQgqADgkgVQgYgNgRgVIgHAOQgRAegcASQgiAYgsACIgHAAQAGAYgCAYQgCAhgRAeQgRAegcASQgXAQgcAGQAGALAFALQAMAggDAhQgCAhgSAeQgRAdgbATIgEADQAUAJARAQQAYAXANAgQALAegBAeQAOAAAOADQAsAIAfAeQAUASAMAZQAlgOApAIQAsAIAeAdQAYAXAMAgQANAfgDAhQgCAhgRAeQgRAegbATQggAXgqACQAIANAGAPQAMAggDAiQgCAhgRAeQgRAegcASQgZASggAFQADASgCARQgCAagKAYQAmgPArAIQAsAIAfAeQAYAXANAgQAMAfgDAiQgCAcgMAZQAUAKARAQQAYAXANAgQAMAggDAiQgCAhgRAeQgRAegbASQgcATgiAFQARATAKAZQAMAggDAiQgCAhgRAeQgRAegcASQgiAYgsACIgJAAQgmAAghgSg");
	var mask_7_graphics_68 = new cjs.Graphics().p("AggUXQglgUgVgnQgVgmACgpIADgUQgcAOgiACQgrACglgUQgkgVgVgmQgVgmACgpQACgrAagkQAaglAngQQARgGAQgDQgJgLgIgOQgVgmACgpQACgfANgbIgIgEQglgVgVgmQgVgmACgpQACgcAMgaQgWAIgaACQgrACgkgUQglgUgVgnQgVgmACgpQACgrAagkQAaglAngQQAOgFAPgDQgDgPABgPQACgrAagkQAaglAngQQAXgJAYgBIgGgJIgDgHQgVAIgXABQgsACgkgUQglgVgVglQgUglABgpQgoABghgTQglgUgVgnQgVgmACgpQACgrAagkQARgZAYgPIgIgEQgkgUgVgmQgVgmACgpQACgrAagkQAaglAogQQALgEALgDIgCgCQgVgmACgqQADgqAagkQAaglAngPQAbgLAdAAQgGgVABgXQADgqAZglQAagkAogQQAngPAsAIQAsAIAfAeIAMAMQAGgNAIgMQAaglAogQQAmgPAtAIQArAIAfAeQANAMAKAPQAHgSAMgRQAagkAngQQAlgPAoAGQgDgPgBgQQAAgzAigqQAigrAygLQAygKAxAZQAwAZAVAvQAUAvgPA0QgPA1gpAdQgZASgeAGQgaAFgagDQAFAVgCAWQgCAhgRAeQgRAegcASQgiAYgsACQgrACgkgUQgggSgUggQgFAMgHALQgRAegbATQgiAXgsACQgqADgkgVQgYgNgRgVIgHAOQgRAegcASQgiAYgsACIgHAAQAGAYgCAYQgCAhgRAeQgRAegcASQgXAQgcAGQAGALAFALQAMAggDAhQgCAhgSAeQgRAdgbATIgEADQAUAJARAQQAYAXANAgQALAegBAeQAOAAAOADQAsAIAfAeQAUASAMAZQAlgOApAIQAsAIAeAdQAYAXAMAgQANAggDAhQgCAggRAeQgRAegbATQggAXgqACQAIANAGAPQAMAggDAiQgCAhgRAeQgRAegcASQgZASggAFQADASgCARQgCAagKAYQAmgPArAIQAsAIAfAeQAYAXANAgQAMAfgDAiQgCAcgMAZQAUAKARAQQAYAXANAgQAMAggDAiQgCAhgRAeQgRAegbASQgcATgiAFQARATAKAZQAMAggDAiIgCAPIANgGQAmgPAsAIQAsAIAfAeQAYAXANAgQAMAggDAhQgCAhgRAeQgRAegcASQgiAYgsACIgJAAQglAAgggSg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(54).to({graphics:mask_7_graphics_54,x:197.6665,y:145.5409}).wait(1).to({graphics:mask_7_graphics_55,x:189.3082,y:154.4855}).wait(1).to({graphics:mask_7_graphics_56,x:176.0582,y:155.9605}).wait(1).to({graphics:mask_7_graphics_57,x:163.5582,y:157.7355}).wait(1).to({graphics:mask_7_graphics_58,x:156.3082,y:166.9808}).wait(1).to({graphics:mask_7_graphics_59,x:151.5582,y:177.9771}).wait(1).to({graphics:mask_7_graphics_60,x:151.5582,y:190.9855}).wait(1).to({graphics:mask_7_graphics_61,x:151.5582,y:198.7355}).wait(1).to({graphics:mask_7_graphics_62,x:151.5582,y:202.4855}).wait(1).to({graphics:mask_7_graphics_63,x:151.5582,y:213.9855}).wait(1).to({graphics:mask_7_graphics_64,x:151.5582,y:222.4855}).wait(1).to({graphics:mask_7_graphics_65,x:151.5582,y:232.4855}).wait(1).to({graphics:mask_7_graphics_66,x:151.5582,y:242.4855}).wait(1).to({graphics:mask_7_graphics_67,x:151.5582,y:254.7355}).wait(1).to({graphics:mask_7_graphics_68,x:151.5582,y:262.7355}).wait(62));

	// lady04
	this.instance_12 = new lib.CachedBmp_5();
	this.instance_12.setTransform(99.25,158.25,0.5,0.5);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(54).to({_off:false},0).wait(76));

	// pen03
	this.instance_13 = new lib.手握筆();
	this.instance_13.setTransform(416.9,317.45,1,1,0,0,0,561.1,374.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(41).to({_off:false},0).wait(1).to({x:412.9,y:344.95},0).wait(1).to({x:401.4,y:369.45},0).wait(1).to({x:381.9,y:381.95},0).wait(1).to({x:360.9,y:387.95},0).wait(1).to({x:346.9,y:403.45},0).wait(1).to({x:352.9,y:420.95},0).wait(1).to({x:367.9,y:435.45},0).wait(1).to({x:380.4,y:456.45},0).wait(1).to({x:371.9,y:475.45},0).wait(1).to({x:375.9,y:492.2},0).wait(1).to({x:377.4,y:508.2},0).wait(1).to({x:372.9,y:521.45},0).to({_off:true},1).wait(76));

	// mask03 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_41 = new cjs.Graphics().p("Ag6CIQgtgTgYgnQgYgnADgvQADgxAdgjQAcgkAvgOQAtgNArAOQAsAPAcAnQAdAoABAtQABAzgjArQgiArgzALQgOADgPAAQgdAAgegNg");
	var mask_8_graphics_42 = new cjs.Graphics().p("AhBEaQgrgOgbghQgbghgFgsQgFgsASgmQASgmAmgYQAagPAcgFQgogUgWgjQgYgnADgxQADgwAcgkQAdgkAugNQAugOArAPQArAPAdAnQAdAnAAAuQABAzgiArQgjArgyAKIgEABQAKAFALAIQAiAZARApQAQAqgIApQgIAqgeAgQgfAhgpAKQgRAFgSAAQgXAAgYgIg");
	var mask_8_graphics_43 = new cjs.Graphics().p("AhbGeQgrgOgbghQgbghgFgsQgFgsASgmQASgmAmgYQAUgNAVgFQgOgLgMgOQgbghgFgsQgFgrASgmQASgmAmgYQAagQAcgFQgogUgWgjQgYgnADgxQADgwAcgkQAdgkAtgNQAvgOArAPQArAPAdAnQAdAnAAAuQABAzgiArQgjArgyALIgEABQAKAFALAIQAiAZARApQAQAqgIAoQgIAqgeAgQgfAggoALQAhAYAQAoQAQAqgIApQgIAqgeAgQgfAhgoAKQgSAFgSAAQgXAAgYgIg");
	var mask_8_graphics_44 = new cjs.Graphics().p("AilH+QgrgOgbghQgbghgFgsQgFgsASgmQASgmAmgYQAmgYAqABIAEAAQgDgMgCgNQgFgsASgmQASgmAmgYQAUgNAVgFQgOgLgMgOQgbgggFgsQgFgsASgmQASgmAlgYQAagQAcgFQgogUgVgjQgYgnADgxQADgwAbgkQAdgkAugNQAvgOArAPQArAPAdAnQAdAnAAAuQABAzgiArQgjArgyALIgEABQAKAFALAIQAiAZARApQAQAqgIApQgIAqgeAfQgfAggoALQAhAYAQAoQAQAqgIApQgIAqgeAgQgfAhgpAKQgVAGgVgBQALAjgHAjQgIAqgdAgQgfAhgpAKQgSAFgSAAQgXAAgYgIg");
	var mask_8_graphics_45 = new cjs.Graphics().p("AkNIqQgrgOgbghQgbghgFgsQgFgsASgmQASgmAmgYQAmgYAqABQAjAAAeAPIAHgSQASgmAmgYQAmgYAqABIAEAAQgDgMgCgNQgFgsASgmQARgmAmgYQAUgMAVgFQgOgLgMgOQgbghgFgsQgFgsASgmQASgmAmgYQAagQAcgFQgogUgWgjQgYgnADgxQADgwAcgkQAdgkAugNQAvgOArAPQArAPAdAnQAdAnAAAuQABAzgiArQgjArgyALIgEABQAKAFALAIQAiAZARApQAQAqgIApQgIAqgeAgQgfAfgoALQAhAYAQAoQAQAqgIApQgIAqgeAgQgfAhgpAKQgVAGgVgBQALAjgHAjQgIAqgeAgQgfAhgpAKQgoALgqgOIgUgIQgKAfgXAZQgfAhgpAKQgSAFgSAAQgXAAgYgIg");
	var mask_8_graphics_46 = new cjs.Graphics().p("AmBJCQgogSgYgiQgeguAGg1QADgjAUgeQATgfAegRQAegSAkgDQAlgCAgAOIANAGQASghAjgWQAmgYAqABQAjAAAeAPIAHgSQASgmAlgYQAmgYAqABIAEAAQgDgMgCgNQgFgsASgmQASgmAmgXQAUgNAVgFQgOgLgMgOQgbghgFgsQgFgsASgmQASgmAmgYQAagQAcgFQgogUgWgjQgYgnADgxQADgwAcgkQAdgkAugNQAvgOArAPQArAPAdAnQAdAnAAAuQABAzgiArQgjArgyALIgEABQAKAFALAIQAiAZARApQAQAqgIApQgIAqgeAgQgfAggoALQAhAXAQAoQAQAqgIApQgIAqgeAgQgfAhgpAKQgVAGgVgBQALAjgHAjQgIAqgeAgQgfAhgpAKQgpALgqgOIgUgIQgKAfgWAZQgfAhgpAKQgpALgqgOQgOgFgMgGQgNAYgXATQgiAdgpAFIgVACQgeAAgegOg");
	var mask_8_graphics_47 = new cjs.Graphics().p("AmtKdQgpgUgWgkQgWglABgtQACgtAYgjQARgZAagQIARgKQgLgfADgjQAEgjATgeQAUgfAegRQAegSAkgDQAkgCAgAOIAOAGQASghAjgWQAlgYArABQAiAAAfAPIAHgSQARgmAmgYQAlgYArABIAEAAQgEgMgBgNQgGgrATgmQASgmAmgYQAUgNAVgFQgPgLgLgOQgbghgFgsQgGgsATgmQASgmAmgYQAZgQAdgFQgogUgXgjQgYgnADgxQADgwAdgkQAcgkAvgNQAugOArAPQAsAPAcAnQAdAnABAuQABAzgjArQgiArgzALIgEABQALAFAKAIQAjAZAQApQARAqgIApQgJAqgeAgQgeAggoALQAgAYAQAoQARAqgIAoQgJAqgeAgQgfAhgpAKQgUAGgVgBQALAjgHAjQgJAqgeAgQgfAhgpAKQgpALgqgOIgTgIQgKAfgYAZQgeAhgpAKQgpALgqgOQgNgFgMgGQgOAYgWATQgQANgRAJIACAEQAPAugPAvQgOAogjAdQgiAcgrAFIgRABQghAAgggQg");
	var mask_8_graphics_48 = new cjs.Graphics().p("AjtL+QgjgBghgRQgggRgUgdQgSgagGgfQgEgWACgVQgYgDgWgLQgpgUgWgkQgWglABgtQACgtAYgjQARgZAagQIARgKQgLgfADgjQAEgjATgeQAUgfAegRQAegSAkgDQAkgCAgAOIAOAGQASghAjgWQAlgYArABQAiAAAfAPIAHgSQARgmAmgXQAlgYArABIAEAAQgEgMgBgNQgGgsATgmQASgmAmgYQAUgNAVgFQgPgLgLgOQgbghgFgsQgGgsATgmQASgmAmgYQAZgQAdgFQgogUgXgjQgYgnADgxQADgwAdgkQAcgkAvgNQAugOArAPQAsAPAcAnQAdAnABAuQABAzgjArQgiArgzALIgEABQALAFAKAIQAjAZAQApQARAqgIApQgJAqgeAgQgeAggoALQAgAYAQAoQARAqgIApQgJAqgeAfQgfAhgpAKQgUAGgVgCQALAkgHAjQgJAqgeAgQgfAhgpAKQgpALgqgOIgTgIQgKAfgYAZQgeAhgpAKQgpALgqgOQgNgFgMgGQgOAYgWATQgQANgRAIIACAFQAJAegCAeQAOACANAEQAiAMAZAaQAaAaALAiQAKAigGAkQgGAkgWAcQgVAcghAQQgfAQghAAIgEAAg");
	var mask_8_graphics_49 = new cjs.Graphics().p("Ah5NOQgqgOgbghQgbghgFgsQgDgXAEgWIgQABQgjgBghgRQgggRgUgdQgSgagGgfQgEgWACgUQgYgEgWgLQgpgUgWgkQgWglABgtQACgtAYgjQARgZAagQIARgKQgLgfADgjQAEgjATgeQAUgfAegRQAegSAkgDQAkgCAgAOIAOAGQASghAjgVQAlgYArABQAiAAAfAPIAHgSQARgmAmgYQAlgYArABIAEAAQgEgMgBgNQgGgsATgmQASgmAmgYQAUgNAVgFQgPgLgLgOQgbghgFgsQgGgsATgmQASgmAmgYQAZgQAdgFQgogUgXgjQgYgnADgxQADgwAdgkQAcgkAvgNQAugOArAPQAsAPAcAnQAdAnABAuQABAzgjArQgiArgzALIgEABQALAFAKAIQAjAZAQApQARAqgIApQgJAqgeAgQgeAggoALQAgAYAQAoQARAqgIApQgJAqgeAgQgfAhgpAKQgUAGgVgBQALAigHAjQgJAqgeAgQgfAhgpAKQgpALgqgOIgTgIQgKAfgYAZQgeAhgpAKQgpALgqgOQgNgFgMgGQgOAYgWATQgQANgRAJIACAEQAJAegCAeQAOACANAEQAiAMAZAaQAaAaALAiQAKAigGAkIAAABIAOAAQAvAAAmAcQAjAZAQApQARAqgIApQgJAqgeAgQgfAhgoAKQgRAFgSAAQgYAAgYgIg");
	var mask_8_graphics_50 = new cjs.Graphics().p("AhROuQgqgOgbghQgbghgFgsQgGgsATgmIAEgJQgOgKgLgOQgbghgFgsQgDgXAEgWIgQABQgjgBghgRQgggRgUgdQgSgagGgfQgEgWACgUQgYgEgWgLQgpgUgWgkQgWglABgtQACgtAYgjQARgZAagQIARgKQgLgfADgjQAEgjATgeQAUgeAegRQAegSAkgDQAkgCAgAOIAOAGQASghAjgWQAlgYArABQAiAAAfAPIAHgSQARgmAmgYQAlgYArABIAEAAQgEgMgBgNQgGgsATgmQASgmAmgYQAUgNAVgFQgPgLgLgOQgbghgFgsQgGgsATgmQASgmAmgYQAZgQAdgFQgogUgXgjQgYgnADgxQADgwAdgkQAcgkAvgNQAugOArAPQAsAPAcAnQAdAnABAuQABAzgjArQgiArgzALIgEABQALAFAKAIQAjAZAQApQARAqgIApQgJAqgeAgQgeAggoALQAgAYAQAoQARAqgIApQgJAqgeAgQgfAhgpAKQgUAGgVgBQALAjgHAjQgJApgeAgQgfAhgpAKQgpALgqgOIgTgIQgKAfgYAZQgeAhgpAKQgpALgqgOQgNgFgMgGQgOAYgWATQgQANgRAJIACAEQAJAegCAeQAOACANAEQAiAMAZAaQAaAaALAiQAKAigGAkIAAABIAOAAQAvAAAmAcQAjAZAQApQARAqgIApQgFAYgMAVQAgAYAQAoQARAqgIApQgJAqgeAgQgfAhgpAKQgQAFgSAAQgYAAgYgIg");
	var mask_8_graphics_51 = new cjs.Graphics().p("AihQIQgqgOgbghQgbghgFgsQgGgsATgmQASgmAmgYIAQgJQgEgNgBgOQgGgsATgmIAEgJQgOgKgLgOQgbghgFgsQgDgXAEgWIgQABQgjgBghgRQgggRgUgdQgSgagGgfQgEgWACgUQgYgEgWgLQgpgUgWgkQgWglABgtQACgtAYgjQARgZAagQIARgKQgLgfADgiQAEgjATgeQAUgfAegRQAegSAkgDQAkgCAgAOIAOAGQASghAjgWQAlgYArABQAiAAAfAPIAHgSQARgmAmgYQAlgYArABIAEAAQgEgMgBgNQgGgsATgmQASgmAmgYQAUgNAVgFQgPgLgLgOQgbghgFgsQgGgsATgmQASgmAmgYQAZgQAdgFQgogUgXgjQgYgnADgxQADgwAdgkQAcgkAvgNQAugOArAPQAsAPAcAnQAdAnABAuQABAzgjArQgiArgzALIgEABQALAFAKAIQAjAZAQApQARAqgIApQgJAqgeAgQgeAggoALQAgAYAQAoQARAqgIApQgJAqgeAgQgfAhgpAKQgUAGgVgBQALAjgHAjQgJAqgeAgQgfAhgpAKQgpAKgqgNIgTgIQgKAegYAZQgeAhgpAKQgpALgqgOQgNgFgMgGQgOAYgWATQgQANgRAJIACAEQAJAegCAeQAOACANAEQAiAMAZAaQAaAaALAiQAKAigGAkIAAABIAOAAQAvAAAmAcQAjAZAQApQARAqgIApQgFAYgMAVQAgAYAQAoQARAqgIApQgJAqgeAgQgVAWgZAMQAMAkgHAkQgJAqgdAgQgfAhgpAKQgRAFgSAAQgYAAgYgIg");
	var mask_8_graphics_52 = new cjs.Graphics().p("Ag5ROQgqgOgbghQgbghgFgsIgBgQIgCAAQgqgOgbghQgbghgFgsQgGgsATgmQASgmAmgYIAQgJQgEgNgBgOQgGgsATgmIAEgJQgOgKgLgOQgbghgFgsQgDgXAEgWIgQABQgjgBghgRQgggRgUgdQgSgagGgfQgEgWACgUQgYgEgWgLQgpgUgWgkQgWglABgtQACgtAYgjQARgZAagPIARgKQgLgfADgjQAEgjATgeQAUgfAegRQAegSAkgDQAkgCAgAOIAOAGQASghAjgWQAlgYArABQAiAAAfAPIAHgSQARgmAmgYQAlgYArABIAEAAQgEgMgBgNQgGgsATgmQASgmAmgYQAUgNAVgFQgPgLgLgOQgbghgFgsQgGgsATgmQASgmAmgYQAZgQAdgFQgogUgXgjQgYgnADgxQADgwAdgkQAcgkAvgNQAugOArAPQAsAPAcAnQAdAnABAuQABAzgjArQgiArgzALIgEABQALAFAKAIQAjAZAQApQARAqgIApQgJAqgeAgQgeAggoALQAgAYAQAoQARAqgIApQgJAqgeAgQgfAhgpAKQgUAGgVgBQALAjgHAjQgJAqgeAgQgfAhgpAKQgpALgqgOIgTgIQgKAfgYAZQgeAhgpAJQgpALgqgOQgNgFgMgFQgOAXgWATQgQANgRAJIACAEQAJAegCAeQAOACANAEQAiAMAZAaQAaAaALAiQAKAigGAkIAAABIAOAAQAvAAAmAcQAjAZAQApQARAqgIApQgFAYgMAVQAgAYAQAoQARAqgIApQgJAqgeAgQgVAWgZAMQAHAVAAAVQAWAGAUAPQAjAZAQApQARAqgIApQgJAqgeAgQgfAhgpAKQgRAFgRAAQgYAAgYgIg");
	var mask_8_graphics_53 = new cjs.Graphics().p("AiBS+QgqgOgbghQgbghgFgsQgGgsATgmQASgmAmgYQANgIAOgGQgUgdgEglIgBgQIgCAAQgqgOgbghQgbghgFgsQgGgsATgmQASgmAmgYIAQgJQgEgNgBgOQgGgsATgmIAEgJQgOgKgLgOQgbghgFgsQgDgXAEgWIgQABQgjgBghgRQgggRgUgdQgSgagGgfQgEgWACgUQgYgEgWgLQgpgUgWgkQgWglABgsQACgtAYgjQARgZAagQIARgKQgLgfADgjQAEgjATgeQAUgfAegRQAegSAkgDQAkgCAgAOIAOAGQASghAjgWQAlgYArABQAiAAAfAPIAHgSQARgmAmgYQAlgYArABIAEAAQgEgMgBgNQgGgsATgmQASgmAmgYQAUgNAVgFQgPgLgLgOQgbghgFgsQgGgsATgmQASgmAmgYQAZgQAdgFQgogUgXgjQgYgnADgxQADgwAdgkQAcgkAvgNQAugOArAPQAsAPAcAnQAdAnABAuQABAzgjArQgiArgzALIgEABQALAFAKAIQAjAZAQApQARAqgIApQgJAqgeAgQgeAggoALQAgAYAQAoQARAqgIApQgJAqgeAgQgfAhgpAKQgUAGgVgBQALAjgHAjQgJAqgeAgQgfAhgpAKQgpALgqgOIgTgIQgKAfgYAZQgeAhgpAKQgpALgqgOQgNgFgMgGQgOAYgWATQgQANgRAJIACAEQAJAegCAdQAOACANAEQAiAMAZAaQAaAaALAiQAKAigGAkIAAABIAOAAQAvAAAmAcQAjAZAQApQARAqgIApQgFAYgMAVQAgAYAQAoQARAqgIApQgJAqgeAgQgVAWgZAMQAHAVAAAVQAWAGAUAPQAjAZAQApQARAqgIApQgJAqgeAgQgZAbgfAMQAIANAGAPQARAqgIApQgJAqgeAgQgeAhgpAKQgRAFgSAAQgYAAgYgIg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(41).to({graphics:mask_8_graphics_41,x:204.7097,y:132.3579}).wait(1).to({graphics:mask_8_graphics_42,x:202.6884,y:146.4246}).wait(1).to({graphics:mask_8_graphics_43,x:200.0884,y:159.6246}).wait(1).to({graphics:mask_8_graphics_44,x:192.6884,y:169.2246}).wait(1).to({graphics:mask_8_graphics_45,x:182.2884,y:173.6246}).wait(1).to({graphics:mask_8_graphics_46,x:172.0838,y:176.6246}).wait(1).to({graphics:mask_8_graphics_47,x:168.2242,y:185.9246}).wait(1).to({graphics:mask_8_graphics_48,x:168.2242,y:194.0274}).wait(1).to({graphics:mask_8_graphics_49,x:168.2242,y:202.8246}).wait(1).to({graphics:mask_8_graphics_50,x:168.2242,y:212.4246}).wait(1).to({graphics:mask_8_graphics_51,x:168.2242,y:221.4246}).wait(1).to({graphics:mask_8_graphics_52,x:168.2242,y:228.4246}).wait(1).to({graphics:mask_8_graphics_53,x:168.2242,y:239.6246}).wait(77));

	// lady03
	this.instance_14 = new lib.CachedBmp_6();
	this.instance_14.setTransform(128,146.85,0.5,0.5);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(41).to({_off:false},0).wait(89));

	// pen02
	this.instance_15 = new lib.手握筆();
	this.instance_15.setTransform(409,289.05,1,1,0,0,0,561.1,374.1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(27).to({_off:false},0).wait(1).to({x:426.6,y:270.25},0).wait(1).to({x:447.8,y:257.85},0).wait(1).to({x:475.4,y:252.25},0).wait(1).to({x:499.4,y:261.05},0).wait(1).to({x:522.2,y:274.65},0).wait(1).to({x:539.8,y:293.85},0).wait(1).to({x:543.8,y:317.45},0).wait(1).to({x:542.2,y:342.25},0).wait(1).to({x:537.8,y:364.25},0).wait(1).to({x:525,y:382.25},0).wait(1).to({x:506.2,y:368.25},0).wait(1).to({x:483.8,y:354.65},0).wait(1).to({x:465.8,y:342.25},0).to({_off:true},1).wait(89));

	// mask02 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_27 = new cjs.Graphics().p("Ag+CHQgigQgWgcQgRgWgHgcQgIgbACgbQAEghARgeQARgdAcgSQAbgTAigFQAhgFAgAKQAfAKAaAWQAZAXANAfQANAhgDAkQgDAlgUAfQgTAeggASQghATgjABIgHAAQgfAAgfgOg");
	var mask_9_graphics_28 = new cjs.Graphics().p("AhiEKQgigQgWgcQgRgWgHgcQgIgbACgcQAEghARgeQARgdAcgSQAbgRAhgFQgNgLgLgOQgRgWgHgcQgIgcADgbQADghARgdQASgdAbgTQAcgSAggFQAigFAfAKQAgAJAZAXQAZAXANAeQAOAhgEAmQgDAlgTAeQgUAeggATQgYANgaAEIAFAEQAZAXANAfQANAhgDAlQgDAlgUAfQgTAeggASQghATgiABIgGABQghAAgfgPg");
	var mask_9_graphics_29 = new cjs.Graphics().p("AjSFDQgigQgWgdQgRgWgHgbQgIgcACgcQAEghARgdQARgdAcgTQAbgSAhgFQgOgLgKgOQgRgVgHgbQgIgcADgcQADggARgeQASgdAbgSQAcgTAhgFQAigEAfAJQARAFAPAKQAEgmAXghQAaglAogQQAngPAsAIQAsAIAfAeQAYAXANAgQAMAggDAhQgCAhgRAeQgRAegcASQgiAYgrACQgsACgkgUIgEgDQgEAkgSAcQgUAfgfASQgYAOgaAEIAFAFQAZAXANAeQAMAigDAlQgCAlgUAeQgTAeggATQghASgjACIgHAAQggAAgfgOg");
	var mask_9_graphics_30 = new cjs.Graphics().p("AlRFtQgigQgWgcQgRgWgIgcQgIgbADgcQADghASgeQARgdAbgSQAbgSAhgGQgNgKgKgOQgRgWgIgcQgIgbADgbQADghASgdQARgdAcgTQAbgSAigFQAhgFAgAKQARAFAPAJQAEglAYgiQAagkAngQQAngQAsAJQAsAIAfAdIAEAEQAEgjAXggQAagkAngQQAogQAsAJQAsAIAfAdQAYAXAMAgQAMAggCAhQgDAhgRAeQgRAegbATQgjAXgrACQgsADgkgVQgTgLgPgPQgEAdgPAaQgRAegbATQgiAWgsACQgqADglgUIgEgCQgDAjgTAdQgTAeggATQgZAOgaAEIAFAEQAaAXAMAfQAOAhgDAlQgEAlgTAfQgTAeghASQggATgkABIgGAAQghAAgegOg");
	var mask_9_graphics_31 = new cjs.Graphics().p("AnTFwQgigQgWgcQgRgWgIgcQgIgbADgcQADghASgeQARgdAbgSQAbgTAhgFQgNgLgKgNQgRgWgIgcQgIgbADgbQADghASgdQARgdAcgTQAbgSAigFQAhgFAgAKQARAFAPAJQAEglAYgiQAagkAngQQAogQAsAJQAsAIAfAdIAEAEQADgjAXggQAagkAngQQAogQAsAJQAsAIAfAdQAPAPAKASQAFgKAHgJQAWgdAggQQApgUAuAGQAkAGAfAWQAeAXAQAhQAQAhgBAmQgBAmgTAgQgUAkgkAVQgeARgjABQgkACgfgNQgfgOgXgaQgKgLgHgMIgBACQgRAegbATQgjAXgrACQgsADgkgVQgTgLgPgPQgEAdgPAaQgRAegaATQgiAWgsACQgrADglgUIgEgCQgDAjgTAdQgTAeggATQgZAOgaAEIAFAEQAaAXAMAfQAOAhgDAlQgEAlgTAfQgTAeghASQggATgkABIgGAAQghAAgegOg");
	var mask_9_graphics_32 = new cjs.Graphics().p("ApGFwQgigQgWgcQgRgWgIgcQgIgbADgcQADghASgeQARgdAbgSQAbgTAhgFQgNgLgKgNQgRgWgIgcQgIgbADgbQADghASgdQARgdAcgTQAbgSAigFQAhgFAgAKQARAFAPAJQAEglAYgiQAagkAngQQAogQAsAJQAsAIAfAdIAEAEQAEgjAXggQAagkAngQQAngQAsAJQAsAIAfAdQAPAPAKASQAFgKAHgJQAWgdAggQQApgUAuAGQAkAGAfAWQAeAXAQAhQANAbACAfIAMgGQAmgUAtAEQAtAFAhAaQAiAbAPArQAOAqgKAqQgKAogeAeQgfAdgsAJQgsAKgogQQgogPgbgkQgagkgDgrIgHAFQgeARgjABQgkACgfgNQgfgOgXgaQgKgLgHgMIgBACQgRAegbATQgjAXgrACQgrADgkgVQgTgLgPgPQgEAdgPAaQgRAegbATQgiAWgsACQgrADglgUIgEgCQgDAjgTAdQgTAeggATQgZAOgaAEIAFAEQAaAXAMAfQAOAhgDAlQgEAlgTAfQgTAeghASQggATgkABIgGAAQghAAgegOg");
	var mask_9_graphics_33 = new cjs.Graphics().p("AqsFwQgigQgWgcQgRgWgIgcQgIgbADgcQADghASgeQARgdAbgSQAbgTAigFQgOgLgKgNQgRgWgIgcQgIgbADgbQADghASgdQARgdAcgTQAbgSAigFQAhgFAgAKQARAFAPAJQAEglAYgiQAagkAngQQAogQAsAJQAsAIAfAdIAEAEQAFgjAWggQAagkAngQQAogQAsAJQArAIAfAdQAPAPALASQAFgKAGgJQAWgdAggQQApgUAuAGQAkAGAfAWQAeAXAQAhQAOAbABAfIAMgGQAmgUAtAEQAtAFAhAaQAiAbAPArQALAggDAfQAngPArAIQAsAJAfAdQAYAXANAgQAMAfgDAhQgCAhgRAeQgRAegcATQgiAXgsACQgrADglgVQgkgUgVgmQgVgmACgqIABgJQgMAEgNADQgsAKgogQQgogPgbgkQgagkgDgrIgHAFQgeARgjABQgkACgfgNQgfgOgXgaQgJgLgHgMIgCACQgRAegbATQgiAXgrACQgsADgkgVQgTgLgPgPQgEAdgPAaQgRAegbATQgiAWgsACQgrADglgUIgDgCQgEAjgTAdQgTAeggATQgZAOgaAEIAFAEQAaAXAMAfQAOAhgDAlQgEAlgTAfQgTAeghASQggATgkABIgGAAQghAAgegOg");
	var mask_9_graphics_34 = new cjs.Graphics().p("AJfFzQgkgUgVgmQgVgmACgqQABgaALgYQgbgEgYgNQgkgUgWgmQgVgmACgqIABgJQgMAEgNADQgsAKgogQQgogPgagkQgbgkgCgrIgIAFQgeARgjABQgjACgfgNQgggOgXgaQgJgLgHgMIgBACQgQAegcATQgiAXgsACQgrADgkgVQgTgLgPgPQgEAcgPAbQgRAegcATQgiAXgrACQgsACgkgUIgEgCQgDAjgTAdQgUAeggATQgYANgaAFIAFAEQAZAXANAfQANAhgDAlQgDAlgUAfQgTAeggASQghATgjABQgkACgigQQgigQgWgcQgRgWgHgcQgIgbACgcQAEghARgeQARgdAcgSQAbgTAhgFQgNgLgLgNQgRgWgHgcQgIgbADgbQADghARgdQASgdAbgTQAcgSAhgFQAigFAfAKQASAFAPAJQAEgmAXghQAagkAogQQAngQAsAJQAsAIAfAdIAEAEQAFgjAWggQAagkAogQQAngQAsAJQAsAIAfAdQAPAPAKASQAFgKAHgJQAVgdAggQQApgUAuAGQAlAGAeAWQAfAXAQAhQANAbACAfIALgGQAmgUAtAEQAtAFAiAaQAiAbAOArQALAggDAfQAngPAsAIQArAJAfAdQAZAXAMAgQAMAfgCAhQgCAYgKAXIAGABQAsAIAfAdQAYAXAMAgQAMAggCAhQgDAigRAdQgRAegbATQgiAXgsACIgJAAQgmAAghgSg");
	var mask_9_graphics_35 = new cjs.Graphics().p("AJkHwQgkgUgVgmQgWgmACgqQADgqAZglQAPgVAUgOQghgUgUgkQgVgmACgqQABgaALgYQgbgEgYgNQgkgUgWglQgVgmACgqIABgJQgMAEgNADQgsAKgogQQgogPgaglQgbgkgCgrIgIAFQgeARgjABQgjACgfgNQgggOgXgaQgJgLgGgMIgBACQgRAegcATQgiAXgsACQgrADgkgVQgTgLgPgPQgEAcgPAbQgRAegcATQgiAXgrACQgsADgkgVIgEgCQgDAkgTAdQgUAeggATQgYANgaAFIAFAEQAZAWANAfQANAhgDAlQgDAlgUAfQgTAeggASQghATgjABQgkACgigQQgigQgWgcQgRgWgHgcQgIgbACgcQAEghARgeQARgcAcgSQAbgTAhgFQgNgLgLgNQgRgWgHgcQgIgcADgbQADghARgdQASgdAbgTQAcgSAhgFQAigFAfAKQASAFAPAJQAEgmAXghQAagkAogQQAngQAsAJQAsAIAfAdIAEAEQAFgjAWggQAagkAogQQAngQAsAJQAsAIAfAdQAPAPALASQAEgKAHgJQAVgdAggQQApgUAuAGQAlAGAeAWQAfAXAQAhQANAbACAfIALgGQAmgUAtAEQAtAFAiAaQAiAbAOArQALAggDAfQAngPAsAIQArAJAfAdQAZAXAMAgQAMAggCAhQgCAYgKAXIAGABQAsAIAfAcQAYAXAMAgQAMAggCAhQgDAigRAdQgQAdgaASQAOAIALAMQAZAXAMAgQAMAggCAhQgDAhgRAeQgRAegbATQgiAXgsACIgKAAQgmAAgggSg");
	var mask_9_graphics_36 = new cjs.Graphics().p("AJBJjQgkgUgVgnQgVgmACgpQACgrAagkQATgbAbgQQgMgMgIgQQgWgmACgpQADgrAZgkQAPgWAUgOQghgUgUgkQgVgmACgoQABgbALgXQgbgEgYgNQgkgUgWgnQgVgmACgqIABgIQgMAEgNADQgsAJgogPQgogQgagkQgbglgCgqIgIAEQgeARgjACQgjACgfgOQgggNgXgbQgJgLgGgMIgBADQgRAegcASQgiAYgsACQgrACgkgUQgTgLgPgQQgEAdgPAbQgRAegcASQgiAYgrACQgsACgkgUIgEgDQgDAkgTAdQgUAfggASQgYAOgaAEIAFAFQAZAXANAeQANAigDAkQgDAlgUAeQgTAeggATQghASgjACQgkABgigPQgigQgWgdQgRgWgHgbQgIgcACgbQAEghARgdQARgdAcgTQAbgSAhgFQgNgLgLgOQgRgWgHgbQgIgcADgcQADggARgeQASgdAbgSQAcgTAhgFQAigEAfAJQASAFAPAKQAEgmAXghQAaglAogQQAngPAsAIQAsAIAfAeIAEAEQAFgkAWgfQAaglAogQQAngPAsAIQAsAIAfAeQAPAOALASQAEgKAHgIQAVgdAggQQApgUAuAGQAlAFAeAXQAfAWAQAhQANAcACAfIALgHQAmgTAtAEQAtAEAiAbQAiAaAOArQALAggDAgQAngPAsAIQArAIAfAdQAZAXAMAgQAMAggCAhQgCAZgKAWIAGABQAsAIAfAeQAYAXAMAgQAMAggCAgQgDAhgRAeQgQAcgaATQAOAIALALQAZAXAMAgQAMAggCAhQgDAigRAdQgRAegbATIgJAGQASAUAKAbQAMAggCAhQgDAhgRAeQgRAegbASQgiAYgsACIgKAAQgmAAgggSg");
	var mask_9_graphics_37 = new cjs.Graphics().p("AIjLbQgkgUgVgnQgWgmACgpQADgrAZgkQAVgdAdgQQgRgQgLgVQgVgmACgpQACgrAagkQATgbAbgQQgMgMgIgQQgWgmACgpQADgrAZgkQAPgWAUgOQghgTgUgkQgVgmACgpQABgbALgXQgbgEgYgNQgkgUgWgnQgVgmACgqIABgIQgMAEgNADQgsAJgogPQgogQgagkQgbglgCgqIgIAEQgeARgjACQgjACgfgOQgggNgXgbQgJgLgGgMIgBADQgRAegcASQgiAYgsACQgrACgkgUQgTgLgPgQQgEAdgPAbQgRAegcASQgiAYgrACQgsACgkgUIgEgDQgDAkgTAdQgUAfggASQgYAOgaAEIAFAFQAZAXANAeQANAigDAlQgDAlgUAeQgTAeggATQghARgjACQgkABgigPQgigPgWgdQgRgWgHgbQgIgcACgcQAEghARgdQARgdAcgTQAbgSAhgFQgNgLgLgOQgRgWgHgbQgIgcADgcQADggARgeQASgdAbgSQAcgTAhgFQAigEAfAJQASAFAPAKQAEgmAXghQAaglAogQQAngPAsAIQAsAIAfAeIAEAEQAFgkAWgfQAaglAogQQAngPAsAIQAsAIAfAeQAPAOALASQAEgKAHgIQAVgdAggQQApgUAuAGQAlAFAeAXQAfAWAQAhQANAcACAfIALgHQAmgTAtAEQAtAEAiAbQAiAaAOArQALAggDAgQAngPAsAIQArAIAfAdQAZAXAMAgQAMAggCAhQgCAZgKAWIAGABQAsAIAfAeQAYAXAMAgQAMAggCAhQgDAhgRAeQgQAcgaASQAOAIALALQAZAXAMAgQAMAggCAhQgDAigRAdQgRAegbATIgJAGQASAUAKAbQAMAggCAhQgDAhgRAeQgRAegbASIgNAIIAAAAQAZAXAMAgQAMAggCAhQgDAigRAdQgRAegbATQgiAYgsACIgKAAQgmAAgggSg");
	var mask_9_graphics_38 = new cjs.Graphics().p("AGZLvQgngEghgYQghgYgPgkQgJgWgDgWQgDgVAEgWQAFgfASgbQATgbAbgRQAbgQAggEQAggEAfAJQAcAJAWATQANgNAQgIQgRgQgLgVQgVgmACgpQACgrAagkQATgbAbgQQgMgMgIgQQgWgmACgpQADgrAZgkQAPgWAUgOQghgTgUgkQgVgmACgpQABgbALgXQgbgEgYgNQgkgUgWgnQgVgmACgqIABgIQgMAEgNADQgsAJgogPQgogQgagkQgbglgCgqIgIAEQgeARgjACQgjACgfgOQgggNgXgbQgJgLgGgMIgBADQgRAegcASQgiAYgsACQgrACgkgUQgTgLgPgQQgEAdgPAbQgRAegcASQgiAYgrACQgsACgkgUIgEgDQgDAkgTAdQgUAfggASQgYAOgaAEIAFAFQAZAXANAeQANAigDAlQgDAlgUAeQgTAeggATQghARgjACQgkABgigOQgigQgWgdQgRgWgHgbQgIgcACgcQAEghARgdQARgdAcgTQAbgSAhgFQgNgLgLgOQgRgWgHgbQgIgcADgcQADggARgeQASgdAbgSQAcgTAhgFQAigEAfAJQASAFAPAKQAEgmAXghQAaglAogQQAngPAsAIQAsAIAfAeIAEAEQAFgkAWgfQAaglAogQQAngPAsAIQAsAIAfAeQAPAOALASQAEgKAHgIQAVgdAggQQApgUAuAGQAlAFAeAXQAfAWAQAhQANAcACAfIALgHQAmgTAtAEQAtAEAiAbQAiAaAOArQALAggDAgQAngPAsAIQArAIAfAdQAZAXAMAgQAMAggCAhQgCAZgKAWIAGABQAsAIAfAeQAYAXAMAgQAMAggCAhQgDAhgRAeQgQAcgaASQAOAIALALQAZAXAMAgQAMAggCAhQgDAigRAdQgRAegbATIgJAGQASAUAKAbQAMAggCAhQgDAhgRAeQgRAegbASIgNAIIAAAAQAZAXAMAgQAMAggCAhQgDAigRAdQgRAegbATQgiAYgsACQgsACgkgUQgLgHgKgIQgSAPgWALQgeANggAAIgPgBg");
	var mask_9_graphics_39 = new cjs.Graphics().p("AGZLvQgngEghgYQghgYgPgkQgJgWgDgWQgCgOABgOQgeASglACQgsACgkgUQglgUgVgnQgVgmACgpQADgrAZgkQAagkAogQQAngQAsAIQAsAJAfAdQAYAWANAgQAMAfgDAhQAagPAegDQAggEAfAJQAcAJAWATQANgNAQgIQgRgQgLgVQgVgmACgpQACgrAagkQATgbAbgQQgMgMgIgQQgWgmACgpQADgrAZgkQAPgWAUgOQghgTgUgkQgVgmACgpQABgbALgXQgbgEgYgNQgkgUgWgnQgVgmACgqIABgIQgMAEgNADQgsAJgogPQgogQgagkQgbglgCgqIgIAEQgeARgjACQgjACgfgOQgggNgXgbQgJgLgGgMIgBADQgRAegcASQgiAYgsACQgrACgkgUQgTgLgPgQQgEAdgPAbQgRAegcASQgiAYgrACQgsACgkgUIgEgDQgDAkgTAdQgUAfggASQgYAOgaAEIAFAFQAZAXANAeQANAigDAlQgDAlgUAeQgTAeggATQghARgjACQgkABgigOQgigQgWgdQgRgWgHgbQgIgcACgcQAEghARgdQARgdAcgTQAbgSAhgFQgNgLgLgOQgRgWgHgbQgIgcADgcQADggARgeQASgdAbgSQAcgTAhgFQAigEAfAJQASAFAPAKQAEgmAXghQAaglAogQQAngPAsAIQAsAIAfAeIAEAEQAFgkAWgfQAaglAogQQAngPAsAIQAsAIAfAeQAPAOALASQAEgKAHgIQAVgdAggQQApgUAuAGQAlAFAeAXQAfAWAQAhQANAcACAfIALgHQAmgTAtAEQAtAEAiAbQAiAaAOArQALAggDAgQAngPAsAIQArAIAfAdQAZAXAMAgQAMAggCAhQgCAZgKAWIAGABQAsAIAfAeQAYAXAMAgQAMAggCAhQgDAhgRAeQgQAcgaASQAOAIALALQAZAXAMAgQAMAggCAhQgDAigRAdQgRAegbATIgJAGQASAUAKAbQAMAggCAhQgDAhgRAeQgRAegbASIgNAIIAAAAQAZAXAMAgQAMAggCAhQgDAigRAdQgRAegbATQgiAYgsACQgsACgkgUQgLgHgKgIQgSAPgWALQgeANggAAIgPgBg");
	var mask_9_graphics_40 = new cjs.Graphics().p("AGZLvQgngEghgYQghgYgPgkQgJgWgDgWQgCgOABgOQgeASglACQgsACgkgUQglgUgVgnQgVgmACgpIABgFQgXAJgbACQgqACglgUQgkgVgVgmQgVgmACgpQADgrAZgkQAagkAogQQAngQArAIQAsAJAfAdQAYAXANAgQAMAggDAhIAAAAIABAAQAngQAsAIQAsAJAfAdQAYAWANAgQAMAfgDAhQAagPAegDQAggEAfAJQAcAJAWATQANgNAQgIQgRgQgLgVQgVgmACgpQACgrAagkQATgbAbgQQgMgMgIgQQgWgmACgpQADgrAZgkQAPgWAUgOQghgTgUgkQgVgmACgpQABgbALgXQgbgEgYgNQgkgUgWgnQgVgmACgqIABgIQgMAEgNADQgsAJgogPQgogQgagkQgbglgCgqIgIAEQgeARgjACQgjACgfgOQgggNgXgbQgJgLgGgMIgBADQgRAegcASQgiAYgsACQgrACgkgUQgTgLgPgQQgEAdgPAbQgRAegcASQgiAYgrACQgsACgkgUIgEgDQgDAkgTAdQgUAfggASQgYAOgaAEIAFAFQAZAXANAeQANAigDAlQgDAlgUAeQgTAeggATQghARgjACQgkABgigOQgigQgWgdQgRgWgHgbQgIgcACgcQAEghARgdQARgdAcgTQAbgSAhgFQgNgLgLgOQgRgWgHgbQgIgcADgcQADggARgeQASgdAbgSQAcgTAhgFQAigEAfAJQASAFAPAKQAEgmAXghQAaglAogQQAngPAsAIQAsAIAfAeIAEAEQAFgkAWgfQAaglAogQQAngPAsAIQAsAIAfAeQAPAOALASQAEgKAHgIQAVgdAggQQApgUAuAGQAlAFAeAXQAfAWAQAhQANAcACAfIALgHQAmgTAtAEQAtAEAiAbQAiAaAOArQALAggDAgQAngPAsAIQArAIAfAdQAZAXAMAgQAMAggCAhQgCAZgKAWIAGABQAsAIAfAeQAYAXAMAgQAMAggCAhQgDAhgRAeQgQAcgaASQAOAIALALQAZAXAMAgQAMAggCAhQgDAigRAdQgRAegbATIgJAGQASAUAKAbQAMAggCAhQgDAhgRAeQgRAegbASIgNAIIAAAAQAZAXAMAgQAMAggCAhQgDAigRAdQgRAegbATQgiAYgsACQgsACgkgUQgLgHgKgIQgSAPgWALQgeANggAAIgPgBg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(27).to({graphics:mask_9_graphics_27,x:192.8975,y:131.0704}).wait(1).to({graphics:mask_9_graphics_28,x:196.4552,y:117.9593}).wait(1).to({graphics:mask_9_graphics_29,x:207.6918,y:112.3311}).wait(1).to({graphics:mask_9_graphics_30,x:220.4418,y:108.0811}).wait(1).to({graphics:mask_9_graphics_31,x:233.4482,y:107.7874}).wait(1).to({graphics:mask_9_graphics_32,x:244.9407,y:107.7874}).wait(1).to({graphics:mask_9_graphics_33,x:255.1168,y:107.7874}).wait(1).to({graphics:mask_9_graphics_34,x:260.8668,y:108.4944}).wait(1).to({graphics:mask_9_graphics_35,x:261.3668,y:120.9944}).wait(1).to({graphics:mask_9_graphics_36,x:261.3668,y:132.4444}).wait(1).to({graphics:mask_9_graphics_37,x:261.3668,y:144.4444}).wait(1).to({graphics:mask_9_graphics_38,x:261.3668,y:144.7448}).wait(1).to({graphics:mask_9_graphics_39,x:261.3668,y:144.7448}).wait(1).to({graphics:mask_9_graphics_40,x:261.3668,y:144.7448}).wait(90));

	// lady02
	this.instance_16 = new lib.CachedBmp_7();
	this.instance_16.setTransform(195.3,77.3,0.5,0.5);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(27).to({_off:false},0).wait(103));

	// pen01
	this.instance_17 = new lib.手握筆();
	this.instance_17.setTransform(312.2,384.6,1,1,0,0,0,561.1,374.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({x:303.2,y:372.1},0).wait(1).to({x:292.7,y:351.1},0).wait(1).to({x:287.7,y:327.1},0).wait(1).to({x:289.2,y:303.6},0).wait(1).to({x:298.7,y:284.1},0).wait(1).to({x:315.2,y:270.1},0).wait(1).to({x:336.7,y:264.1},0).wait(1).to({x:358.2,y:264.6},0).wait(1).to({x:379.2,y:271.6},0).wait(1).to({x:395.2,y:285.6},0).wait(1).to({x:410.2,y:302.1},0).wait(1).to({x:422.7,y:319.6},0).wait(1).to({x:436.2,y:338.1},0).wait(1).to({x:449.2,y:355.1},0).wait(1).to({x:462.2,y:374.1},0).wait(1).to({x:475.7,y:393.6},0).wait(1).to({x:488.65,y:410.6},0).wait(1).to({x:506.15,y:428.1},0).wait(1).to({x:525.65,y:445.6},0).wait(1).to({x:546.15,y:462.6},0).wait(1).to({x:566.65,y:473.1},0).wait(1).to({x:589.15,y:470.1},0).wait(1).to({x:592.15,y:448.1},0).wait(1).to({x:580.15,y:425.6},0).wait(1).to({x:564.65,y:407.1},0).wait(1).to({x:549.15,y:389.1},0).to({_off:true},1).wait(103));

	// mask01 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_0 = new cjs.Graphics().p("Ag/CGQghgQgWgcQgjgvAGg5QADggARgeQASgdAbgSQAcgTAigFQAggEAgAJQAgAKAZAXQAZAXANAeQANAigDAkQgEAlgTAeQgUAeggATQggASgkABIgFAAQggAAgggPg");
	var mask_10_graphics_1 = new cjs.Graphics().p("Ag5CIQgsgTgZgmQgYgmADgvQACgwAbgjQAggrA5gMQA4gLAvAaQAnAWAUAsQAVArgHArQgHAtghAiQghAjgsAJQgOACgPAAQgcAAgegMg");
	var mask_10_graphics_2 = new cjs.Graphics().p("AALDrQgrgTgZgmQgYgmADgwQABgWAGgTQgigBgigSQgvgagUguQgQgmAHgrQAIgsAbgfQAcgfAqgNQApgMApALQAvANAgAsQAfAsgCAyQgBAWgHAUQAmgBAhATQAnAWAUArQAVArgHAsQgHAtghAiQghAjgsAJQgOADgOAAQgeAAgegNg");
	var mask_10_graphics_3 = new cjs.Graphics().p("AAyFgQgsgSgXgmQgYgmACgwQABgWAGgUQgigBghgSQgwgagTguQgQgnAHgqQAHgnAXgdQglgJgcgbQgmgjgHg0QgHgxAbguQAbgvAvgSQAygTA2ATQA2AUAZAuQAaAugLA4QgHAlgUAaIAAAAQAxAOAfArQAgAsgDAxQgBAWgHAUQAmAAAhATQAnAWAVArQAUArgHAtQgHAsghAjQghAigsAJQgOADgOAAQgeAAgegNg");
	var mask_10_graphics_4 = new cjs.Graphics().p("ABKHbQgsgSgYgmQgXgmACgwQABgWAGgUQgigBghgSQgwgagTguQgQgnAHgrQAHgnAXgeQglgJgcgaQgmgigHg0QgHgxAbguQALgTAPgOQgjgNgYgbQgjgngBg5QgCg4AigpQAhgpA4gKQA4gKAtAaQAuAaASA2QATA1gTAxQgLAhgYAXQAyATAZAtQAaAugLA4QgHAlgUAaIAAAAQAxANAfArQAgAsgDAyQAAAWgIAUQAmAAAhATQAnAWAVArQAUArgHAtQgHAsghAjQghAigsAJQgOADgOAAQgeAAgegNg");
	var mask_10_graphics_5 = new cjs.Graphics().p("ABKJHQgsgTgYgmQgXgmACgwQABgWAGgTQgigBghgSQgwgagTgvQgQgmAHgrQAHgoAXgdQglgJgcgaQgmgkgHgzQgHgxAbguQALgSAPgPQgjgMgYgbQgjgngBg5QgCg5AigpQAVgZAegOIgKgRQgOgcgBgeQgCgfALgdQALgcAUgWQAogqA+gDQA/gCApAmQAeAaANAmQANAngIAmQgIAmgbAeQgUAYgaANQAJAPAGARQATA2gTAxQgLAhgYAWQAyAUAZAsQAaAugLA4QgHAkgUAbIAAAAQAxANAfAsQAgAsgDAyQAAAWgIAUQAmAAAhASQAnAWAVAsQAUArgHAsQgHAtghAiQghAjgsAJQgOADgOAAQgeAAgegNg");
	var mask_10_graphics_6 = new cjs.Graphics().p("ABKKgQgsgSgYgmQgXgmACgwQABgWAGgUQgigBghgSQgwgagTguQgQgnAHgrQAHgnAXgdQglgJgcgbQgmgjgHg0QgHgxAbguQALgTAPgNQgjgMgYgcQgjgngBg5QgCg4AigpQAVgaAegNIgKgSQgOgcgBgeQgCgeALgdQALgdAUgWQAogpA9gDIgCgTQgEg0AbgpQAVggAjgSQAjgTAmACQAxACAoAhQAoAiALAvQALAwgXAwQgWAvgrAWQgcAPggABQAGAdgGAdQgIAmgbAfQgUAXgaANQAJAPAGASQATA1gTAxQgLAhgYAXQAyAUAZArQAaAugLA4QgHAlgUAaIAAAAQAxAOAfArQAgAsgDAyQAAAWgIAUQAmAAAhATQAnAWAVArQAUArgHAtQgHAsghAjQghAigsAJQgOADgOAAQgeAAgegNg");
	var mask_10_graphics_7 = new cjs.Graphics().p("AAKLHQgrgSgYgmQgYgmACgwQABgWAGgUQgigBghgSQgwgagTguQgQgnAHgrQAHgnAXgdQglgJgcgbQgmgjgHg0QgHgxAbguQALgTAPgOQgjgMgYgbQgjgngBg5QgCg4AigpQAVgaAegNIgKgSQgOgcgBgeQgCgeALgdQALgdAUgWQAogpA9gDIgCgTQgEg0AbgpQAVggAjgSQAkgTAlACQAdABAZAMQAHgTANgQQAdgmAygNQAxgNAtASQAsASAbAsQAaArgFAwQgEAwgjAmQgiAlgwAJQgsAIgrgTIgDAGQgWAvgrAWQgcAPggABQAGAdgGAdQgIAmgaAfQgUAXgbANQAKAPAGASQATA1gTAxQgMAhgYAWQAzAUAZAsQAZAugKA4QgHAlgUAaIAAAAQAwAOAfArQAgAsgDAyQAAAWgIAUQAmAAAhATQAnAWAVArQAUArgHAtQgHAsghAjQghAigsAJQgOADgOAAQgeAAgegNg");
	var mask_10_graphics_8 = new cjs.Graphics().p("AhhLWQgsgSgYgmQgYgmACgwQABgWAGgUQgigBghgSQgwgagTguQgQgnAHgrQAGgnAYgdQgmgJgbgbQgmgjgHg0QgHgxAbguQALgTAOgOQgigMgYgcQgjgmgBg5QgCg4AigpQAVgaAegNIgKgSQgOgcgBgeQgCgeALgdQALgdAUgWQAngpA+gDIgCgTQgEg0AbgpQAVggAjgSQAkgTAmACQAcABAaAMQAHgTANgQQAcgmAygNQAxgNAtASQAVAJASAOQAQgWAZgQQApgbAvACQAvACAmAfQAmAfANAtQANAsgRAvQgRAugnAaQgnAbgygCQgygCglgdIgDgCIgMAPQgiAlgwAJQgsAIgrgTIgDAGQgWAvgqAWQgdAPgfABQAGAdgGAdQgIAmgbAfQgUAXgbANQAJAPAHASQATA1gTAxQgMAhgZAWQA0AUAZAsQAaAugLA4QgIAlgUAaIABAAQAxAOAfArQAgAsgDAyQgBAWgHAUQAlAAAhATQAnAWAVArQAUArgHAtQgHAsghAjQghAigrAJQgOADgOAAQgeAAgegNg");
	var mask_10_graphics_9 = new cjs.Graphics().p("AjNLWQgsgSgYgmQgYgmACgwQABgWAGgUQgigBghgSQgwgagTguQgQgnAHgrQAHgnAXgdQglgJgcgbQgmgjgHg0QgHgxAbguQALgTAPgOQgjgMgYgcQgjgmgBg5QgCg4AigpQAVgaAegNIgKgSQgOgcgBgeQgCgeALgdQALgdAUgWQAngpA+gDIgCgTQgEg0AbgpQAVggAjgSQAkgTAmACQAcABAaAMQAHgTANgQQAdgmAygNQAxgNAsASQAVAJASAOQAQgWAZgQQApgbAvACQAvACAmAfIAPAOQAJgJAKgIQAegXAkgFQAxgIAuAZQAvAaATAtQATAugNAzQgOAzgnAdQgnAeg1AAQg1gBgmgfQgIgGgHgIQgLAMgOAJQgnAbgygCQgygCglgdIgCgCIgNAPQgiAlgwAJQgrAIgrgTIgDAGQgWAvgrAWQgdAPgfABQAGAdgGAdQgIAmgbAfQgUAXgbANQAJAPAHASQATA1gTAxQgMAhgYAWQAzAUAZAsQAaAugLA4QgHAlgUAaIAAAAQAxAOAfArQAgAsgDAyQgBAWgHAUQAmAAAhATQAnAWAVArQATArgGAtQgHAsghAjQghAigsAJQgOADgOAAQgeAAgegNg");
	var mask_10_graphics_10 = new cjs.Graphics().p("AklLWQgsgSgZgmQgYgmADgwQABgWAGgUQgjgBghgSQgvgagUguQgQgnAHgrQAHgnAXgdQglgJgbgbQgmgjgHg0QgHgxAbguQALgTAOgOQgigMgZgcQgjgmgBg5QgBg4AhgpQAVgaAegNIgKgSQgNgcgCgeQgBgeAKgdQALgdAVgWQAngpA+gDIgDgTQgEg0AbgpQAVggAkgSQAjgTAnACQAcABAZAMQAIgTAMgQQAegmAxgNQAygNAsASQAWAJARAOQAPgWAZgQQAqgbAvACQAuACAnAfIAPAOQAIgJAKgIQAfgXAkgFQAxgIAuAZQAuAaATAtQAFALADAMIAKgCQA4gJAtAcQAtAcARA3QARA2gVAxQgRAqgoAZQgtAcg4gIQg5gJgigoQgYgagHgiQgRADgSAAQg1gBgngfQgIgGgHgIQgLAMgNAJQgnAbgygCQgygCglgdIgDgCIgMAPQgiAlgvAJQgtAIgrgTIgCAGQgWAvgsAWQgcAPggABQAGAdgGAdQgHAmgbAfQgVAXgaANQAJAPAGASQATA1gSAxQgNAhgYAWQAzAUAZAsQAbAugMA4QgHAlgUAaIABAAQAwAOAgArQAfAsgCAyQgBAWgIAUQAmAAAiATQAnAWAUArQAVArgHAtQgHAsghAjQghAigsAJQgOADgPAAQgdAAgegNg");
	var mask_10_graphics_11 = new cjs.Graphics().p("Al0LWQgsgSgYgmQgYgmACgwQABgWAGgUQgigBghgSQgwgagTguQgQgnAHgrQAGgnAYgdQgmgJgbgbQgmgjgHg0QgHgxAbguQALgTAOgOQgigMgYgcQgjgmgBg5QgCg4AigpQAVgaAegNIgKgSQgOgcgBgeQgCgeALgdQALgdAUgWQAngpA+gDIgCgTQgEg0AbgpQAVggAjgSQAkgTAmACQAcABAaAMQAHgTANgQQAdgmAygNQAxgNAtASQAVAJASAOQAQgWAZgQQApgbAuACQAvACAmAfIAPAOQAJgJAKgIQAegXAkgFQAxgIAuAZQAvAaATAtQAEALADAMIAKgCQA5gJAtAcQAtAcARA3QAIAbgBAZQAfgBAgAMQAqAQAZAjQAZAjACAtQADAugWAlQgWAlgpAUQgoAUgrgFQg0gGgngpQgmgqgDg0IAAgQQgOAAgQgCQg4gJgjgoQgXgagIgiQgRADgSAAQg1gBgmgfQgJgGgHgIQgKAMgOAJQgnAbgygCQgxgCglgdIgDgCIgMAPQgiAlgwAJQgsAIgrgTIgDAGQgWAvgrAWQgdAPgfABQAGAdgGAdQgIAmgbAfQgUAXgbANQAJAPAHASQATA1gTAxQgMAhgZAWQA0AUAZAsQAaAugLA4QgHAlgVAaIABAAQAxAOAfArQAgAsgDAyQgBAWgHAUQAmAAAhATQAnAWAVArQAUArgHAtQgHAsghAjQghAigsAJQgOADgOAAQgeAAgegNg");
	var mask_10_graphics_12 = new cjs.Graphics().p("Am4LWQgsgSgYgmQgYgmACgwQABgWAGgUQgigBghgSQgwgagTguQgQgnAHgrQAHgnAXgdQglgJgcgbQgmgjgHg0QgHgxAbguQALgTAPgOQgjgMgYgcQgjgmgBg5QgCg4AigpQAVgaAegNIgKgSQgOgcgBgeQgCgeALgdQALgdAUgWQAogpA9gDIgCgTQgEg0AbgpQAVggAjgSQAkgTAmACQAdABAZAMQAHgTANgQQAdgmAygNQAxgNAtASQAVAJASAOQAQgWAZgQQApgbAvACQAuACAmAfIAPAOQAJgJAKgIQAegXAkgFQAxgIAuAZQAvAaATAtQAFALACAMIAKgCQA5gJAtAcQAtAcARA3QAIAbgBAZQAfgBAgAMQAqAQAZAjQAZAjACAtQABARgCAQQAlADAhAWQAkAXARAlQAZAygTA7QgTA6gxAbQgxAbg7gOQg7gPgfgvQgegvALg8IgIgBQg0gGgngpQgmgqgDg0IABgQQgPAAgQgCQg4gJgjgoQgXgagIgiQgQADgTAAQg1gBgmgfQgIgGgHgIQgLAMgOAJQgnAbgxgCQgygCglgdIgCgCIgNAPQgiAlgwAJQgsAIgrgTIgDAGQgWAvgrAWQgdAPgfABQAGAdgGAdQgIAmgbAfQgUAXgbANQAJAPAHASQATA1gTAxQgMAhgYAWQAzAUAZAsQAaAugLA4QgHAlgUAaIAAAAQAxAOAfArQAgAsgDAyQgBAWgHAUQAmAAAhATQAnAWAVArQAUArgHAtQgHAsghAjQghAigsAJQgOADgOAAQgeAAgegNg");
	var mask_10_graphics_13 = new cjs.Graphics().p("An5LWQgsgSgYgmQgYgmACgwQABgWAGgUQgigBghgSQgwgagTguQgQgnAHgrQAHgnAXgdQglgJgcgbQgmgjgHg0QgHgxAbguQALgTAPgOQgjgMgYgcQgjgmgBg5QgCg4AigpQAVgaAegNIgKgSQgOgcgBgeQgCgeALgdQALgdAUgWQAogpA9gDIgCgTQgEg0AbgpQAVggAjgSQAkgTAmACQAdABAZAMQAHgTANgQQAdgmAygNQAxgNAtASQAVAJASAOQAQgWAZgQQApgbAvACQAvACAmAfIAOAOQAJgJAKgIQAegXAkgFQAxgIAuAZQAvAaATAtQAFALACAMIAKgCQA5gJAtAcQAtAcARA3QAIAbgBAZQAfgBAgAMQAqAQAZAjQAZAjACAtQABARgCAQQAlADAhAWQAkAXARAlQAWAtgMAzQAwAEAjAeQAnAhAJA1QAKA3gZAsQgZAtgzAUQgzAUgxgQQgxgQgdguQgeguAGgyIADgPIgVgEQg7gPgfgvQgegvALg8IgIgBQg0gGgngpQgmgqgDg0IABgQQgPAAgQgCQg4gJgjgoQgXgagIgiQgQADgTAAQg1gBgmgfQgIgGgHgIQgKAMgOAJQgnAbgygCQgygCglgdIgCgCIgNAPQgiAlgwAJQgsAIgrgTIgDAGQgWAvgrAWQgcAPggABQAGAdgGAdQgIAmgbAfQgUAXgbANQAKAPAGASQATA1gTAxQgMAhgYAWQAzAUAZAsQAaAugLA4QgHAlgUAaIAAAAQAxAOAfArQAgAsgDAyQgBAWgHAUQAmAAAhATQAnAWAVArQAUArgHAtQgHAsghAjQghAigsAJQgOADgOAAQgeAAgegNg");
	var mask_10_graphics_14 = new cjs.Graphics().p("Ao9LWQgsgSgZgmQgYgmADgwQABgWAGgUQgjgBghgSQgvgagUguQgQgnAHgrQAHgnAXgdQglgJgbgbQgmgjgHg0QgHgxAbguQALgTAOgOQgigMgZgcQgjgmgBg5QgBg4AhgpQAVgaAegNIgKgSQgNgcgCgeQgBgeAKgdQALgdAVgWQAngpA+gDIgDgTQgEg0AbgpQAVggAkgSQAjgTAnACQAcABAZAMQAIgTAMgQQAegmAxgNQAygNAsASQAWAJARAOQAQgWAZgQQAqgbAvACQAuACAnAfIAPAOQAIgJAKgIQAfgXAjgFQAxgIAuAZQAuAaATAtQAFALADAMIAKgCQA4gJAtAcQAtAcARA3QAJAbgBAZQAfgBAfAMQArAQAZAjQAZAjACAtQABARgDAQQAmADAgAWQAkAXASAlQAWAtgNAzQAwAEAkAeQAmAhAKA1QAEAYgCAWQAnABAhAWQAvAfAOA8QAOA7gcAxQgcAxg7ASQg7ARgygZQgdgPgVgaQgVgbgHgfQgGgaADgbQgSgBgRgGQgxgQgeguQgeguAGgyIADgPIgVgEQg7gPgegvQgfgvALg8IgIgBQg0gGgmgpQgngqgCg0IAAgQQgPAAgPgCQg5gJgigoQgYgagHgiQgRADgSAAQg0gBgngfQgIgGgHgIQgLAMgNAJQgnAbgygCQgygCglgdIgDgCIgMAPQgjAlgvAJQgtAIgrgTIgCAGQgWAvgsAWQgcAPggABQAGAdgGAdQgHAmgbAfQgVAXgaANQAJAPAGASQATA1gSAxQgNAhgYAWQAzAUAZAsQAbAugMA4QgHAlgUAaIABAAQAwAOAgArQAfAsgCAyQgBAWgIAUQAmAAAiATQAnAWAUArQAVArgHAtQgHAsghAjQghAigsAJQgOADgPAAQgdAAgegNg");
	var mask_10_graphics_15 = new cjs.Graphics().p("AqDLWQgsgSgYgmQgYgmACgwQABgWAGgUQgigBghgSQgwgagTguQgQgnAHgrQAHgnAXgdQglgJgcgbQgmgjgHg0QgHgxAbguQALgTAOgOQgigMgYgcQgjgmgBg5QgCg4AigpQAVgaAegNIgKgSQgOgcgBgeQgCgeALgdQALgdAUgWQAngpA+gDIgCgTQgEg0AbgpQAVggAjgSQAkgTAmACQAcABAaAMQAHgTANgQQAdgmAygNQAxgNAtASQAVAJASAOQAQgWAZgQQApgbAvACQAvACAmAfIAPAOQAJgJAKgIQAegXAkgFQAwgIAuAZQAvAaATAtQAEALADAMIAKgCQA5gJAtAcQAtAcARA3QAIAbgBAZQAfgBAgAMQAqAQAZAjQAZAjACAtQABARgCAQQAlADAhAWQAkAXARAlQAWAtgMAzQAwAEAjAeQAnAhAJA1QAFAYgDAWQAnABAhAWQAvAfAPA8QAJAmgJAiQAQAAAPAEQA1AOAhAxQAhAxgIA2QgIA3guAlQgtAmg3gCQg3gCgqgqQgqgqgEg2QgBgYAGgYQggAAgdgPQgdgPgUgaQgVgbgHgfQgGgaADgbQgSgBgSgGQgxgQgdguQgeguAGgyIACgPIgUgEQg7gPgfgvQgegvALg8IgIgBQg0gGgngpQgmgqgDg0IAAgQQgOAAgQgCQg4gJgjgoQgXgagIgiQgQADgSAAQg1gBgmgfQgIgGgIgIQgKAMgOAJQgnAbgygCQgygCglgdIgDgCIgMAPQgiAlgwAJQgsAIgrgTIgDAGQgWAvgrAWQgdAPgfABQAGAdgGAdQgIAmgbAfQgUAXgbANQAJAPAHASQATA1gTAxQgMAhgZAWQA0AUAZAsQAaAugLA4QgHAlgVAaIABAAQAxAOAfArQAgAsgDAyQgBAWgHAUQAmAAAhATQAnAWAVArQAUArgHAtQgHAsghAjQghAigsAJQgOADgOAAQgeAAgegNg");
	var mask_10_graphics_16 = new cjs.Graphics().p("Aq+LWQgsgSgYgmQgYgmACgwQABgWAGgUQgigBghgSQgwgagTguQgQgnAHgrQAGgnAYgdQgmgJgbgbQgmgjgHg0QgHgxAbguQALgTAOgOQgigMgYgcQgjgmgBg5QgCg4AigpQAVgaAegNIgKgSQgOgcgBgeQgCgeALgdQALgdAUgWQAngpA+gDIgCgTQgEg0AbgpQAVggAjgSQAkgTAmACQAcABAaAMQAHgTANgQQAdgmAygNQAxgNAtASQAVAJASAOQAQgWAZgQQApgbAvACQAvACAmAfIAPAOQAJgJAKgIQAegXAkgFQAxgIAuAZQAuAaATAtQAEALADAMIAKgCQA5gJAtAcQAtAcARA3QAIAbgBAZQAfgBAgAMQAqAQAZAjQAZAjACAtQABARgCAQQAlADAhAWQAkAXARAlQAWAtgMAzQAwAEAjAeQAnAhAJA1QAFAYgDAWQAnABAhAWQAvAfAPA8QAJAmgJAiQAQAAAPAEQA1AOAhAxQAhAxgIA2QgCAPgFANQAgAFAdAUQAoAbAQArQATAwgTA1QgTA1gsAbQgoAXgwgEQgwgDgjgdQgjgdgNgvQgNguAOgrQgsgGgkgkQgqgqgEg2QgBgYAGgYQggAAgdgPQgdgPgUgaQgVgbgHgfQgHgaAEgbQgSgBgSgGQgxgQgdguQgeguAGgyIACgPIgUgEQg7gPgfgvQgegvALg8IgIgBQg0gGgngpQgmgqgDg0IAAgQQgOAAgQgCQg4gJgigoQgXgagIgiQgRADgSAAQg1gBgmgfQgJgGgHgIQgKAMgOAJQgnAbgygCQgygCglgdIgDgCIgMAPQgiAlgwAJQgsAIgrgTIgDAGQgWAvgrAWQgdAPgfABQAGAdgGAdQgIAmgbAfQgUAXgbANQAJAPAHASQATA1gTAxQgMAhgZAWQA0AUAZAsQAaAugLA4QgHAlgVAaIABAAQAxAOAfArQAgAsgDAyQgBAWgHAUQAmAAAhATQAnAWAVArQAUArgHAtQgHAsghAjQghAigsAJQgOADgOAAQgeAAgegNg");
	var mask_10_graphics_17 = new cjs.Graphics().p("APCM2QgygEgkgfQgkgegLgxQgHghAFgfQgrgFghgaQgjgdgNgvQgNguAPgrQgtgHgkgjQgqgqgEg2QgBgZAHgXQgggBgegOQgdgPgUgaQgVgbgHgfQgGgaADgbQgSgBgSgGQgxgQgdguQgegtAGgyIADgQIgVgEQg7gPgfgvQgegwALg7IgIgBQg0gGgngpQgmgqgDg0IABgQQgPAAgQgCQg3gJgjgoQgXgbgIgiQgQAEgTAAQg1gBgmgfQgIgGgHgIQgLAMgOAJQgnAbgygCQgygCglgdIgCgDIgNAQQgiAlgwAJQgsAIgrgTIgDAGQgWAvgrAWQgcAPggABQAGAdgGAdQgIAmgbAfQgUAXgbANQAJAPAHASQATA1gTAxQgMAhgYAXQAzATAZAsQAaAugLA4QgHAkgUAbIAAAAQAxAOAfArQAgAsgDAyQgBAWgHAUQAmAAAhATQAnAWAVArQAUArgHAtQgHAsghAjQghAigsAJQgsAJgsgTQgsgSgYgmQgYgmACgwQABgXAGgTQgigBghgSQgwgagTguQgQgnAHgrQAHgoAXgdQglgJgcgaQgmgjgHg0QgHgxAbguQALgSAPgOQgjgNgYgbQgjgngBg5QgCg4AigpQAVgaAegOIgKgRQgOgcgBgeQgCgeALgdQALgdAUgWQAogpA9gDIgCgTQgEg0AbgpQAVggAjgSQAkgTAmACQAdABAZALQAHgSANgQQAdgmAygNQAxgNAtASQAVAIASAPQAQgWAZgQQApgbAvACQAvACAmAfIAPAOQAJgJAKgIQAegXAkgFQAxgIAuAZQAvAaATAtQAFALACALIAJgBQA5gJAtAcQAtAcARA3QAIAagBAaQAfgCAgANQAqAQAZAjQAZAjACAtQABARgCAQQAlADAhAWQAkAXARAlQAWAtgMAzQAwAEAjAeQAnAhAJA2QAFAYgDAWQAnABAhAWQAvAeAPA8QAJAmgIAhQAPABAPAEQA1AOAhAxQAhAxgIA2QgCAPgFANQAgAFAdAUQAoAbAQArQAPAngJAqQAqAFAjAdQAmAgAMAuQALAugSAuQgTAvgoAYQgjAWgqAAIgNgBg");
	var mask_10_graphics_18 = new cjs.Graphics().p("AQkOPQgtAAgngcQgngbgPgrQgPgoAKgqQgVAEgXgCQgygEgkgfQgjgegLgxQgIghAGgeQgsgFghgbQgjgdgNgvQgNguAPgrQgtgGgjgkQgrgqgDg2QgCgYAHgYQggAAgdgPQgdgPgVgaQgVgbgHgfQgGgaADgbQgSgBgRgFQgxgQgeguQgeguAGgyIADgQIgVgEQg7gPgegvQgfgvALg8IgIgBQg0gGglgpQgngqgCg0IAAgQQgPAAgPgCQg5gJgigoQgYgagHgiQgRADgSAAQg1gBgngfQgIgGgHgIQgLAMgNAJQgnAbgygCQgygCglgdIgDgCIgMAPQgjAlgvAJQgtAIgrgTIgCAGQgWAvgsAWQgcAPggABQAGAdgGAdQgHAmgbAfQgVAXgaANQAJAPAGASQATA1gSAxQgNAhgYAXQAzATAZAtQAbAugMA3QgHAlgUAaIABAAQAwAOAgArQAfAsgCAyQgBAWgIAUQAmAAAiATQAnAWAUArQAVArgHAtQgHAsghAjQghAigsAJQgsAJgsgTQgsgSgZgmQgYgmADgwQAAgWAHgUQgjgBghgSQgvgagUguQgQgnAHgrQAHgnAXgdQglgJgbgbQgmgjgHg0QgHgwAbguQAKgTAPgOQgjgMgYgcQgjgngBg5QgBg4AhgpQAVgaAegNIgKgSQgNgcgCgeQgBgeAKgdQALgdAVgWQAngpA+gDIgDgTQgEg0AbgpQAVggAkgSQAjgTAnACQAcABAZAMQAHgTANgQQAegmAxgNQAygNAsASQAWAJARAOQAQgWAZgQQAqgbAvACQAuACAnAfIAPAOQAIgJAKgIQAfgXAkgFQAxgIAuAZQAuAaATAtQAFALADAMIAKgCQA4gJAsAcQAtAcARA3QAIAbAAAZQAfgBAfAMQArAQAZAjQAZAjACAtQAAARgCAQQAlADAhAWQAkAXASAlQAVAtgMAzQAwAEAkAeQAmAhAKA2QAEAYgCAWQAnABAhAWQAvAfAOA8QAJAlgIAiQAPAAAQAEQA1AOAhAxQAgAxgIA2QgCAPgFANQAgAFAeAUQAoAbAQArQAOAngJAqQAqAFAjAdQAnAgALAuQAJAigIAjIARgDQAwgFAnAWQAsAZAUAtQAMAbABAeQABAdgLAcQgQAqgoAbQgnAagsAAIgCAAg");
	var mask_10_graphics_19 = new cjs.Graphics().p("AQtPaQgrgcgQg1QgRgyASgvQgTAGgUgBQgtAAgngcQgngbgQgrQgOgnAKgrQgVAEgXgCQgygEgkgfQgkgegLgxQgHghAFgeQgrgFghgbQgjgdgNgvQgNguAPgrQgtgGgkgkQgqgqgEg2QgBgYAHgYQggAAgegPQgdgPgUgaQgVgagHgfQgGgaADgbQgSgBgSgGQgxgQgdguQgeguAGgyIADgQIgVgEQg7gPgfgvQgdgvAKg8IgHgBQg0gGgngpQgmgqgDg0IABgQQgPAAgQgCQg4gJgjgoQgXgagIgiQgQADgTAAQg1gBgmgfQgIgGgHgIQgLAMgOAJQgnAbgygCQgygCglgdIgCgCIgNAPQgiAlgwAJQgsAIgrgTIgDAGQgWAvgrAWQgdAPgfABQAGAdgGAdQgIAmgbAfQgUAXgbANQAJAPAHASQATA1gTAxQgMAhgYAXQAzAUAZAsQAaAugLA4QgHAlgUAaIAAAAQAxAOAfAqQAgAsgDAyQgBAWgHAUQAmAAAhATQAnAWAVArQAUArgHAtQgHAsghAjQghAigsAJQgsAJgsgTQgsgSgYgmQgYgmACgwQABgWAGgUQgigBghgSQgwgagTguQgQgnAHgrQAHgnAXgdQglgJgcgaQgmgjgHg0QgHgxAbguQALgTAPgOQgjgMgYgcQgjgngBg5QgCg4AigpQAVgaAegNIgKgSQgOgcgBgeQgCgeALgdQALgdAUgWQAngpA+gDIgCgTQgEg0AbgpQAVggAjgSQAkgTAmACQAcABAaAMQAHgTANgQQAdgmAygNQAxgNAtASQAVAJASAOQAQgWAZgQQApgbAvACQAvACAmAfIAPAOQAJgJAKgIQAegXAkgFQAxgIAuAZQAvAaATAtQAEALADAMIAKgCQA5gJAtAcQAtAcARA3QAHAbgBAZQAfgBAgAMQAqAQAZAjQAZAjACAtQABARgCAQQAlADAhAWQAkAXARAlQAWAtgMAzQAwAEAjAeQAnAhAJA2QAFAYgDAWQAnABAhAWQAvAfAPA8QAJAmgIAiQAPAAAPAEQA1AOAhAwQAhAxgIA2QgCAPgFANQAgAFAdAUQAoAbAQArQAPAngJAqQAqAGAjAcQAmAgAMAuQAIAigIAjIASgDQAvgFAoAWQAsAZAUAtQAMAbABAeQAAAdgKAbQARgFATAAQArgBAnAZQAnAZARAoQASAogIAuQgIAtgeAfQgjAmg4AHIgUABQgrAAgkgXg");
	var mask_10_graphics_20 = new cjs.Graphics().p("ASeQ1QgwgYgVguQgRgmAFgsIACgIQgQAFgRACQg4AGgrgcQgrgcgRg1QgQgyASgvQgTAGgVgBQgtAAgngcQgngbgPgrQgPgoAKgqQgVAEgXgCQgygEgkgfQgjgegLgxQgIghAGgeQgsgFghgbQgjgdgNgvQgNguAPgrQgtgGgjgkQgrgqgDg2QgCgYAHgXQggAAgdgPQgdgPgVgaQgVgbgHgfQgGgaAEgbQgTgBgRgGQgxgQgeguQgeguAGgyIADgQIgVgEQg6gPgegvQgfgvAMg8IgJgBQg0gGgmgpQgngqgCg0IAAgQQgPAAgPgCQg5gJgigoQgYgagHgiQgRADgSAAQg1gBgngfQgIgGgHgIQgLAMgNAJQgnAbgygCQgygCglgdIgDgCIgMAPQgjAlgvAJQgtAIgqgTIgDAGQgWAvgsAWQgcAPggABQAGAdgGAdQgHAmgbAfQgVAXgaANQAJAPAGASQATA1gSAxQgNAhgYAXQAzATAZAtQAbAugMA4QgHAlgUAaIABAAQAwAOAgArQAfAsgCAxQgBAWgHAUQAmAAAhATQAnAWAUArQAVArgHAtQgHAsghAjQghAigsAJQgsAJgsgTQgsgSgZgmQgYgmADgwQABgWAGgUQgjgBghgSQgvgagUguQgQgnAHgrQAHgmAYgdQgmgJgbgbQgmgjgHg0QgHgxAbguQALgTAOgOQgigMgZgcQgjgngBg5QgBg4AhgpQAVgaAegNIgKgSQgNgcgCgeQgBgeAKgdQALgdAVgWQAngpA+gDIgDgTQgEg0AbgpQAVggAkgSQAjgTAnACQAcABAZAMQAIgTAMgQQAegmAxgNQAygNAsASQAWAJARAOQAQgWAZgQQAqgbAvACQAuACAnAfIAPAOQAIgJAKgIQAfgXAkgFQAxgIAuAZQAuAaATAtQAFALADAMIAKgCQA4gJAtAcQAtAcARA3QAJAbgBAZQAfgBAfAMQAqAQAZAjQAZAjACAtQABARgDAQQAmADAgAWQAkAXASAlQAWAtgNAzQAxAEAjAeQAmAhAKA2QAEAYgCAWQAnABAhAWQAvAfAOA8QAJAmgIAiQAQAAAPAEQA1AOAhAxQAgAxgIA1QgCAPgFANQAhAFAdAUQAoAbAQArQAPAngJAqQAqAFAiAdQAnAgALAuQAJAigIAjIARgDQAwgFAnAWQAsAZAUAtQAMAbABAeQABAdgKAbQARgFASAAQAsgBAmAZQAnAZASAoQARAogIAuIAAACIAGgCQAqgOAoALQAxANAgArQAgAqgBAyQgCAygiApQgiApgxAKQgPADgOAAQgiAAgigQg");
	var mask_10_graphics_21 = new cjs.Graphics().p("ATrR1QgpgbgQgsQgJgbABgcIgJACQgxAKgvgYQgwgYgVgtQgSgnAGgrIABgJQgPAFgSACQg3AHgsgcQgrgcgQg1QgQgzARguQgTAFgUAAQgtgBgngbQgngcgQgqQgOgoAKgrQgVAEgXgBQgygEgkgfQgkgfgLgxQgHghAFgeQgrgFghgbQgjgdgNguQgNgvAPgqQgtgHgkgjQgqgqgEg2QgBgYAHgYQggAAgegPQgdgPgUgaQgVgagHggQgGgaADgbQgSgBgSgFQgwgQgdguQgeguAGgzIADgQIgVgEQg7gOgfgwQgegvALg8IgIAAQg0gGgngqQgmgpgDg0IABgRQgPAAgQgCQg4gIgjgoQgXgbgIgiQgQADgTAAQg1AAgmgfQgIgHgHgHQgLALgOAKQgnAagygCQgygCglgdIgCgCIgNAPQgiAmgwAIQgsAIgrgTIgDAGQgWAvgrAXQgcAOggABQAGAegGAdQgIAmgbAeQgUAYgbAMQAKAPAGASQATA2gTAxQgMAggYAXQAzAUAZAsQAaAugLA5QgHAkgUAaIAAABQAxANAfAsQAgAsgDAyQgBAVgHAUQAmgBAhATQAnAWAVAsQAUArgHAsQgHAtghAiQghAjgsAJQgsAJgsgTQgsgTgYgmQgYgmACgwQABgWAGgTQgigBghgSQgwgagTgvQgQglAHgrQAHgoAXgdQglgJgcgaQgmgkgHgzQgHgyAbguQALgTAPgOQgjgMgYgbQgjgngBg5QgCg5AigpQAVgZAegOIgKgRQgOgcgBgeQgCgfALgdQALgcAUgWQAogqA9gDIgCgSQgEg0AbgpQAVggAjgTQAkgSAmABQAdABAZAMQAHgTANgQQAdglAygNQAxgOAtASQAVAJASAPQAQgXAZgQQApgbAvACQAvADAmAfIAPANQAJgJAKgHQAegXAkgGQAxgIAuAaQAvAZATAuQAFALACALIAKgCQA5gIAtAcQAtAcARA2QAIAbgBAaQAfgCAgAMQAqAQAZAjQAZAjACAuQABARgCAPQAkADAhAWQAkAYARAkQAWAtgMA0QAwADAjAfQAnAhAJA2QAFAXgDAWQAnACAhAVQAvAfAPA8QAJAmgIAiQAPAAAPAFQA1ANAhAyQAhAxgIA2QgCAOgFAMQAgAFAdAUQAoAbAQArQAPAngJAqQAqAGAjAdQAmAgAMAtQAIAigIAjIASgDQAvgEAoAVQAsAZAUAuQAMAaABAeQAAAdgKAbQASgFASAAQArAAAnAZQAnAZARAoQASAogIAtIAAACIAFgCQAqgNApALQAwAMAgArQAgAqgBAyQAUgFAUAAQAjABAfAQQAgARAUAbQAVAcAGAjQAGAjgKAhQgNAtgnAeQgoAeguABIgFAAQgsAAgngag");
	var mask_10_graphics_22 = new cjs.Graphics().p("AVnSRQgogZgTgpIgJAIQgoAeguABQgvACgpgcQgpgbgQgsQgJgbABgcIgJACQgxAKgvgYQgwgYgVgtQgSgnAGgrIABgJQgPAFgSACQg3AHgsgcQgrgcgQg1QgQgzARguQgTAFgUAAQgtgBgngbQgngcgQgqQgOgoAKgrQgVAFgXgCQgygEgkgfQgkgfgLgxQgHggAFgfQgrgFghgbQgjgdgNguQgNguAPgrQgtgHgkgjQgqgpgEg3QgBgYAHgYQggAAgegPQgdgPgTgaQgVgagHggQgGgaADgaQgSgBgSgGQgxgQgdguQgeguAGgzIADgQIgVgEQg7gOgfgwQgegvALg7IgIgBQg0gGgngqQgmgpgDg0IABgRQgPABgQgDQg4gIgjgoQgXgbgIgiQgQAEgTgBQg1AAgmgfQgIgGgHgIQgLAMgOAJQgnAagygCQgygCglgdIgCgCIgNAPQgiAmgwAIQgsAJgrgTIgDAFQgWAvgrAXQgcAPggABQAGAdgGAdQgIAmgbAeQgUAYgbANQAKAPAGARQATA2gTAxQgMAhgYAWQAzAUAZAsQAaAugLA5QgHAkgUAbIAAAAQAxANAfAsQAgAsgDAyQgBAWgHAUQAmAAAhARQAnAWAVAsQAUArgHAsQgHAtghAiQghAjgsAJQgsAJgsgTQgsgTgYgmQgYgmACgwQABgWAGgTQgigBghgSQgwgagTguQgQgmAHgrQAHgoAXgdQglgJgcgaQgmgkgHgzQgHgyAbguQALgSAPgPQgjgMgYgbQgjgngBg5QgCg5AigpQAVgZAegOIgKgRQgOgcgBgeQgCgfALgdQALgcAUgWQAogpA9gEIgCgSQgEg0AbgpQAVggAjgTQAkgSAmABQAdACAZALQAHgSANgRQAdglAygNQAxgOAtASQAVAJASAPQAQgWAZgRQApgbAvACQAvADAmAfIAPAOQAJgJAKgIQAegXAkgGQAxgIAuAaQAvAZATAuQAFALACALIAKgCQA5gIAtAcQAtAcARA2QAIAbgBAaQAfgCAgAMQAqAQAZAjQAZAjACAuQABARgCAQQAlADAhAVQAkAYARAkQAWAugMAzQAvAEAjAeQAnAhAJA2QAFAYgDAWQAnABAhAVQAvAfAPA8QAJAngIAhQAPABAPAEQA1ANAhAyQAhAxgIA2QgCAOgFAOQAgAFAdASQAoAbAQArQAPAogJAqQAqAFAjAdQAmAgAMAtQAIAjgIAiIASgDQAvgEAoAVQAsAZAUAuQAMAaABAeQAAAegKAbQASgFASgBQArAAAnAZQAnAZARAoQASAogIAtIAAACIAFgCQAqgNApALQAwAMAgArQAgArgBAxQAUgFAUAAQAjABAfAQQAgARAUAbQAKANAGAOIAGgFQAlgeAygCQAzgCAnAaQAoAbARAvQARAwgOAtQgNAqgkAeQgkAdgsAEIgOABQgnAAgmgXg");
	var mask_10_graphics_23 = new cjs.Graphics().p("AUFSRQgpgZgSgpIgJAIQgoAeguABQgvACgpgcQgpgbgQgsQgKgbACgcIgJACQgxAKgvgYQgwgYgVgtQgSgnAGgrIABgJQgPAFgSACQg3AHgsgcQgrgcgQg1QgRgzASguQgTAFgUAAQgtgBgngbQgngcgQgqQgOgoAJgrQgUAFgXgCQgygEgkgfQgkgfgLgxQgHggAFgfQgrgFghgbQgjgdgNguQgNguAOgrQgsgHgkgjQgpgpgEg3QgBgYAGgYQggAAgdgPQgdgPgUgaQgVgagHggQgGgaADgaQgSgBgSgGQgxgQgdguQgeguAGgzIACgQIgUgEQg7gOgfgwQgegvALg7IgIgBQg0gGgngqQgmgpgDg0IAAgRQgOABgQgDQg4gIgjgoQgXgbgIgiQgRAEgSgBQg1AAgmgfQgIgGgIgIQgKAMgOAJQgnAagygCQgygCglgdIgDgCIgMAPQgiAmgwAIQgsAJgrgTIgDAFQgWAvgrAXQgdAPgfABQAGAdgGAdQgIAmgbAeQgUAYgbANQAJAPAHARQATA2gTAxQgMAhgZAWQA0AUAZAsQAaAugLA5QgHAkgVAbIABAAQAxANAfAsQAgAsgDAyQgBAWgHAUQAmAAAhARQAnAWAVAsQAUArgHAsQgHAtghAiQghAjgsAJQgsAJgsgTQgsgTgYgmQgYgmACgwQABgWAGgTQgigBghgSQgwgagTguQgQgmAHgrQAHgoAXgdQglgJgcgaQgmgkgHgzQgHgyAbguQALgSAOgPQgigMgYgbQgjgngBg5QgCg5AigpQAVgZAegOIgKgRQgOgcgBgeQgCgfALgdQALgcAUgWQAngpA+gEIgCgSQgEg0AbgpQAVggAjgTQAkgSAmABQAcACAaALQAHgSANgRQAdglAygNQAxgOAtASQAVAJASAPQAQgWAZgRQApgbAvACQAvADAmAfIAPAOQAJgJAKgIQAegXAkgGQAxgIAuAaQAvAZATAuQAEALADALIAKgCQA5gIAtAcQAtAcARA2QAIAbgBAaQAfgCAgAMQAqAQAZAjQAZAjACAuQABARgCAQQAlADAhAVQAkAYARAkQAWAugMAzQAwAEAjAeQAmAhAJA2QAFAYgDAWQAnABAhAVQAvAfAPA8QAJAngJAhQAQABAPAEQA1ANAhAyQAhAxgIA2QgCAOgFAOQAgAFAdASQAoAbAQArQAPAogJAqQAqAFAjAdQAmAgAMAtQAIAjgIAiIASgDQAvgEAoAVQAsAZAUAuQAMAaABAeQAAAegKAbQARgFATgBQArAAAnAZQAnAZARAoQASAogIAtIgBACIAGgCQAqgNApALQAwAMAgArQAgArgBAxQATgFAVAAQAjABAfAQQAgARAUAbQAKANAGAOIAGgFQAlgeAygCQAegBAZAIQADgbAOgcQAWgrApgWQApgVAwAHQAxAGAhAgQAiAgAJAwQAKAwgTAqQgVAtgvAZQgvAZgxgKQgKgBgKgEQgCAPgEAPQgNAqgkAeQgkAdgsAEIgOABQgoAAglgXg");
	var mask_10_graphics_24 = new cjs.Graphics().p("AUFSRQgpgZgSgpIgJAIQgoAeguABQgvACgpgcQgpgbgQgsQgKgbACgcIgJACQgxAKgvgYQgwgYgVgtQgSgnAGgrIABgJQgPAFgSACQg3AHgsgcQgrgcgQg1QgRgzASguQgTAFgUAAQgtgBgngbQgngcgQgqQgOgoAJgrQgUAFgXgCQgygEgkgfQgkgfgLgxQgHggAFgfQgrgFghgbQgjgdgNguQgNguAOgrQgsgHgkgjQgpgpgEg3QgBgYAGgYQggAAgdgPQgdgPgUgaQgVgagHggQgGgaADgaQgSgBgSgGQgxgQgdguQgeguAGgzIACgQIgUgEQg7gOgfgwQgegvALg7IgIgBQg0gGgngqQgmgpgDg0IAAgRQgOABgQgDQg4gIgjgoQgXgbgIgiQgRAEgSgBQg1AAgmgfQgIgGgIgIQgKAMgOAJQgnAagygCQgygCglgdIgDgCIgMAPQgiAmgwAIQgsAJgrgTIgDAFQgWAvgrAXQgdAPgfABQAGAdgGAdQgIAmgbAeQgUAYgbANQAJAPAHARQATA2gTAxQgMAhgZAWQA0AUAZAsQAaAugLA5QgHAkgVAbIABAAQAxANAfAsQAgAsgDAyQgBAWgHAUQAmAAAhARQAnAWAVAsQAUArgHAsQgHAtghAiQghAjgsAJQgsAJgsgTQgsgTgYgmQgYgmACgwQABgWAGgTQgigBghgSQgwgagTguQgQgmAHgrQAHgoAXgdQglgJgcgaQgmgkgHgzQgHgyAbguQALgSAOgPQgigMgYgbQgjgngBg5QgCg5AigpQAVgZAegOIgKgRQgOgcgBgeQgCgfALgdQALgcAUgWQAngpA+gEIgCgSQgEg0AbgpQAVggAjgTQAkgSAmABQAcACAaALQAHgSANgRQAdglAygNQAxgOAtASQAVAJASAPQAQgWAZgRQApgbAvACQAvADAmAfIAPAOQAJgJAKgIQAegXAkgGQAxgIAuAaQAvAZATAuQAEALADALIAKgCQA5gIAtAcQAtAcARA2QAIAbgBAaQAfgCAgAMQAqAQAZAjQAZAjACAuQABARgCAQQAlADAhAVQAkAYARAkQAWAugMAzQAwAEAjAeQAmAhAJA2QAFAYgDAWQAnABAhAVQAvAfAPA8QAJAngJAhQAQABAPAEQA1ANAhAyQAhAxgIA2QgCAOgFAOQAgAFAdASQAoAbAQArQAPAogJAqQAqAFAjAdQAmAgAMAtQAIAjgIAiIASgDQAvgEAoAVQAsAZAUAuQAMAaABAeQAAAegKAbQARgFATgBQArAAAnAZQAnAZARAoQASAogIAtIgBACIAGgCQAqgNApALQAwAMAgArQAgArgBAxQATgFAVAAQAjABAfAQQAgARAUAbQAKANAGAOIAGgFQAlgeAygCQAegBAZAIQADgbAOgcQAJgSANgPQg0gLgggoQgigqACg6QACg6AmgnQAWgXAegMQAfgMAgABQAvADAnAfQAnAgALAtQAMAugSAvQgLAagRAUQAqAIAdAcQAiAgAJAwQAKAwgTAqQgVAtgvAZQgvAZgxgKQgKgBgKgEQgCAPgEAPQgNAqgkAeQgkAdgsAEIgOABQgoAAglgXg");
	var mask_10_graphics_25 = new cjs.Graphics().p("AUFSRQgpgZgSgpIgJAIQgoAeguABQgvACgpgcQgpgbgQgsQgKgbACgcIgJACQgxAKgvgYQgwgYgVgtQgSgnAGgrIABgJQgPAFgSACQg3AHgsgcQgrgcgQg1QgRgzASguQgTAFgUAAQgtgBgngbQgngcgQgqQgOgoAJgrQgUAFgXgCQgygEgkgfQgkgfgLgxQgHggAFgfQgrgFghgbQgjgdgNguQgNguAOgrQgsgHgkgjQgpgpgEg3QgBgYAGgYQggAAgdgPQgdgPgUgaQgVgagHggQgGgaADgaQgSgBgSgGQgxgQgdguQgeguAGgzIACgQIgUgEQg7gOgfgwQgegvALg7IgIgBQg0gGgngqQgmgpgDg0IAAgRQgOABgQgDQg4gIgjgoQgXgbgIgiQgRAEgSgBQg1AAgmgfQgIgGgIgIQgKAMgOAJQgnAagygCQgygCglgdIgDgCIgMAPQgiAmgwAIQgsAJgrgTIgDAFQgWAvgrAXQgdAPgfABQAGAdgGAdQgIAmgbAeQgUAYgbANQAJAPAHARQATA2gTAxQgMAhgZAWQA0AUAZAsQAaAugLA5QgHAkgVAbIABAAQAxANAfAsQAgAsgDAyQgBAWgHAUQAmAAAhARQAnAWAVAsQAUArgHAsQgHAtghAiQghAjgsAJQgsAJgsgTQgsgTgYgmQgYgmACgwQABgWAGgTQgigBghgSQgwgagTguQgQgmAHgrQAHgoAXgdQglgJgcgaQgmgkgHgzQgHgyAbguQALgSAOgPQgigMgYgbQgjgngBg5QgCg5AigpQAVgZAegOIgKgRQgOgcgBgeQgCgfALgdQALgcAUgWQAngpA+gEIgCgSQgEg0AbgpQAVggAjgTQAkgSAmABQAcACAaALQAHgSANgRQAdglAygNQAxgOAtASQAVAJASAPQAQgWAZgRQApgbAvACQAvADAmAfIAPAOQAJgJAKgIQAegXAkgGQAxgIAuAaQAvAZATAuQAEALADALIAKgCQA5gIAtAcQAtAcARA2QAIAbgBAaQAfgCAgAMQAqAQAZAjQAZAjACAuQABARgCAQQAlADAhAVQAkAYARAkQAWAugMAzQAwAEAjAeQAmAhAJA2QAFAYgDAWQAnABAhAVQAvAfAPA8QAJAngJAhQAQABAPAEQA1ANAhAyQAhAxgIA2QgCAOgFAOQAgAFAdASQAoAbAQArQAPAogJAqQAqAFAjAdQAmAgAMAtQAIAjgIAiIASgDQAvgEAoAVQAsAZAUAuQAMAaABAeQAAAegKAbQARgFATgBQArAAAnAZQAnAZARAoQASAogIAtIgBACIAGgCQAqgNApALQAwAMAgArQAgArgBAxQATgFAVAAQAjABAfAQQAgARAUAbQAKANAGAOIAGgFQAlgeAygCQAegBAZAIQADgbAOgcQAJgSANgPQg0gLgggoQgigqACg6QAAgMACgMIgMAAQg7AAgpglQgpglgHg1QgGgqATgoQATgpAjgXQAvgeA7ALQA7AKAiArQAiAsgFA8IgDARIAVgBQAvADAnAfQAnAgALAtQAMAugSAvQgLAagRAUQAqAIAdAcQAiAgAJAwQAKAwgTAqQgVAtgvAZQgvAZgxgKQgKgBgKgEQgCAPgEAPQgNAqgkAeQgkAdgsAEIgOABQgoAAglgXg");
	var mask_10_graphics_26 = new cjs.Graphics().p("AUFSRQgpgZgSgpIgJAIQgoAeguABQgvACgpgcQgpgbgQgsQgKgbACgcIgJACQgxAKgvgYQgwgYgVgtQgSgnAGgrIABgJQgPAFgSACQg3AHgsgcQgrgcgQg1QgRgzASguQgTAFgUAAQgtgBgngbQgngcgQgqQgOgoAJgrQgUAFgXgCQgygEgkgfQgkgfgLgxQgHggAFgfQgrgFghgbQgjgdgNguQgNguAOgrQgsgHgkgjQgpgpgEg3QgBgYAGgYQggAAgdgPQgdgPgUgaQgVgagHggQgGgaADgaQgSgBgSgGQgxgQgdguQgeguAGgzIACgQIgUgEQg7gOgfgwQgegvALg7IgIgBQg0gGgngqQgmgpgDg0IAAgRQgOABgQgDQg4gIgjgoQgXgbgIgiQgRAEgSgBQg1AAgmgfQgIgGgIgIQgKAMgOAJQgnAagygCQgygCglgdIgDgCIgMAPQgiAmgwAIQgsAJgrgTIgDAFQgWAvgrAXQgdAPgfABQAGAdgGAdQgIAmgbAeQgUAYgbANQAJAPAHARQATA2gTAxQgMAhgZAWQA0AUAZAsQAaAugLA5QgHAkgVAbIABAAQAxANAfAsQAgAsgDAyQgBAWgHAUQAmAAAhARQAnAWAVAsQAUArgHAsQgHAtghAiQghAjgsAJQgsAJgsgTQgsgTgYgmQgYgmACgwQABgWAGgTQgigBghgSQgwgagTguQgQgmAHgrQAHgoAXgdQglgJgcgaQgmgkgHgzQgHgyAbguQALgSAOgPQgigMgYgbQgjgngBg5QgCg5AigpQAVgZAegOIgKgRQgOgcgBgeQgCgfALgdQALgcAUgWQAngpA+gEIgCgSQgEg0AbgpQAVggAjgTQAkgSAmABQAcACAaALQAHgSANgRQAdglAygNQAxgOAtASQAVAJASAPQAQgWAZgRQApgbAvACQAvADAmAfIAPAOQAJgJAKgIQAegXAkgGQAxgIAuAaQAvAZATAuQAEALADALIAKgCQA5gIAtAcQAtAcARA2QAIAbgBAaQAfgCAgAMQAqAQAZAjQAZAjACAuQABARgCAQQAlADAhAVQAkAYARAkQAWAugMAzQAwAEAjAeQAmAhAJA2QAFAYgDAWQAnABAhAVQAvAfAPA8QAJAngJAhQAQABAPAEQA1ANAhAyQAhAxgIA2QgCAOgFAOQAgAFAdASQAoAbAQArQAPAogJAqQAqAFAjAdQAmAgAMAtQAIAjgIAiIASgDQAvgEAoAVQAsAZAUAuQAMAaABAeQAAAegKAbQARgFATgBQArAAAnAZQAnAZARAoQASAogIAtIgBACIAGgCQAqgNApALQAwAMAgArQAgArgBAxQATgFAVAAQAjABAfAQQAgARAUAbQAKANAGAOIAGgFQAlgeAygCQAegBAZAIQADgbAOgcQAJgSANgPQg0gLgggoQgigqACg6QAAgMACgMIgMAAQg7AAgpglQgpglgHg1QgGgqATgoIAEgIQgTADgVgCQgygFgkgfQgjgggLgxQgKgxATgrQAUgrAsgZQArgZAvAGQAvAGAlAiQAlAjAIAuQAIAtgTArIgFAKQAZgEAbAFQA7AKAiArQAiAsgFA8IgDARIAVgBQAvADAnAfQAnAgALAtQAMAugSAvQgLAagRAUQAqAIAdAcQAiAgAJAwQAKAwgTAqQgVAtgvAZQgvAZgxgKQgKgBgKgEQgCAPgEAPQgNAqgkAeQgkAdgsAEIgOABQgoAAglgXg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:mask_10_graphics_0,x:105.5982,y:226.6806}).wait(1).to({graphics:mask_10_graphics_1,x:97.1773,y:213.5456}).wait(1).to({graphics:mask_10_graphics_2,x:90.2576,y:203.6372}).wait(1).to({graphics:mask_10_graphics_3,x:86.317,y:191.8696}).wait(1).to({graphics:mask_10_graphics_4,x:83.9109,y:179.5808}).wait(1).to({graphics:mask_10_graphics_5,x:83.9109,y:168.8119}).wait(1).to({graphics:mask_10_graphics_6,x:83.9109,y:159.864}).wait(1).to({graphics:mask_10_graphics_7,x:90.3115,y:155.9554}).wait(1).to({graphics:mask_10_graphics_8,x:101.1366,y:154.4627}).wait(1).to({graphics:mask_10_graphics_9,x:111.9229,y:154.4627}).wait(1).to({graphics:mask_10_graphics_10,x:120.777,y:154.4627}).wait(1).to({graphics:mask_10_graphics_11,x:128.6345,y:154.4627}).wait(1).to({graphics:mask_10_graphics_12,x:135.4198,y:154.4627}).wait(1).to({graphics:mask_10_graphics_13,x:141.9146,y:154.4627}).wait(1).to({graphics:mask_10_graphics_14,x:148.7801,y:154.4627}).wait(1).to({graphics:mask_10_graphics_15,x:155.7258,y:154.4627}).wait(1).to({graphics:mask_10_graphics_16,x:161.6343,y:154.4627}).wait(1).to({graphics:mask_10_graphics_17,x:168.0172,y:162.7957}).wait(1).to({graphics:mask_10_graphics_18,x:176.8979,y:171.6686}).wait(1).to({graphics:mask_10_graphics_19,x:185.7223,y:181.4543}).wait(1).to({graphics:mask_10_graphics_20,x:195.5733,y:189.8674}).wait(1).to({graphics:mask_10_graphics_21,x:204.9129,y:197.247}).wait(1).to({graphics:mask_10_graphics_22,x:216.7129,y:199.7008}).wait(1).to({graphics:mask_10_graphics_23,x:226.5301,y:199.7008}).wait(1).to({graphics:mask_10_graphics_24,x:226.5301,y:199.7008}).wait(1).to({graphics:mask_10_graphics_25,x:226.5301,y:199.7008}).wait(1).to({graphics:mask_10_graphics_26,x:226.5301,y:199.7008}).wait(104));

	// lady01
	this.instance_18 = new lib.CachedBmp_8();
	this.instance_18.setTransform(69.35,88.6,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(130));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-36.4,131.2,1230.6000000000001,843.4000000000001);
// library properties:
lib.properties = {
	id: 'BCE0068050F65946ADF2E52EFE3ED276',
	width: 474,
	height: 506,
	fps: 10,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Image.png?1671436036621", id:"Image"},
		{src:"images/B4B27_atlas_1.png?1671436036598", id:"B4B27_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['BCE0068050F65946ADF2E52EFE3ED276'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;