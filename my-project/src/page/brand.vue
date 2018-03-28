<template>
 <div class='brand'>
     <div  class=" banner"><img src="../www/img/swiper2.png" alt="" srcset=""></div>
     <div class="brand_content margin">
       <h1>新闻动态</h1>
       <ul>
                 <li>
                    <router-link to="/brand/001">参加国务院国资委央企双创大赛并入围平台转化大名单</router-link>
                </li>
                <li>
                    <router-link to="/brand/002">研发中</router-link>
                </li>
                <li>
                    <router-link to="/brand/003">工作中</router-link>
                </li>
                   <li>
                    <router-link to="/brand/004">参加国务院国资委央企双创大赛并入围平台转化大名单</router-link>
                </li>
                <li>
                    <router-link to="/brand/005">研发中</router-link>
                </li>
                <li>
                    <router-link to="/brand/006">工作中</router-link>
                </li>
       </ul>

     </div>
     <websiteFoot/>
 </div>
</template>

<script>
import websiteFoot from '../components/websiteFoot'
 export default {
 name: 'brand',
   data () {
     return {
            msg:[
              "参加国务院国资委央企双创大赛并入围平台转化大名单",
              "研发中",
              "工作中"
            ]
     }
   },
  components: {
    websiteFoot
},
  methods: {
}
}
 
</script>

<style lang='scss' scoped>
.brand{
  width: 100%;
  margin: 0 auto;
   .banner{

    margin: 0 auto;
    height: 50.0rem;
     width: 100%;
     img{
           margin: 0 auto;
    height: 50.0rem;
     width: 100%;
     }

    }
      .brand_content{
        height:auto;
      
      h1{
        // font:4.0rem/10.0rem "";
        font-size: 4.0rem;
        line-height: 10.0rem;
        color: #666;
     font-family: 'Courier New', Courier, monospace;

        

      }
      ul{
        margin-left: 10.0rem;
        // font:3.0rem/4.0rem "";
          font-size: 3.0rem;
        line-height: 4.0rem;
        li{
          list-style: disc;
           color: #666;
          a{
             color: #666;
             font-family: 'Courier New', Courier, monospace;

          }
          a:hover{
            color:#333;
            text-decoration: none;
          }
        }
      }

    }
}
</style>
