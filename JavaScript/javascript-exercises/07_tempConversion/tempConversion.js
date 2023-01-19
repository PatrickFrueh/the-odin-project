const convertToCelsius = function (fahrenheit) {
  // Convert entered fahrenheit to celsius
  let celsius = 0;
  celsius = (fahrenheit - 32) * (5 / 9);
  celsius = Math.round(celsius * 10) / 10;
  return celsius
};

const convertToFahrenheit = function (celsius) {
  // Convert entered celsius to fahrenheit
  let fahrenheit = 0;
  fahrenheit = (celsius * (9 / 5) + 32);
  fahrenheit = Math.round(fahrenheit * 10) / 10;
  return fahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
