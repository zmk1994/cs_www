<template>
 <div class="htmleaf-container">
		<header class="htmleaf-header">
		
		
		</header>
		<div class="demo">
		        <div class="container">
		            <div class="row">
		                <div class="col-md-4 col-sm-6 mm">
		                    <div class="box">
		                        <img src="../www/img/use1.png" alt=""/>
		                        <div class="box-content">
		                            <h3 class="title">互联云玺</h3>
		                            <ul class="icon">
		                                <li><a href="#" class="fa fa-link"></a></li>
		                                <li><a href="#" class="fa fa-search"></a></li>
		                            </ul>
		                            <p class="description">
		                               云玺印章流程
		                            </p>
		                        </div>
		                    </div>
		                </div>

		                <div class="col-md-4 col-sm-6 mm">
		                    <div class="box">
		                        <img src="../www/img/use2.png" alt=""/>
		                        <div class="box-content">
		                            <h3 class="title">申请用章</h3>
		                            <ul class="icon">
		                                <li><a href="#" class="fa fa-link"></a></li>
		                                <li><a href="#" class="fa fa-search"></a></li>
		                            </ul>
		                            <p class="description">
		                               申请用章申请用章申请用章
		                            </p>
		                        </div>
		                    </div>
		                </div>
 

		                <div class="col-md-4 col-sm-6 mm">
		                    <div class="box">
		                       <img src="../www/img/use3.png" alt=""/>
		                        <div class="box-content">
		                            <h3 class="title">审批处理</h3>
		                            <ul class="icon">
		                                <li><a href="#" class="fa fa-link"></a></li>
		                                <li><a href="#" class="fa fa-search"></a></li>
		                            </ul>
		                            <p class="description">
		                               审批处理审批处理审批处理
		                            </p>
		                        </div>
		                    </div>
		                </div>

                <div class="col-md-4 col-sm-6 mm">
		                    <div class="box">
		                        <img src="../www/img/use4.png" alt=""/>
		                        <div class="box-content">
		                            <h3 class="title">授权处理</h3>
		                            <ul class="icon">
		                                <li><a href="#" class="fa fa-link"></a></li>
		                                <li><a href="#" class="fa fa-search"></a></li>
		                            </ul>
		                            <p class="description">
		                               授权处理授权处理
		                            </p>
		                        </div>
		                    </div>
		                </div>

                    
                <div class="col-md-4 col-sm-6 mm">
		                    <div class="box">
		                        <img src="../www/img/use5.png" alt=""/>
		                        <div class="box-content">
		                            <h3 class="title">管理用章</h3>
		                            <ul class="icon">
		                                <li><a href="#" class="fa fa-link"></a></li>
		                                <li><a href="#" class="fa fa-search"></a></li>
		                            </ul>
		                            <p class="description">
		                              管理用章管理用章
		                            </p>
		                        </div>
		                    </div>
		                </div>

                                    <div class="col-md-4 col-sm-6 mm">
		                    <div class="box">
		                        <img src="../www/img/use6.png" alt=""/>
		                        <div class="box-content">
		                            <h3 class="title">审计处理</h3>
		                            <ul class="icon">
		                                <li><a href="#" class="fa fa-link"></a></li>
		                                <li><a href="#" class="fa fa-search"></a></li>
		                            </ul>
		                            <p class="description">
		                              审计处理审计处理
		                            </p>
		                        </div>
		                    </div>
		                </div>

		            </div>
		        </div>
		    </div>
      
	
	</div>

</template>

<script>

 export default {
 name: 'apply',
   data () {
     return {

     }
   },
  components: {
  
 
},
  methods: {
}
}
 
</script>

<style scoped>

.mm{
  margin:30px;
  width: 240px;
  height: 400px;
}

		.demo{padding: 2em 0;}
		.box{
		    overflow: hidden;
		    box-shadow: 0 0 3px rgba(0,0,0,0.3);
		    position: relative;
		}
		.box:before{
		    content: "";
		    background: rgba(1, 9, 10, 0.904);
		    box-shadow: 0 0 20px #fff;
		    position: absolute;
		    top: 0;
		    left: 50%;
		    bottom: 0;
		    right: 50%;
		    z-index: 1;
		    transition: all 0.3s ease-out 0.3s;
		}
		.box:hover:before{
		    left: 0;
		    right: 0;
		    box-shadow: 0 0 0 #fff;
		    transition-delay: 0s;
		}
		.box img{
		    width: 100%;
        height: auto;
    
		    transition: all 0.8s ease-out 0s;
		}
		.box:hover img{ opacity: 0.2; }
		.box .box-content{
		    width: 100%;
		    height: 100%;
		    position: absolute;
		    top: 0;
		    left: 0;
		    z-index: 2;
		}
		.box .title{
		    padding: 25px;
		    margin: 0;
		    font-size: 24px;
		    color: #fff;
		    opacity: 0;
		    transition: all 0.35s ease-out 0s;
		}
		.box .icon{
		    list-style: none;
		    padding: 0 25px;
		    margin: 0;
		    opacity: 0;
		    transition: all 0.35s ease-out 0s;
		}
		.box .icon li{ display: inline-block; }
		.box .icon li a{
		    display: block;
		    width: 35px;
		    height: 35px;
		    line-height: 35px;
		    border-radius: 50%;
		    background: transparent;
		    text-align: center;
		    font-size: 18px;
		    color: #fff;
		    margin-right: 10px;
		    overflow: hidden;
		    position: relative;
		    transition: all 0.5s ease 0s;
		}
		.box .icon li a:after{
		    content: "";
		    width: 100%;
		    height: 100%;
		    background: #c92853;
		    border-radius: 50%;
		    position: absolute;
		    top: -100%;
		    left: 0;
		    z-index: -1;
		    transition: all 0.3s ease 0s;
		}
		.box .icon li a:hover:after{ top: 0; }
		.box .description{
		    padding: 25px 25px 25px 60px;
		    margin: 0;
		    font-size: 12px;
		    color: #fff;
		    letter-spacing: 1px;
		    text-align: right;
		    opacity: 0;
		    position: absolute;
		    bottom: 0;
		    transition: all 0.35s ease-out 0s;
		}
		.box:hover .title,
		.box:hover .icon,
		.box:hover .description{
		    opacity: 0.7;
		    transition-delay: 0.3s;
		}
		@media only screen and (max-width:990px){
		    .box{ margin-bottom: 30px; }
		}
	</style>