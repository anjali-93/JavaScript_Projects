// for the API from open Weather Map

const apiKey = "48a357f73a2096f69a77abe8dea852bc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// to get the element(.search) only the input type
const searchBox = document.querySelector(".search input");

// to get the element(.search) only the input type
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");


// make async function to check the weather in different cities

async function checkWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    // if user write wrong city name it get an error
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();

        // console.log(data);
        //  for displaying the data in the app  and data get from the API

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C ";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

// check the weather conditions accr to that we put the images 

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png"

        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png"
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }



}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
// checkWeather();