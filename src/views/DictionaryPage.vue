<template>
  
  <div class="body" >
    <div class="alpha" id="body">
      <span class="jdark">
        <p><i class="fa-solid fa-book"></i></p>
        <p>Dictionary</p>
        <p><button id="dark" @click="breakMode"><i class="fa-solid fa-moon"></i></button></p>
      </span>
      <div class="input-wrap">
        <input type="text" @keyup.enter="getSearchTerm" v-model="searchTerm" placeholder="Keyword" >
        <!-- <button type="submit" @click="getSearchTerm">
          <span class="material-symbols-outlined">
            search
          </span>
        </button> -->
      </div>
      <!-- <br><br> -->
      <div class="auinput">
        <div class="search">{{ searchTerm }}</div>

        <div class="audio">
          <audio ref="audio" :src="audioURL"></audio>
          <button @click="playAudio" class="play" >
            <i class="fa-solid fa-play"></i>
          </button>
        </div>
      </div>
      <br><br><br>
      <div class="meaning">
        <h4>Meaning</h4>
        <!-- <h1 v-if="result">{{ result.word }}</h1> -->
        <div v-if="Loading" class="loading">
          <p>Loading</p>
          <p class="span ">.</p>
          <p class="span ">.</p>
          <p class="span ">.</p>
        </div>
        <div class="display" v-if="displayMessage">There was a problem receiving dictionary data.</div>
        <div v-if="result">
          <div v-for="meaning in result.meanings[0].definitions" :key="meaning.index">
            <p>{{ meaning.definition }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
  import axios from 'axios'

  export default {
    name: 'DictionaryPage',

    data() {
      return {
        BASE_DICTIONARY_URL: "https://api.dictionaryapi.dev/api/v2/entries/en/",
        result: null,
        searchTerm: null,
        Loading: null,
        displayMessage: null,
        timeOut: null,
      }
    },
    
   
    methods: {

      breakMode(){
        const body = document.querySelector('.alpha');
        // const btn = document.getElementById("dark");

        
          body.classList.toggle('is-active');
        
      },
      

      

      
      
      getSearchTerm() {
        if (!this.searchTerm) {
          return; 
        }
        this.Loading = true;
        // const loadingTimeout = setTimeout(() => {
          
        //     this.Loading = false;
        //     this.timeOut = true;
         
        // }, 5000);
        axios({
          method: 'GET',
          url: `${this.BASE_DICTIONARY_URL}${this.searchTerm}`,
          
        })
          .then(response => {
            this.result = response.data[0]

            this.audioURL = this.result.phonetics[0].audio
            console.log('Result', this.result, 'Audio', this.searchTerm)
            this.Loading = false;
            // this.loadingTimeout = false;
          })
          .catch(error => {
            console.error('Problem receiving dictionary data', error);
            this.Loading= false;
            this.displayMessage = true;
          })

          
      },

      
      playAudio() {
        this.$refs.audio.play();
      },

      getAudioURL() {
        if (this.getAudioURL) {
          return this.audioURL
        } else {
          return ''
        }
      }
    }
  }
</script>
  

<style>

@import '@fortawesome/fontawesome-free/css/all.css';

.meaning{
  width: 80%; 
  margin-left: auto;
  margin-right: auto;
  height: auto;
}
.loading{
  display: flex;
  gap:20px;
  background-color: rgba(0,0,0,0.2);
  position: absolute;
  height: 80vh;
  justify-content: center;
  width: 40%;
  top: 20%;
  padding-top: 250px;
}

.loading p{
  font-size: 40px;
  font-family: arial black;
  font-weight: 600;
}

.span{
  animation-name: bounce;
  animation-duration: 2s;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
  /* animation-direction: ; */

}

/* .fast{
  animation-duration: 0.6s;
  animation-delay: 0s;
}

.semi-fast{
  animation-duration: 0.7s;
  /* animation-delay: 0.5s; 
}
.slow{
  animation-duration: 0.8s;
  animation-delay: 1s;
} */

@keyframes bounce{
  0%{
    transform: translateY(0);
  }
  40%{
    transform: translateY(-10px)
  }
  50%{
    transform: translateY(0)
  }
  60%{
    transform: translateY(-10px)
  }
  100%{
    transform: translateY(0px);
  }
}

.play{
  background-color: #d870d8;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  justify-content: center;
  align-content: center;
}

.fa-play{
  color:#bb16dc ;
}

.jdark{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 80%;
  height: auto;
}

.jdark p{
  font-weight: 600;
  font-size: 23px;
  text-transform: uppercase;
  font-family: arial black;
}
button{
  background: none;
  border: none;
  display: block;
}
.is-active{
  background: #1E1E1E;
  transition: 0.5s  ease-out;
  color: white;
}
h4{
  font-family: arial black;
}
.alpha{
  justify-content: center;
  width: 50%;
  /* border: 1px solid black; */
  height: 100vh;
  margin: 0 auto;
  padding-top: 100px;
}

.search{
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
}
.auinput{
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  height: auto;
  margin-top: 30px;
}

.input-wrap{
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

input{
  width: 100%;
  border-radius: 10px;
  height: 40px;
  background-color: #d8d3d3;
  border: none;
  text-align:  left;
  font-weight: bold;
  font-size: 20px;
  /* font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
}
</style>
  
