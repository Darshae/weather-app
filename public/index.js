const searchButton = document.querySelector("#searchBtn");

const container = document.querySelector("#container");
const errorBox = document.querySelector("#errorBox");
const successBox = document.querySelector("#successBox");

const image = document.querySelector("#img-Condition");
const locationSearch = document.querySelector("#locationSearch");

//Weather Condition
const weatherCondition = document.querySelector("#weather-condition");

//Location
const city = document.querySelector("#city");
const region = document.querySelector("#region");
const country = document.querySelector("#country");

//Weather Condition - Details
const temperature = document.querySelector("#temperature");
const feelsLike = document.querySelector("#feels-like");
const windInfo = document.querySelector("#windInfo");
const humidity = document.querySelector("#humidity");

//Additional Information
const visibility = document.querySelector("#visibility");
const uvIndex = document.querySelector("#uv-index");
const lastUpdate = document.querySelector("#last-update");

searchButton.addEventListener('click', callAPI);

locationSearch.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        callAPI();
    }
});

async function callAPI(){
    try {

        const api = "http://api.weatherapi.com/v1/current.json?key=2d9d3845a5c0497497480619230910&q="

        const location = locationSearch.value;
        const response = await fetch(api+location);
        const data = await response.json();

        if(locationSearch.value == ''){
            alert("Please enter a location.")
            return
        }

        if(!response.ok || data.location.country !== "Philippines"){
            successBox.style.display = "none";    
            errorBox.style.display = "flex";
            errorBox.classList.add('fadeIn');
            container.classList.remove('xl:h-[58rem]');
            container.classList.remove('h-[52rem]');
            container.classList.add('h-60');
            return;
        }

        //errorBox.style.display = "none";
        //successBox.style.display = "block";
        weatherCondition.textContent = data.current.condition.text;

        switch(weatherCondition.textContent){
            case 'Sunny':
                image.src = '/img/sunny.svg';
                break;
            case 'Partly cloudy':
                image.src = '/img/partly cloudy.svg';
                break;
            case 'Cloudy':
                image.src = '/img/cloudy.svg';
                break;
            case 'Rainy':
                image.src = '/img/rainy.svg';
                break;
            case 'Patchy rain possible':
                image.src = '/img/rainy.svg';
                break;
            case 'Light rain shower':
                image.src = '/img/rainy.svg';
                break;
            case 'Moderate or heavy rain with thunder':
                image.src = '/img/thunder.svg';
                break;
            default:
                image.src = '/img/404.svg';
        }

        city.textContent = data.location.name;
        region.textContent = data.location.region;
        country.textContent = data.location.country;

        temperature.textContent = `${data.current.temp_c}°C`;
        feelsLike.textContent =`${data.current.feelslike_c}°C`;
        windInfo.textContent = `${data.current.wind_kph} KPH`;
        humidity.textContent = `${data.current.humidity}%`;

        visibility.textContent = `${data.current.vis_km} KM`;
        uvIndex.textContent = `${data.current.uv}`;
        lastUpdate.textContent = `${data.current.last_updated}`;

        errorBox.style.display = "none";    
        successBox.style.display = "flex";
        successBox.classList.add('flex-col');
        successBox.classList.add('fadeIn');
        container.classList.remove('h-60')
        container.classList.add('h-[52rem]')
        container.classList.add('xl:h-[58rem]')
        

    } catch (error) {
        successBox.style.display = "none";    
        errorBox.style.display = "flex";
        errorBox.classList.add('fadeIn');
        container.classList.remove('xl:h-[58rem]');
        container.classList.remove('h-[52rem]');
        container.classList.add('h-60');
    }
}
/*
    data.current.condition.text

    data.current.temp_c
    data.current.feelslike_c
    data.current.wind_kph
    data.current.humidity
    data.current.uv
    data.current.vis_km
    data.current.last_updated
    
    data.location.country
    data.location.name
    data.location.region
*/