var cities = ['London', 'Paris', 'Campinas'];
// function to get city UV index
// function cityUV() {
// var key = "166a433c57516f51dfab1f7edaed8413"

// var URL = "http://api.openweathermap.org/data/2.5/uvi?appid=" + key +
// "&lat=37.75&lon=-122.37"

// $.ajax({
//   url: URL,
//   method: "GET"
// }).then(function (response) {
//   var uIndex = response.value;
//   console.log(uIndex);
//   var pIndex = $('<p>').text('UV Index: '+uIndex);
// })

// }


function displayCityWeather() {
  var city = $(this).attr("data-name");

// API key for first call 
var APIKey = "166a433c57516f51dfab1f7edaed8413";
// set URL for first API call 
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +"q="+ city +"&appid=" + APIKey ;

  // AJAX call main
$.ajax({
  url: queryURL,
  method: "GET"
})
  // We store all of the retrieved data inside of an object called "response"
  .then(function (response) {
    console.log(response);

    var cityDiv = $("<div class='city'>");

    // Store city name 
    var name = response.name;
    console.log(name);
    // create element for name 
    var pName = $('<p>').text('City: '+ name);

    // Append to city div
    cityDiv.append(pName);

    // Store date 
    var date = response.dt;

    var dateString = moment.unix(date).format("MM/DD/YYYY");
    console.log(dateString)

    var pDate = $('<p>').text('Current Date: '+ dateString);

    //Append to city div
    cityDiv.append(pDate);

    // Store temperature 
    var temp = response.main.temp;
    console.log(temp);

    var pTemp = $('<p>').text('Temperature: '+ temp);
    cityDiv.append(pTemp);

    // store humidity 
    var humid = response.main.humidity;
    console.log(humid);

    var pHumid = $('<p>').text('Humidity: '+ humid+ '%');
    cityDiv.append(pHumid);

    //Store wind speed 
    var windSpeed = response.wind.speed;
    console.log(windSpeed);

    var pSpeed = $('<p>').text('Wind Speed: '+windSpeed+ ' kPh');
    cityDiv.append(pSpeed);

    // Store UV index 
    //  cityUV()
    //  cityDiv.append(pIndex);

    //Append div to cities view 
    $('#cities-view').prepend(cityDiv);
  });
}
// displayCityWeather();

// Display added buttons to page

function renderButtons() {
  // Clear buttons to avoid repetition of buttons 
  $('#buttons-view').empty();

  // Looping through the array of cities
  for (var i = 0; i < cities.length; i++) {
    console.log(cities[i]);

    // Then dynamicaly generating buttons for each city in the array
    
    var a = $("<button>");
    // Adding a class of movie-btn to our button
    a.addClass("city-btn");
    // Adding a data-attribute
    a.attr("data-name", cities[i]);
    // Providing the initial button text
    a.text(cities[i]);
    // Adding the button to the buttons-view div
    $("#buttons-view").append(a);
  }
};

// Event handler for when city button is clicked
// This function handles events where a movie button is clicked
$("#add-city").on("click", function(event) {
  event.preventDefault();
  // This line grabs the input from the textbox
  var city = $("#city-input").val().trim();

  // Adding movie from the textbox to our array
  cities.push(city);

  // Calling renderButtons which handles the processing of our movie array
  renderButtons();
  $('#city-input').val().empty();
});
// Adds an event listener to all buttons with 'city-btn' class and calls weather function
$(document).on("click", ".city-btn", displayCityWeather);

// Initial Renderbuttons 
renderButtons();
