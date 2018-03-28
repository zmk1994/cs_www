<template>
      <div class="about">
         <aboutContent/>
         <aboutUs/>
         <aboutMap/>
         <websiteFoot/>
    </div>
</template>

<script>

import aboutContent from '../components/aboutContent'
import aboutUs from '../components/aboutUs'
import aboutMap from '../components/aboutMap'
import websiteFoot from '../components/websiteFoot'
export default {
  name: 'about',

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    aboutContent,
    aboutMap,
    aboutUs,
    websiteFoot


  }
}
</script>
<style lang="scss">

</style>


