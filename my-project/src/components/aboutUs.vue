<template>
 <div class="aboutus">
  <div class="ewm-t">
    <p class="p1">关注我们</p>
    <p class="p2">CONCERN US</p>
  </div>
   <div class="ewm-b margin">
          <div class="ewm-b-l">
            <img src="../www/img/2.png"/>
            <p>云玺公众号</p>
          </div>
   <div class="ewm-b-c">
          <img src="../www/img/2.png"/>
          <p>apk</p>
          <p>应用下载</p>
        </div>
        <div class="ewm-b-r">
          <img src="../www/img/2.png"/>
          <p>0058-111111</p>
          <p>客服热线</p>
        </div>
        
   </div>

 </div>
</template>

<script>

 export default {
 name: 'websiteTop',
   data () {
     return {

     }
   },
  components: {

},
  methods: {
}
}
 
</script>

<style lang='scss' scoped>
.aboutus{
background: #ddd;

  width: 100%;
    margin:0 auto;
    height:26.0rem;
    .ewm-t{
        p{
          text-align: center;
           color:#334;
             font-family: 'Courier New', Courier, monospace;
        }
        .p1{
        //  font:4.0rem/8.0rem "";
         font-size: 4.0rem;
         line-height: 8.0rem;
         
        }
         .p2{
          // font:1.6rem/1.6rem "";
            font-size: 1.6rem;
         line-height: 1.6rem;
        
        }

    }
    .ewm-b{
      margin: 0 auto;
      margin-top:2rem;
    
     
      color:rgb(26, 26, 39);
      img{
        width: 6.0rem;
        height: 6.0rem;
      }
      .ewm-b-l{
        float: left;
        margin-left:24rem;
          // font:2rem/3rem "";
          font-size: 2rem;
          line-height: 3rem;
     
     

      }
       .ewm-b-c{
         float: left;
     
           margin-left:16rem;
            //  font:2rem/3rem "";
               font-size: 2rem;
          line-height: 3rem;
     

      }
      .ewm-b-r{
         float: left;
           margin-left:16rem;
      //  font:2rem/3rem "";
         font-size: 2rem;
          line-height: 3rem;
     
         

      }
    }

}
</style>
