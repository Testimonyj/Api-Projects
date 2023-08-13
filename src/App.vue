<template>
  <div>
    <NavigationPage/>
    <router-view />
  </div>
</template>

<script>

import NavigationPage from './views/NavigationPage.vue';
export default {
  name: 'App',
  components: {
    NavigationPage
  }

}
</script>


<style>
.collapse{
   justify-content: flex-end;
}
</style>
