<template>
 <div class='news margin'>
       新闻详细页面
 <span>{{$route.params.id}}</span>
 <card/>
 

 
 </div>
</template>

<script>
import  card from '../components/card'
 export default {
 
   data () {
     return {

     }
   },
  components: {
    card
},
  methods: {
}
}
 
</script>

<style lang='scss' scoped>
.news{
    margin: 0 auto;
}
</style>
