
// set URL for first API call 
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
"q=Bujumbura,Burundi&appid=" + APIKey;

// API key for first call 
var APIKey = "166a433c57516f51dfab1f7edaed8413";

// AJAX call 
$.ajax({
    url: queryURL,
    method: "GET"
  })
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {
        console.log(response);


    });