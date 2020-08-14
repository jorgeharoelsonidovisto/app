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
let modulatorFreq = 55;
let noiseAmpMod = 0;
let carrierAmpMod = 0;
let modmoder = 0;
let filter;

let angleSlide = 0;

var maxZ;
var slide_z;
var len;
var opp;



// var cursor1;

var mouseReady = true;

// let xB = 100;
// let yB = 0;
// let szB = 200;

// let shape1;

let rezisableX;
let rezisableY;



function setup() {
  // createCanvas(windowWidth, windowHeight);
  noFill();



  // yB = windowHeight / 2;




  carrier = new p5.Oscillator('sine');
  filter = new p5.HighPass();
  noise = new p5.Noise('sine');
  // carrier.amp(1, 0.01); // set amplitude
  carrier.freq(carrierBaseFreq); // set frequency
  carrier.start();
  // carrier.start(); // start oscillating

  // try changing the type to 'square', 'sine' or 'triangle'
  modulator = new p5.Oscillator('sine');
  // modulator.freq(carrierBaseFreq); // set frequency
  modulator.start();
  // 

  // add the modulator's output to modulate the carrier's frequency
  modulator.disconnect();
  carrier.freq(modulator);

  // create an FFT to analyze the audio
  analyzer = new p5.FFT();

  // fade carrier in/out on mouseover / touch start
  //toggleAudio(cnv);

  len = 100;
  maxZ = 255;
  unbo = width;
  unboy = height;




  // colorMode(HSB, maxH, maxB);
  textAlign(LEFT, CENTER);
  textSize(20);
  // rectMode(CENTER);
  noise.disconnect();
  noise.connect(filter);

  windowResized();


}

function draw() {
  background(30);


  // shape1.over();
  // shape1.update();
  // shape1.show();

  slide_z.show();
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
  modulator.freq(modulatorFreq);

  let Freq = map(cursor1.valx, 0, windowWidth, 20, 5000);
  let Reso = map(cursor1.valy, 0, windowHeight, 15, 0);
  Freq = constrain(Freq, 0, 22050);
  filter.freq(Freq);
  filter.res(Reso);

  // change the amplitude of the modulator
  // negative amp reverses the sawtooth waveform, and sounds percussive
  
  // modMaxDepth = Modmod;
  let modmoder = map(cursor1.valy, 0, windowHeight, modMinDepth, modMaxDepth);
  let Modmod = map(slide_z.val, 0, maxZ, 0, modmoder);
  let modDepth = map(cursor1.valy, 0, windowHeight, modMinDepth, modMaxDepth);

  carrier.amp(modDepth - Modmod);
  modulator.amp(150, 0.1);



  // let noiseAmpMod =0;
  // let noiseAmpMod = map(slide_z.val, 0, maxZ, 0, 1.0);
  // let modamp = map(cursor1.valy, 0, windowHeight, 0, 1.0);
  // let noisYZ = constrain(modamp - noiseAmpMod, -1, 0);
  // constrain(noisYZ, 0, 0.1);
  // let carrierAmpMod = map(slide_z.val, 0, maxZ, 1.0, 0);
  // carrier.amp(carrierAmpMod);
  let modmoderamp = map(cursor1.valy, 0, windowHeight, modMinDepth, modMaxDepth);
  let Modmodamp = map(slide_z.val, 0, maxZ, 0, modmoderamp);
  let modDepthamp = map(cursor1.valy, 0, windowHeight, modMinDepth, modMaxDepth);
  noise.amp( Modmodamp );


  // analyze the waveform
  // waveform = analyzer.waveform();

  // draw the shape of the waveform
  // stroke(255);
  // strokeWeight(10);
  // beginShape();
  // for (let i = 0; i < waveform.length; i++) {
  //   let x = map(i, 0, waveform.length, 0, width);
  //   let y = map(waveform[i], -1, 1, -height / 2, height / 2);
  //   vertex(x, y + height / 2);
  // }
  // endShape();


  // noStroke();



  // strokeWeight(1);
  // add a note about what's happening
  push();
  
  let carrierTXT = map(slide_z.val, 0, maxZ, 255, 30);
  fill(carrierTXT);
  noStroke();
  textSize(10);
  text('X=Carrier Frequency: ' + modFreq.toFixed(3) + ' Hz', width *0.02, 20);
  text(
    'Y=Carrier Amplitude: ' + modDepth.toFixed(3),
    width *0.02,
    40
  );
  text(
    'Modulator Frequency: ' + + modulatorFreq + ' Hz',
    width *0.02,
    60
  );
  let filterTXT = map(slide_z.val, 0, maxZ, 30, maxZ);
  
  fill(filterTXT);
  text(
    'Y=Resonance: ' + Reso.toFixed(3) + ' Hz',
    width *0.5,
    40
  );
  text(
   'X=LowPass Frequency: ' + Modmod.toFixed(3) + ' Hz',
    width * 0.5,
    20
  );
  pop();
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
  this.sz = 35;
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
    // this.x = windowWidth * 0.5;
    // this.y = windowHeight * 0.8;
    // this.cx = constrain(this.x - this.len, this.x - this.len, this.x + this.len);
    this.inCir();
    if (this.drag) {
      this.cx = constrain(mouseX, this.x - this.len, this.x + this.len);
    } 

    this.val = round(map(this.cx, this.x - this.len, this.x + this.len, 0, this.max));

    // opp = slide_z.val <= (slide_z.max / 2) ? round(slide_z.max / 2) : -round(slide_z.max / 2);

    stroke(255);
    line(this.x - this.len, this.y, this.x + this.len, this.y);

    fill(255);
    push();
    noStroke();
    textAlign(CENTER);
    textSize(12);
    text(this.sym, this.x - this.len - 50, this.y);
    pop();
    // text(this.val, this.x + this.len + 10, this.y);
    // ellipse(this.cx, this.y, this.sz, this.sz);
    push();
    rectMode(CENTER);
    rect(this.cx, this.y, this.sz, this.sz);
    pop();
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
    // stroke(50, 100, 255);
    push();
    // stroke(50, 100, 255);
    noFill();
    // rect(this.x, this.y, this.w - this.offsetX, this.h - this.offsetY);
    // ellipse(this.x, this.y, this.w, this.h);
    pop();
    // stroke(50, 100, 255);
    // noStroke();
    line(this.x - 5, this.y, this.x - 50, this.y);
    line(this.x, this.y - 5, this.x, this.y - 50);
    line(this.x, this.y + 5, this.x, this.y + 50);
    line(this.x + 5, this.y, this.x + 50, this.y);
    pop();
    noStroke();
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
  slide_z = new Slider(windowWidth * 0.5, windowHeight * 0.8, 0, "NOISE ", maxZ);
  cursor1 = new Ccursor(100, windowHeight / 2, 0, 0, 50, 50);
}

function touchMoved() {
  // ellipse(mouseX, mouseY, 5, 5);
  // prevent default

}

function touchStarted() {

  // carrier.start(); // start oscillating
  noise.start();
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