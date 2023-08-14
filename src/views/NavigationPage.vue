<template>
  <header >
    <h1>API PROJECT</h1>
    <ul>
      <router-link to="/">Dictionary</router-link>
      <router-link to="/weather">Weather</router-link>
    </ul>
  </header>
</template>


<script>

export default{
  name: 'HomePage',
  components:{

  }
}
</script>

<style>
header{
  display: flex;
  border: 1px solid black;
  width: 40vw;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  gap: 10px;
  margin-top: 50px;
  font-family: arial black;

  @media screen and (max-width:480px){
    width: 100vw;
    border: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

ul{
  display: flex;
  gap: 20px;

  @media screen and (max-width:480px){
    flex-direction: row;
    width: 80%;
    /* align-items: center; */
    border: 2px solid black;
    margin-left: auto;
    margin-right: auto;
  }
}

a{
  text-decoration: none;
  color: black;
  text-transform: uppercase;
}

a:hover{
  transform: translateY(-3px);
  transition: 0.3s ease-in-out;
}

</style>