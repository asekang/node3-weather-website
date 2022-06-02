const request = require('request');

const foreacst = (latitude, longitude, callback) =>{

    const url = 'http://api.weatherstack.com/current?access_key=5f867617701ab59b3844fe73977a007c&query=' + latitude + ',' + longitude +'?language=ko';

    request({url, json:true}, (error, {body})=>{
        if(error) {
            callback('Unable to connect to weather services!', undefined)
        } else if(body.error){
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {weather: 'It is currently ' + body.current.weather_descriptions[0] + 
            '. It is ' + body.current.temperature + 'degrees' + '. Humidity is ' + body.current.humidity + '%'})
        }
    })
}

module.exports = foreacst;