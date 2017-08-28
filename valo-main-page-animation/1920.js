(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Copyright = function() {
	this.initialize(img.Copyright);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1496,985);


(lib.cursor = function() {
	this.initialize(img.cursor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,17,22);


(lib.H1 = function() {
	this.initialize(img.H1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,5760);


(lib.hamb = function() {
	this.initialize(img.hamb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1697,1060);


(lib.ic03about = function() {
	this.initialize(img.ic03about);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.ic1 = function() {
	this.initialize(img.ic1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,180);


(lib.ic2 = function() {
	this.initialize(img.ic2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,180);


(lib.ic3 = function() {
	this.initialize(img.ic3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,180);


(lib.ic4 = function() {
	this.initialize(img.ic4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,180);


(lib.ic5 = function() {
	this.initialize(img.ic5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,180);


(lib.ic6 = function() {
	this.initialize(img.ic6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,180);


(lib.icon2 = function() {
	this.initialize(img.icon2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,251,255);


(lib.icon3 = function() {
	this.initialize(img.icon3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,251,255);


(lib.icon4 = function() {
	this.initialize(img.icon4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,251,255);


(lib.icon5 = function() {
	this.initialize(img.icon5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,251,255);


(lib.icon6 = function() {
	this.initialize(img.icon6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,251,207);


(lib.Layer4copy2 = function() {
	this.initialize(img.Layer4copy2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1070);


(lib.sjy = function() {
	this.initialize(img.sjy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,977);


(lib.twn = function() {
	this.initialize(img.twn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1018);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.town = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.twn();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.town, new cjs.Rectangle(0,0,1920,1018), null);


(lib.TOPWhite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EiV/AAyIAAhjMEr/AAAIAABjg");
	this.shape.setTransform(960,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TOPWhite, new cjs.Rectangle(0,0,1920,10), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.H1, null, new cjs.Matrix2D(1,0,0,1,-960,-2076.8)).s().p("EiV/lEfMEr/AAAMAAAKH+MhUAAABIAABAMjX/AAAg");
	this.shape.setTransform(960,2076.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,1920,4153.7), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cursor();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,17,22), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Copyright();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,1496,985), null);


(lib.sky = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sjy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sky, new cjs.Rectangle(0,0,1920,977), null);


(lib.men6active = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.icon6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.men6active, new cjs.Rectangle(0,0,251,207), null);


(lib.men6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.men6, new cjs.Rectangle(0,0,213,180), null);


(lib.men5active = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.icon5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.men5active, new cjs.Rectangle(0,0,251,255), null);


(lib.men5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.men5, new cjs.Rectangle(0,0,213,180), null);


(lib.men4active = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.icon4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.men4active, new cjs.Rectangle(0,0,251,255), null);


(lib.men4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.men4, new cjs.Rectangle(0,0,213,180), null);


(lib.men3active = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.icon3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.men3active, new cjs.Rectangle(0,0,251,255), null);


(lib.men3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.men3, new cjs.Rectangle(0,0,213,180), null);


(lib.men2active = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.icon2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.men2active, new cjs.Rectangle(0,0,251,255), null);


(lib.men2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.men2, new cjs.Rectangle(0,0,213,180), null);


(lib.men1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.men1, new cjs.Rectangle(0,0,213,180), null);


(lib.maska = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EiGYBUkMgABipHMEMzAAAMAAACpHg");
	this.shape.setTransform(860.2,541.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.maska, new cjs.Rectangle(0,0,1720.4,1082.3), null);


(lib.Darker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer4copy2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Darker, new cjs.Rectangle(0,0,1920,1070), null);


// stage content:
(lib._1920 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 17
	this.instance = new lib.maska();
	this.instance.parent = this;
	this.instance.setTransform(957.5,541.1,1.113,1,0,0,0,860.2,541.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(564).to({_off:false},0).to({alpha:1},10).wait(1));

	// cursotr
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(596.4,219.9,1,1,0,0,0,8.5,11);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(132).to({_off:false},0).to({x:136.4,y:239.9},19).wait(13).to({y:399.9},11).wait(15).to({y:599.9},11).wait(14).to({y:779.9},10).wait(15).to({y:959.9},11).wait(14).to({x:376.4,y:659.9},24).wait(5).to({x:316.4,y:579.9},0).to({x:176.4,y:319.9},10).wait(50).to({x:396.4,y:139.9},10).wait(211));

	// white
	this.instance_2 = new lib.maska();
	this.instance_2.parent = this;
	this.instance_2.setTransform(2779.8,541.1,1,1,0,0,0,860.2,541.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(369).to({_off:false},0).to({x:1073.7},10,cjs.Ease.get(0.97)).wait(10).to({x:2773.7},10).wait(176));

	// WEB2
	this.instance_3 = new lib.ic03about();
	this.instance_3.parent = this;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(389).to({_off:false},0).wait(186));

	// web2-page
	this.instance_4 = new lib.Symbol3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(960,4691,1,1,0,0,0,960,4691);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(389).to({_off:false},0).wait(70).to({y:3771},40,cjs.Ease.get(0.99)).wait(76));

	// Layer 12 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_319 = new cjs.Graphics().p("EiGYBVWMgABipHMEMzAAAMAAACpHg");
	var mask_graphics_320 = new cjs.Graphics().p("EiGYBVWMgABipHMEMzAAAMAAACpHg");
	var mask_graphics_321 = new cjs.Graphics().p("EiGYBVWMgABipHMEMzAAAMAAACpHg");
	var mask_graphics_322 = new cjs.Graphics().p("EiGYBVWMgABipHMEMzAAAMAAACpHg");
	var mask_graphics_323 = new cjs.Graphics().p("EiGYBVWMgABipHMEMzAAAMAAACpHg");
	var mask_graphics_324 = new cjs.Graphics().p("EiGZBVWMAAAipHMEMzAAAMAAACpHg");
	var mask_graphics_325 = new cjs.Graphics().p("EiGZBVWMAAAipHMEMzAAAMAAACpHg");
	var mask_graphics_326 = new cjs.Graphics().p("EiGZBVWMAAAipHMEMzAAAMAAACpHg");
	var mask_graphics_327 = new cjs.Graphics().p("EiGYBVWMgABipHMEMzAAAMAAACpHg");
	var mask_graphics_328 = new cjs.Graphics().p("EiGYBVWMgABipHMEMzAAAMAAACpHg");
	var mask_graphics_329 = new cjs.Graphics().p("EiFoBVWMgABipHMEMzAAAMAAACpHg");
	var mask_graphics_330 = new cjs.Graphics().p("EiATBVWMAAAipHMEMzAAAMAAACpHg");
	var mask_graphics_331 = new cjs.Graphics().p("Eh8JBVWMgABipHMEMzAAAMAAACpHg");
	var mask_graphics_332 = new cjs.Graphics().p("Eh5MBVWMAAAipHMEMzAAAMAAACpHg");
	var mask_graphics_333 = new cjs.Graphics().p("Eh3aBVWMgABipHMEMzAAAMAAACpHg");
	var mask_graphics_334 = new cjs.Graphics().p("Eh20BVWMgABipHMEMzAAAMAAACpHg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(319).to({graphics:mask_graphics_319,x:-646.5,y:546.2}).wait(1).to({graphics:mask_graphics_320,x:-426.7,y:546.2}).wait(1).to({graphics:mask_graphics_321,x:-221.9,y:546.2}).wait(1).to({graphics:mask_graphics_322,x:-32.4,y:546.2}).wait(1).to({graphics:mask_graphics_323,x:142,y:546.2}).wait(1).to({graphics:mask_graphics_324,x:301.2,y:546.2}).wait(1).to({graphics:mask_graphics_325,x:445.3,y:546.2}).wait(1).to({graphics:mask_graphics_326,x:574.2,y:546.2}).wait(1).to({graphics:mask_graphics_327,x:687.9,y:546.2}).wait(1).to({graphics:mask_graphics_328,x:786.5,y:546.2}).wait(1).to({graphics:mask_graphics_329,x:865,y:546.2}).wait(1).to({graphics:mask_graphics_330,x:899.2,y:546.2}).wait(1).to({graphics:mask_graphics_331,x:925.7,y:546.2}).wait(1).to({graphics:mask_graphics_332,x:944.7,y:546.2}).wait(1).to({graphics:mask_graphics_333,x:956,y:546.2}).wait(1).to({graphics:mask_graphics_334,x:959.8,y:546.2}).wait(241));

	// Layer 11
	this.instance_5 = new lib.hamb();
	this.instance_5.parent = this;
	this.instance_5.setTransform(213,10);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(319).to({_off:false},0).to({_off:true},87).wait(169));

	// men6-active
	this.instance_6 = new lib.men6active();
	this.instance_6.parent = this;
	this.instance_6.setTransform(125.5,977.3,1,1,0,0,0,125.5,103.5);
	this.instance_6.alpha = 0.102;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(249).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(1)).wait(20).to({alpha:0},6).to({_off:true},1).wait(294));

	// men5-active
	this.instance_7 = new lib.men5active();
	this.instance_7.parent = this;
	this.instance_7.setTransform(125.5,820.7,1,1,0,0,0,125.5,127.5);
	this.instance_7.alpha = 0.102;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(224).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(1)).wait(20).to({alpha:0},6).to({_off:true},1).wait(319));

	// men4-active
	this.instance_8 = new lib.men4active();
	this.instance_8.parent = this;
	this.instance_8.setTransform(125.5,639.9,1,1,0,0,0,125.5,127.5);
	this.instance_8.alpha = 0.102;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(199).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(1)).wait(20).to({alpha:0},6).to({_off:true},1).wait(344));

	// men3-active
	this.instance_9 = new lib.men3active();
	this.instance_9.parent = this;
	this.instance_9.setTransform(125.5,460.1,1,1,0,0,0,125.5,127.5);
	this.instance_9.alpha = 0.102;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(174).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(1)).wait(20).to({alpha:0},6).to({_off:true},25).wait(345));

	// men2-active
	this.instance_10 = new lib.men2active();
	this.instance_10.parent = this;
	this.instance_10.setTransform(125.5,280.5,1,1,0,0,0,125.5,127.5);
	this.instance_10.alpha = 0.102;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(149).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(1)).wait(20).to({alpha:0},6).wait(119).to({alpha:1},5).wait(65).to({alpha:0},5).to({_off:true},31).wait(170));

	// Right
	this.instance_11 = new lib.TOPWhite();
	this.instance_11.parent = this;
	this.instance_11.setTransform(1925,540,1,1,-90,0,0,960,5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(79).to({_off:false},0).to({x:1915},10,cjs.Ease.get(1)).to({_off:true},316).wait(170));

	// Bottom
	this.instance_12 = new lib.TOPWhite();
	this.instance_12.parent = this;
	this.instance_12.setTransform(960,1085.1,1,1,0,0,0,960,5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(79).to({_off:false},0).to({y:1075},10,cjs.Ease.get(1)).to({_off:true},316).wait(170));

	// TOP White
	this.instance_13 = new lib.TOPWhite();
	this.instance_13.parent = this;
	this.instance_13.setTransform(960,-4.7,1,1,0,0,0,960,5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(79).to({_off:false},0).to({y:5},10,cjs.Ease.get(1)).to({_off:true},316).wait(170));

	// men6
	this.instance_14 = new lib.men6();
	this.instance_14.parent = this;
	this.instance_14.setTransform(106.5,991.5,0.906,0.906,0,0,0,106.5,90);
	this.instance_14.alpha = 0.102;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(122).to({_off:false},0).to({scaleX:1,scaleY:1,y:991,alpha:1},9,cjs.Ease.get(0.99)).to({_off:true},275).wait(169));

	// men5
	this.instance_15 = new lib.men5();
	this.instance_15.parent = this;
	this.instance_15.setTransform(106.5,811.5,0.906,0.906,0,0,0,106.5,90);
	this.instance_15.alpha = 0.102;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(118).to({_off:false},0).to({scaleX:1,scaleY:1,y:811,alpha:1},9,cjs.Ease.get(0.99)).to({_off:true},279).wait(169));

	// men4
	this.instance_16 = new lib.men4();
	this.instance_16.parent = this;
	this.instance_16.setTransform(106.5,631.5,0.906,0.906,0,0,0,106.5,90);
	this.instance_16.alpha = 0.102;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(113).to({_off:false},0).to({scaleX:1,scaleY:1,y:631,alpha:1},9,cjs.Ease.get(0.99)).to({_off:true},284).wait(169));

	// men3
	this.instance_17 = new lib.men3();
	this.instance_17.parent = this;
	this.instance_17.setTransform(106.5,451.5,0.906,0.906,0,0,0,106.5,90);
	this.instance_17.alpha = 0.102;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(109).to({_off:false},0).to({scaleX:1,scaleY:1,y:451,alpha:1},9,cjs.Ease.get(0.99)).to({_off:true},288).wait(169));

	// men2
	this.instance_18 = new lib.men2();
	this.instance_18.parent = this;
	this.instance_18.setTransform(106.5,271.5,0.906,0.906,0,0,0,106.5,90);
	this.instance_18.alpha = 0.102;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(104).to({_off:false},0).to({scaleX:1,scaleY:1,y:271,alpha:1},9,cjs.Ease.get(0.99)).to({_off:true},293).wait(169));

	// men1
	this.instance_19 = new lib.men1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(106.5,92.5,0.906,0.905,0,0,0,106.5,90.2);
	this.instance_19.alpha = 0.102;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(100).to({_off:false},0).to({regY:90,scaleX:1,scaleY:1,y:91,alpha:1},9,cjs.Ease.get(0.99)).to({_off:true},297).wait(169));

	// Content
	this.instance_20 = new lib.Symbol1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(1070,553.5,1,1,0,0,0,748,492.5);
	this.instance_20.alpha = 0.102;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(118).to({_off:false},0).to({alpha:1},13).to({_off:true},274).wait(170));

	// LEft
	this.instance_21 = new lib.TOPWhite();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-106.2,540,1,21.3,-90,0,0,960,5);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(79).to({_off:false},0).to({x:106.8},21,cjs.Ease.get(1)).to({_off:true},305).wait(170));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape.setTransform(1066,540);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.949)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_1.setTransform(1066,540);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.902)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_2.setTransform(1066,540);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.851)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_3.setTransform(1066,540);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.804)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_4.setTransform(1066,540);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.761)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_5.setTransform(1066,540);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.718)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_6.setTransform(1066,540);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.675)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_7.setTransform(1066,540);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.631)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_8.setTransform(1066,540);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.592)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_9.setTransform(1066,540);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.553)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_10.setTransform(1066,540);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.514)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_11.setTransform(1066,540);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.478)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_12.setTransform(1066,540);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.443)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_13.setTransform(1066,540);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.412)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_14.setTransform(1066,540);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.38)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_15.setTransform(1066,540);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.349)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_16.setTransform(1066,540);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.318)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_17.setTransform(1066,540);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.29)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_18.setTransform(1066,540);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.263)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_19.setTransform(1066,540);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.239)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_20.setTransform(1066,540);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.212)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_21.setTransform(1066,540);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.188)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_22.setTransform(1066,540);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.169)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_23.setTransform(1066,540);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.149)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_24.setTransform(1066,540);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.129)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_25.setTransform(1066,540);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.11)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_26.setTransform(1066,540);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.094)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_27.setTransform(1066,540);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.078)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_28.setTransform(1066,540);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.067)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_29.setTransform(1066,540);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.055)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_30.setTransform(1066,540);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.043)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_31.setTransform(1066,540);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.031)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_32.setTransform(1066,540);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.024)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_33.setTransform(1066,540);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.016)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_34.setTransform(1066,540);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.012)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_35.setTransform(1066,540);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.008)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_36.setTransform(1066,540);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.004)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_37.setTransform(1066,540);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0)").s().p("EimjBUYMAAAiovMFNHAAAMAAACovg");
	this.shape_38.setTransform(1066,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},9).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[]},357).wait(170));

	// Darker
	this.instance_22 = new lib.Darker();
	this.instance_22.parent = this;
	this.instance_22.setTransform(960,535,1,1,0,0,0,960,535);
	this.instance_22.alpha = 0.102;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(100).to({_off:false},0).to({alpha:1},18).to({_off:true},287).wait(170));

	// town copy
	this.instance_23 = new lib.town();
	this.instance_23.parent = this;
	this.instance_23.setTransform(960,240.1,1.208,1.208,0,0,0,960,0.1);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(9).to({_off:false},0).to({regX:960.1,scaleX:1,scaleY:1,x:962.1,y:280.2},70,cjs.Ease.get(1)).to({x:1172.1},21,cjs.Ease.get(1)).wait(9).to({_off:true},296).wait(170));

	// sky copy
	this.instance_24 = new lib.sky();
	this.instance_24.parent = this;
	this.instance_24.setTransform(960,488.5,1,1,0,0,0,960,488.5);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(9).to({_off:false},0).to({regY:488.4,scaleX:1.12,scaleY:1.12,y:488.4},70,cjs.Ease.get(1)).to({x:1046},21,cjs.Ease.get(1)).wait(9).to({_off:true},296).wait(170));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	id: '25C150074869884DA9F34E931368ABF0',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Copyright.png?1503916222797", id:"Copyright"},
		{src:"images/cursor.png?1503916222797", id:"cursor"},
		{src:"images/H1.png?1503916222797", id:"H1"},
		{src:"images/hamb.png?1503916222797", id:"hamb"},
		{src:"images/ic03about.png?1503916222797", id:"ic03about"},
		{src:"images/ic1.png?1503916222797", id:"ic1"},
		{src:"images/ic2.png?1503916222797", id:"ic2"},
		{src:"images/ic3.png?1503916222797", id:"ic3"},
		{src:"images/ic4.png?1503916222797", id:"ic4"},
		{src:"images/ic5.png?1503916222797", id:"ic5"},
		{src:"images/ic6.png?1503916222797", id:"ic6"},
		{src:"images/icon2.png?1503916222797", id:"icon2"},
		{src:"images/icon3.png?1503916222797", id:"icon3"},
		{src:"images/icon4.png?1503916222797", id:"icon4"},
		{src:"images/icon5.png?1503916222797", id:"icon5"},
		{src:"images/icon6.png?1503916222797", id:"icon6"},
		{src:"images/Layer4copy2.png?1503916222797", id:"Layer4copy2"},
		{src:"images/sjy.png?1503916222797", id:"sjy"},
		{src:"images/twn.png?1503916222797", id:"twn"}
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
an.compositions['25C150074869884DA9F34E931368ABF0'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;