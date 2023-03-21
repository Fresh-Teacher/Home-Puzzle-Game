(function(cjs, an) {

    var p; // shortcut to reference prototypes
    var lib = {};
    var ss = {};
    var img = {};
    lib.ssMetadata = [{
        name: "12_laberinto_buhos_atlas_",
        frames: [
            [0, 273, 270, 219],
            [0, 0, 339, 271],
            [272, 273, 235, 152],
            [341, 0, 151, 172],
            [454, 221, 50, 33],
            [96, 494, 65, 81],
            [454, 174, 41, 45],
            [0, 494, 94, 80],
            [163, 494, 33, 42],
            [272, 427, 152, 130],
            [426, 427, 81, 80],
            [341, 174, 111, 71]
        ]
    }];


    // symbols:



    (lib.Mapadebits1 = function() {
        this.spriteSheet = ss["12_laberinto_buhos_atlas_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.Mapadebits10 = function() {
        this.spriteSheet = ss["12_laberinto_buhos_atlas_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.Mapadebits11 = function() {
        this.spriteSheet = ss["12_laberinto_buhos_atlas_"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.Mapadebits12 = function() {
        this.spriteSheet = ss["12_laberinto_buhos_atlas_"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.Mapadebits2 = function() {
        this.spriteSheet = ss["12_laberinto_buhos_atlas_"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.Mapadebits3 = function() {
        this.spriteSheet = ss["12_laberinto_buhos_atlas_"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.Mapadebits4 = function() {
        this.spriteSheet = ss["12_laberinto_buhos_atlas_"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.Mapadebits5 = function() {
        this.spriteSheet = ss["12_laberinto_buhos_atlas_"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.Mapadebits6 = function() {
        this.spriteSheet = ss["12_laberinto_buhos_atlas_"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();



    (lib.Mapadebits7 = function() {
        this.spriteSheet = ss["12_laberinto_buhos_atlas_"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();



    (lib.Mapadebits8 = function() {
        this.spriteSheet = ss["12_laberinto_buhos_atlas_"];
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();



    (lib.Mapadebits9 = function() {
        this.spriteSheet = ss["12_laberinto_buhos_atlas_"];
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();
    // helper functions:

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


    (lib.Símbolo7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AgCAhQgFACgFAAQgIAAgHgGQgFgFgBgHQAAgHAFgFIgCgCQgHgGAAgJQAAgKAHgHQAGgGAJAAQAJAAAFAGQAHgGAJAAQAJAAAHAGQAGAHAAAJQABAJgHAFIADABQADAEAAAEQAAAFgDADIgFADQgBAFgFAEQgGAGgJAAQgGAAgEgDg");
        this.shape.setTransform(3.8, 3.6);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Símbolo7, new cjs.Rectangle(0, 0, 7.5, 7.3), null);


    (lib.playagainbtn = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#CC3300").s().p("AmeFEQgIgDgDgIIgBgHIAAgFIAQiKQADgcAWgHQAKgDAKAEQAJAEAHALIBQBxIAFAHIABAGQADAJgEAGQgEAHgKACQgHACgHgDQgHgEgFgJIgKgPIhEATIgBATQAAAJgEAGIgEAGIgGACIgHABQgFAAgFgDgAl7D0IAsgMIgmg2gAi7EJQgRgCgQgKQgQgKgKgPQgLgPgFgUQgGgVACgTQABgSAJgQQAJgRAOgLQAOgKATgFQALgDALgBQAKAAAKACQASAFAEAMQACAJgDAHQgDAHgHADQgDABgFgBIgKgBQgFgCgGAAQgHAAgGACQgKACgIAGQgHAGgFAJQgEAJgBALQAAAKADAMQADAMAGAJQAFAIAJAGQAIAGAKABQAJACALgDQAJgCAGgFQAGgEAEgGIAEgNQACgGgBgFIgjAJQgJADgHgEQgGgEgDgJQgCgIAEgHQADgGAKgCIA1gPQANgDAGAFQAGAFAEAMQAFAUgCAQQgCARgIAOQgQAdghAJQgNAEgNAAIgMgBgAgvDiQgHgEgDgIIgBgHIAAgFIAPiJQADgdAWgGQALgDAIAEQAJAEAIALIBQBxIAEAHIACAFQACAJgEAGQgEAHgJADQgIACgGgEQgHgEgGgIIgJgPIhEASIAAATQgBAKgEAGIgEAFIgGADIgGABQgGAAgFgDgAgMCSIArgMIgkg2gACJCtQgHgEgEgNIgih+QgEgPAEgIQAEgHAJgCQAJgCAHAEQAHADAEANIAjCBQADANgEAHQgEAIgJACIgHABQgFAAgEgDgADWCYQgHgEgEgNIgkiHQgCgIADgHQAEgGAKgDQAGgBAHACQAGABAHAGIBWBIIgXhMQgDgNAEgHQAEgIAJgCQAJgDAHAFQAHAEAEANIAkCGQACAJgEAHQgDAHgKACQgGACgHgCQgHgCgGgGIhVhIIAWBMQADANgEAHQgEAIgJACIgHABQgFAAgEgDgAGKBrQgIgFgDgJQgCgKAFgHQAEgIAJgDQAJgCAIAFQAIAEADAJQACAKgFAIQgEAIgJACIgGABQgGAAgFgDgAF8A1QgHgEgEgNIgVhPQgDgNADgHQAEgIAKgCQAIgDAIAFQAHAEAEANIAVBPQADANgEAHQgEAIgIACIgIABQgFAAgEgDgAljAAQgHgDgDgNIgliIQgDgLAEgEQAFgFAJgCIAhgJQAWgGARADQARAEALALQALAMAFASQAIAdgMAUQgNAUghAKIgNADIAJAgQADANgEAHQgEAHgJACIgGABQgFAAgFgDgAlYiUIgNADIAOAxIAMgDQAOgEAFgHQAFgIgDgMQgDgMgJgFQgFgDgGAAQgFAAgGACgAjOgkQgGgCgCgLIgkiIQgEgNAEgHQAEgHAJgDQAJgCAHAEQAHAEAEANIAfB0IAsgMQAJgCAHADQAGADADAJQACAKgEAGQgEAGgJADIhBARQgHADgEAAIgFgCgAhShFQgIgDgDgIIgBgHIAAgFIAQiKQADgdAWgGQAKgDAKAEQAJAEAHALIBPBxIAFAHIABAGQADAIgEAHQgEAHgKACQgHACgHgDQgHgEgFgJIgKgPIhDATIgBATQAAAJgEAGIgEAGIgGACIgHABQgFAAgFgDgAgviVIAsgMIgmg2gACTiGQgHgEgEgMIgKgnIhIhCQgKgIgBgJQgCgIAGgHQAGgIAIgBQAIAAALAIIA3A1IAWhKQAFgMAIgEQAIgDAIADQAIAEAEAIQADAIgFAMIgeBdIALAnQADANgEAHQgEAHgJADIgGABQgFAAgFgEg");
        this.shape.setTransform(60.4, 47.6);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#CC3300").s().p("Aheh5IC9B5Ii9B6g");
        this.shape_1.setTransform(63.7, 87.9);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFCC00").s().p("Aj/G9Qi5hrg3jNQg3jMBqi5QBri4DNg3QDNg3C4BqQC4BrA4DNQA2DNhqC4QhqC4jOA3QhGAThDAAQiDAAh4hGg");
        this.shape_2.setTransform(58.9, 58.9);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#CC3300").s().p("AklH9QjTh6g/jrQg/jqB6jTQB6jTDrg/QDqg/DSB6QDTB6A/DrQA/Dqh5DTQh6DSjrA/QhQAWhNAAQiVAAiLhQg");
        this.shape_3.setTransform(58.9, 58.9);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#333333").s().p("AmeFEQgIgDgDgIIgBgHIAAgFIAQiKQADgcAWgHQAKgDAKAEQAJAEAHALIBQBxIAFAHIABAGQADAJgEAGQgEAHgKACQgHACgHgDQgHgEgFgJIgKgPIhEATIgBATQAAAJgEAGIgEAGIgGACIgHABQgFAAgFgDgAl7D0IAsgMIgmg2gAi7EJQgRgCgQgKQgQgKgKgPQgLgPgFgUQgGgVACgTQABgSAJgQQAJgRAOgLQAOgKATgFQALgDALgBQAKAAAKACQASAFAEAMQACAJgDAHQgDAHgHADQgDABgFgBIgKgBQgFgCgGAAQgHAAgGACQgKACgIAGQgHAGgFAJQgEAJgBALQAAAKADAMQADAMAGAJQAFAIAJAGQAIAGAKABQAJACALgDQAJgCAGgFQAGgEAEgGIAEgNQACgGgBgFIgjAJQgJADgHgEQgGgEgDgJQgCgIAEgHQADgGAKgCIA1gPQANgDAGAFQAGAFAEAMQAFAUgCAQQgCARgIAOQgQAdghAJQgNAEgNAAIgMgBgAgvDiQgHgEgDgIIgBgHIAAgFIAPiJQADgdAWgGQALgDAIAEQAJAEAIALIBQBxIAEAHIACAFQACAJgEAGQgEAHgJADQgIACgGgEQgHgEgGgIIgJgPIhEASIAAATQgBAKgEAGIgEAFIgGADIgGABQgGAAgFgDgAgMCSIArgMIgkg2gACJCtQgHgEgEgNIgih+QgEgPAEgIQAEgHAJgCQAJgCAHAEQAHADAEANIAjCBQADANgEAHQgEAIgJACIgHABQgFAAgEgDgADWCYQgHgEgEgNIgkiHQgCgIADgHQAEgGAKgDQAGgBAHACQAGABAHAGIBWBIIgXhMQgDgNAEgHQAEgIAJgCQAJgDAHAFQAHAEAEANIAkCGQACAJgEAHQgDAHgKACQgGACgHgCQgHgCgGgGIhVhIIAWBMQADANgEAHQgEAIgJACIgHABQgFAAgEgDgAGKBrQgIgFgDgJQgCgKAFgHQAEgIAJgDQAJgCAIAFQAIAEADAJQACAKgFAIQgEAIgJACIgGABQgGAAgFgDgAF8A1QgHgEgEgNIgVhPQgDgNADgHQAEgIAKgCQAIgDAIAFQAHAEAEANIAVBPQADANgEAHQgEAIgIACIgIABQgFAAgEgDgAljAAQgHgDgDgNIgliIQgDgLAEgEQAFgFAJgCIAhgJQAWgGARADQARAEALALQALAMAFASQAIAdgMAUQgNAUghAKIgNADIAJAgQADANgEAHQgEAHgJACIgGABQgFAAgFgDgAlYiUIgNADIAOAxIAMgDQAOgEAFgHQAFgIgDgMQgDgMgJgFQgFgDgGAAQgFAAgGACgAjOgkQgGgCgCgLIgkiIQgEgNAEgHQAEgHAJgDQAJgCAHAEQAHAEAEANIAfB0IAsgMQAJgCAHADQAGADADAJQACAKgEAGQgEAGgJADIhBARQgHADgEAAIgFgCgAhShFQgIgDgDgIIgBgHIAAgFIAQiKQADgdAWgGQAKgDAKAEQAJAEAHALIBPBxIAFAHIABAGQADAIgEAHQgEAHgKACQgHACgHgDQgHgEgFgJIgKgPIhDATIgBATQAAAJgEAGIgEAGIgGACIgHABQgFAAgFgDgAgviVIAsgMIgmg2gACTiGQgHgEgEgMIgKgnIhIhCQgKgIgBgJQgCgIAGgHQAGgIAIgBQAIAAALAIIA3A1IAWhKQAFgMAIgEQAIgDAIADQAIAEAEAIQADAIgFAMIgeBdIALAnQADANgEAHQgEAHgJADIgGABQgFAAgFgEg");
        this.shape_4.setTransform(60.4, 47.6);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#CC3300").s().p("Eg4oAZWMAAAgyrMBxRAAAMAAAAyrg");
        this.shape_5.setTransform(50.6, 55.7);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape_4
            }]
        }, 1).to({
            state: [{
                t: this.shape_5
            }]
        }, 2).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 117.8, 117.8);


    (lib.play_btn = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#CC3300").s().p("AmTBqQgKgCgJgGQgJgFgFgFQgEgHAAgGQAAgKAGgGQAHgHALAAIAHACIAJAEIAMAFIAKABQANAAAHgGQAHgGgBgIQAAgGgBgEQgCgFgEgDIgKgFIgQgHQgagJgNgNQgOgQAAgWQAAgOAFgMQAFgKAJgJQAVgRAeABQAZgBAOAIQAOAJAAAOQAAAKgFAGQgFAGgLgBQgFABgIgFQgDgDgFgBQgFgBgFAAQgLAAgFAFQgHAFAAAJQAAAOAcAKQAQAGALAGQAMAHAHAGQAGAHAEAJQAEAKAAAMQgBAQgFAMQgGAMgKAJQgLAJgNAFQgOAEgRAAQgNAAgLgCgAGOBiQgHgHAAgKQAAgLAIgHQAGgIALAAQAKAAAIAIQAHAHAAAKQAAALgHAHQgIAHgKABQgMAAgGgIgAALBkQgGgGgEgLIgFgTIhPAAIgGAUQgEALgFAFIgHAFQgDABgEAAQgLAAgHgHQgHgHgBgJIACgHIABgGIA4iQQAMgdAZAAQANgBAJAHQAJAHAEAOIA1CQIACAKIACAFQgBALgGAGQgHAFgKABQgJAAgGgGgAhFAWIA0ABIgahFgAjZBnQgLgBgHgGQgFgHgBgPIABiFIgdAAQgLAAgGgGQgGgFAAgLQAAgKAGgGQAGgGALABIBoAAQAKAAAGAFQAFAFACALQgBALgGAFQgGAFgLABIgcAAIABCFQgCAPgGAHQgGAHgJAAIgBAAgAEYBgQgGgHAAgPIAAiFIgdAAQgLgBgFgFQgHgFABgLQAAgLAGgEQAFgGAMAAIBngBQALABAGAFQAFAGABAKQAAALgHAFQgFAGgLgBIgcABIAACGQgBAOgGAHQgGAHgLAAQgKgBgHgGgABLBhQgGgIAAgPIAAidQAAgMAGgDQAFgFALABIApAAQAlAAAUARQAUARAAAeQAAAMgDALQgDAKgHAIQgFAHgHAFQgHAFgHACIAdAkIAHAJQADAGAAAIQgBAJgFAGQgGAGgJAAQgHAAgFgDQgGgCgFgHIgxhCIAAAyQgBAPgGAHQgGAHgLAAQgKgBgHgFgAB0gMIAQAAQAOAAAIgGQAHgGABgLQgBgLgHgHQgIgGgOAAIgQAAgAGPAkQgHgHAAgOIAAhcQABgPAGgHQAGgHALAAQAKAAAHAHQAGAGAAAQIAABbQAAAPgHAHQgGAHgLAAQgKAAgGgHg");
        this.shape.setTransform(59, 58.6);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFCC00").s().p("Aj/G9Qi5hrg3jNQg3jMBqi5QBri4DNg3QDNg3C4BqQC4BrA4DNQA2DNhqC4QhqC4jOA3QhGAThDAAQiDAAh4hGg");
        this.shape_1.setTransform(58.9, 58.9);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#CC3300").s().p("AklH9QjTh6g/jrQg/jqB6jTQB6jTDrg/QDqg/DSB6QDTB6A/DrQA/Dqh5DTQh6DSjrA/QhQAWhNAAQiVAAiLhQg");
        this.shape_2.setTransform(58.9, 58.9);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#CC3300").s().p("AEuC8QgKgDgFgJQgFgIADgKQACgLAJgFQAIgEALACQAKADAFAJQAFAIgCAKQgEAKgIAGQgGADgGAAIgHgBgACvCXQgJgDgFgIQgFgIAEgOIAMgrIghhlQgFgOAEgIQADgJAJgEQAKgEAIAEQAJAEAFAOIAYBQIA9g5QAMgKAJABQAJABAGAIQAGAIgBAJQgBAJgLAJIhQBIIgLArQgEAOgIAFQgFADgGAAIgHgBgAE+CBQgKgDgEgIQgEgIADgPIAYhXQAEgNAIgGQAHgEAKADQAKACAFAIQAEAHgEAPIgXBXQgEAOgIAFQgFAEgHAAIgGgBgAFMA4IAAABIABgCIAAgBIgBACgAA9B7QgIgCgFgGQgEgIgBgLIgBgUIhJgUIgMARQgGAKgGAEQgEACgDAAIgHgBQgLgCgFgIQgGgJADgIIACgIIAEgFIBYh5QAUgaAYAHQAMADAGAJQAHAJABAOIAOCXIAAAJIgBAGQgDAJgHAEQgFADgFAAIgIgCgAgHAUIAvANIgGhHgAh9BGIhIgTQgNgDgDgFQgEgGADgKIApiWQADgOAJgEQAHgGAKAEQAKACAFAIQAEAIgEAOIgiB/IAxAMQAKADAEAHQAEAHgCAKQgDAKgHAEQgEACgFAAIgIgBgAliAJQgKgDgFgHQgFgIAEgOIAoiWQAEgMAHgCQAGgCAKACIAkAKQAYAGAOANQAPANAEARQAFARgGAVQgIAfgXANQgWAMgmgKIgOgDIgJAkQgEANgIAEQgFAEgGAAIgGgBgAkxhYIAOAEQAPAEAKgFQAJgEAEgNQADgNgFgKQgGgJgPgEIgOgEg");
        this.shape_3.setTransform(58.1, 58.9);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#CC3300").s().p("Eg4wAZoMAAAgzPMBxhAAAMAAAAzPg");
        this.shape_4.setTransform(-192.3, 101.8);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape_3
            }]
        }, 1).to({
            state: [{
                t: this.shape_4
            }]
        }, 2).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 117.8, 117.8);


    (lib.PERSONAJE2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa_1
        this.instance = new lib.Mapadebits2();
        this.instance.parent = this;
        this.instance.setTransform(-19.9, -13.2, 0.798, 0.798);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.PERSONAJE2, new cjs.Rectangle(-19.9, -13.2, 39.9, 26.4), null);


    (lib.pared3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#232B0F").s().p("Eg5BAcrMAAAg5VMByDAAAMAAAA5VgA3+qrIAAfJMAysAAAIAAF2IF4AAIAAl2IRRAAIAAx0IxRAAIAAn6IXQAAIAAl4I3QAAIAAlcMghLAAAIAAmzIl5AAIAAaBIrnAAIAAzOIy6AAIAAHSImPAAIAAuNIl4AAIAAONIm8AAIAAF3ITDAAIAAH2IF5AAIAAvGgEAgmAOmIAAmDILZAAIAAGDgAglOmIAAmDIbTAAIAAGDgAyFOmIAAmDILnAAIAAGDgATKCqIAAtVIHkAAIAANVgAglCqIAAtVIN3AAIAANVg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.pared3, new cjs.Rectangle(-365, -183.5, 730, 367), null);


    (lib.pared2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#232B0F").s().p("Eg5BAcrMAAAg5VMByDAAAMAAAA5VgEAsZAQkIAAJcIF5AAIAA0kIF0AAIAAl3Il0AAIAAx7Il5AAIAAKcIrZAAIAAs0MghLAAAIgBioIl4AAIAANxMggFAAAIAApaIx3AAIAAF5IL+AAIAAJaMAl+AAAIAAH1I41AAIAAUZIF4AAIAAugIHYAAIAAP+IF5AAIAAjjMAm4AAAIAADjIF2AAIAAmXIACAAIAAjFgAQoQkIAAnCIKgAAIAAHCgArwQkIAAmiILiAAIAAikIADAAIAA2TIbTAAIAASeIqgAAIAAgBIl4AAIAAM8gEAhAAKsIAAstILZAAIAAMtg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.pared2, new cjs.Rectangle(-365, -183.5, 730, 367), null);


    (lib.pared = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#232B0F").s().p("Eg5BAcrMAAAg5VMByDAAAMAAAA5VgAFQMmIAALjIdTAAIAABvIF5AAIAAhvIPhAAIAAl5IvhAAIAA9/IPhAAIAAl5MgyEAAAIAAmMIl4AAIAAGMMghsAAAIAAMeIoLAAIAAyqIl5AAIAAYhIOEAAIAAABIF4AAIAAgBIKPAAIAAVuIR4AAIAAp1gAXKSQIAAmLILZAAIAAGLgALISQIAAriIwrAAIAAJ0ImIAAIAA8RILsAAIAAMSIRRAAIAARtgAXKGNIAArhIxRAAIAAmbIcqAAIAAR8gA7zlKIAAmlIKPAAIAAGlg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.pared, new cjs.Rectangle(-365, -183.5, 730, 367), null);


    (lib.obstaculo = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa_3
        this.instance = new lib.Mapadebits3();
        this.instance.parent = this;
        this.instance.setTransform(-15, -19, 0.469, 0.469);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.obstaculo, new cjs.Rectangle(-15, -19, 30.5, 38), null);


    (lib.Interpolación2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa_1
        this.instance = new lib.Mapadebits9();
        this.instance.parent = this;
        this.instance.setTransform(55.5, -35.5, 1, 1, 0, 0, 180);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-55.5, -35.5, 111, 71);


    (lib.Interpolación1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa_1
        this.instance = new lib.Mapadebits9();
        this.instance.parent = this;
        this.instance.setTransform(55.5, -35.5, 1, 1, 0, 0, 180);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-55.5, -35.5, 111, 71);


    (lib.casita = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa_1
        this.instance = new lib.Mapadebits1();
        this.instance.parent = this;
        this.instance.setTransform(-135, -109.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.casita, new cjs.Rectangle(-135, -109.5, 270, 219), null);


    (lib.btn_menu = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#009999").s().p("ACAArQgMgIAAgSIAAhDIAgAAIAABAQAAAHADADQADADAGAAQAGAAADgCQAEgCABgDIAAgMIAAg6IAZAAIAABBQAAATgMAJQgLAIgSAAQgTAAgLgIgABLAxIgbgsQgGgHgFgNQACAKAAAGIAAAwIgZAAIAAhjIAdAAIAYAlQAHALADAHQgCgMAAgNIAAgeIAZAAIAABjgAhIAxIAAhjIBKAAIAAAXIgsAAIAAAPIAlAAIAAAVIglAAIAAAQIAsAAIAAAYgAh1AxIAAhGIgTBGIgTAAIgUhGIAABGIgXAAIAAhjIApAAIAOA0IAOg0IAoAAIAABjg");
        this.shape.setTransform(43.3, 9.9);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AkMBcIhRhSQgKgKAKgKIBRhRQAGgFAGABIABAAIAABDQAFgCAGAAIAwAAIABAAIAAgSQABgvAxAAIHCAAQAyAAAAAyIAABbQAAAygyAAInCAAQgwAAgCgvIAAgSIgBAAIgwAAQgGAAgFgCIAABDIgBAAIgBAAQgGAAgFgEg");
        this.shape_1.setTransform(35.5, 9.6);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#333333").s().p("ACAArQgMgIAAgSIAAhDIAgAAIAABAQAAAHADADQADADAGAAQAGAAADgCQAEgCABgDIAAgMIAAg6IAZAAIAABBQAAATgMAJQgLAIgSAAQgTAAgLgIgABLAxIgbgsQgGgHgFgNQACAKAAAGIAAAwIgZAAIAAhjIAdAAIAYAlQAHALADAHQgCgMAAgNIAAgeIAZAAIAABjgAhIAxIAAhjIBKAAIAAAXIgsAAIAAAPIAlAAIAAAVIglAAIAAAQIAsAAIAAAYgAh1AxIAAhGIgTBGIgTAAIgUhGIAABGIgXAAIAAhjIApAAIAOA0IAOg0IAoAAIAABjg");
        this.shape_2.setTransform(43.3, 9.9);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("AgXAfQgNAAgJgJQgJgJAAgNQAAgMAJgJQAJgJANAAIAvAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAg");
        this.shape_3.setTransform(13.4, 9.6);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AAlBcIhQhSQgLgKALgKIBQhRQAFgFAGABIABAAIAAC/IgBAAIgBAAQgFAAgFgEg");
        this.shape_4.setTransform(5, 9.6);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFFFFF").s().p("AjgBgQgxAAgBgvIAAhhQABgvAxAAIHBAAQAyAAAAAyIAABbQAAAygyAAg");
        this.shape_5.setTransform(43.5, 9.6);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#009999").s().p("ApDC0IAAlnISHAAIAAFng");
        this.shape_6.setTransform(49.5, 10.6);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }]
        }, 1).to({
            state: [{
                t: this.shape_6
            }]
        }, 2).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 71, 19.3);


    (lib.botonvirtual = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#CC3300").s().p("AgkCYIAAi1IgwAAIBUh6IBWB6IgxAAIAAC1g");
        this.shape.setTransform(0.1, 0);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#CCCCCC").s().p("AjYD7QgiAAAAgiIAAmxQAAgiAiAAIGxAAQAiAAAAAiIAAGxQAAAigiAAg");

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(4));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-25.1, -25.1, 50.3, 50.3);


    (lib.asfasf = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#CCCCCC").s().p("Ak1FoQgyAAAAgyIAAprQAAgyAyAAIJrAAQAyAAAAAyIAAJrQAAAygyAAg");
        this.shape.setTransform(36, 36);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.asfasf, new cjs.Rectangle(0, 0, 72, 72), null);


    (lib.s = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa 3
        this.instance = new lib.Símbolo7();
        this.instance.parent = this;
        this.instance.setTransform(3.8, 3.6, 1, 1, 0, 0, 0, 3.8, 3.6);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({
            _off: false
        }, 0).to({
            scaleX: 1.1,
            scaleY: 1.1,
            rotation: 6,
            x: 5.3,
            y: -13.1
        }, 8).to({
            scaleX: 1.84,
            scaleY: 1.84,
            rotation: 50,
            x: -13.8,
            y: -98.7
        }, 57).to({
            scaleX: 3.21,
            scaleY: 3.21,
            rotation: 24.5,
            x: -20.4,
            y: -138.1,
            alpha: 0
        }, 25).wait(1));

        // Capa 2
        this.instance_1 = new lib.Símbolo7();
        this.instance_1.parent = this;
        this.instance_1.setTransform(3.8, 3.6, 1, 1, 0, 0, 0, 3.8, 3.6);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({
            _off: false
        }, 0).to({
            scaleX: 1.21,
            scaleY: 1.21,
            rotation: 17.3,
            x: 5.2,
            y: -12
        }, 8).to({
            scaleX: 2.71,
            scaleY: 2.71,
            rotation: 140.3,
            x: -13.8,
            y: -98.6
        }, 57).to({
            scaleX: 3.74,
            scaleY: 3.74,
            rotation: 0,
            x: -20.4,
            y: -138.1,
            alpha: 0
        }, 25).to({
            _off: true
        }, 1).wait(16));

        // Capa 1
        this.instance_2 = new lib.Símbolo7();
        this.instance_2.parent = this;
        this.instance_2.setTransform(3.8, 3.6, 1, 1, 0, 0, 0, 3.8, 3.6);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({
            scaleX: 1.14,
            scaleY: 1.14,
            rotation: -6,
            x: 6,
            y: -12.7
        }, 11).to({
            scaleX: 1.84,
            scaleY: 1.84,
            rotation: -35.7,
            x: -13.7,
            y: -98.8
        }, 54).to({
            scaleX: 2.16,
            scaleY: 2.16,
            rotation: -57.7,
            x: -20.6,
            y: -138.2,
            alpha: 0
        }, 25).to({
            _off: true
        }, 1).wait(35));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 7.5, 7.3);


    (lib.jugador = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

        // Capa_3
        this.instance = new lib.PERSONAJE2();
        this.instance.parent = this;
        this.instance.setTransform(0.1, -0.1, 1, 1.001, 0, 90, -90, 0.1, -0.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            regX: 0,
            regY: 0,
            scaleY: 1,
            skewX: 0,
            skewY: 0,
            x: 0,
            y: 0
        }, 0).wait(1).to({
            regX: 0.1,
            regY: -0.1,
            scaleY: 1,
            skewX: -90,
            skewY: 90,
            x: -0.1,
            y: 0.1
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleY: 1,
            skewX: 0,
            skewY: 180,
            x: 0,
            y: 0
        }, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-13.1, -19.9, 26.4, 39.9);


    (lib.autofinal = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_35 = function() {
            playSound("bocina1");
        }
        this.frame_106 = function() {
            playSound("bocina2");
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(35).call(this.frame_35).wait(71).call(this.frame_106).wait(58));

        // Capa_3
        this.instance = new lib.Interpolación2("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-859.5, 0, 1, 1, 0, 0, 180);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(85).to({
            _off: false
        }, 0).to({
            x: 0.5
        }, 78).wait(1));

        // Capa_1
        this.instance_1 = new lib.Interpolación1("synched", 0);
        this.instance_1.parent = this;

        this.instance_2 = new lib.Interpolación2("synched", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(-859.5, 0);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }]
        }).to({
            state: [{
                t: this.instance_2
            }]
        }, 84).to({
            state: []
        }, 1).wait(79));
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({
            _off: true,
            x: -859.5
        }, 84).wait(80));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-55.5, -35.5, 111, 71);


    (lib.sdfasfd = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();


            this.play_again.removeAllEventListeners();

            this.play_again.on("click", onReplay.bind(this));


            function onReplay(e) {
                this.parent.gotoAndStop(1);

            }
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // Layer 4
        this.instance = new lib.Mapadebits11();
        this.instance.parent = this;
        this.instance.setTransform(315, 80);

        this.play_again = new lib.playagainbtn();
        this.play_again.name = "play_again";
        this.play_again.parent = this;
        this.play_again.setTransform(280.5, 13.2, 1, 1, 0, 0, 0, 64, 64);
        new cjs.ButtonHelper(this.play_again, 0, 1, 2, false, new lib.playagainbtn(), 3);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.play_again
            }, {
                t: this.instance
            }]
        }).wait(1));

        // Capa_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#232B0F").s().p("Eg4jADeIAAm7MBxHAAAIAAG7g");
        this.shape.setTransform(198.1, 220.1);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // Capa_2
        this.auto = new lib.autofinal();
        this.auto.name = "auto";
        this.auto.parent = this;
        this.auto.setTransform(624.6, 162.5);

        this.instance_1 = new lib.Mapadebits12();
        this.instance_1.parent = this;
        this.instance_1.setTransform(349, 34);

        this.instance_2 = new lib.Mapadebits10();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-68, -59);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.auto
            }]
        }).wait(1));

        // Capa_4
        this.instance_3 = new lib.s();
        this.instance_3.parent = this;
        this.instance_3.setTransform(71, -5.5, 2.147, 2.147, 0, 0, 0, 3.7, 3.6);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

    }).prototype = getMCSymbolPrototype(lib.sdfasfd, new cjs.Rectangle(-164, -59, 844.1, 301.3), null);


    // stage content:
    (lib._12laberintobuhos = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();


            createjs.Touch.enable(stage, true);

            this.play_btn.removeAllEventListeners();
            this.play_btn.on("click", onPlay.bind(this));




            function onPlay(e) {
                this.gotoAndStop(1);
            }


            this.menu_btn.addEventListener("click", navega);

            function navega() {
                window.open("//www.freshteacher.software", "_parent");
            }
        }
        this.frame_1 = function() {
            this.stop();
            playSound("silbato22");


            var player = new Player(this.personaje, this.pared, this.puerta, onEndLevel.bind(this), [this.o1, this.o2, this.o3, this.o4]);

            this.on("tick", update.bind(this));


            function update(e) {
                player.update();
            }

            function onEndLevel(e) {
                player.clear();
                this.removeAllEventListeners();
                this.gotoAndStop(2);
                playSound("pop2");
            }
        }
        this.frame_2 = function() {
            this.stop();




            var player = new Player(this.personaje, this.pared2, this.puerta2, onEndLevel.bind(this), [this.o1_b, this.o2_b, this.o3_b, this.o4_b, this.o5_b]);

            this.on("tick", update.bind(this));

            function update(e) {
                player.update();
            }

            function onEndLevel(e) {
                player.clear();
                this.removeAllEventListeners();
                this.gotoAndStop(3);
                playSound("pop2");
            }
        }
        this.frame_3 = function() {
            this.stop();

            var player = new Player(this.personaje, this.pared3, this.puerta3, onEndLevel.bind(this), [this.o1_c, this.o2_c, this.o3_c, this.o4_c, this.o5_c]);

            this.on("tick", update.bind(this));

            function update(e) {
                player.update();
            }




            function onEndLevel(e) {

                player.clear();
                this.removeAllEventListeners();
                this.personaje.visible = false;


                // hidden buttons virtual
                if (this["btn_up"]) {
                    this.btn_up.visible = false;
                }
                if (this["btn_down"]) {
                    this.btn_down.visible = false;
                }
                if (this["btn_left"]) {
                    this.btn_left.visible = false;
                }
                if (this["btn_right"]) {
                    this.btn_right.visible = false;
                }


                this.gotoAndStop(4);




            }
        }
        this.frame_4 = function() {
            playSound("aplauso");
            this.stop();


            this.removeAllEventListeners();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

        // virtual deco
        this.btn_right = new lib.botonvirtual();
        this.btn_right.name = "btn_right";
        this.btn_right.parent = this;
        this.btn_right.setTransform(156.7, 325.6, 1, 1, 90);
        this.btn_right.alpha = 0.801;
        new cjs.ButtonHelper(this.btn_right, 0, 1, 2, false, new lib.botonvirtual(), 3);

        this.btn_left = new lib.botonvirtual();
        this.btn_left.name = "btn_left";
        this.btn_left.parent = this;
        this.btn_left.setTransform(39.5, 325.8, 1, 1, -90);
        this.btn_left.alpha = 0.801;
        new cjs.ButtonHelper(this.btn_left, 0, 1, 2, false, new lib.botonvirtual(), 3);

        this.btn_down = new lib.botonvirtual();
        this.btn_down.name = "btn_down";
        this.btn_down.parent = this;
        this.btn_down.setTransform(98.5, 325.8, 1, 1, 180);
        this.btn_down.alpha = 0.801;
        new cjs.ButtonHelper(this.btn_down, 0, 1, 2, false, new lib.botonvirtual(), 3);

        this.btn_up = new lib.botonvirtual();
        this.btn_up.name = "btn_up";
        this.btn_up.parent = this;
        this.btn_up.setTransform(98.5, 268.3);
        this.btn_up.alpha = 0.801;
        new cjs.ButtonHelper(this.btn_up, 0, 1, 2, false, new lib.botonvirtual(), 3);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.btn_up
            }, {
                t: this.btn_down
            }, {
                t: this.btn_left
            }, {
                t: this.btn_right
            }]
        }, 1).wait(4));

        // fondo de los virtuales
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#009999").s().p("AuuF3IgFAAIAArtIAFAAIccAAQBGAAAABGIAAJhQAABGhGAAg");
        this.shape.setTransform(95.3, 329.5);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#009999").s().p("Ak+KOIgBgRIAAzEQAAhGBGAAIHzAAQBGAAAABGIAATEIgBARg");
        this.shape_1.setTransform(98.1, 300.8);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }, 1).to({
            state: []
        }, 3).wait(1));

        // marco
        this.shape_2 = new cjs.Shape();
        // this.shape_2.graphics.f("#FFFFFF").s().p("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");
        this.shape_2.setTransform(380, 357.9);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFCC00").s().p("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");
        this.shape_3.setTransform(394, 20.8);

        this.menu_btn = new lib.btn_menu();
        this.menu_btn.name = "menu_btn";
        this.menu_btn.parent = this;
        this.menu_btn.setTransform(52.1, 26.5, 1, 1, 0, 0, 0, 41.4, 17.4);
        new cjs.ButtonHelper(this.menu_btn, 0, 1, 2, false, new lib.btn_menu(), 3);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#009999").s().p("Eg5BAcrMAAAg5VMByDAAAMAAAA5VgEg2ZAYAQAiBvCtAAMBmKAAAIACgwIA9AAIgHglIAnAFQAvAEAogJQB9geABiYMAAAgodIg3gDIAAg0IgrAFIAIghQADgqgKgjQgjhuitAAMhmJAAAIgDAwIg8AAIAHAlQg+gPhAAPQh9AegBCYMAAAAocIA4AEIAAA1IAqgGQgSA2ARA3g");
        this.shape_4.setTransform(365, 183.5);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_4
            }, {
                t: this.menu_btn
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }]
        }).wait(5));

        // intro jugar
        this.instance = new lib.Mapadebits9();
        this.instance.parent = this;
        this.instance.setTransform(107, 103);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFCC00").s().p("AXkBOQgMgHgHgLQgIgMAAgLQAAgHAFgFQAFgGAHAAQAHAAAEAFIAAgBQAEAEADAHQADAIADAFQAEAFAGADQAGADAKAAQAOAAAJgGQAIgGAAgKQAAgHgEgEQgFgFgHgCIAAAAIgVgGQgSgEgMgGQgNgFgHgKQgIgKAAgPQAAgPAIgLQAIgLAOgFQAPgHAUAAQAPAAAMAFIAAgBQALAEAIAHQAHAGAEAIQAEAHAAAHQAAAHgFAFIAAABQgFAFgIAAQgGAAgEgDQgDgEgEgGIAAgBQgEgJgGgEQgGgFgNAAQgMAAgHAFQgHAFAAAHQAAAEACADIAHAGIAJADIAQAEQAOAEALAEIAAAAQAMADAIAHQAIAFAFAJQAFAJAAANQAAAPgIANQgJANgPAHQgPAHgVAAQgZAAgQgKgATnBTQgFgEgCgFIAAAAIgFgRIgYhYIgZBYIgFAQQgCAGgFAEQgFAFgJAAQgHAAgEgDQgFgDgDgEQgDgFgBgGIgDgLIgbhtQgDgKAAgGQAAgHAGgFQAFgGAHAAQALAAAEAIQADAFADAMIATBVIAVhPQADgLADgFIAAABQACgHAFgEIAAAAQAFgFAKAAQAJAAAGAFQAEAFADAFIAFAQIAVBPIAThVIAEgMIAAAAQABgEAEgEQAEgFAIAAQAHAAAGAGQAFAEAAAIQAAAFgDAKIgbBuIgFARQgCAGgEAEQgGAFgJAAQgJAAgFgFgAPVBRQgQgGgKgMQgKgMgGgQIAAAAQgFgQAAgTQAAgTAGgQIgBAAQAGgRALgLQAKgLAPgGQAQgHATAAQAaAAAUALQASALAKAUQAKATAAAaQAAATgFAQQgGARgKALQgLAMgQAGQgPAHgUAAQgUAAgQgHgAPngzQgIADgGAHIAAAAQgGAHgDAKQgEALAAANQAAANAEALQADALAGAHQAGAHAIAEQAIADAKAAQAMAAAKgGQAKgGAGgNQAGgMAAgTQAAgRgFgNQgGgMgKgGIAAgBQgKgGgOAAQgJAAgIAEgAKSBSIgBAAQgFgGAAgLIAAg1IhDAAIAAA1QAAALgFAGIAAAAQgGAGgIAAQgJAAgFgGIAAAAQgFgGAAgLIAAiBQAAgLAFgGQAFgGAJAAQAIAAAGAGQAFAGAAALIAAAtIBDAAIAAgtQAAgLAGgGQAFgGAIAAQAJAAAGAGQAFAGAAALIAACBQAAALgGAGQgFAGgJAAQgIAAgFgGgAG7BSIgBAAQgFgGAAgLIAAh0IgiAAQgJAAgFgFQgFgEAAgIQAAgHAFgEIAAgBQAFgEAJAAIBqAAQAKAAAFAEIAAABQAFAEAAAHQAAAIgFAEIgBAAQgEAFgKAAIgiAAIAAB0QAAALgFAGQgFAGgJAAQgIAAgFgGgAEbBUIABAAQgFgCgDgFIgIgMIgNgWQgHgMgFgGIgBgBQgFgFgFgCQgGgDgIAAIgJAAIAAAzQAAALgFAGQgGAGgIAAQgJAAgFgGIgBgBQgFgFAAgLIAAh+QAAgMAGgFQAGgGALAAIA3AAIATABQAIABAHADQAJAEAGAGQAGAGAEAJQADAIAAAKQAAATgLAMQgKAJgRAFQAGAEAGAHQAIAKAHAKIAAAAIAKATQAEAJAAAEQAAADgDAFIgGAGQgFACgFAAQgHAAgEgEgADRgOIAbAAQAMAAAIgCQAHgBAEgFIABAAQADgEAAgIQAAgGgDgFQgDgEgGgCQgFgDgRAAIgcAAgAAaBRQgQgGgKgMQgKgMgFgQIgBAAQgFgQAAgTQAAgTAGgQIAAAAQAFgRAKgLQALgLAPgGQAPgHAUAAQAaAAATALQATALAKAUQAJATAAAaQAAATgFAQQgFARgLALQgLAMgPAGQgQAHgUAAQgTAAgQgHgAArgzQgIADgFAHIAAAAQgHAHgDAKQgDALAAANQAAANADALQAEALAGAHQAGAHAIAEQAIADAJAAQAMAAALgGQAJgGAHgNQAGgMAAgTQAAgRgGgNQgGgMgJgGIAAgBQgLgGgNAAQgKAAgIAEgAiWBSIgBAAQgFgGAAgLIAAh+QAAgIADgFQACgFAFgCQAFgDAIAAIBPAAQAJAAAFAEIAAABQAEAEAAAGQAAAHgEAFQgFAEgJAAIhAAAIAAAlIA1AAQAIAAAFAEIAAAAQAEAEAAAHQAAAGgEAEIAAAAQgFAEgIAAIg1AAIAAA0QAAALgFAGQgFAGgJAAQgIAAgFgGgAlABSIAAAAQgFgGAAgLIAAh0IgiAAQgKAAgFgFQgFgEAAgIQAAgHAGgEIAAgBQAEgEAKAAIBqAAQAJAAAFAEIABABQAEAEAAAHQAAAIgFAEIAAAAQgFAFgJAAIgiAAIAAB0QAAALgFAGQgGAGgIAAQgJAAgFgGgAnzBUQgPgFgIgJQgJgJgFgOIAAAAQgEgOAAgTIAAhOQAAgLAGgGQAFgGAIAAQAJAAAFAGQAFAGAAALIAABQQAAANADAKQADAIAHAFQAIAEANAAQASAAAHgJQAIgKAAgUIAAhRQAAgLAGgGQAFgGAIAAQAJAAAFAGQAFAGAAALIAABOQAAAUgDANQgEAOgLAKQgKAIgMAFQgMAEgRAAQgTAAgOgEgAqtBRQgQgGgLgMQgKgMgFgQIgBAAQgFgQAAgTQAAgTAGgQIAAAAQAFgRALgLQALgLAPgGQAPgHAUAAQAaAAATALQATALAKAUQAJATAAAaQAAATgFAQQgFARgLALQgLAMgPAGQgQAHgUAAQgTAAgQgHgAqcgzQgIADgFAHIAAAAQgHAHgDAKQgDALAAANQAAANADALQAEALAGAHQAGAHAIAEQAIADAJAAQAMAAALgGQAJgGAHgNQAGgMAAgTQAAgRgGgNQgGgMgJgGIAAgBQgLgGgNAAQgKAAgIAEgAtUBSIgBAAQgFgGAAgLIAAg1IhDAAIAAA1QAAALgFAGIAAAAQgGAGgIAAQgJAAgFgGIAAAAQgFgGAAgLIAAiBQAAgLAFgGQAFgGAJAAQAIAAAGAGQAFAGAAALIAAAtIBDAAIAAgtQAAgLAGgGQAFgGAIAAQAJAAAGAGQAFAGAAALIAACBQAAALgGAGQgFAGgJAAQgIAAgFgGgAw+BVQgLgCgIgGIAAAAQgKgFgHgJQgHgIgFgKIAAAAQgFgKgCgLQgCgLAAgNQAAgTAGgQIAAAAQAGgRALgLQALgMAPgFQAPgHARAAQAUAAARAJQAQAIAIAMQAJANAAALQAAAGgFAGQgFAFgGAAQgIAAgDgEQgEgDgEgIQgHgMgIgGQgIgFgMAAQgTAAgMAOQgLAQAAAaQAAATAFAMQAFAMAJAGQAJAGANAAQANAAAKgHQAJgGAFgNIAAAAQACgHADgFQAEgFAJAAQAGAAAGAFQAEAFAAAHQAAAJgDAJQgFAKgIAJQgJAJgNAGQgOAGgRAAQgOAAgLgDgAzZBSIAAAAQgFgGAAgLIAAh0IgiAAQgKAAgFgFQgFgEAAgIQAAgHAGgEIAAgBQAEgEAKAAIBqAAQAJAAAFAEIABABQAEAEAAAHQAAAIgFAEIAAAAQgFAFgJAAIgiAAIAAB0QAAALgFAGQgGAGgIAAQgJAAgFgGgA01BWIgGgFIgEgIIgDgIIgIgUIhAAAIgHAUQgFANgDAEQgEAGgJAAQgHAAgFgGQgGgFAAgHIABgHIAEgLIAqhqIAFgLQACgHADgEIAAAAQADgFAGgDQAEgDAIAAQAIAAAFADQAFADADAFIAGAJIAFANIArBpQAFANAAAGQAAAHgGAFQgFAGgIAAQgFAAgDgCgA1/APIAqAAIgVg5gA4GBTQgFgEgCgFIAAAAIgFgRIgYhYIgZBYIgFAQQgCAGgFAEQgFAFgJAAQgHAAgEgDQgFgDgDgEQgDgFgBgGIgDgLIgbhtQgDgKAAgGQAAgHAGgFQAFgGAHAAQALAAAEAIQADAFADAMIATBVIAVhPQADgLADgFIAAABQACgHAFgEIAAAAQAFgFAKAAQAJAAAGAFQAEAFADAFIAFAQIAVBPIAThVIAEgMIAAAAQABgEAEgEQAEgFAIAAQAHAAAGAGQAFAEAAAIQAAAFgDAKIgbBuIgFARQgCAGgEAEQgGAFgJAAQgJAAgFgFgAZ1BSQgGgFAAgJQAAgIAGgFQAFgGAIAAQAIAAAGAGQAGAFAAAIQAAAJgGAFIgBAAQgFAFgIAAQgIAAgFgFgAVXBVQgMAAgFgGQgGgFAAgMIAAh+QAAgLAGgGQAFgGAIAAQAJAAAFAGQAFAGAAALIAAB0IBCAAQAJAAAFAFQAFAFAAAHQAAAHgFAFQgFAEgJAAgALrBVQgMAAgFgGQgGgFAAgMIAAh7QAAgIADgFQACgFAGgCQAFgDAHAAIBYAAQAJAAAFAEIAAABQAEAEAAAGQAAAHgEAFQgFAEgJAAIhIAAIAAAjIBCAAQAJAAAFAEIAAABQAEAEAAAGQAAAGgEAEQgEAEgKAAIhCAAIAAAqIBLAAQAJAAAFAEIAAABQAEAEAAAHQAAAHgEAFQgFAEgJAAgAZ3AcQgDgGgBgLIgDg0IgBgXQAAgLAFgFIABAAQAFgHAJAAQALAAAEAJQAEAGAAAOIgBAPIgFA3QgBAKgCAFIAAABQgEAGgIAAQgHAAgDgGg");
        this.shape_5.setTransform(345.1, 316.6);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("AQ4FxQgGgGAAgJQAAgIAGgFQAFgGAJAAQAHAAAGAGQAGAFAAAIQAAAJgGAGQgGAFgHAAQgJAAgFgFgAMNFsQgMgHgHgLQgIgMAAgLQAAgHAGgFQAEgGAHAAQAHAAAEAFIAAgBQAFAEACAHQADAIAEAFQADAFAHADQAFADALAAQANAAAJgGQAIgGAAgKQAAgHgEgEQgFgFgHgCIAAAAIgVgGQgSgEgMgGQgNgGgHgKQgIgKABgPQAAgPAHgLQAIgLAPgFQAPgHATAAQAPAAAMAFIAAgBQALAEAJAHQAGAGAEAIQAEAHAAAHQAAAHgFAFIAAABQgFAFgHAAQgHAAgEgDQgDgEgDgGIAAgBQgFgJgGgEQgFgFgOAAQgLAAgIAFQgHAFABAHQAAAEACADIAHAGIAJADIAPAEQAOAEALAEIAAAAQAMADAIAHQAIAGAGAJQAEAJAAANQAAAPgIANQgJANgOAHQgQAHgVAAQgZAAgQgKgAJwFyQgPgFgJgJQgJgJgEgOIAAAAQgFgOAAgTIAAhPQAAgLAHgGQAFgGAHAAQAKAAAFAGQAFAGAAALIAABRQAAANADAKQADAIAHAFQAIAEAMAAQASAAAIgJQAIgKAAgUIAAhSQAAgLAFgGQAGgGAIAAQAJAAAFAGQAFAGAAALIAABPQAAAUgDANQgFAOgKAKQgKAIgMAFQgNAEgQAAQgUAAgNgEgAG2FvQgRgGgKgMQgKgMgGgQIAAAAQgFgQAAgUQAAgTAGgQIgBAAQAGgRALgLQAKgLAQgGQAPgHAUAAQAaAAATALQATALAJAUQAKATAAAbQAAATgFAQQgFARgLALQgLAMgPAGQgQAHgUAAQgUAAgPgHgAHHDqQgIADgGAHIAAAAQgGAHgDAKQgDALAAANQAAAOADALQADALAGAHQAGAHAIAEQAJADAJAAQAMAAAKgGQAKgGAGgNQAHgMAAgUQgBgRgFgNQgGgMgJgGIAAgBQgLgGgNAAQgKAAgIAEgAFLFwIgBAAQgEgGAAgLIAAg1IhEAAIAAA1QAAALgEAGIAAAAQgHAGgIAAQgIAAgGgGIAAAAQgFgGAAgLIAAiCQAAgLAFgGQAGgGAIAAQAIAAAHAGQAEAGAAALIAAAtIBEAAIAAgtQgBgLAGgGQAFgGAJAAQAIAAAGAGQAFAGAAALIAACCQAAALgGAGQgFAGgI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gEgEQgDgDgFgIQgGgMgIgGQgJgFgLAAQgTAAgMAOQgLAQAAAaQAAATAEAMQAGAMAJAGQAJAGAMAAQAOAAAJgHQAKgGAFgNIAAAAQABgHAEgFQAEgFAJAAQAGAAAGAFQAEAFAAAHQAAAJgEAJQgEAKgIAJQgJAJgOAGQgNAGgRAAQgOAAgLgDgALCBSIgBAAQgFgGAAgLIAAg1IhDAAIAAA1QAAALgFAGIAAAAQgGAGgIAAQgJAAgFgGIgBAAQgEgGgBgLIAAiBQAAgLAGgGQAFgGAJAAQAIAAAGAGQAFAGAAALIAAAtIBDAAIAAgtQAAgLAGgGQAEgGAJAAQAIAAAHAGQAEAGAAALIAACBQABALgGAGQgGAGgIAAQgJAAgEgGgAHrBSIgBAAQgFgGAAgLIAAh0IgiAAQgKAAgEgFQgGgEAAgIQAAgHAGgEIAAgBQAFgEAJAAIBqAAQAJAAAGAEIAAABQAFAEgBAHQAAAIgEAEIgBAAQgFAFgJAAIgiAAIAAB0QAAALgFAGQgFAGgJAAQgJAAgEgGgAB4BUIABABQgGgDgDgFIgFgKIgEgMIgohqIgCgFIgCgHIAAAAIAAgGQAAgHAFgFQAFgGAIAAQAKAAAEAHIAAAAQAEAFAEAMIAiBnIAkhoIAFgMQABgEADgDQAFgEAGAAQAFAAAEADIABAAQAEADACAEQACAEAAAEIAAAGIgCAGIgBAFIgoBrIgFAMIgGAKQgCAFgFADQgGADgHAAQgIAAgFgEgAhLBRQgQgGgKgMQgKgMgGgQIAAAAQgFgQAAgTQAAgTAGgQIgBAAQAGgRALgLQAKgLAPgGQAQgHAUAAQAaAAASALQASALAKAUQAKATAAAaQAAATgFAQQgFARgLALQgLAMgOAGQgQAHgUAAQgUAAgQgHgAg5gzQgIADgGAHIAAAAQgGAHgDAKQgDALgBANQABANADALQADALAGAHQAGAHAIAEQAJADAJAAQAMAAAKgGQAKgGAGgNQAGgMAAgTQgBgRgEgNQgGgMgJgGIAAgBQgLgGgNAAQgKAAgIAEgAixBSIAAAAQgGgFAAgLIAAhcIgUBUIAAAAIgFAPQgBAGgGAEQgFAFgIAAQgIAAgDgDQgFgDgDgEIAAgBQgDgEgBgFIABAAIgEgKIAAAAIgVhUIAABcQAAALgFAFQgFAGgHAAQgJAAgEgGIgB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gBAAQgEgGAAgKIAAh/QAAgJACgEIAAgBQADgGAGgDQAEgEAHAAQAFAAADACQAFACADADIAEAGIABABQACAEADADIA7BbIAAhaQAAgLAFgFQAFgGAHAAQAJAAAFAGQAFAFgBALIAACBQAAAZgUAAIgJgCgAtajLIAAAAQgFgGAAgLIAAiCQAAgLAFgGQAFgGAJAAQAJAAAFAGQAFAGAAALIAACCQAAALgFAGIAAAAQgFAGgJAAQgJAAgFgGgAvojPQgMgHgHgLQgIgMAAgLQAAgHAGgFQAEgGAHAAQAHAAAEAFIAAgBQAFAEACAHQADAIAEAFQADAFAHADQAFADALAAQANAAAJgGQAIgGAAgKQAAgHgEgEQgFgFgHgCIAAAAIgVgGQgSgEgMgGQgNgGgHgKQgIgKABgPQAAgPAHgLQAIgLAPgFQAPgHATAAQAPAAAMAFIAAgBQALAEAJAHQAGAGAEAIQAEAHAAAHQAAAHgFAFIAAABQgFAFgHAAQgHAAgEgDQgDgEgDgGIAAgBQgFgJgGgEQgFgFgOAAQgLAAgIAFQgHAFABAHQAAAEACADIAHAGIAJADIAPAEQAOAEALAEIAAAAQAMADAIAHQAIAGAGAJQAEAJAAANQAAAPgIANQgJANgOAHQgQAHgVAAQgZAAgQgKgAyFjJQgPgFgJgJQgJgJgEgOIAAAAQgFgOAAgTIAAhPQAAgLAHgGQAFgGAHAAQAKAAAFAGQAFAGAAALIAABRQAAANADAKQADAIAHAFQAIAEAMAAQASAAAIgJQAIgKAAgUIAAhSQAAgLAFgGQAGgGAIAAQAJAAAFAGQAFAGAAALIAABPQAAAUgDANQgFAOgKAKQgKAIgMAFQgNAEgQAAQgUAAgNgEgAgTjIQgNAAgEgGQgGgFAAgMIAAh8QAAgIADgFQABgFAHgCQAEgDAIAAIBXAAQAJAAAFAEIAAABQAEAEAAAGQAAAHgEAFQgFAEgJAAIhHAAIAAAjIBBAAQAIAAAGAEIAAABQADAEAAAGQAAAHgDAEQgFAEgJAAIhBAAIAAAqIBJAAQAJAAAGAEIAAABQAEAEAAAHQAAAHgEAFQgGAEgJAAg");
        this.shape_6.setTransform(338.8, 229.4);

        this.instance_1 = new lib.obstaculo();
        this.instance_1.parent = this;
        this.instance_1.setTransform(552.2, 318.1, 1, 1, 0, 0, 0, 0.3, 0);

        this.instance_2 = new lib.casita();
        this.instance_2.parent = this;
        this.instance_2.setTransform(541.4, 119.3, 0.507, 0.507, 0, 0, 0, 0.1, 0.1);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#CC3300").s().p("AgpCpIAAjJIg1AAIBeiIIBfCIIg2AAIAADJg");
        this.shape_7.setTransform(345, 83);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#CC3300").s().p("AAhAqIjJAAIAAhSIDJAAIAAg2ICIBeIiIBfg");
        this.shape_8.setTransform(410.7, 146.7);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#CC3300").s().p("AheAhIA1AAIAAjJIBTAAIAADJIA1AAIhfCIg");
        this.shape_9.setTransform(345.1, 146.7);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#CC3300").s().p("AioAAICIheIAAA2IDJAAIAABSIjJAAIAAA1g");
        this.shape_10.setTransform(277.9, 146.7);

        this.instance_3 = new lib.asfasf();
        this.instance_3.parent = this;
        this.instance_3.setTransform(280.1, 146.8, 0.778, 0.778, 0, 0, 0, 36, 36.1);

        this.instance_4 = new lib.asfasf();
        this.instance_4.parent = this;
        this.instance_4.setTransform(410, 146.8, 0.778, 0.778, 0, 0, 0, 36.1, 36.1);

        this.instance_5 = new lib.asfasf();
        this.instance_5.parent = this;
        this.instance_5.setTransform(345.1, 83, 0.778, 0.778, 0, 0, 0, 36.2, 36);

        this.instance_6 = new lib.asfasf();
        this.instance_6.parent = this;
        this.instance_6.setTransform(345.1, 146.8, 0.778, 0.778, 0, 0, 0, 36.2, 36.1);

        this.play_btn = new lib.play_btn();
        this.play_btn.name = "play_btn";
        this.play_btn.parent = this;
        this.play_btn.setTransform(637.9, 249, 1, 1, 0, 0, 0, 59.1, 59);
        new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.lf(["#599119", "#22542F"], [0, 1], -361.4, 0, 361.5, 0).s().p("Eg4eAUNMAAAgoZMBw9AAAMAAAAoZg");
        this.shape_11.setTransform(368.5, 148.7);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#2C0000").s().p("Eg5BAF3IAArtMByDAAAIAALtg");
        this.shape_12.setTransform(365, 315.6);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_12
            }, {
                t: this.shape_11
            }, {
                t: this.play_btn
            }, {
                t: this.instance_6
            }, {
                t: this.instance_5
            }, {
                t: this.instance_4
            }, {
                t: this.instance_3
            }, {
                t: this.shape_10
            }, {
                t: this.shape_9
            }, {
                t: this.shape_8
            }, {
                t: this.shape_7
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.instance
            }]
        }).to({
            state: []
        }, 1).wait(4));

        // personaje
        this.personaje = new lib.jugador();
        this.personaje.name = "personaje";
        this.personaje.parent = this;
        this.personaje.setTransform(78.1, 61.1, 1, 1, 0, 0, 0, 0.2, 0.1);
        this.personaje._off = true;

        this.timeline.addTween(cjs.Tween.get(this.personaje).wait(1).to({
            _off: false
        }, 0).wait(1).to({
            regX: 0.1,
            scaleY: 1,
            x: 25.5,
            y: 80.1
        }, 0).wait(1).to({
            x: 70.6,
            y: 60.1
        }, 0).wait(2));

        // deco
        this.instance_7 = new lib.Mapadebits8();
        this.instance_7.parent = this;
        this.instance_7.setTransform(180, 268);

        this.instance_8 = new lib.Mapadebits5();
        this.instance_8.parent = this;
        this.instance_8.setTransform(501, 143);

        this.instance_9 = new lib.Mapadebits7();
        this.instance_9.parent = this;
        this.instance_9.setTransform(605, 203);

        this.instance_10 = new lib.Mapadebits4();
        this.instance_10.parent = this;
        this.instance_10.setTransform(610, 204);

        this.instance_11 = new lib.Mapadebits6();
        this.instance_11.parent = this;
        this.instance_11.setTransform(84, 201);

        this.instance_12 = new lib.obstaculo();
        this.instance_12.parent = this;
        this.instance_12.setTransform(599.9, 94.5, 0.8, 0.8);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_9,
                p: {
                    x: 605,
                    y: 203
                }
            }, {
                t: this.instance_8,
                p: {
                    x: 501,
                    y: 143
                }
            }, {
                t: this.instance_7
            }]
        }, 1).to({
            state: [{
                t: this.instance_9,
                p: {
                    x: 415,
                    y: 109
                }
            }, {
                t: this.instance_10,
                p: {
                    x: 610,
                    y: 204
                }
            }, {
                t: this.instance_8,
                p: {
                    x: 217,
                    y: 41
                }
            }]
        }, 1).to({
            state: [{
                t: this.instance_9,
                p: {
                    x: 589,
                    y: 15
                }
            }, {
                t: this.instance_10,
                p: {
                    x: 279,
                    y: 151
                }
            }, {
                t: this.instance_12
            }, {
                t: this.instance_8,
                p: {
                    x: 362,
                    y: 120
                }
            }, {
                t: this.instance_11
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

        // obstaculos
        this.o4 = new lib.obstaculo();
        this.o4.name = "o4";
        this.o4.parent = this;
        this.o4.setTransform(555.6, 95.6, 0.699, 0.7, 0, 0, 0, 0, 0.1);

        this.o3 = new lib.obstaculo();
        this.o3.name = "o3";
        this.o3.parent = this;
        this.o3.setTransform(496.6, 243.6, 0.998, 1, 15, 0, 0, 0.1, 0.1);

        this.o1 = new lib.obstaculo();
        this.o1.name = "o1";
        this.o1.parent = this;
        this.o1.setTransform(210.1, 169, 0.661, 0.663, 0, 0, 180, 0, 0.1);

        this.o2 = new lib.obstaculo();
        this.o2.name = "o2";
        this.o2.parent = this;
        this.o2.setTransform(526.2, 89.9, 0.998, 1, 0, 0, 0, 0.1, 0.1);

        this.o4_b = new lib.obstaculo();
        this.o4_b.name = "o4_b";
        this.o4_b.parent = this;
        this.o4_b.setTransform(447.8, 69.5, 0.9, 0.9);

        this.o3_b = new lib.obstaculo();
        this.o3_b.name = "o3_b";
        this.o3_b.parent = this;
        this.o3_b.setTransform(506.4, 308, 0.7, 0.7, 0, 0, 180);

        this.o5_b = new lib.obstaculo();
        this.o5_b.name = "o5_b";
        this.o5_b.parent = this;
        this.o5_b.setTransform(669.3, 88.7, 0.86, 0.86, 0, 0, 180);

        this.o2_b = new lib.obstaculo();
        this.o2_b.name = "o2_b";
        this.o2_b.parent = this;
        this.o2_b.setTransform(182.8, 276.7, 0.803, 0.803, 0, 0, 180);

        this.o1_b = new lib.obstaculo();
        this.o1_b.name = "o1_b";
        this.o1_b.parent = this;
        this.o1_b.setTransform(232.3, 229.8, 1, 1.002, 0, 0, 0, 0.1, 0.1);

        this.o5_c = new lib.obstaculo();
        this.o5_c.name = "o5_c";
        this.o5_c.parent = this;
        this.o5_c.setTransform(468.3, 164.2, 0.68, 0.68);

        this.o3_c = new lib.obstaculo();
        this.o3_c.name = "o3_c";
        this.o3_c.parent = this;
        this.o3_c.setTransform(395.5, 220.3, 0.78, 0.78);

        this.o4_c = new lib.obstaculo();
        this.o4_c.name = "o4_c";
        this.o4_c.parent = this;
        this.o4_c.setTransform(343.1, 258.2, 0.8, 0.8);

        this.o2_c = new lib.obstaculo();
        this.o2_c.name = "o2_c";
        this.o2_c.parent = this;
        this.o2_c.setTransform(277, 219.1, 0.84, 0.84, 0, 0, 180);

        this.o1_c = new lib.obstaculo();
        this.o1_c.name = "o1_c";
        this.o1_c.parent = this;
        this.o1_c.setTransform(146.6, 191.5);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.o2
            }, {
                t: this.o1
            }, {
                t: this.o3
            }, {
                t: this.o4
            }]
        }, 1).to({
            state: [{
                t: this.o1_b
            }, {
                t: this.o2_b
            }, {
                t: this.o5_b
            }, {
                t: this.o3_b
            }, {
                t: this.o4_b
            }]
        }, 1).to({
            state: [{
                t: this.o1_c
            }, {
                t: this.o2_c
            }, {
                t: this.o4_c
            }, {
                t: this.o3_c
            }, {
                t: this.o5_c
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

        // door
        this.puerta = new lib.casita();
        this.puerta.name = "puerta";
        this.puerta.parent = this;
        this.puerta.setTransform(670.2, 76, 0.3, 0.3, 0, 0, 0, 0.1, 0.1);

        this.puerta2 = new lib.casita();
        this.puerta2.name = "puerta2";
        this.puerta2.parent = this;
        this.puerta2.setTransform(667.2, 256.2, 0.3, 0.3, 0, 0, 0, 0.1, 0.1);

        this.puerta3 = new lib.casita();
        this.puerta3.name = "puerta3";
        this.puerta3.parent = this;
        this.puerta3.setTransform(340.1, 205.4, 0.3, 0.3, 0, 0, 0, 0.1, 0.1);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.puerta
            }]
        }, 1).to({
            state: [{
                t: this.puerta2
            }]
        }, 1).to({
            state: [{
                t: this.puerta3
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

        // wall
        this.pared = new lib.pared();
        this.pared.name = "pared";
        this.pared.parent = this;
        this.pared.setTransform(365, 183.5);

        this.pared2 = new lib.pared2();
        this.pared2.name = "pared2";
        this.pared2.parent = this;
        this.pared2.setTransform(365, 183.5);

        this.pared3 = new lib.pared3();
        this.pared3.name = "pared3";
        this.pared3.parent = this;
        this.pared3.setTransform(365, 183.5);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.pared
            }]
        }, 1).to({
            state: [{
                t: this.pared2
            }]
        }, 1).to({
            state: [{
                t: this.pared3
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

        // well done
        this.instance_13 = new lib.sdfasfd();
        this.instance_13.parent = this;
        this.instance_13.setTransform(381.5, 244.4, 1, 1, 0, 0, 0, 214.5, 126.5);
        this.instance_13._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(4).to({
            _off: false
        }, 0).wait(1));

        // FONDO
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#666666").s().p("Eg5BAcrMAAAg5VMByDAAAMAAAA5Vg");
        this.shape_13.setTransform(365, 183.5);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#200000").s().p("Eg5BAcrMAAAg5VMByDAAAMAAAA5Vg");
        this.shape_14.setTransform(365, 183.5);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_13
            }]
        }).to({
            state: [{
                t: this.shape_14
            }]
        }, 4).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(365, 183.5, 730, 367);
    // library properties:
    lib.properties = {
        id: '961C296F70897F4AAEF666856D75D3AA',
        width: 730,
        height: 367,
        fps: 20,
        color: "#FFFFFF",
        opacity: 1.00,
        manifest: [{
                src: "images/12_laberinto_buhos_atlas_.png",
                id: "12_laberinto_buhos_atlas_"
            },
            {
                src: "sounds/toing.mp3",
                id: "toing"
            },
            {
                src: "sounds/silbato22.mp3",
                id: "silbato22"
            },
            {
                src: "sounds/bocina1.mp3",
                id: "bocina1"
            },
            {
                src: "sounds/bocina2.mp3",
                id: "bocina2"
            },
            {
                src: "sounds/aplauso.mp3",
                id: "aplauso"
            },
            {
                src: "sounds/pop2.mp3",
                id: "pop2"
            }
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
    p.play = function() {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
    }
    p.stop = function(ms) {
        if (ms) this.seek(ms);
        this.tickEnabled = false;
    }
    p.seek = function(ms) {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000);
    }
    p.getDuration = function() {
        return this.getChildAt(0).totalFrames / lib.properties.fps * 1000;
    }

    p.getTimelinePosition = function() {
        return this.getChildAt(0).currentFrame / lib.properties.fps * 1000;
    }

    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if (!an.bootstrapListeners) {
        an.bootstrapListeners = [];
    }

    an.bootstrapCallback = function(fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if (an.bootcompsLoaded.length > 0) {
            for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
                fnCallback(an.bootcompsLoaded[i]);
            }
        }
    };

    an.compositions = an.compositions || {};
    an.compositions['961C296F70897F4AAEF666856D75D3AA'] = {
        getStage: function() {
            return exportRoot.getStage();
        },
        getLibrary: function() {
            return lib;
        },
        getSpriteSheet: function() {
            return ss;
        },
        getImages: function() {
            return img;
        }
    };

    an.compositionLoaded = function(id) {
        an.bootcompsLoaded.push(id);
        for (var j = 0; j < an.bootstrapListeners.length; j++) {
            an.bootstrapListeners[j](id);
        }
    }

    an.getComposition = function(id) {
        return an.compositions[id];
    }



})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;