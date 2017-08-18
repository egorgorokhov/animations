(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);// helper functions:

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


(lib.round = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4EAD24").s().p("AhGBHQgdgdAAgqQAAgpAdgcQAdgeApAAQApAAAdAeQAeAcAAApQAAAqgeAdQgdAdgpAAQgpAAgdgdg");
	this.shape.setTransform(10,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round, new cjs.Rectangle(0,0,20,20), null);


// stage content:
(lib.preloader = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// round
	this.instance = new lib.round();
	this.instance.parent = this;
	this.instance.setTransform(540.1,950,0.5,0.5,0,0,0,10,10);
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({regX:10.1,scaleX:1.25,scaleY:1.25,x:540.2,alpha:1},10,cjs.Ease.get(1)).to({regX:10,scaleX:1,scaleY:1,x:540.1},10,cjs.Ease.get(1)).wait(10).to({scaleX:0.4,scaleY:0.4,alpha:0.102},10,cjs.Ease.get(0.99)).to({scaleX:0.5,scaleY:0.5},10,cjs.Ease.get(0.99)).wait(1));

	// round
	this.instance_1 = new lib.round();
	this.instance_1.parent = this;
	this.instance_1.setTransform(500.1,950,0.5,0.5,0,0,0,10,10);
	this.instance_1.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({regX:10.1,scaleX:1.25,scaleY:1.25,x:500.2,alpha:1},10,cjs.Ease.get(1)).to({regX:10,scaleX:1,scaleY:1,x:500.1},10,cjs.Ease.get(1)).wait(10).to({scaleX:0.4,scaleY:0.4,alpha:0.102},10,cjs.Ease.get(0.99)).to({scaleX:0.5,scaleY:0.5},10,cjs.Ease.get(0.99)).wait(11));

	// round
	this.instance_2 = new lib.round();
	this.instance_2.parent = this;
	this.instance_2.setTransform(460.3,950.2,0.501,0.501,0,0,0,10.3,10.2);
	this.instance_2.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:10.1,regY:10,scaleX:1.25,scaleY:1.25,x:460.2,y:950,alpha:1},9,cjs.Ease.get(1)).to({regX:10,scaleX:1,scaleY:1,x:460.1},10,cjs.Ease.get(1)).wait(10).to({regX:10.5,regY:10.4,scaleX:0.4,scaleY:0.4,x:460.6,y:950.3,alpha:0.102},10,cjs.Ease.get(0.99)).to({regX:10.3,regY:10.2,scaleX:0.5,scaleY:0.5,x:460.3,y:950.2},10,cjs.Ease.get(0.99)).wait(21));

	// Layer 1
	this.instance_3 = new lib.Bitmap1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,1920,1080);
// library properties:
lib.properties = {
	id: '88296F520F035B409C8710CBE89F92EB',
	width: 1920,
	height: 1080,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap1.jpg?1503039346055", id:"Bitmap1"}
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
an.compositions['88296F520F035B409C8710CBE89F92EB'] = {
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