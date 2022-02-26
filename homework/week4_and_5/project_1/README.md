# Connections Lab | Project 1: _Karen Smith's Weather Report_

## Description:

[_Karen Smith's Weather Report_](https://andresugartechea.github.io/ConnectionsLab/homework/week4_and_5/project_1/) is a weather forecast website inspired by the famous character of Mark Waters’ film from 2004, “Mean Girls”. The website allows the user to check the weather in real-time in three different cities: Abu Dhabi, New York, and Mexico. It also gives the option to use either the imperial or metric system for the temperature and wind speed. The creativity of this project comes with the animation that changes according to the weather information.

<img src="description.png" width ="1000" />

## Process:

   #### First drafts:

This project started as a [website with a design and interaction similar to Zoom](https://andresugartechea.github.io/ConnectionsLab/homework/week3/Project_1/), presenting an art journal of important Mexican visual artists. The concept was to have each character in a box that displays information about them with animations that change with the user interaction. Unfortunately, the project was discarded for its complexity and time constraints, but the idea of interactivity was kept for the next concept.

<img src="first_idea.png" width ="1000" />


The second concept that helped mold the final version was a Mario Bros videogame that displays different scenarios and animations representing the weather. The idea was started but discarded since it was similar to a previous project I had worked on before.

<img src="second_idea.png" width ="1000" />

The final concept aimed to combine both concepts: an interactive box (in this case, a television) that displays information about the weather and a famous character that represents the meteorologist.

   #### Wireframe: 
   
   <img src="wireframe.png" width ="1000" />

   #### Major problems and solutions:
   
1. The main challenge for this project was to figure out how to work with API’s, since it was my first time doing so. An important resource that helped me with this was the tutorial by [The Coding Train](https://www.youtube.com/watch?v=DbcLg8nRWEg). Although his tutorial is from three years ago, the way he implements [Open Weather’s API](https://openweathermap.org/api) is similar to the one I had to use:


```
//to define the URL for the API
let api = "https://api.openweathermap.org/data/2.5/weather?";
let lat = "lat=24.4539";      //by default it shows AD's weather
let lon = "&lon=54.377";
let apiKey = "&appid=e6e914a5263977da0216e71cb16d1b51";
let unit = "&units=metric";

//to fetch data
function fetchData() {
  let URL = api + lat + lon + apiKey + unit;
  fetch(URL)
  .then(response => response.json())
  .then(data => {
    weather = data;
    console.log(weather);
  })

}
```


2. The second challenge was to learn how to use the information from the API, already fetched, in JavaScript. After multiple tests I used the following method: 

(example with the temperature value):

In the .html file:
```
<!-- temperature of the weather -->
<div class="temperature">
	<p id="tempValue">Temperature</p>
</div>
```

In the .js file:

```
function draw(){

  background(94,145,254);

  //if data fetched
  if (weather){
    tempValue.innerHTML = round(weather.main.temp);
  }
}
```


   
   ### Next steps:





## Final result: 

