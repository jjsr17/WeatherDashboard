let cityHistory = [];
let apiKey = "4b52afa8a1ec13830b6146e1cb71648a";

let formEl = document.getElementById("weather-search-form");
let formInputEl = document.getElementById("weather-input");
let currentEl = document.getElementById("current");
let forecastEl = document.getElementById("five-day-forecast");
let listEl = document.getElementById("search-list");


function addtoList(city){
//tbd
}

function getWeather(city){
//tbd
}


function getCoordinates(city){
    let api =`https://api.openweathermap.org/1.0/direct?=${city}&limit=4&appid=${apiKey}`;
    fetch(api)
        .then(function (response){
            console.log("response",response);
            return response.JSON;

        })
        .then(function (data){
            if (!data[0]){
                console.log("location not found");
            }else{
                console.log("data[0]",data[0]);

                addToList(city);
                getWeather(data[0]);
            }
        })
}


function handleCitySearch(event){
    if(!formInputEl.value){
        return;
    }
    event.preventDefault();
    let city = formInputEl.value.trim();
    console.log("city",city);
    //call api to get coordinates
    getCoordinates(city);
    formInputEl.value = "";
}

function handleSearchHistory(event){
//to be completed
}
let storedCities = localStorage.getItem("stored-cities");
if(storedCities) {
    cityHistory=JSON.parse(storedCities);
}
//show city search list(to be completed)



formEl.addEventListener("submit",handleCitySearch);
listEl.addEventListener("click",handleSearchHistory);
