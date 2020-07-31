let carrier; // this is the oscillator we will hear
let modulator; // this oscillator will modulate the frequency of the carrier
let noise;  

let analyzer; // we'll use this visualize the waveform

// the carrier frequency pre-modulation
let carrierBaseFreq = 220;

// min/max ranges for modulator
let modMaxFreq = 1020;
let modMinFreq = 0;
let modMaxDepth = 0;
let modMinDepth = 1.0;
let modulatorFreq = 60;
let noiseAmpMod = 0;
let carrierAmpMod = 0;
let modmoder = 0;

let angleSlide = 0;

var maxZ;
var slide_z;
var len;
var opp;

var offset = 0;
var strum = 1;


// var cursor1;

var mouseReady = true;

// let xB = 100;
// let yB = 0;
// let szB = 200;

// let shape1;




function setup() {

  // noFill();

  // yB = windowHeight / 2;




  carrier = new p5.Oscillator('sine');
  // noise = new p5.Noise('sine');
  // carrier.amp(1, 0.01); // set amplitude
  carrier.freq(carrierBaseFreq); // set frequency
  // carrier.start(); // start oscillating

  // try changing the type to 'square', 'sine' or 'triangle'
  // modulator = new p5.Oscillator('sine');
  // modulator.freq(carrierBaseFreq); // set frequency
  // modulator.start();
  // 

  // add the modulator's output to modulate the carrier's frequency
  // modulator.disconnect();
  // carrier.freq(modulator);

  // create an FFT to analyze the audio
  analyzer = new p5.FFT();

  // fade carrier in/out on mouseover / touch start
  //toggleAudio(cnv);

  len = 185;
  maxZ = 255;
  unbo = width;
  unboy = height;


  // colorMode(HSB, maxH, maxB);
  textAlign(LEFT, CENTER);
  textSize(20);
  // rectMode(CENTER);


  windowResized();


}

function draw() {
  background(30);


  // shape1.over();
  // shape1.update();
  // shape1.show();

  // slide_z.show();
  cursor1.show();

  // if (dist(xB, yB, mouseX, mouseY) < szB / 2) {
  //   cursor(HAND);
  //   if (mouseIsPressed) {
  //     xB = mouseX;
  //     yB = mouseY;
  //     // strokeWeight(5);
  //   } 
  //   // stroke(255);
  // } else {
  //   cursor(ARROW);
  //   // noStroke();
  // }
  // push();
  // noFill();
  // ellipse(xB, yB, 200, 200);
  // pop();
  // line(xB - 5, yB, xB - 50, yB);
  // line(xB, yB - 5, xB, yB - 50);
  //   for (var x = 0; x < width; x++) {
  //     // ellipse(x, yB, 1);
  //     // vertex(x, yB + height / 2);
  //     // line()
  // }
  //   for (var y = 0; y < height; y++) {
  //     ellipse(xB, y, 1);
  // }


  // cursor(CROSS);

  // angleSlide = degrees(angleBetween).toFixed(2);


  // slider.style('width', '80px');

  // slider.style("background-color","blue");



  // map mouseY to modulator freq between a maximum and minimum frequency
  let modFreq = map(cursor1.valx, 0, windowWidth, modMinFreq, modMaxFreq);
  carrier.freq(modFreq);
  // modulator.freq(modulatorFreq);


  // change the amplitude of the modulator
  // negative amp reverses the sawtooth waveform, and sounds percussive
  
  // modMaxDepth = Modmod;
  // let modmoder = map(cursor1.valy, 0, windowHeight, modMinDepth, modMaxDepth);
  // let Modmod = map(slide_z.val, 0, maxZ, 0, modmoder);
  let modDepth = map(cursor1.valy, 0, windowHeight, modMinDepth, modMaxDepth);

  carrier.amp(modDepth);
  // modulator.amp(150);



  // let noiseAmpMod =0;
  // let noiseAmpMod = map(slide_z.val, 0, maxZ, 0, 0.5);
  // let carrierAmpMod = map(slide_z.val, 0, maxZ, 1.0, 0);
  // carrier.amp(carrierAmpMod);
  // noise.amp(noiseAmpMod);


  // analyze the waveform
  waveform = analyzer.waveform();

  // draw the shape of the waveform
  // stroke(0, 0, 255);
  // strokeWeight(1);
  // beginShape();
  // for (let i = 0; i < waveform.length; i++) {
  //   let x = map(i, 0, waveform.length, 0, width);
  //   let y = map(waveform[i], -1, 1, -height / 2, height / 2);
  //   vertex(x, y + height / 2);
  // }
  // endShape();

  let Modi = map(cursor1.valy, 0, windowHeight, 2, 50);
  let ModiF = map(cursor1.valx, 0, windowWidth, 0, 2);
  // noStroke();
  // background(220);
  translate(0, height/2);
  scale(1, -1);

  stroke('rgba(255,255,255)');
  noFill();
  beginShape();
  vertex(-10, height);
  for(var x = 0; x < width; x++){
    //var angle = map(x, 0, width, 0, TWO_PI);
    var angle = offset + x * ModiF;
    // map x between 0 and width to 0 and Two Pi
    // var y = map(sin(angle), -Modi, Modi, 150, 250);
    var y = map(sin(angle), -strum, strum, -height /Modi, height/Modi );
    vertex(x, y);
  }
  vertex(width + 25, height);
  endShape();
  offset += 0.1;

  
  


  // strokeWeight(1);
  // // add a note about what's happening
  // text('X=Carrier Frequency: ' + Modi + ' Hz', 20, 20);
  // text(
  //   'Y=carrier Amplitude: ' + modDepth.toFixed(3),
  //   20,
  //   40
  // );
  // text(
  //   'Carrier Frequency (pre-modulation): ' + carrierBaseFreq + ' Hz',
  //   width / 2,
  //   20
  // );
  // text(
  //   'Modulator Frequency: ' + ModiF + ' Hz',
  //   width / 2,
  //   40
  // );
  // text(
  //   'x',
  //   xB - 23, yB 
  // );
  // text(
  //   'y',
  //   xB - 10, yB - 20
  // );


}








var Slider = function (x, y, val, sym, max) {
  this.x = x;
  this.y = y;
  this.val = constrain(val, 0, max);
  this.sym = sym;
  this.max = max;
  this.cx = map(this.val, 0, max, x - len, x + len);
  this.sz = 22;
  this.len = len;
  this.drag = false;

  this.inCir = function () {
    if (mouseIsPressed) {
      if (mouseReady) {
        if (mouseX < this.cx + (this.sz / 2) && mouseX > this.cx - (this.sz / 2)) {
          if (mouseY < this.y + (this.sz / 2) && mouseY > this.y - (this.sz / 2)) {
            this.drag = true;
            mouseReady = false;
          }
        }
      }
    } else {
      this.drag = false;
      mouseReady = true;
    }
  };

  this.show = function () {
    this.inCir();
    if (this.drag) {
      this.cx = constrain(mouseX, this.x - this.len, this.x + this.len);
    }
    this.val = round(map(this.cx, this.x - this.len, this.x + this.len, 0, this.max));

    opp = slide_z.val <= (slide_z.max / 2) ? round(slide_z.max / 2) : -round(slide_z.max / 2);

    stroke(255);
    line(this.x - this.len, this.y, this.x + this.len, this.y);

    fill(255);
    text(this.sym, this.x - this.len - 36, this.y);

    // text(this.val, this.x + this.len + 10, this.y);
    ellipse(this.cx, this.y, this.sz, this.sz);
  };
};

var Ccursor = function (x, y, valx, valy, w, h) {
  this.dragging = false; // Is the object being dragged?
  // this.rollover = false; // Is the mouse over the ellipse?
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.cx = valx;
  this.cy = valy;
  this.sz = 100;
  this.offsetX = 0;
  this.offsetY = 0;
  this.valx = valx;
  this.valy = valy;

  this.inCur = function () {

    if (mouseIsPressed && mouseX  < width  && mouseX > 0 &&  mouseY < height && mouseY > 0 ) {
      if (mouseReady) {
        if (mouseX < this.valx + (this.sz / 2) && mouseX > this.valx - (this.sz / 2) && mouseY < this.valy + (this.sz / 2) && mouseY > this.valy - (this.sz / 2)) {

          this.dragging = true;
          mouseReady = false;
          // this.offsetX = this.x - mouseX;
          // this.offsetY = this.y - mouseY;
        }
      }
    } else {
      this.dragging = false;
      mouseReady = true;
    }
  //   if(mouseX > width && mouseY > height){
  //     this.dragging = false;
  //     mouseReady = true;
  // }
};

  this.show = function () {
    this.inCur();
    // if (this.dragging) {
    //   fill(50);
    // } 
    if (this.dragging) {
      this.x = mouseX - this.offsetX;
      this.y = mouseY - this.offsetY;
    }
    this.valx = this.x + this.offsetX;
    this.valy = this.y + this.offsetY;
    //rect(this.x, this.y, this.w, this.h);
    stroke(255);
    push();
    // stroke(50, 100, 255);
    // noFill();
    // rect(this.x, this.y, this.w - this.offsetX, this.h - this.offsetY);
    // ellipse(this.x, this.y, this.w, this.h);
    pop();
    // stroke(50, 100, 255);
    line(this.x - 5, this.y, this.x - 50, this.y);
    line(this.x, this.y - 5, this.x, this.y - 50);
    line(this.x, this.y + 5, this.x, this.y + 50);
    line(this.x + 5, this.y, this.x + 50, this.y);
    text(
      'X',
      this.x - 70 , this.y +4
    );
    text(
      'Y',
      this.x -4 , this.y -70
    );
  };
};



// helper function to toggle sound
//function toggleAudio(cnv) {
//cnv.mouseOver(function() {
//carrier.amp(1.0, 0.01);
//});
//cnv.touchStarted(function() {
//carrier.amp(1.0, 0.01);
//});
//cnv.mouseOut(function() {
//carrier.amp(0.0, 1.0);
//});
//}
function windowResized() {
    createCanvas(windowWidth, windowHeight);
  // resizeCanvas(windowWidth, windowHeight);
  slide_z = new Slider(width * 0.5, height * 0.8, 0, "Z ", maxZ);
  cursor1 = new Ccursor(100, windowHeight * 0.3, 0, 0, 50, 50);
}

function touchMoved() {
  // ellipse(mouseX, mouseY, 5, 5);
  // prevent default

}

function touchStarted() {

  // carrier.start(); // start oscillating
  // noise.start();
  //shape1.pressed();
  // carrier.amp(0);
  // noise.amp(0);
  return false;
}


// function mousePressed() {
//   shape1.pressed();
//   // shape2.pressed();
// }

function touchEnded() {
  //shape1.released();
  // shape2.released();
}

// function doSomething() {
//   print("hello");
// }