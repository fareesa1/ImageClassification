let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/Ja1baDU60/';


let label = "";

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
  img = loadImage('images.png');
}

function setup() {
  createCanvas(1900,900);
  input = createFileInput(handleFile);
  input.position(570, 855);
 
  classifier.classify(img, gotResult);
}

function draw() {
  background(rgba(0,123,255,.25));

  image(img, 30, 0,1800,900);

 // label
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);
  
}


function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  
  label = results[0].label;
console.log(label);
}

function handleFile(file) {
  
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
  } else {
    img = null;
  }
  
 
}