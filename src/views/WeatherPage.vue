<template>
<div id="app" :class="[ 
   typeof weather.main != 'undefined' && weather.main.temp <=27 ? 'warm' : '', 
   typeof weather.main != 'undefined' && weather.main.temp >=28 ? 'hot' : '',
   typeof weather.main != 'undefined' && weather.main.temp <=21 ? 'sunny' : '',
   typeof weather.main != 'undefined' && weather.main.temp <=4 ? 'snow' : '',
   typeof weather.main != 'undefined' && weather.main.temp <=17 ? 'rain' : '',

  ]">

   <section>
        <div class="search">
          <input type="text" 
          name="" id="" 
          class="search-bar" 
          placeholder="search..." 
          v-model="query"
          @keypress="fethhWeather"
          />
        </div>

        <div class="weather_wrap" v-if="typeof weather.main != 'undefined' " > 
        <div class="location"> {{weather.name }}, {{ weather.sys.country }}</div>
        <div class="date">{{dateBuilder()}}</div>
        

        <div class="weather-container">
          <div class="temperature">{{ Math.round(weather.main.temp) }} °c</div>
          <div class="weather">{{ weather.weather[0].main }}</div> 
        </div>

      </div>
    </section>
</div>
</template>

<script>



export default{
    name: 'WeatherApp',
    data (){
        return{
            api_key: '07f6ae6688d638a4d6fca8b79489ab27',
            url_base: 'https://api.openweathermap.org/data/2.5/',
            query: '',
            weather: {}
        }
    },
    methods: {
      fethhWeather (e) {
        if(e.key == "Enter"){
          fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
          .then(res => {
            return res.json();
          }).then(this.setResults);
        }
      },
      setResults(results) {
        this.weather = results;

      },
      dateBuilder() {
        let d = new Date();
        let months = ["January", "Febuary", "March", "April", "May", "June", "July", 
        "Aughust", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
        "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`;
      } 
    }
}

</script>

<style scoped>
 .search-bar{
    width: 87%;
    height: 50px;
    margin-top: 50px;
    margin-left: 25px;
    transition: 0.7s;
    color: #313131;
    font-size: 28px;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .search-bar:focus {
    background-color: rgba(255, 255, 255, 0.75);
    
  } 
  #app{
    background-image: url(../assets/cold-background.jpg);
    background-size: cover;
    background-position: bottom;
    transition: 5s;
  }

  #app.warm{
    background-image: url(../assets/warm-background.jpg);
    transition: 5s;
  }

  #app.sunny{
    background-image: url(../assets/sunny.jpg);
    transition: 5s
  }
  #app.hot{
    background-image: url(../assets/hot.jpg);
    transition: 5s
  }
  #app.snow{
    background-image: url(../assets/snow.jpg);
    transition: 5s
  }
  #app.rain{
    background-image: url(../assets/rainny-background.jpg);
    transition: 5s
  }

  section{
    min-height: 100vh;
    background-image: linear-gradient(to top, rgba(0, 0, 0.05), rgba(0, 0, 0, 0.25));

  }
  .search{
    width: 100%;
    margin-bottom: 30px;
  }
  .location{
    color: #fff;
    font-size: 32px;
    font-weight: 500;
    text-align:center;
    text-shadow: ipx 3px rgba(0, 0, 0, 0.25);
  }
  .date{
    color: #fff;
    font-size: 28px;
    font-weight: 300;
    text-align:center;
    font-style: italic;

  }

  .temperature{
    display: inline-block;
    padding: 10px 25px;
    color: #fff;
    font-size: 102px;
    font-weight: 900;
    text-shadow: 4px 7px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 20px;
    margin: 30px 0px;
    box-shadow: 4px 7px rgba(0, 0, 0, 0.25) ;
  }
  .weather{
    font-size: 49px;
    color: #fff;
    font-weight: 700;
    font-style: italic;
    text-shadow: 4px 7px rgba(0, 0, 0, 0.25);
  }
  .weather-container{
    text-align: center;
  }
</style>