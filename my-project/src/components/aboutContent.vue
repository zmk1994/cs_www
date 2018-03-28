<template>
 <div class='aboutcontent'>
            <div class="banner">
                <img src="../www/img/swiper2.png">
            </div>
            <div class="yunxishow margin">
                  <div class="show">
                      <p>公司介绍</p>
                      <div class="indent"><a>{{msg}}</a></div>
                  </div> 
<!-- 
                  <div class="moudle">
                      <ul>
                          <li><div class=""><p>公司平台</p>
                            <a>中科大先进研究院</a><br/>
                          <img src=""/></div></li>
                          <li><div class=""><p>公司团队</p><a>管理，技术，顶尖，优秀</a><img src=""/></div></li>
                          <li><div class=""><p>公司使命</p><a>方寸变革，改变使命</a><img src=""/></div></li>
                          <li><div class=""><p>公司风采</p><a>风采依旧</a><img src=""/></div></li>

                      </ul>
                  </div> -->
                  <con/>
            </div>

 </div>
</template>

<script>
import con from "../components/con"
 export default {
 name: 'aboutContent',
   data () {
     return {
         msg:"安徽云玺科技有限公司，中国科技大学先进技术研究院持股孵化企业。公司注册资本2000万元，拥有10多项发明专利。主要从事物联网产品研发、生产和运营。核心产品主要包括互联网云智能印章和印签管控系统，空间定位军民融合产品。互联网云智能印章产品及项目入选2016-2017国务院国资委央企熠星双创优秀项目转化名单。项目先后多次参加国务院国资委央企双创优秀成果展、国家双创周优秀成果展、习主席视察中科大先研院周年优秀成果展。公司致力于印签管控的互联网+技术创新和产品开发、应用。作为行业领创者，提出未来五年的战略目标，是以先进、安全、易用的云智能印签产品，升级和替换现有30%以上的传统印章和数字签章，为维护社会经济秩序贡献力量。 "


     }
   },
  components: {
      con
},
  methods: {
}
}
 
</script>

<style lang='scss' scoped>
.aboutcontent{
    margin:0 auto;
    width: 100%;
    height: auto;
    .banner{
     
        img{
            height: 50rem;
           width: 100%;
        }
    }
    .yunxishow {
        margin-top:4.0rem;
        .show{
            p{
            text-align: center;
            //  font: 4.0rem/8.0rem "";
            font-size: 4.0rem;
            line-height: 8.0rem;
              color:#666;
             

            }
            .indent{
                width: 100.0rem;
                margin:0 auto;
                text-indent: 3em;
                // font:2.0rem/4.0rem "";
                font-size: 2.0rem;
                line-height: 4.0rem;
                a{
                    color:#666;
                }
                    a:hover{
                    color:#666;
                    text-decoration: none;
                }
            }
            
        }
        .moudle{
            width: 120.0rem;
            height: auto;
            color:#fff;
            margin-top:4.0rem;
            margin:0 auto;
            ul{
                overflow: hidden;
                // margin-left:20.0rem;
                li{

                    width: 20.0rem;
                    height: 20.0rem;
                    float:left;
                    border-width: 0.2rem;
                    border-style:solid; 
                    border-color: #334;
                    margin:3.0rem;
                    background: #334;
                    div{
                         p{
                       
                        // font:4.0rem/8.0rem "";
                        font-size: 4.0rem;
                        line-height: 8.0rem;
                         text-align: center;
                          color:#666;
                          font-family: 'Courier New', Courier, monospace;

                    }
                       a:hover{
                               color:rgb(202, 179, 179);
                         }

                    }
                  
                }
                li:hover{
                     background: rgb(0, 0, 51);
                     color:rgb(202, 179, 179);
                 

                }
            }
        }

    }

}
</style>
