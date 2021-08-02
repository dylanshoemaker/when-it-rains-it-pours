// api key 3cdd7f0cff5a4ed1af7ae0635d8af1e2
// api.openweathermap.org/data/2.5/weather?q={city name}&appid=
var cityName = document.getElementById("city-name")
var button = document.getElementById('btn');
var formEl = document.getElementById("user-form")
var buttonForm = document.getElementById("button-form")
var cityOutput = document.getElementById("output-city")
var tempOutput = document.getElementById("output-temp")
var windOutput = document.getElementById("output-wind")
var humidityOutput = document.getElementById("output-humidity")
var uvOutput = document.getElementById("output-uv")
var weatherIcon = document.getElementById("icon")
var buttonList = document.getElementById("button-list")
var dayOneTemp = document.getElementById("dayOneTemp")
var dayTwo = document.getElementById("dayTwo")
var dayThree = document.getElementById("dayThree")
var dayFour = document.getElementById("dayFour")
var dayFive = document.getElementById("dayFive")

formEl.addEventListener("submit",function(event){
  event.preventDefault();
  //use the name search api to search for the cities coordinates
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName.value+'&units=imperial&appid=3cdd7f0cff5a4ed1af7ae0635d8af1e2' )
  .then(response => response.json())
  .then(data => {
    cityOutput.innerText = data.name;

    var butn=document.createElement("input");
    butn.setAttribute("type", "submit");
    butn.setAttribute("value", data.name);
    butn.setAttribute("id", data.name);
    buttonList.appendChild(butn);
    console.log(data);
    


    var latEl = data.coord.lat.toFixed(2);
    var lonEl = data.coord.lon.toFixed(2);
    //use the coordinate search api to pull up the data because the name search api does not include UV Index info
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+ latEl +"&lon="+ lonEl +"&exclude=hourly&units=imperial&appid=3cdd7f0cff5a4ed1af7ae0635d8af1e2" )
    .then(response => response.json())
    .then(data => {
      
      tempOutput.innerText = data.current.temp;
      windOutput.innerText = data.current.wind_speed;
      humidityOutput.innerText = data.current.humidity;
      uvOutput.innerText = data.current.uvi;
      iconCode = data.current.weather[0].icon;
      var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
      $("#icon").html("<img src='" + iconUrl  + "'>");  //https://www.reddit.com/r/FreeCodeCamp/comments/4con5s/how_do_i_use_the_icon_given_in_the_open_weather/


    });
    


  });
  




});

// buttonForm.addEventListener("submit",function(event){    //https://www.geeksforgeeks.org/how-to-create-a-form-dynamically-with-the-javascript/
//   event.preventDefault();   

//   console.log(event);
//   this.id = function() {
//     fetch('https://api.openweathermap.org/data/2.5/weather?q='+this.id+'&units=imperial&appid=3cdd7f0cff5a4ed1af7ae0635d8af1e2' )
//     .then(response => response.json())
//     .then(data => {
//     console.log(data);
//   //   var butn=document.createElement("button");
//   //   butn.innerHTML=data.name;
//   //   buttonList.appendChild(butn);
//   // });
//   }); submitter
//   target[0]
//   }
//   // //use the name search api to search for the cities coordinates
//   // fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName.value+'&units=imperial&appid=3cdd7f0cff5a4ed1af7ae0635d8af1e2' )
//   // .then(response => response.json())
//   // .then(data => {
//   //   console.log(data);
//   // //   var butn=document.createElement("button");
//   // //   butn.innerHTML=data.name;
//   // //   buttonList.appendChild(butn);
//   // // });
//   // });
// });




formEl.addEventListener("submit",function(event){
  event.preventDefault();
  //use the name search api to search for the cities coordinates
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+cityName.value+'&units=imperial&appid=3cdd7f0cff5a4ed1af7ae0635d8af1e2')
  .then(response => response.json())
  .then(data => {
    console.log(dayOneDate);
    //moment(dayOneDate).format('MM/DD/YYYY').innerText = data.list[6].dt_txt;
    dayOneDate.innerText = tomorrow
    dayOneIcon.innerText = data.list[6].weather[0].icon;
    dayOneTemp.innerText = data.list[6].main.temp;
    dayOneWind.innerText = data.list[6].wind.speed;
    dayOneHumidity.innerText = data.list[6].main.humidity;
    dayTwoDate.innerText = threeDay
    dayTwoIcon.innerText = data.list[14].weather[0].icon;
    dayTwoTemp.innerText = data.list[14].main.temp;
    dayTwoWind.innerText = data.list[14].wind.speed;
    dayTwoHumidity.innerText = data.list[14].main.humidity;
    dayThreeDate.innerText = fourDay
    dayThreeIcon.innerText = data.list[22].weather[0].icon;
    dayThreeTemp.innerText = data.list[22].main.temp;
    dayThreeWind.innerText = data.list[22].wind.speed;
    dayThreeHumidity.innerText = data.list[22].main.humidity;
    dayFourDate.innerText = fiveDay
    dayFourIcon.innerText = data.list[30].weather[0].icon;
    dayFourTemp.innerText = data.list[30].main.temp;
    dayFourWind.innerText = data.list[30].wind.speed;
    dayFourHumidity.innerText = data.list[30].main.humidity;
    dayFiveDate.innerText = sixDay
    dayFiveIcon.innerText = data.list[38].weather[0].icon;
    dayFiveTemp.innerText = data.list[38].main.temp;
    dayFiveWind.innerText = data.list[38].wind.speed;
    dayFiveHumidity.innerText = data.list[38].main.humidity;
  });
});



$("#currentDay").text(moment().format("(M/D/YYYY)"));
let today     = moment();
let tomorrow  = moment().add(1,'days').format("M/D/YYYY");
let threeDay = moment().add(2, 'days').format("M/D/YYYY");
let fourDay = moment().add(3, 'days').format("M/D/YYYY");
let fiveDay = moment().add(4, 'days').format("M/D/YYYY");
let sixDay = moment().add(5, 'days').format("M/D/YYYY");



