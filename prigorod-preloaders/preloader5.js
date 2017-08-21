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


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// round
	this.instance = new lib.round();
	this.instance.parent = this;
	this.instance.setTransform(527.2,950,0.5,0.5,0,0,0,10,10);
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({regX:10.1,scaleX:1.25,scaleY:1.25,x:527.3,alpha:1},10,cjs.Ease.get(1)).to({regX:10,scaleX:1,scaleY:1,x:527.2},10,cjs.Ease.get(1)).wait(10).to({scaleX:0.4,scaleY:0.4,alpha:0.102},10,cjs.Ease.get(0.99)).to({scaleX:0.5,scaleY:0.5},10,cjs.Ease.get(0.99)).wait(1));

	// round
	this.instance_1 = new lib.round();
	this.instance_1.parent = this;
	this.instance_1.setTransform(493.7,950,0.5,0.5,0,0,0,10,10);
	this.instance_1.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({regX:10.1,scaleX:1.25,scaleY:1.25,x:493.8,alpha:1},10,cjs.Ease.get(1)).to({regX:10,scaleX:1,scaleY:1,x:493.7},10,cjs.Ease.get(1)).wait(10).to({scaleX:0.4,scaleY:0.4,alpha:0.102},10,cjs.Ease.get(0.99)).to({scaleX:0.5,scaleY:0.5},10,cjs.Ease.get(0.99)).wait(11));

	// round
	this.instance_2 = new lib.round();
	this.instance_2.parent = this;
	this.instance_2.setTransform(460.3,950.2,0.501,0.501,0,0,0,10.3,10.2);
	this.instance_2.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:10.1,regY:10,scaleX:1.25,scaleY:1.25,x:460.2,y:950,alpha:1},9,cjs.Ease.get(1)).to({regX:10,scaleX:1,scaleY:1,x:460.1},10,cjs.Ease.get(1)).wait(10).to({regX:10.5,regY:10.4,scaleX:0.4,scaleY:0.4,x:460.6,y:950.3,alpha:0.102},10,cjs.Ease.get(0.99)).to({regX:10.3,regY:10.2,scaleX:0.5,scaleY:0.5,x:460.3,y:950.2},10,cjs.Ease.get(0.99)).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(455.2,945,77,10.1);


// stage content:
(lib.preloader5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiyD1IAAnpIFgAAIAABwIjeAAIAABLIDJAAIAABuIjJAAIAABQIDjAAIAABwg");
	this.shape.setTransform(1242.1,146.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhyDqQgxgTghgkQghgkgQguQgQguAAgzQAAgzAQguQAQguAhgjQAhgkAxgUQAygVBAABQBBgBAyAVQAxAUAhAkQAgAjARAuQAQAuAAAzQAAAzgQAuQgRAuggAkQghAkgxATQgyAWhBAAQhAAAgygWgAhGh1QgdARgPAeQgOAgAAAmQAAAoAOAeQAPAfAdARQAdATApgBQAqABAdgTQAdgRAPgfQAOgeAAgoQAAgmgOggQgPgegdgRQgdgTgqAAQgpAAgdATg");
	this.shape_1.setTransform(1191.2,146.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABbD1IAAi7Ii1AAIAAC7IiCAAIAAnpICCAAIAAC8IC1AAIAAi8ICBAAIAAHpg");
	this.shape_2.setTransform(1136.1,146.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgjDxQgwgOglgeQgngfgWgvQgXgugBhCQABhEAXgyQAVgyAmggQAmgfAvgQQAugPAzABQAlAAAkAHQAlAIAgAPIAAB7QgYgUgfgJQgfgMgiAAQgnAAgkAQQgiAPgVAhQgXAhgBA0QABAwAXAdQAVAeAiAOQAjAOAmAAQAngBAggKQAhgMAVgVIAAB/QgfAPglAIQgjAHgoABQgzAAgugPg");
	this.shape_3.setTransform(1086.5,146.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AiyD1IAAnpIFgAAIAABwIjeAAIAABLIDJAAIAABuIjJAAIAABQIDjAAIAABwg");
	this.shape_4.setTransform(1042.9,146.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AjND2QgPgCgRgGIAAhwIAPADQAJABAKgBQAXgDAPgZQAPgaAJgoQAJgnAEgxQAFgxACgyIAHhfIFgAAIAAHpIiBAAIAAl2IhqAAQgEBMgKBDQgJBFgUA1QgSA1giAfQggAeg1ABQgOAAgOgCg");
	this.shape_5.setTransform(992,147.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAABFQgTAAgQgHQgPgIgLgPQgJgPAAgYQAAgXAJgPQALgQAPgHQAQgHATAAQAeAAAUARQAVAQABAjQgBAkgVAQQgUARgcAAIgCAAg");
	this.shape_6.setTransform(943.6,165.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AChEoIAAhmIlBAAIAABmIhwAAIAAjWIA4AAQAfg4ARg+QARg/AGhBQAGhCAAhBIFdAAIAAF5IA/AAIAADWgAgmgnQgNBDgdA2ICgAAIAAkFIhkAAQgFBIgNBEg");
	this.shape_7.setTransform(904.8,151.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhyDqQgxgTghgkQghgkgQguQgQguAAgzQAAgzAQguQAQguAhgjQAhgkAxgUQAygVBAABQBBgBAyAVQAxAUAhAkQAgAjARAuQAQAuAAAzQAAAzgQAuQgRAuggAkQghAkgxATQgyAWhBAAQhAAAgygWgAhGh1QgdARgPAeQgOAgAAAmQAAAoAOAeQAPAfAdARQAdATApgBQAqABAdgTQAdgRAPgfQAOgeAAgoQAAgmgOggQgPgegdgRQgdgTgqAAQgpAAgdATg");
	this.shape_8.setTransform(847.6,146.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AjLD1IAAnpIDCAAQA8AAAxAPQAvAQAcAkQAcAlABBAQgBBAgcAkQgcAlgvAPQgxAPg8AAIhAAAIAACagAhJgUIBHAAQATABAQgFQARgFAKgNQALgMAAgWQAAgWgLgMQgKgMgRgFQgQgFgTAAIhHAAg");
	this.shape_9.setTransform(797.2,146.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhyDqQgxgTghgkQghgkgQguQgQguAAgzQAAgzAQguQAQguAhgjQAhgkAxgUQAygVBAABQBBgBAyAVQAxAUAhAkQAgAjARAuQAQAuAAAzQAAAzgQAuQgRAuggAkQghAkgxATQgyAWhBAAQhAAAgygWgAhGh1QgdARgPAeQgOAgAAAmQAAAoAOAeQAPAfAdARQAdATApgBQAqABAdgTQAdgRAPgfQAOgeAAgoQAAgmgOggQgPgegdgRQgdgTgqAAQgpAAgdATg");
	this.shape_10.setTransform(743.8,146.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AiwD1IAAnpIFhAAIAAB0IjfAAIAAF1g");
	this.shape_11.setTransform(697,146.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ABbD1IAAjJIABgpIACgmIi/EYIh6AAIAAnpICBAAIAADIIgBAqIgCAmIC/kYIB6AAIAAHpg");
	this.shape_12.setTransform(648,146.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AjLD1IAAnpIDCAAQA8AAAxAPQAvAQAcAkQAcAlABBAQgBBAgcAkQgcAlgvAPQgxAPg8AAIhAAAIAACagAhJgUIBHAAQATABAQgFQARgFAKgNQALgMAAgWQAAgWgLgMQgKgMgRgFQgQgFgTAAIhHAAg");
	this.shape_13.setTransform(599.4,146.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("ABbD1IAAl1Ii1AAIAAF1IiCAAIAAnpIG4AAIAAHpg");
	this.shape_14.setTransform(547.8,146.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ai3DzIAAg4QAAgrAPgfQANgfAYgXQAXgXAbgRQAbgRAagOIAogXQARgLAMgMQAKgMAAgSQAAgVgRgLQgRgKgbAAQgkAAgpAOQgqAPgnAeIAAh3QAmgaArgNQArgNAuAAQAvAAApAOQApAPAZAhQAZAhAAA0QgBApgSAeQgTAdgdAXQgdAXgeASIguAcQgUANgLAJQgMAKgBAGIDcAAIAABsg");
	this.shape_15.setTransform(890.5,147);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AiNDuIAAhtIBUAAIAAjtIhUAfIAAh0IB0gsIBdAAIAAFuIBKAAIAABtg");
	this.shape_16.setTransform(853.6,147.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgjDxQgwgOglgeQgngfgWgvQgXgugBhCQABhEAXgyQAWgyAlggQAmgfAwgQQAtgPAzABQAlAAAlAHQAkAIAgAPIAAB7QgXgUgggJQgfgMgiAAQgoAAgiAQQgjAPgVAhQgXAhgBA0QABAwAXAdQAWAeAhAOQAjAOAmAAQAngBAhgKQAggMAWgVIAAB/QghAPgkAIQgjAHgoABQgzAAgugPg");
	this.shape_17.setTransform(798.4,146.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhjD6QgTAAgUgDIgngKIAAhrQANAEAOADQAPADAOAAQAYAAAPgIQARgHAIgTIAHgRIi+lSICPAAIBrDfIBYjfICPAAIiwF5QgXAvgZAaQgYAbgeALQgbALggAAIgDAAg");
	this.shape_18.setTransform(751.6,147.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("ABbD1IAAl1Ii1AAIAAF1IiBAAIAAnpIG4AAIAAHpg");
	this.shape_19.setTransform(700.9,146.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("ABTD1Ih2i9Ig9AAIAAC9IiCAAIAAnpICCAAIAAC6IA9AAIBvi6ICQAAIiaDvICgD6g");
	this.shape_20.setTransform(548.4,146.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AiPDuIC2lvIjjAAIAAhsIF5AAIAABXIjAGEg");
	this.shape_21.setTransform(801.7,147.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AiNDuIAAhtIBUAAIAAjtIhUAfIAAh0IBzgsIBeAAIAAFuIBKAAIAABtg");
	this.shape_22.setTransform(765.3,147.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("ADSD1Ihni9IgqAAIAAC9IiBAAIAAi9IgqAAIhnC9IiPAAICMj6IiFjvICPAAIBfC6IArAAIAAi6ICBAAIAAC6IAqAAIBfi6ICQAAIiFDvICMD6g");
	this.shape_23.setTransform(697.6,146.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("ACCD1IgchNIjLAAIgcBNIiFAAIDBnpICLAAIDBHpgAA/A/IgyiNIgHgTIgGgeQgCATgDALIgHATIgyCNIB9AAg");
	this.shape_24.setTransform(635.8,146.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AhAD1IAAl1IiKAAIAAh0IGVAAIAAB0IiKAAIAAF1g");
	this.shape_25.setTransform(588.3,146.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AiHD4QgkgIgggPIAAh/QAYAXAfAKQAfAJAiAAQAlABAggIQAfgGAXgUQAXgSAKgjIjKAAIAAhsIDIAAQgLgigWgTQgWgSgegIQgegGgkAAQggAAghAJQghAJgZAUIAAh7QAggPAlgIQAkgHAmAAQAxgBAvAPQAvAQAmAfQAmAgAWAyQAWAyABBEQgBBBgWAwQgXAugmAfQgmAegwAOQguAPgzAAQglgBgjgHg");
	this.shape_26.setTransform(544.5,146.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:797.2}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:1191.2}},{t:this.shape}]}).to({state:[{t:this.shape_20},{t:this.shape_1,p:{x:598.9}},{t:this.shape_9,p:{x:652.3}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},74).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},75).wait(76));

	// load
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(316.3,-440.1,0.779,0.752,0,0,0,294.5,141.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(225));

	// Layer 2
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F6F6F6").s().p("EhBPATnMAAAgnNMCCfAAAMAAAAnNg");
	this.shape_27.setTransform(806.7,200.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(225));

	// Layer 1
	this.instance_1 = new lib.Bitmap1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(225));

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
		{src:"images/Bitmap1.jpg?1503325872542", id:"Bitmap1"}
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