<template>
      <div class="customcase">
        <div  class=" banner"><img src="../www/img/swiper2.png" alt="" srcset=""></div>

         <div  class="case_content margin">
           <p>合作伙伴</p>
           <ul>
             <li v-for="a in msg" id="box" > <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-icon-home"></use>
                    </svg> <a>{{a}}</a> </li>
           </ul>
         </div>
      <websiteFoot/>

    </div>
</template>

<script>
import websiteFoot from '../components/websiteFoot'
export default {
  name: 'customCase',

  data () {
    return {
      msg:[
            "中国能源建设集团安徽电力建设第一工程公司",
            "中科大量子信息实验室战略合作",
            "铜陵有色金属集团控股有限公司",
            "北京网聘咨询公司",
            "中科大先研院企业孵化",
            "合肥迈亚家具有限公司",
            "安徽鼎信科技有限公司",
            "安徽昊睿传媒有限公司",
            "安徽开源路桥有限公司",
            "合肥东之锐机械科技有限公司",
            "安徽西科霖讯科技有限公司"]
    }
  },
  components:{
    websiteFoot



  }
}
</script>
<style lang="scss">
.customcase{
  margin:0 auto;
  width: 100%;
  .banner{
   
    height: 50.0rem;
     width: 100%;
    img{
        height: 50.0rem;
     width: 100%;
    }
    
  }
  .case_content{
    p{
    text-indent: 2em;
      // font:4.0rem/10.0rem "";
        font-size: 4.0rem;
        line-height: 10.0rem;
      font-family: 'Courier New', Courier, monospace;

    }
    ul{
      overflow: hidden;
      height: auto;
       li{
       float: left;
       width: 20.0rem;
       height: 20.0rem;
       border-width: 0.2rem;
       border-color:#ccc;
       border-radius: 50%;
       border-style: solid;
       text-align: center;
       position: relative;
    
       margin:3.0rem;
       svg{
         position: absolute;
         left:8.0rem;
         top:2.0rem;
         fill: rgba(15, 34, 32, 0.13);
       }
       a{
        margin-left: 3.6rem;
        margin-top:8.0rem;
         width: 14.0rem;
         height: 20.0rem;
         display: block;
        word-wrap:break-word; 
      word-break:break-all; 
  //  font:1.8rem/4.0rem "";
     font-size: 1.8rem;
        line-height: 4.0rem;
       }
       a:hover{
         text-decoration: none;
         color:rgb(0, 17, 17);
       }

    }
    li:hover{
      // border-color:rgb(0, 17, 17);
       box-shadow: rgb(211, 216, 196) 0px 0px 0px 0.2rem inset;
    }
    

    }
   
 
  }

}

</style>


