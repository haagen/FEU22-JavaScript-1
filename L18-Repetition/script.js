const apiKey = '<change to your token here instead>';
const loc = 'Rebbetuaröd';

// https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${apiKey}`,
// https://api.openweathermap.org/data/2.5/weather?lat=${geoData[0].lat}&lon=${geoData[0].lon}&appid=${apiKey}&units=metric
/*
fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${loc}&limit=1&appid=${apiKey}`)
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) => {
        console.log(data);
        return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${apiKey}&units=metric`)
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })     

console.log('Hejsan Svejsan!');
*/

/*
async function getLonLat(location) {
    let response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${loc}&limit=1&appid=${apiKey}`);
    let data = await response.json();
    return { lon: data[0].lon, lat: data[0].lat };     // endast en sak!!
}
async function getWeather(lon, lat) {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
    let data = await response.json();
    return data;
}
async function getData(location) {
    const geoData = await getLonLat(location);
    const weather = await getWeather(geoData.lon, geoData.lat);
    console.log(weather);
}

getData();
*/

async function getDataFromUrl(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

async function getWeather() {
    const geoData = await getDataFromUrl(`https://api.openweathermap.org/geo/1.0/direct?q=${loc}&limit=1&appid=${apiKey}`);
    const weather = await getDataFromUrl(`https://api.openweathermap.org/data/2.5/weather?lat=${geoData[0].lat}&lon=${geoData[0].lon}&appid=${apiKey}&units=metric`)
    console.log(weather);
}

getWeather();
