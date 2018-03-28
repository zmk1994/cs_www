<template>
 <div class="function">
     <div class="banner"><img src="../www/img/swiper2.png"/></div>
     <div class="margin function_index">
         
                            <div id="content">                   
                                    <div class="louti" id="louti1">
                                            <div class="louti1-t">
                                                <h2>互联云玺</h2>
                                                <!-- <h2 class="h2">THE BUSINESS YUNXI</h2> -->
                                            </div>
                                            <div class="louti1-b">
                                                <!-- <h1>产&nbsp;&nbsp;品</h1> -->
                                                <ul>
                                                    <li>技术创新</li>
                                                    <li>智能印签产品功能</li>
                                                    <li>云平台管理系统功能</li>
                                                    <li>云智能印签产品系列</li>
                                                </ul>
                                            </div>
                                        <div class="technology">
                                            <div class="technology_top">
                                                <h2>技术创新</h2>
                                            </div>
                                            <div class="technology_bottom">
                                                <ul>
                                                    <li>指纹检测</li>
                                                    <li>位置记录</li>
                                                    <li>图形存档</li>
                                                    <li>无线连接</li>
                                                    <li>云服务</li>
                                                    
                                                </ul>
                                                <div class="summary">
                                                    监控，感知，识别，判断，互动，可控制，从管理盲点变成管控流程的中枢，完整的管控链，封堵漏洞。
                                                </div>
                                            </div>
                                        </div>


                                            <div class="seal_function">
                                            <div class="seal_function_top">
                                                <h2>印章功能</h2>
                                            </div>
                                            <div class="seal_function_bottom">
                                                     <div class="seal_function_bottom_left">
                                                         <ul>
                                                             <li>保留传统用章体验</li>
                                                             <li>自动失败记录的盖章信息</li>
                                                            <li>实物/数字签章双功能</li>
                                                         </ul>
                                                     </div>
                                                    <div class="seal_function_bottom_right">
                                                         <ul>
                                                             <li>能不能盖章</li>
                                                             <li>谁在盖章</li>
                                                            <li>什么时间，什么地点盖章</li>
                                                            <li>盖多少次</li>
                                                            <li>什么内容(智能识别比对)</li>
                                                            <li>远程盖印(实物、数字)存档</li>
                                                            
                                                            
                                                         </ul>
                                                    </div>
                                            </div>
                                        </div>



                                      <div class="platform">
                                            <div class="platform_top">
                                                <h2>云平台管理系统</h2>
                                            </div>
                                            <div class="platform_bottom">
                                                     <div class="platform_bottom_left">
                                                         <p>24小时在线监控印章状态</p>
                                                         <p>互联网云流程管理</p>
                                                      

                                                     </div>
                                                    <div class="platform_bottom_right">
                                                       
                                                    </div>
                                            </div>
                                        </div>
                                  
                                    </div>
                                  
                                    </div>
                 
                  
     </div>
     <websiteFoot/>
 </div>
</template>

<script>
import websiteFoot from "../components/websiteFoot"
 export default {
 name: 'functionShow',
   data () {
      
            // ,"智能印签产品功能","云平台管理系统功能","云智能印签产品系列"
            return{

                 list :{
                    "技术创新":'技术创新',
                    "智能印签产品功能":'智能印签产品功能',
                    "云平台管理系统功能": '云平台管理系统功能',
                    "云智能印签产品系列" : '云智能印签产品系列'
                 }


            }
   },
  components: {
      websiteFoot
},
  methods: {
}
}
 
</script>

 <style lang="scss" scoped>
 .function{
    //  background-image: url(../www/img/repeat.png);
    // background: rgba(37, 11, 11, 0.137);
  
      background-repeat:repeat;
      height: auto;
      width: 100%;
      .banner{
          margin:0 auto;
          width: 100%;
          height: 50.0rem;
          img{
              display: block;
              width: 100%;
              height: 50.0rem;;
              
          }
      }



 #content{
 
h2{
//    font-family: 'Courier New', Courier, monospace; 
    //    font:3.0rem/6.0rem "";
      font-size: 3.0rem;
        line-height: 6.0rem;
}
// font-family: 'Courier New', Courier, monospace;
  margin:0 auto;
  height: auto;
  #louti1{
      margin-top:10rem;
       color:#fff;
      height: auto;
      .louti1-t{
    //    background: #6f8088;
        background-image: url(../www/img/repeat4.png);
     background-repeat:repeat;
       height: 6.0rem;
     
         opacity: .4;
      
        text-indent: 2em;
       h2{
         
           color:#fff;
        //    font-family: 'Courier New', Courier, monospace;
       }

      }
      .louti1-b{
        //   padding-top:100rem;
    background:#000;
    background: #002336;
    h1{
        // font:4.0rem/8.0rem "";
          font-size: 4.0rem;
        line-height: 8.0rem;
    text-align: center;
    }
    ul{
        margin-left:10.0rem;
        // font:2.0rem/5.0rem "";
          font-size: 2.0rem;
        line-height: 5.0rem;
        li{list-style:disc;}
    }
    
       height: 30.0rem;
          
      }

      .technology{
          margin:10.0rem 0;

          .technology_top{
              height: 6.0rem;
            background-image: url(../www/img/repeat4.png);
             background-repeat:repeat;
            //  font:3.0rem/6.0rem "";
              font-size: 3.0rem;
        line-height: 6.0rem;
             text-indent: 2em;
             opacity: .4;
             h2{
                    // font:3.0rem/6.0rem "";
                             font-size: 3.0rem;
        line-height: 6.0rem;
             }


          }
          .technology_bottom{
             background:#000;
              background: #002336;
              height: 40.0rem;
              ul{
                //   font:2.0rem/5.0rem "";
                         font-size: 2.0rem;
        line-height: 5.0rem;
                  margin-left:10.0rem;
                  li{
                      list-style: disc;
                  }
              }
              .summary{
                  margin-left: 2.0rem;
                   text-indent: 2em;
                  width: 60.0rem;
                //   font:2.0rem/4.0rem "";
                         font-size: 2.0rem;
        line-height: 4.0rem;
                  color:rgb(179, 190, 212);
              }
          }

      }
      





      .seal_function{
          margin:10.0rem 0;
          


          .seal_function_top{
               
              height: 6.0rem;
            background-image: url(../www/img/repeat4.png);
             background-repeat:repeat;
            //  font:3.0rem/6.0rem "";
                     font-size: 3.0rem;
             line-height: 6.0rem;
             text-indent: 2em;
             opacity: .4;
         


          }
          .seal_function_bottom{
             background:#000;
              background: #002336;
              height: 60.0rem;
               
              
             
        
            .seal_function_bottom_left{
                float: left;
                margin:6rem;

                background:rgb(85, 85, 105);
                 border-radius: 10.0rem;
                 height: 30.0rem;
                 width: 40.0rem;
                 border-radius: 60%;
                //  font:2.0rem/6.0rem "";
                         font-size: 2.0rem;
        line-height: 6.0rem;
                 ul{
                     margin-left: 10.0rem;
                     margin-top:2.0rem;
                 }
                
            }
         .seal_function_bottom_right{
                float: left;
                margin:10.0rem;
                ul{
                      border-sizing:border-box;
                    li{
                        // font:2.0rem/6.0rem "";
                                 font-size: 2.0rem;
        line-height: 6.0rem;
                        margin:1.0rem;
                        border-style: solid;
                        border-width: 0.2rem;
                        border-color: rgb(202, 202, 223);
                        padding: 0 2.0rem;
                        border-radius: 1.0rem;
                      
                    
                    }
                }
            }
          }

      }
      





      .platform{
         margin: 10rem 0;

          .platform_top{
             height: 6.0rem;
            background-image: url(../www/img/repeat4.png);
             background-repeat:repeat;
            //  font:3.0rem/5.0rem "";
                     font-size: 3.0rem;
        line-height: 5.0rem;
             text-indent: 2em;
             opacity: .4;


          }
          .platform_bottom{
              background:#000;
               background: #002336;
              
              height: 30.0rem;
            //   font:3.0rem/6.0rem "";
                     font-size: 2.0rem;
        line-height: 6.0rem;
            //   font-family: 'Courier New', Courier, monospace;
              color:rgb(191, 189, 196);
              text-indent: 2em;
    
                    
          }

      }
      



  } 

 } 
 

 

 
 }
 
 </style>
