const api_key = "26fa06970de1a3e3f405ec90327e51e8";

const api_url = " https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector(".header .searchbar")
const btn = document.querySelector(".header .search")

const img = document.querySelector(".body img")


async function checkweather(city) {
    const response = await fetch(api_url + city + `&appid=${api_key}`)



    if (response.status == 404) {
        document.querySelector(".place").innerHTML = "City name not found"
        document.querySelector(".temp").innerHTML = "-- &degC"
        document.querySelector(".humi").innerHTML = "-- %"
        document.querySelector(".wind").innerHTML = "-- km/h"
    }
    else {

        var data = await response.json()
        document.querySelector(".place").innerHTML = data.name
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&degC"
        document.querySelector(".humi").innerHTML = data.main.humidity + "%"
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "km/h"

        if (data.weather[0].main == "Haze") {
            img.src = "recorces/images/drizzle.png"
        }
        else if (data.weather[0].main == "Rain") {
            img.src = "recorces/images/rain.png"
        }
        else if (data.weather[0].main == "Clouds") {
            img.src = "recorces/images/clouds.png"
        }
        else if (data.weather[0].main == "Mist") {
            img.src = "recorces/images/mist.png"
        }
        else if (data.weather[0].main == "Snow") {
            img.src = "recorces/images/snow.png"
        }
        else {
            img.src = "recorces/images/clear.png"
        }


    }
}


btn.addEventListener("click", () => {
    checkweather(search.value)
})

