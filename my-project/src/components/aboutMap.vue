<template>
<div class="map">
       <div id="container"></div>
       <div class="qian">
         <ul>
           <li><h1>安徽云玺科技有限公司</h1></li>
           <li>Anhui Yunxi Technology Co., Ltd.</li>
           <li>平台：中科大先进技术研究院</li>
           <li>地址：中科大先进技术研究院</li>
           <li>域名：www.yunxi.com</li>
           <li>传真：0000000</li>
           
         </ul>

       </div>
</div>    
  </template>

<style lang="scss">
.map{
  position: relative;
   margin:0 auto;
   width: 100%;
   height: auto;

  #container {
    height: 50.0rem;
    width: 100%;
    margin:0 auto;
  
}

    .qian{
      color:#fcf9f2;
      position: absolute;
      right:20.0rem;
      top:6.0rem;
      background-color: #334;
      width: 40.0rem;
      height: 40.0rem;
      // font:2.0rem/6.0rem "";
      font-size: 2.0rem;
      line-height: 6.0rem;
      li{
        text-indent: 2em;
          font-family: 'Courier New', Courier, monospace;
            h1{
        // font:3.0rem/8.0rem "";
        font-size: 3.0rem;
        line-height: 8.0rem;
        font-family: 'Courier New', Courier, monospace;
      }

      }
 
      
    }

}


</style>


 <script>
 import AMap from 'AMap'
 var map
 export default {
  mounted: function () {
   this.init()

  },
  methods: {
   init: function () {
    map = new AMap.Map('container', {
     center: [116.397428, 39.90923],
     location:[],
     resizeEnable: true,
     zoom: 10
    })
    AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function () {
     map.addControl(new AMap.ToolBar())
     map.addControl(new AMap.Scale())
    })
   }
  }
 }

</script>
