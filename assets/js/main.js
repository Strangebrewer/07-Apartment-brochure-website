//  Carousel - slick.js
$('.autoplay').slick({
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  appendDots: $(".slider-frame")
});

$.ajax({
  async: true,
  crossDomain: true,
  url: "https://obscure-gorge-69381.herokuapp.com/http://api.wunderground.com/api/628f83f5e25fe2dc/conditions/q/UT/Bountiful.json",
  method: "GET"
}).then(response => {
  var weather = response.current_observation;
  var weatherDiv = $("<div>");
  var loc = $("<p>Weather in " + weather.display_location.full + ": </p>");
  var image = $("<img src='" + weather.icon_url + "'>");
  var cond = $("<p>" + weather.weather + "</p>");
  var temp = $("<p>" + weather.temp_f + " F" + "</p>");
  var wind = $("<p>Wind: " + weather.wind_dir + " " + weather.wind_mph + "mph</p>");
  var logo = $("<a href='https://www.wunderground.com/?apiref=abb3d872dc5ca35d' class='wu-link'><img src='assets/images/wundergroundLogo_4c_horz.png'></a>");
  weatherDiv.addClass("weather-div");
  image.addClass("weather-img");
  cond.addClass("weather-cond");
  temp.addClass("weather-temp");
  wind.addClass("weather-wind");
  loc.addClass("weather-loc");
  logo.addClass("weather-logo");
  weatherDiv.append(loc);
  weatherDiv.append(image);
  weatherDiv.append(cond);
  weatherDiv.append(wind);
  weatherDiv.append(temp);
  $("#weather-display").append(weatherDiv);
  $("#weather-display").append(logo);
})

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