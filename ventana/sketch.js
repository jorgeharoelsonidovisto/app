// this class describes the properties of a single particle.
class Particle {
  // setting the co-ordinates, radius and the
  // speed of a particle in both the co-ordinates axes.
  constructor() {
    this.x = random(50, width-80);
    this.y = random(50, height-50);
    this.r = random(30, 30);
    this.xSpeed = random(-0.3, 0.4);
    this.ySpeed = random(-0.3, 0.3);
    this.on = false;
  }

  // creation of a particle.
  createParticle() {
    noStroke();
    fill('rgba(255,255,255,0.5)');
    circle(this.x, this.y, this.r);
  }



  // setting the particle in motion.
  moveParticle(particles) {
    // particles.forEach(elemento => {
    //   let dis = dist(this.x, this.y, elemento.x, elemento.y);
    //   if (dis <= 50){
    //     this.xSpeed *= -1;
    //     this.ySpeed *= -1;

    //   }else{
        
    //   }
    // });
    if (this.x < 50 || this.x > width-80)
    this.xSpeed *= -1;
  if (this.y < 50 || this.y > height-50)
    this.ySpeed *= -1;


    
  this.x += this.xSpeed;
  this.y += this.ySpeed;
  }
 
  clickedParticle(mx, my, url, name) {
    let link;
    function mouseClicked() {
     
    }
    if (mouseIsPressed) {
        if (mx > this.x - (this.r /2) && mx < this.x + (this.r /2)  && my > this.y - (this.r /2)  && my < this.y + (this.r /2) ) {
          this.on = true;
          link = createA(url,name, "_self");
          link.position(this.x-20, this.y+30); 
          link.style('color','#ffffff');
          link.style('font-size', '16px');
          link.style('times');

                    setTimeout(eraseLink,2000);
          function eraseLink() {
            link.hide(); 
            
          }
          noLoop();
// background(255);
          // this.offsetX = this.x - mouseX;
          // this.offsetY = this.y - mouseY;
        }
        else{
          function loopi() {
            loop(); 
            
          }
          setTimeout(loopi,2000);
        }
      }
      

  }

  

  // this function creates the connections(lines)
  // between particles which are less than a certain distance apart
  joinParticles(particles) {
    particles.forEach(elemento => {
      let dis = dist(this.x, this.y, elemento.x, elemento.y);
      if (dis ) {
        stroke('rgba(255,255,255,0.05)');
        line(this.x, this.y, elemento.x, elemento.y);
      }
    });
  }

}

// an array to add multiple particles
let particles = [];
let urls = ["https://es.wikipedia.org/wiki/Luz", 
"https://es.wikipedia.org/wiki/Astronom%C3%ADa", 
"https://es.wikipedia.org/wiki/Astrof%C3%ADsica", 
"https://home.cern",
"https://www.nasa.gov",
"http://www.esa.int", 
"https://oac.unc.edu.ar", 
"https://teslauniverse.com", 
"https://es.wikipedia.org/wiki/F%C3%ADsica" , 
"https://es.wikipedia.org/wiki/Mecánica_cuántica", 
"https://es.wikipedia.org/wiki/Sonido", 
"https://es.wikipedia.org/wiki/Vibración", 
"https://es.wikipedia.org/wiki/Estética", 
"https://es.wikipedia.org/wiki/Minimalismo", 
"https://es.wikipedia.org/wiki/Sumi-e", 
"https://es.wikipedia.org/wiki/Futurismo", 
"https://es.wikipedia.org/wiki/Abstracción_geométrica",
"https://www.march.es/arte/madrid/exposiciones/america/los-artistas.aspx",
"https://es.wikipedia.org/wiki/Suprematismo",
"https://www.bauhaus.de/en/",
"https://www.studiointernational.com/3D/",
"https://es.wikipedia.org/wiki/Heráclito",
"https://es.wikipedia.org/wiki/Baruch_Spinoza",
"https://es.wikipedia.org/wiki/Henry_David_Thoreau",
"https://es.wikipedia.org/wiki/Arthur_Schopenhauer",
"https://es.wikipedia.org/wiki/Theodor_Adorno",
"https://es.wikipedia.org/wiki/Emil_Cioran",
"https://michel-foucault.com",
"https://www.webdeleuze.com",
"https://es.wikipedia.org/wiki/Zen",
"http://www.zen-deshimaru.com/es/zen/que-es-el-zen",
"https://es.wikipedia.org/wiki/Dhammapada",
"https://es.wikipedia.org/wiki/I_Ching",
"https://bksiyengar.com",
"https://es.wikipedia.org/wiki/Haiku",
"https://www.borges.pitt.edu",
"https://es.wikipedia.org/wiki/Vasili_Kandinski",
"https://es.wikipedia.org/wiki/Kazimir_Malévich",
"https://es.wikipedia.org/wiki/Walter_Ruttmann",
"https://es.wikipedia.org/wiki/Donald_Judd",
"https://es.wikipedia.org/wiki/Nam_June_Paik",
"https://www.bachvereniging.nl/en",
"http://www.mozart.com/en/home",
"http://www.lvbeethoven.com",
"http://www.johannesbrahms.org",
"https://mahlerfoundation.org",
"https://www.scriabinsociety.com",
"https://www.britannica.com/biography/Claude-Debussy/Evolution-of-his-work",
"https://charlesives.org",
"https://fondation-igor-stravinsky.org/en/",
"https://es.wikipedia.org/wiki/Edgar_Varèse",
"https://es.wikipedia.org/wiki/Astor_Piazzolla",
"https://www.johncage.org",
"http://www.gyoergy-ligeti.de",
"https://es.wikipedia.org/wiki/Pierre_Schaeffer",
"http://www.karlheinzstockhausen.org",
"https://bernard-parmegiani.fr",
"https://es.wikipedia.org/wiki/Éliane_Radigue",
"http://michelchion.com ",
"http://www.mortonsubotnick.com ",
"https://www.magison.org/index.html ",
"https://www.stevereich.com ",
"https://www.fundacionyupanqui.com.ar ",
"https://es.wikipedia.org/wiki/Tomatito ",
"https://es.wikipedia.org/wiki/Manolo_Juárez ",
"https://brian-eno.net ",
"http://www.kraftwerk.com ",
"http://www.clubdevo.com ",
"http://www.ryojiikeda.com ",
"http://www.alvanoto.com ",
"https://raster-media.net",
"http://www.inkilinorecords.net ",
"http://www.franciscolopez.net ",
"https://www.artesonoro.net ",
"http://www.ryoichikurokawa.com ",
"http://kolgen.net ",
"http://findelmundo.com.ar ",
"https://netart.org.uy ",
"http://www.jorgeharo.com ",
"http://www.oskarfischinger.org ",
"https://www.nfb.ca/directors/norman-mclaren/ ",
"http://www.centerforvisualmusic.org ",
"http://www.tativille.com ",
"https://kubrick.life ",
"https://andrei-tarkovsky.com ",
"https://www.davidlynch.com ",
"http://www.lafuga.cl/una-tarde-con-claudio-caldini/704 ",
"https://computersciencewiki.org/index.php/Abstraction ",
"https://en.wikipedia.org/wiki/ASCII ",
"https://en.wikipedia.org/wiki/Von_Neumann_architecture ",
"https://github.com/CNMAT/CNMAT-MMJSS/wiki/02-Prehistory-and-History-of-Max",
"https://en.wikipedia.org/wiki/Topological_sorting ",
"https://en.wikipedia.org/wiki/Numerical_analysis ",
"https://es.wikipedia.org/wiki/Programación_orientada_a_objetos ",
"https://es.wikipedia.org/wiki/Apple ",
"https://es.wikipedia.org/wiki/Léon_Theremin ",
"https://en.wikipedia.org/wiki/ANS_synthesizer ",
"https://es.wikipedia.org/wiki/Sintetizador_modular ",
"http://www.vintagesynth.com/misc/buchla200.php ",
"http://www.vintagesynth.com/misc/serge.php ",
"https://en.wikipedia.org/wiki/Frequency_modulation_synthesis ",
"https://es.wikipedia.org/wiki/John_Chowning ",
"http://www.vintagesynth.com/yamaha/tx81z.php ",
"https://en.wikipedia.org/wiki/Nyquist/Shannon/sampling/theorem ",
"https://es.wikipedia.org/wiki/Sampler ",
"http://www.vintagesynth.com/ensoniq/ens_eps.php ",
"https://es.wikipedia.org/wiki/S%C3%ADntesis_granular ",
"https://www.vintagedigital.com.au/ensoniq-dp4-parallel-effects-processor/ ",
"https://inagrm.com/fr ",
"https://www.ircam.fr ",
"https://ccrma.stanford.edu ",
"http://elektronmusikstudion.se ",
"http://cmmas.org ",
"https://reactable.com ",
"https://www.plataformabogota.org ",
"https://www.atractor.org/inicioes ",
"https://www.apple.com ",
"https://global.beyerdynamic.com ",
"https://pro.sony/ue_US/products/headphones ",
"https://motu.com ",
"https://www.genelec.com/studio-monitors ",
"https://www.palmer-germany.com/es/productos/controladores-de-estudio-y-de-monitores/",
"https://roli.com/products/blocks ",
"https://www.zoom.co.jp ",
"https://www.arduino.cc ",
"https://nintendo.fandom.com/es/wiki/Wii_Remote ",
"https://www.lacie.com/la/es/ ",
"https://shop.westerndigital.com/products/memory-cards/sandisk-extreme-pro-uhs-i-sd#SDSDXXY-064G-ANCIN", 
"https://www.ableton.com ",
"https://cycling74.com ",
"https://maxforlive.com ",
"https://www.native-instruments.com/es/",
"https://en.wikipedia.org/wiki/Quartz_Composer ",
"https://developer.apple.com/documentation/quartz/quartz_composer ",
"http://syphon.v002.info ",
"https://warmplace.ru/soft/ans/ ",
"https://www.audacityteam.org ",
"https://www.fabfilter.com ",
"https://www.izotope.com ",
"https://www.waves.com ",
"https://www.sonarworks.com ",
"http://www.michaelnorris.info/software/soundmagic-spectral ",
"https://zerodebug.com ",
"https://liine.net ",
"https://hexler.net ", 
"https://osculator.net ",
"http://www.borderlands-granular.com/app/ ",
"https://amcoustics.com ",
"http://algocomp.blogspot.com ",
"https://www.almeriaciudad.es ",
"https://www.degata.com ",
"https://es.wikipedia.org/wiki/Madrid ",
"https://www.barcelona.cat/en/ ",
"https://es.wikipedia.org/wiki/El_Masnou ",
"https://www.visitlisboa.com ",
"https://es.wikipedia.org/wiki/Oporto ",
"https://en.parisinfo.com ",
"https://www.berlin.de/en/ ",
"https://www.cracovia.net ",
"https://www.prague.eu/en ",
"https://www.visitfinland.com/helsinki/ ",
"https://www.cityoflondon.gov.uk/things-to-do ",
"https://turismo.buenosaires.gob.ar/es ",
"https://montevideo.gub.uy/areas-tematicas/turismo ",
"https://turismo.gub.uy/index.php/lugares-para-ir/region-este/areas-protegidas/parque-nacional-cabo-polonio ",
"https://es.wikipedia.org/wiki/Bogotá ",
"https://es.wikipedia.org/wiki/Laguna_de_la_Cocha ",
"https://es.wikipedia.org/wiki/Morelia ",
"https://es.wikipedia.org/wiki/Nueva_York ",
"https://www.hamburg.com",
"https://es.wikipedia.org/wiki/Provincia_de_Huelva ",
"https://es.wikipedia.org/wiki/Skagen ",
"https://es.wikipedia.org/wiki/Ushuaia ",
"https://es.wikipedia.org/wiki/Hannah_Arendt ",
"https://es.wikipedia.org/wiki/Alicia_Moreau_de_Justo ",
"https://es.wikipedia.org/wiki/Lima ", 
"https://es.wikipedia.org/wiki/São_Paulo ", 
"https://es.wikipedia.org/wiki/Ginebra ", 
"https://es.wikipedia.org/wiki/Ciudad_de_México ", 
"https://www.synchronator.com ", 
"https://es.wikipedia.org/wiki/Asunción ", 
"https://es.wikipedia.org/wiki/Valpara%C3%ADso ", 
"https://es.wikipedia.org/wiki/Róterdam ", 
"https://es.wikipedia.org/wiki/Estocolmo ", 
];
names = ["LUZ",
  "ASTRONOMIA",
  "ASTROFISICA",
  "CERN",
  "NASA",
  "ESA",
  "OAC",
  "TESLA",
  "FISICA",
  "CUANTICA",
  "SONIDO",
  "VIBRACION",
  "ESTETICA",
  "MINIMALISMO",
  "SUMI-E",
  "FUTURISMO",
  "GEOMETRICA",
  "ABSTRACCION",
  "SUPREMATISMO",
  "BAUHAUS",
  "STUDIO",
  "HERACLITO",
  "SPINOZA",
  "THOREAU",
  "SCHOPENHAUER",
  "ADORNO",
  "CIORAN",
  "FOUCAULT",
  "DELEUZE",
  "ZEN",
  "ZAZEN",
  "DHAMMAPADA",
  "ICHING",
  "IYENGAR",
  "HAIKU",
  "BORGES",
  "KANDINSKI",
  "MALEVICH",
  "RUTTMANN",
  "JUDD",
  "PAIK",
  "BACH",
  "MOZART",
  "BEETHOVEN",
  "BRAHMS",
  "MAHLER",
  "SCRIABIN",
  "DEBUSSY",
  "IVES",
  "STRAVINSKY",
  "VARESE",
  "PIAZZOLA",
  "CAGE",
  "LIGETI",
  "SCHAEFFER",
  "STOCKHAUSEN",
  "PARMEGIANI",
  "RADIGUE",
  "CHION",
  "SUBOTNICK",
  "BAYLE",
  "REICH",
  "YUPANQUI",
  "TOMATITO",
  "JUAREZ",
  "ENO",
  "KRAFTWERK",
  "DEVO",
  "IKEDA",
  "NOTO",
  "RASTER",
  "INKILINO",
  "LOPEZ",
  "ROCHA",
  "KORUKAWA",
  "KOLGEN",
  "FDM",
  "MACKERN",
  "HARO",
  "FISCHINGER",
  "MCLAREN",
  "CVM",
  "TATI",
  "KUBRICK",
  "TARKOVSKY",
  "LYNCH",
  "CALDINI",
  "ABSTRACTION",
  "ASCII",
  "NEUMANN",
  "MAX",
  "TOPOLOGICAL",
  "ANALISYS",
  "POO",
  "APPLE_1",
  "THEREMIN",
  "ANS",
  "MODULAR",
  "BUCHLA",
  "SERGE",
  "FM",
  "CHOWNING",
  "TX81Z",
  "NYSQUIST",
  "SAMPLER",
  "EPS",
  "GRANULAR",
  "DP/4",
  "GRM",
  "IRCAM",
  "CCRMA",
  "EMS",
  "CMMAS",
  "REACTABLE",
  "PLATAFORMA",
  "ATRACTOR",
  "APPLE_2",
  "BETERDYNAMICS",
  "SONY",
  "MOTU",
  "GENELEC",
  "PALMER",
  "ROLI",
  "ZOOM",
  "ARDUINO",
  "WII",
  "LACIE",
  "WD",
  "ABLETON",
  "C74",
  "M4L",
  "NI",
  "QC_1",
  "QC_2",
  "SYPHON",
  "WARMPLACE",
  "AUDACITY",
  "FABFILTER",
  "IZOTOPE",
  "WAVES",
  "SONARWORKS",
  "NORRIS",
  "ZERODEBUG",
  "LIINE",
  "HEXLER",
  "OSCULATOR",
  "BORDERLANDS",
  "AMCOUSTICS",
  "ALGORITHMIC",
  "ALMERIA",
  "CABO",
  "MADRID",
  "BARCELONA",
  "MASNOU",
  "LISBOA",
  "OPORTO",
  "PARIS",
  "BERLIN",
  "CRACOVIA",
  "PRAGUE",
  "HELSINKI",
  "LONDON",
  "BUE",
  "MONTEVIDEO",
  "POLONIO",
  "BOGOTA",
  "COCHA",
  "MORELIA",
  "NYC",
  "HAMBURG",
  "HUELVA",
  "SKAGEN",
  "USHUAIA",
  "ARENDT",
  "MOREAU",
  "LIMA",
  "SP",
  "GINEBRA",
  "MEXICO",
  "SYNCHRONATOR",
  "ASUNCION",
  "VALPARAISO",
  "ROTERDAM",
  "ESTOCOLMO",
  ];

function setup() {
  // createCanvas(720, 400);
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++) {
    particles.push(new Particle());
    
  }
  // for (let l = random(0,183); l < 70; l++) {
  // }
  
}

// function mousePressed() {
//   // Check if mouse is inside the circle
//   let d = dist(this.x, this.y, this.r, this.r);
//   if (d < 20) {
//     // Pick new random color values
//     background(255);
//   }
// }


function draw() {
  background('#0f0f0f');

  for (let i = 0; i < particles.length; i++) {
    let l = round(random(0,182));
    particles[i].createParticle();
    particles[i].moveParticle(particles.slice(i));
    particles[i].clickedParticle(mouseX, mouseY, urls[l], names[l]);
    particles[i].joinParticles(particles.slice(i));
    
  }
}

function windowResized() {

  // resizeCanvas(windowWidth, windowHeight);

}
// function touchStarted() {

//   // carrier.start(); // start oscillating
//   // noise.start();
//   //shape1.pressed();
//   // carrier.amp(0);
//   // noise.amp(0);
//   return false;
// }