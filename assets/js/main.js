//  Carousel - slick.js
$('.autoplay').slick({
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  appendDots: $(".slider-frame")
});

function degreesToCardinal(deg) {
  if (deg > 11.25 && deg < 33.75) {
    return "NNE";
  } else if (deg > 33.75 && deg < 56.25) {
    return "NE";
  } else if (deg > 56.25 && deg < 78.75) {
    return "ENE";
  } else if (deg > 78.75 && deg < 101.25) {
    return "E";
  } else if (deg > 101.25 && deg < 123.75) {
    return "ESE";
  } else if (deg > 123.75 && deg < 146.25) {
    return "SE";
  } else if (deg > 146.25 && deg < 168.75) {
    return "SSE";
  } else if (deg > 168.75 && deg < 191.25) {
    return "S";
  } else if (deg > 191.25 && deg < 213.75) {
    return "SSW";
  } else if (deg > 213.75 && deg < 236.25) {
    return "SW";
  } else if (deg > 236.25 && deg < 258.75) {
    return "WSW";
  } else if (deg > 258.75 && deg < 281.25) {
    return "W";
  } else if (deg > 281.25 && deg < 303.75) {
    return "WNW";
  } else if (deg > 303.75 && deg < 326.25) {
    return "NW";
  } else if (deg > 326.25 && deg < 348.75) {
    return "NNW";
  } else {
    return "N";
  }
}

var apiKey = "4ecdc01b5584988caec51ee700a06511";
var proxy = "https://obscure-gorge-69381.herokuapp.com/";

function getWeather() {
  $.ajax({
    async: true,
    crossDomain: true,
    url: "https://api.openweathermap.org/data/2.5/weather?zip=84011,us&units=imperial&APPID=" + apiKey,
    method: "GET"
  }).then(response => {
    console.log(response);
    var degrees = degreesToCardinal(response.wind.deg);
    var convertedTemp = Math.round(response.main.temp);
    var convertedSpeed = Math.round(response.wind.speed);
    var weatherDiv = $("<div>");
    var loc = $("<p>Local Weather: </p>");
    var image = $("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png'>");
    var cond = $("<p>" + response.weather[0].main + "</p>");
    var temp = $("<p>" + convertedTemp + " F" + "</p>");
    var wind = $("<p>Wind: " + degrees + " " + convertedSpeed + "mph</p>");
    var attribution = $("<p class='weather-link'>Weather data provided by <a href='https://openweathermap.org' target='_blank'>OpenWeatherMap.org</a>");
    weatherDiv.addClass("weather-div");
    image.addClass("weather-img");
    cond.addClass("weather-cond");
    temp.addClass("weather-temp");
    wind.addClass("weather-wind");
    loc.addClass("weather-loc");
    weatherDiv.append(loc);
    weatherDiv.append(image);
    weatherDiv.append(cond);
    weatherDiv.append(wind);
    weatherDiv.append(temp);
    $("#weather-display").html("");
    $("#weather-display").append(weatherDiv);
    $("#weather-display").append(attribution);
  });
}

getWeather();

setInterval(getWeather, 1000 * 600);


// $.ajax({
//   async: true,
//   crossDomain: true,
//   url: "https://obscure-gorge-69381.herokuapp.com/http://api.wunderground.com/api/628f83f5e25fe2dc/conditions/q/UT/Bountiful.json",
//   method: "GET"
// }).then(response => {
//   var weather = response.current_observation;
//   var weatherDiv = $("<div>");
//   var loc = $("<p>Weather in " + weather.display_location.full + ": </p>");
//   var image = $("<img src='" + weather.icon_url + "'>");
//   var cond = $("<p>" + weather.weather + "</p>");
//   var temp = $("<p>" + weather.temp_f + " F" + "</p>");
//   var wind = $("<p>Wind: " + weather.wind_dir + " " + weather.wind_mph + "mph</p>");
//   var logo = $("<a href='https://www.wunderground.com/?apiref=abb3d872dc5ca35d' class='wu-link'><img src='assets/images/wundergroundLogo_4c_horz.png'></a>");
//   weatherDiv.addClass("weather-div");
//   image.addClass("weather-img");
//   cond.addClass("weather-cond");
//   temp.addClass("weather-temp");
//   wind.addClass("weather-wind");
//   loc.addClass("weather-loc");
//   logo.addClass("weather-logo");
//   weatherDiv.append(loc);
//   weatherDiv.append(image);
//   weatherDiv.append(cond);
//   weatherDiv.append(wind);
//   weatherDiv.append(temp);
//   $("#weather-display").append(weatherDiv);
//   $("#weather-display").append(logo);
// })

// hamburger menu toggle
$(".cross").hide();
$(".menu").hide();
$(".hamburger").click(function () {
  $(".menu").slideToggle(400, function () {
    $(".hamburger").hide();
    $(".cross").show();
  });
});

//  Close the menu by clicking the cross
$(".cross").click(function () {
  $(".menu").slideToggle(400, function () {
    $(".cross").hide();
    $(".hamburger").show();
  });
});

//  Close the menu by clicking one of the links
$(".drop-down-link").click(function () {
  $(".menu").slideToggle(400, function () {
    $(".cross").hide();
    $(".hamburger").show();
  });
});

//  Makes the '#' links scroll rather than instantly jump
$(".page-link").on("click", function () {
  $("html, body").animate({
    scrollTop: $($.attr(this, "href")).offset().top
  }, 500);
})

//  Floorplan toggle - magnific.js
$('.floorplan-thumbs').magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery: { enabled: true },
  titleSrc: 'title'
  // other options
});

//  Gallery toggle - magnific.js
$('.gallery-thumbs').magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery: { enabled: true }
  // other options
});
