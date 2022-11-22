const apiKey = '8298c6e32edaba4033335d115b4f212f';

$(document).ready((event) => {              // This will be run when the DOM is ready
    $('#searchBtn').on('click', () => {     // Create a click handler for the "Sök"-button
        renderWeather($('#location').val());
    });
});

async function renderWeather(location) {
    let geoPoint = await getLonLat(location);
    console.log(geoPoint);
    let weather = await getWeather(geoPoint);
    console.log(weather);
    renderPage(location, weather);
}

async function getLonLat(location) {
    let geoData = await $.get(
        `https://api.openweathermap.org/geo/1.0/direct`,
        {
            q: location,
            limit: 1, 
            appid: apiKey
        }
    );
    let geoDataObj =  { 
        lat: geoData[0].lat,
        lon: geoData[0].lon
    }
    return geoDataObj;
}

async function getWeather(geoPoint) {

    geoPoint.units = 'metric';
    geoPoint.appid = apiKey;

    // https://api.openweathermap.org/data/2.5/weather?lat=${geoData[0].lat}&lon=${geoData[0].lon}&appid=${apiKey}&units=metric
    let weather = await $.get(
        'https://api.openweathermap.org/data/2.5/weather',
        geoPoint
    );
    return weather;
}

function renderPage(location, weather) {
    const d = new Date();   // When did we do the query
    $('#result').append(`
        <div class="weather">
            <h3>Weather in ${location}</h3>
            <span class="timestamp">at ${ $.format.date(d, "yyyy-MM-dd HH:mm") }</span>
            <p>
                <img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png" alt="${weather.weather[0].description}">
                ${Math.round(weather.main.temp)} &#8451; ${weather.weather[0].description}
            </p>
        </div>
    `);
}