function formatDate(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    let dayIndex = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[dayIndex];
  
    return `${day} ${hours}:${minutes}`;
  }
  
  let dateElement = document.querySelector("#date");
  let currentTime = new Date();
  dateElement.innerHTML = formatDate(currentTime);
  
 
  
  
  function localWeather(response) {
   console.log(response.data);
  document.querySelector("#choosencity").innerHTML=response.data.name;
  document.querySelector("#currTemperature").innerHTML=Math.round(response.data.main.temp);
  document.querySelector("#humidity").innerHTML=response.data.main.humidity;
  document.querySelector("#wind-speed").innerHTML = Math.round(response.data.wind.speed);
  document.querySelector("#description").innerHTML=response.data.weather[0].main;
  document.querySelector("#pressure").innerHTML=response.data.main.pressure;
  }
 
  function search(city){
    let apiKey = "577759180b250273cb6dd606dacb4cd6";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(localWeather);
  }
  
  function searchLocation(position){
    let apiKey = "577759180b250273cb6dd606dacb4cd6";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude
    }&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(url).then(localWeather);
  }
  
  function showCurrLoc(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }
  
  function enterSearch(event) {
    event.preventDefault();
    let city =document.querySelector("#city").value;
  search(city);
  }
  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", enterSearch);
  let currentLocation = document.querySelector("#local-submit-info");
  currentLocation.addEventListener("click", showCurrLoc);
  search("Munich");
  
  
  
  
  
  
  
  
  
  