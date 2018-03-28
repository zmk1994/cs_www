<template>

  <div class="websiteindex_content1 ">
      <div class="seal_safe margin">
        <h1>{{msg}}</h1>
      </div>
      <div class="seal_logo margin">
        <h1>{{msg2}}</h1>
      </div>
  </div>

</template>

<script>
  export default {
    name: 'websiteTop',
    data() {
      return {
        msg: '互联网+智能印章 引领印签名行业变革',
        msg2: "方寸变革，改变世界"
      }
    },
    methods: {
  
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
	
<style lang="scss" scoped="" type="text/css">
  .websiteindex_content1 {
    
    margin:8.0rem auto;
   
    .seal_safe {
      // font: 4.0rem/8.0rem "";
      font-size: 4.0rem;
      line-height: 8.0rem;
      color: black;
      margin:0 auto;
      h1 {
        text-align: center;
      }
    }
    .seal_logo {
     
      // font: 3.0rem/6.0rem "";
      font-size: 3.0rem;
      line-height: 6.0rem;
      color: black;
      text-align: center;
      margin:0 auto;
       margin-top:2rem;
        h1 {
        text-align: center;
      }

    }
  }

</style>
