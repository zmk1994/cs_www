<template>
 <div class='use'>
     <div class="banner"><img src="../www/img/swiper2.png" alt="" srcset=""></div>
    <div class="use_content margin">
     <p>使用流程</p>
        <!--    <ul>
            <li>
                <p>云玺印章</p>
                <div class="use_item">
                    <div class="use_list">申请用章申请用章申请用章申请用章申请用章申请用章申请用章申请用章申请用章申请用章申请用章申请用章</div>
                  <img src="../www/img/use1.png" alt=""/>
                </div>
                
            </li>

             <li >
                <p>申请用章</p>
                <div class="use_item">
                    <div class="use_list">申请用章申请用章申请用章申请用章申请用章申请用章申请用章申请用章申请用章申请用章申请用章申请用章</div>
                  <img src="../www/img/use2.png" alt=""/>
                </div>
                
            </li>

             <li>
                <p>审批记录</p>
                <div class="use_item">
                    <div class="use_list">申请用章申请用章申请用章申请用章申请用章申请用章申请用章申请用章申请用章申请用章申请用章申请用章</div>
                  <img src="../www/img/use3.png" alt=""/>
                </div>
                
            </li>

             <li>
                <p>申请授权</p>
                <div class="use_item">
                    <div class="use_list">申请用章申请用章申请用章申请用章申请用章申请用章申请用章申请用章申请用章申请用章申请用章申请用章</div>
                  <img src="../www/img/use4.png" alt=""/>
                </div>
                
            </li>

             <li>
                <p>用章记录</p>
                <div class="use_item">
                    <div class="use_list">申请用章申请用章申请用章申请用章申请用章申请用章申请用章申请用章申请用章申请用章申请用章申请用章</div>
                  <img src="../www/img/use5.png" alt=""/>
                </div>
                
            </li>

             <li>
                <p>审计处理</p>
                <div  class="use_item">
                    <div class="use_list">申请用章申请用章申请用章申请用章申请用章申请用章申请用章申请用章申请用章申请用章申请用章申请用章</div>
                  <img src="../www/img/use6.png" alt=""/>
                </div>
                
            </li>

          
        </ul> -->
    

    </div>
     <cont/>
     <websiteFoot/>
 </div>
</template>

<script>
import websiteFoot from '../components/websiteFoot'
import  cont from '../components/cont'
 export default {
 name: 'usemethods',
   data () {
     return {

     }
   },
  components: {
         websiteFoot,
       cont
},
  methods: {
}
}
 
</script>

<style lang='scss' scoped>
.use{
    margin: 0 auto;
    width: 100%;
    .banner{
    //  background: url("../www/img/swiper2.png");
    // height: 60.0rem;
    // width: 100%;
    // margin: 0 auto;
    // background:cover;
    width: 100%;
     height: 50.0rem;
    img{
        width: 100%;  
           height: 50.0rem;
    }
    }
    .use_content{
        p{
          margin-top:3rem;
            // font:4rem/6rem "";
                     font-size: 4.0rem;
        line-height: 6.0rem;
            font-family: 'Courier New', Courier, monospace;
        }
        ul{
            overflow: hidden;
            height: auto;
            margin: 0 auto;
            li{
                background: #ccc;
                margin:8.0rem 4.0rem;
                p{
                    // font:2.0rem/10.0rem "";
                             font-size: 2.0rem;
        line-height: 10.0rem;
                    font-family: 'Courier New', Courier, monospace;
                }
                .use_item{
                     overflow: hidden;
                    .use_list{
                        float:left;
                        width: 40.0rem;
                        text-indent: 2em;
                        margin:0 10.0rem;
                        
                    }
                    img{
                        display: block;
                        float:left;
                        width: 20.0rem;
                        height: 30.0rem;
                    }
                }
            }
        }
        
    }
}
</style>
