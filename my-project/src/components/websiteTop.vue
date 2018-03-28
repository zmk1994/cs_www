<template>
<div class="top">
  <div class="websitetop margin">
    <div class="websitetop_left">
      <img src="../www/img/logo.png" class="websitetop_logo"/>
       <div class="websitetop_logo_font"><h1>云玺</h1></div>
    </div>
    <div class="websitetop_right">
      <ul>
        <router-link to="/websiteindex" tag="li"><a >首页</a></router-link>
        <router-link to="/functionShow" tag="li"><a>功能</a></router-link>
        <router-link to="/usemethods" tag="li"><a>使用</a></router-link>
        <router-link to="/customCase" tag="li"><a>客户案例</a></router-link>
        <router-link to="/brand" tag="li"><a>品牌动态</a></router-link>
        <router-link to="/about" tag="li"><a>关于我们</a></router-link>
        <!-- <router-link to="/apply" tag="li"><a>申请使用</a></router-link> -->
     
      </ul>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'websiteTop',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
methods:{
       fetchData(){
           console.log('路由发送变化doing...');
     },
     created(){
       var self=this;
       self.fetchData();
     },
       watch:{
      '$route':'fetchData'
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
	
<style lang="scss" scoped="" type="text/css">
.top{
 a.active{
   text-decoration: none;
 }
    margin:0 auto;
    width: 100%;;
   .websitetop{
    height:8.8rem;
    // font:1.8rem/8.8rem "";
    font-size: 1.8rem;
    line-height: 8.8rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    
   
    .websitetop_left{
      float:left;
    
      .websitetop_logo{
        margin-top:1.0rem;
        width:6.0rem;
        height: 7.0rem;
        margin-right: 1.0rem;;
        float: left;
      }
      .websitetop_logo_font{
        float:left;
        h1{
          
        //  font:4.0rem/8.8rem "";
        font-size: 4.0rem;
        line-height: 8.8rem;
          font-family:"黑体";
          color: #333;
        }
      }

    }
    .websitetop_right{
      float: left;
      margin-left: 10rem;
      ul{
        // border-sizing:border-box;
        li{
          float:left;
          margin-left:4.0rem;
          a{
            color:#666;
          }
          a:hover{
            color:red;
            text-decoration: none;
          }
          a:link{
            text-decoration: none;
              columns: #333;;
          }
          a:visited{
        text-decoration: none;
          columns: #333;;
          }
          
          
        }
      }
    }
  }
}
</style>
