class Weather {
  constructor(city, state) {
    this.apiKey = "f62c4b82e52613662a442d62339f889b";
    this.city = city;
    this.state = state;

  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=metric&APPID=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }

  // Change wether location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}