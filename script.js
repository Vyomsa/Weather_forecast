         const apiKey = "90644ffb7e180db4452e527a699dd1dd";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const WeatherIcon  = document.querySelector(".Weather-icon");
     
        async function checkWeather(city){
        const response = await fetch (apiUrl + city +`&appid=${apiKey}`);
        var data = await response.json();

        console.log(data); 

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%" ;
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

              if(data.weather[0].main == "Clouds"){
                WeatherIcon.src ="images/clouds.png";
              }
            else if(data.weather[0].main == "Clear"){
                WeatherIcon.src ="images/clear.png";
              }
            else if(data.weather[0].main == "Rain"){
                WeatherIcon.src ="images/rain.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                WeatherIcon.src ="images/drizzle.png";
              } 
            else if(data.weather[0].main == "Mist"){
                WeatherIcon.src ="images/mist.png";
              }       

     }

      searchBtn.addEventListener("click", ()=> {
        checkWeather(searchBox.value);
      })
    

      searchBox.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
   });

      searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
    });
