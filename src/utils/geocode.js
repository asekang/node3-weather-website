const request = require('request');

const geocode = (address, callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYXNla2FuZyIsImEiOiJjbDM4MmZwaDIzc2w3M2NtdXQ1YWpxMWo4In0.pr_zfuFW4J_CV1IU1Z4Feg&limit=1';

    request({url, json:true}, (error, {body})=>{
        if(error) {
            callback('Unable to connect to location services!', undefined)
        } else if(body.features.length === 0){
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;