<template>
<div class="">

            <div class="advantage">
                <div class="advan margin">
                   
                <p>品牌的优势</p>
                <ul>
                <li>
                     <svg class="icon" aria-hidden="true">
                         <use xlink:href="#icon-msnui-safe"></use>
                    </svg>
                    <p>安全 </p>  
                </li>
                  <li>
                       <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-zhinengshezhi"></use>
                    </svg>
                    <p>智能 </p>  
                </li>
                  <li>
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-yunfuwupingtai"></use>
                    </svg>
                    <p>云服务 </p>  
                </li>
                  <li>
                     <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-pingtairenzheng"></use>
                    </svg>
                    <p>中科大平台 </p>  
                </li>
                  <li>
                       <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-jishushichang-copy"></use>
                    </svg>
                    <p>高技术 </p>  
                </li>
                  <li>
                       <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-tuandui"></use>
                    </svg>
                    <p>高团队 </p>  
                </li>
                  <li>
                       <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-wugongguanlijiyouhua"></use>
                    </svg>
                    <p>优化 </p>  
                </li>
                  <li>
                     <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-icon5"></use>
                    </svg>
                    <p>方便 </p>  
                </li>

                </ul>
                </div> 
        </div>   

    <div class="wensiteindex_center">
        <p> 中科大安徽云玺</p>
        <p class="p2">行业的领导者</p>
       
    </div>

    <div class='websitevideo'>
        <p class="p1">{{msg1}}</p>
        <!-- <p>{{msg2}}</p> -->
        <div class="video">
            <video width="1000" height="600" controls="controls" poster="../www/img/poster.png">
                <source src="../www/video/seal.mp4" type="video/mp4">
            </video>
        </div>
    </div>


    </div>


</template>

<script>
 export default {
    name :"websiteVideo",
   data () {
     return {
         msg1:"安徽云玺产品演示",
         msg2:"AnHui Yunxi Seal product Show",
         arr:["安全","智能","云服务","中科大平台","高技术","高团队","优化","方便",],
        
        

     }
   },
  components: {
},

 
}
 
</script>

<style lang='scss'>
.wensiteindex_center{
    background: #fff;
    margin: 4rem 0;
    p{
        text-align: center;
        font-size: 4rem;
        line-height: 8rem;
        
         color:#000;
         
    }
    .p2{
              font-size: 3rem;
             line-height: 2rem;
                color:#000;

         }
}
.websitevideo{
   
   height: auto;
    margin-top:4.0rem;
    width: 100%;
    height: 70.0rem;
    margin: 0 auto;
    // background-image: url("../www/img/background1.jpg");
      background:#060e09;


    p{
     color:#fff;
    //  margin-left:46.0rem;
     text-align: center;
     opacity: .6;
   
     
    }
     .p1{
    
        //  font:4.0rem/14.0rem "";
        font-size: 4.0rem;
        line-height: 14.0rem;
         font-family:'Courier New', Courier, monospace;
        
    }
   
	
    .video {
            text-align: center;
            // margin-top:1.0rem;
          
    }
    
}

.advantage{
    width:100%;
    margin: 0 auto;
    padding: 2.0rem 0;
    background:#060e09;
    // background-image: url("../www/img/banner3.png");

    background-repeat: no-repeat;
    background-size: cover;
    // background-image:-webkit-linear-gradient(to bottom,#ccc, #000);
    height: auto;
    color:#fff;
 
    .advan{
    
        p{
            // font:4.0rem/10.0rem "";
            font-size: 4.0rem;
            line-height: 10rem;
            color: #fff;
            opacity: .6;
            font-family: 'Courier New', Courier, monospace;
        }
            ul{
                overflow: hidden;
                
               
        li{
           
            height: 60.0rem;
            border:0.2rem solid #000;
            width: 20.0rem;
            height: 20.0rem;
            float: left;
            margin:2.0rem;
            background: #fff;
            text-align: center;
            padding: 4.0rem 0;
          
          box-shadow: rgb(45, 48, 71) 0rem 0rem 3.0rem 0.5rem inset;//边框内阴影
         
        
             p{
            // font:2.0rem/10.0rem "";
            font-size: 2.0rem;
            line-height: 10rem;
           color:#000;   
          }


        }
        li:hover{
             border:0.2rem solid #fff;
             width: 23.0rem;
            transition-duration: 0.5s;

             
             
        }
    }

    }

    
}
</style>
