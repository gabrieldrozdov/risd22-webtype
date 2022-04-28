$(document).ready(function(){

  var locations = ["New York","Los Angeles","Chicago","Houston","Phoenix","Philadelphia","San Antonio","San Diego","Dallas","San Jose","Detroit","Jacksonville","Indianapolis","San Francisco","Columbus","Austin","Memphis","Fort Worth","Baltimore","Charlotte","El Paso","Boston","Seattle","Washington","Milwaukee","Denver","Louisville/Jefferson County","Las Vegas","Nashville-Davidson","Oklahoma City","Portland","Tucson","Albuquerque","Atlanta","Long Beach","Fresno","Sacramento","Mesa","Kansas City","Cleveland","Virginia Beach","Omaha","Miami","Oakland","Tulsa","Honolulu","Minneapolis","Colorado Springs","Arlington","Wichita","Raleigh","St. Louis","Santa Ana","Anaheim","Tampa","Cincinnati","Pittsburgh","Bakersfield","Aurora","Toledo","Riverside","Stockton","Corpus Christi","Newark","Anchorage","Buffalo","St. Paul","Lexington-Fayette","Plano","Fort Wayne","St. Petersburg","Glendale","Jersey City","Lincoln","Henderson","Chandler","Greensboro","Scottsdale","Baton Rouge","Birmingham","Norfolk","Madison","New Orleans","Chesapeake","Orlando","Garland","Hialeah","Laredo","Chula Vista","Lubbock","Reno","Akron","Durham","Rochester","Modesto","Montgomery","Fremont","Shreveport","Arlington","Glendale"];
  var location_selection = Math.round(Math.random()*(locations.length-1))
  var location = locations[location_selection];
  console.log(location);
  $('#location').text(location);

  $.getJSON('https://api.openweathermap.org/data/2.5/weather?q='+"location"+'&appid=a0be2ca7d3101a5b3e8a3bbf580143f6&units=imperial', function(data) {
      console.log(data);

      let feels = data["main"]["feels_like"]
      let humidity = data["main"]["humidity"]
      let pressure = data["main"]["pressure"]
      let temp = data["main"]["temp"]
      let temp_max = data["main"]["temp_max"]
      let temp_min = data["main"]["temp_min"]


      let fontSize = Math.round(feels);

      $('#feels').text(feels);
      $('#humidity').text(humidity);
      $('#pressure').text(pressure);
      $('#temp').text(temp);
      $('#temp_max').text(temp_max);
      $('#temp_min').text(temp_min);
      $('#info').css("background", "linear-gradient(90deg, hsl("+Math.round(temp_min*2+150)+",100%,50%) 0%, hsl("+Math.round(temp_max*2+150)+",100%,50%) 100%");
  });

});


