<template>
  <div id="app">
        <websiteTop/>  
        <router-view />
  </div>
</template>

<script>
import websiteTop from "./components/websiteTop"

  export default {
    name:'app',
      components: {
        websiteTop,
     
          
        },
    data() {
      return {

      };
    },
    methods: {
    },
    created() {
      
    }
  };
</script>

