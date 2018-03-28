<template>
  <div class="websitefoot">
            <div class="margin websitefoot_content .clearfloat">
                  <div class="websitefoot_l">
                    <a>联系我们</a>
                    <h3>contact us</h3>
                  </div>
                  <div class="websitefoot_c">
                     <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-dizhi"></use>
                    </svg>
                    <a>安徽云玺科技有限公司</a>
                    <h3> Anhui Yunxi Technology Co., Ltd. </h3>
                  </div>
                <div class="websitefoot_r">
                   <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-lianxi"></use>
                    </svg>
                  <a>0558-00000</a>
                  <h3> 安徽中国科大先进技术研究院未来中心</h3>
                </div>
            </div>
    <div class="cayllmy">
      <p>@cayllmy 2017-12-09 中国科大先进技术研究院未来中心安徽云玺科技有限公司</p>
      </div>
  </div>
</template>

<script>

export default {
  name: 'websiteFoot',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
methods:{
  
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
	
<style lang="scss" scoped="" type="text/css">
  .websitefoot{
   
    height: 14.0rem;
    background: #081019;
    opacity: .9;
      .cayllmy{

    text-align: center;
      // font:1.6rem/1.6rem "";
      font-size: 1.6rem;
      line-height: 4.6rem;
      color:#333;
  }
  .websitefoot_content{
    margin:0 auto;
    // height: auto;
    overflow: hidden;
    // font:1.6rem/4.0rem "";
     font-size: 1.6rem;
     line-height: 4.0rem;

    .icon{
       width: 1em; height: 1em;
    /* 图标和文字相邻时，垂直对齐 */
    vertical-align: -0.15em;
    /* 通过设置 color 来改变 SVG 的颜色/fill */
    fill: #fff;
    /* path 和 stroke 溢出 viewBox 部分在 IE 下会显示
       normalize.css 中也包含这行 */
    overflow: hidden;
    // font:2.0rem/4.0rem "";
    font-size: 2.0rem;
    line-height: 4.0rem;

    }
   
    
     .websitefoot_l{
    float:left;
    margin:1.0rem;
    a{  color:#333;}
         h3{
       color:#333;
     }
  
    

  
  
  }
   .websitefoot_c{
    float:left;
     margin:1.0rem 23.0rem;
     a{  color:#333;}
     h3{
       color:#333;
     }
  
   
 
  }
   .websitefoot_r{
    float:left;
    margin:1.0rem;
      a{  color:#333;}
           h3{
       color:#333;
     }
  
  }

 
}
  }
  a:hover{
    text-decoration: none;
  }
</style>
