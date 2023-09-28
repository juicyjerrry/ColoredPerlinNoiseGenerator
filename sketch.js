//todo add min and max slider values

let bg;
let slider;

//small noise scale shrinks the perlin scale by a large amount, giving cloudy look
let noiseScale = 0.009;

const colors = [
  "#FB265C",
  "#00CB72",
  "#FECB00",
  "#8C83FF",
];

function setup() {
  createCanvas(1080, 720);
  
  bg = createGraphics(width, height);
  
  slider = createSlider(0, 255, 100);
  slider.position(10, 10);
  slider.style('width', '80px');
  slider.mouseReleased(createBG);
  
  createBG();
}

function draw() {
  //draw the image
  image(bg, 0, 0, width, height);
}

function createBG(){ 
    
  let numBands = slider.value();
  
  //loop through every pixel
  for(let i = 0; i < bg.width; i ++){
    for(let j = 0; j < bg.width; j ++){
      
      //create perlin noise
      const n = noise(i * noiseScale, j * noiseScale);
      
      const band = int(n * numBands);
      const color = band % colors.length;
      
      bg.stroke(colors[color]);
      bg.point(i,j);
    }
  }
}