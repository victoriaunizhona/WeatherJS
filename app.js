const storage = new Storage();

// Get stored location data
const whetherLocation = storage.getLocationData();
const weather = new Weather(whetherLocation.city, whetherLocation.state);
const ui = new UI();


// Get weather on DOM Load
document.addEventListener("DOMContentLoaded", getWeather);


// Change location event
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  // Change location
  weather.changeLocation(city, state);

  // Set location in LS
  storage.setLocationData(city, state)

  // Get and display the weather
  getWeather();

  // Close modal
  $("#locModal").modal("hide");
})

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));

}