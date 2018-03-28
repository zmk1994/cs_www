<template>
      <div class="websiteindex">
        <swiper2/>
        <websiteIndexContent1/>
        <websiteVideo/>
        <websiteFoot/>
    </div>
</template>

<script>

import websiteIndexContent1 from '../components/websiteIndexContent1'
import swiper2 from '../components/swiper2'
import websiteVideo from '../components/websiteVideo'
import websiteFoot from "../components/websiteFoot"
export default {
  name: 'websiteindex',
  components: {
            swiper2,
            websiteIndexContent1,
            websiteVideo ,
            websiteFoot
         
        },  
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style lang="scss">
@function px2rem($px){
    $rem : 16px;
    @return ($px/$rem) + rem;
}
.websiteindex{
  margin:0 auto;
  
}


</style>


