<template>
  <header >
    <h1>API PROJECT</h1>
    <ul>
      <router-link to="/dictionary">Dictionary</router-link>
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
  width: 50vw;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  gap: 20px;
}

ul{
  display: flex;
  gap: 20px;
}

a{
  text-decoration: none;
  color: black;
  text-transform: uppercase;
}

a:hover{
  border-bottom: 1px solid black;
  transition: 0.5s ease all;
}

</style>