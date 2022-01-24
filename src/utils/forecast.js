const request = require('request');

const forecast = (lat, long, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=3672ecec4ddbc7f610b204ddd3c782b6&query=' +
    lat +
    ',' +
    long +
    '&units=m';
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      // console.log('unable to connect');
      callback('unaable to connect weather api', undefined);
    } else if (body.error) {
      // console.log('location not found');
      callback('Unable to find location', undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degree out. it feels like ${body.current.feelslike} degree out. there is a ${body.current.precip} chances of rain. And the Humidity is ${body.current.humidity} %. Average wind speed feels like ${body.current.wind_speed}km/h.`
      );
    }
  });
};

module.exports = forecast;
