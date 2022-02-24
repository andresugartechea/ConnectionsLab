let api = "https://api.openweathermap.org/data/2.5/weather?";
let lat = "lat=24.4539";      //by default it shows AD's weather
let lon = "&lon=54.377";
let apiKey = "&appid=e6e914a5263977da0216e71cb16d1b51";
let unit = "&units=metric";

//all the JSON data
let weather;
let currentCity;
let tempValue;
let tempUnitValue;
let description;
let windUnitValue = " m/s";

//images
let karen;
let dialogueBox;

//images cities
let mexico;
let abudhabi;
let newyork;

//images icon weather
let clear_sky;
let clouds;
let few_clouds;
let rain;
let shower_rain;
let snow;
let thunderstorm;

//images weather
let happy_cloud;
let sad_cloud;
let sun;
let rain_droplets;
let thunder;
let elsa;
let mist_wall;

let dialogue = false;

//for animation
let itemSpeed = 1;
let itemPosition = 0;



//like preLoad
window.addEventListener("load", function(){
  fetchData();
  console.log(weather);

  currentCity = document.getElementById("city").value
  tempValue = document.getElementById("tempValue");
  feelsValue = document.getElementById("feels_like");
  humidValue = document.getElementById("humidity");
  windValue = document.getElementById("wind");
  description = document.getElementById("description");

});


////
function fetchData() {
  let URL = api + lat + lon + apiKey + unit;
  fetch(URL)
  .then(response => response.json())
  .then(data => {
    //console.log("data is fetched!")
    weather = data;
    console.log(weather);
  })

}
/////




function setup() {
  canvas = createCanvas(985, 564);//(windowWidth,windowHeight-100);
  canvas.position(164,81);
  canvas.style('z-index','-1');

  karen = loadImage("images/karen.png");
  mexico = loadImage("images/teotihuacan.png");
  newyork = loadImage("images/new_york.png");
  abudhabi = loadImage("images/abu_dhabi.png");
  dialogueBox = loadImage("images/dialogue.png");
  //after the button is clicked

  //icon weather
  clear_sky = loadImage("images/clear_sky.png");
  clouds = loadImage("images/clouds.png");
  few_clouds = loadImage("images/few_clouds.png");
  rain = loadImage("images/rain.png");
  shower_rain = loadImage("images/shower_rain.png");
  snow =  loadImage("images/snow.png");
  thunderstorm = loadImage("images/thunderstorm.png");

  //weather images
  happy_cloud = loadImage("images/happy_cloud.png");
  sad_cloud = loadImage("images/sad_cloud.png");
  sun = loadImage("images/sun.png");
  rain_droplets = loadImage("images/rain_droplets.png");
  thunder = loadImage("images/thunder.png");
  elsa = loadImage("images/elsa.png");
  mist_wall = loadImage("images/mist_wall.png");

  let submit = select("#submit");
  submit.mousePressed(selectCity);

  let tempUnit = select("#tempUnit");
  tempUnit.mousePressed(changeUnit);


}

//https://www.youtube.com/watch?v=OIfEHD3KqCg
// function windowResized() {
//   resizeCanvas(windowWidth,windowHeight-100);

// }

function selectCity() {
  currentCity = document.getElementById("city").value

  if (currentCity == "Abu Dhabi"){
    lat = "lat=24.4539"; 
    lon = "&lon=54.377";
  } else if (currentCity == "New York"){
    lat = "lat=40.7128";
    lon =  "&lon=-74.0060";
  } else if (currentCity == "Mexico"){
    lat = "lat=19.4326";
    lon =  "&lon=-99.1332";
  }

  console.log(currentCity)
  fetchData();
}


function changeUnit(){

  if (tempUnitValue == 'C'){
    unit = "&units=imperial";
    fetchData();
    document.getElementById("tempUnit").value = "F";
    windUnitValue = " mph"
    
  }else if (tempUnitValue == 'F'){
    unit = "&units=metric";
    fetchData();
    tempValue.innerHTML = "temp: "+ round(weather.main.temp);
    document.getElementById("tempUnit").value = "C";
    windUnitValue = " m/s"
    
  }
}

function displayKaren(){
  let proportion =1.2;
  let w = 292*proportion;
  let h = 346*proportion;
  let x = mouseX;

  imageMode(CENTER); 
  if (x<=60){
    x = 60;
  }
  else if (x>=960){
    x = 960;
  }
  else {
    x = mouseX;
  }
  image(karen,x,height-(h/2),w,h);

}


/// TO display animation depending on weather

function checkWeather(){
  let todays_weather = weather.weather[0].description;
  imageMode(CENTER);
  //todays_weather = "snow";

  if (todays_weather == "clear sky"){
    //displayItems(sun, 820, 130, 632, 527,0.4);
    image(clear_sky,110,110,150,150);
  }
  else if (todays_weather == "few clouds"){
    displayItems(happy_cloud, itemPosition, 100, 382, 165);
    displayItems(happy_cloud, itemPosition+80, 170, 382, 165, 0.5);
    image(few_clouds,110,110,150,150);
  }
  else if (todays_weather == "scattered clouds"){
    displayItems(happy_cloud, itemPosition, 100, 382, 165);
    displayItems(happy_cloud, itemPosition-200, 160, 382, 165, 0.8);
    displayItems(happy_cloud, itemPosition+220, 170, 382, 165, 0.5);
    image(clouds,110,110,150,150);
  }
  else if (todays_weather == "broken clouds"){
    displayItems(sad_cloud, itemPosition+100, 100, 640, 331, 0.7);
    displayItems(sad_cloud, itemPosition+300, 150, 640, 331, 0.5);
    displayItems(happy_cloud, itemPosition-200, 160, 382, 165);
    image(clouds,110,110,150,150);
  }
  else if (todays_weather == "shower rain"){
    displayItems(happy_cloud, itemPosition, 100, 382, 165,2);
    displayItems(rain_droplets, itemPosition-220, 280, 378, 340, 0.7);
    displayItems(rain_droplets, itemPosition, 280, 378, 340, 0.7);
    displayItems(rain_droplets, itemPosition+140, 280, 378, 340, 0.7);
    image(shower_rain,110,110,150,150);
  }
  else if (todays_weather == "rain"){
    displayItems(happy_cloud, itemPosition+400, 90, 382, 165,3.2);
    displayItems(happy_cloud, itemPosition-400, 90, 382, 165,3.2);
    displayItems(rain_droplets, itemPosition-600, 500, 378, 340,2);
    displayItems(rain_droplets, itemPosition, 500, 378, 340,2);
    displayItems(rain_droplets, itemPosition+600, 500, 378, 340,2);
    image(rain,110,110,150,150);
  }
  else if (todays_weather == "thunderstorm"){
    displayItems(thunder, itemPosition, 200, 449, 481);
    displayItems(thunder, itemPosition-600, 300, 449, 481, 0.8);
    displayItems(thunder, itemPosition+600, 250, 449, 481, 0.8);
    displayItems(happy_cloud, itemPosition+400, 90, 382, 165,3.2);
    displayItems(happy_cloud, itemPosition-400, 90, 382, 165,3.2);
    displayItems(rain_droplets, itemPosition-600, 500, 378, 340,2);
    displayItems(rain_droplets, itemPosition, 500, 378, 340,2);
    displayItems(rain_droplets, itemPosition+600, 500, 378, 340,2);
    image(thunderstorm,110,110,150,150);
  }
  else if (todays_weather == "snow"){
    displayItems(elsa, itemPosition, 450, 816, 771);
    image(snow,110,110,150,150);
  }
  else if (todays_weather == "mist"){
    displayItems(mist_wall, itemPosition, 450, 1279, 737, 2);
    image(clouds,110,110,150,150);
  }
  else{
    image(clear_sky,110,110,150,150);
  }

  fill(0, 60);
  rect(227, 61, 210, 80, 10);

}

function displayCity(){

  if (currentCity == "Abu Dhabi"){
    imageMode(CORNER);
    image(abudhabi, 0, 0);
  }
  else if (currentCity == "New York"){
    imageMode(CORNER);
    image(newyork, 0, 0);
  }
  else if (currentCity == "Mexico"){
    imageMode(CORNER);
    image(mexico, 0, 0);
  }

  noStroke();


}

function keyPressed(){
   //console.log(mouseX, mouseY);
   if (dialogue == false){
    dialogue = true;
   }
   else if (dialogue == true){
    dialogue = false;
   }
   //console.log(dialogue);
   
 }

 function displayItems(imagen = happy_cloud, x=0, y=0, w=382, h=165, proportion=1){
  let W = w*proportion;
  let H = h*proportion;

   if ((itemPosition>width)||(itemPosition<0)){
    itemSpeed = -itemSpeed;
   }
   itemPosition+=itemSpeed;

   image(imagen,x,y,W,H);
 }


function displayDialogue(){
  let message = "This is Karen Smith. It's " + round(weather.main.temp) + " " + document.getElementById("tempUnit").value + " and there's a 30 percent chance that is already " +(weather.weather[0].description) + ".";
  
  let proportion = 2;
  let w = 158*proportion;
  let h = 69*proportion;
  let x = mouseX;
  if (dialogue == true){
    imageMode(CORNER);

    if (x<=60){
      x = 60;
    }
    else if (x>=960){
      x = 960;
    }
    else {
      x = mouseX;
    }

    image(dialogueBox,x+20,240,w,h);
    fill (0);
    textFont("Super Mario World Text Box");
    textLeading(17);
    text(message,x+80,280,w-60,h)
  }
}

function draw(){

  background(94,145,254);




  if (weather){

    displayCity();
    
    //change unit of temperature
    tempUnitValue = document.getElementById("tempUnit").value;

    tempValue.innerHTML = round(weather.main.temp);
    feelsValue.innerHTML = "Feels like: "+ round(weather.main.feels_like) + " " +  document.getElementById("tempUnit").value;
    humidValue.innerHTML = "Humidity: "+ weather.main.humidity + "%";
    windValue.innerHTML = "Wind: "+ weather.wind.speed + windUnitValue;
    description.innerHTML = (weather.weather[0].description);
    //console.log(weather);
    //displayItems(itemPosition);
    checkWeather();
    displayKaren();
    displayDialogue();
  }



}


