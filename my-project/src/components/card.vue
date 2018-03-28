<template>
 <div id='card'>
     <ul>
         <li>  <article class="card">
			<header class="card__thumb">
				<a href="#"><img src="../www/img/news1.png"/></a>
			</header>


			<div class="card__body">
				<div class="card__category"><a href="#">照片</a></div>
				<h2 class="card__title"><a href="#">云台科技，宏泰平安</a></h2>
				<div class="card__subtitle">云台科技，宏泰平安</div>
				<p class="card__description">云台科技，宏泰平安，云台科技，宏泰平安，云台科技，宏泰平安，云台科技，宏泰平安</p>
			</div>
     </article></li>

     </ul>
   
        
 </div>
</template>

<script>
 export default {
 name: 'card',
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
#card ul {
    overflow: hidden;
}
#card ul li{
    float: left;
}

body, html { font-size: 100%; 	padding: 0; margin: 0;}

/* Reset */
*,
*:after,
*:before {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}

/* Clearfix hack by Nicolas Gallagher: http://nicolasgallagher.com/micro-clearfix-hack/ */
.clearfix:before,
.clearfix:after {
	content: " ";
	display: table;
}

.clearfix:after {
	clear: both;
}

body{
	background: #494A5F;
	color: #D5D6E2;
	font-weight: 500;
	font-size: 1.05em;
	font-family: "Microsoft YaHei","Segoe UI", "Lucida Grande", Helvetica, Arial,sans-serif;
}
.htmleaf-links a{ color: rgba(255, 255, 255, 0.6);outline: none;text-decoration: none;-webkit-transition: 0.2s;transition: 0.2s;}
.htmleaf-links a:hover,.htmleaf-links a:focus{color:#74777b;text-decoration: none;}
.htmleaf-container{
	margin: 0 auto;
}

.bgcolor-1 { background: #f0efee; }
.bgcolor-2 { background: #f9f9f9; }
.bgcolor-3 { background: #e8e8e8; }/*light grey*/
.bgcolor-4 { background: #2f3238; color: #fff; }/*Dark grey*/
.bgcolor-5 { background: #df6659; color: #521e18; }/*pink1*/
.bgcolor-6 { background: #2fa8ec; }/*sky blue*/
.bgcolor-7 { background: #d0d6d6; }/*White tea*/
.bgcolor-8 { background: #3d4444; color: #fff; }/*Dark grey2*/
.bgcolor-9 { background: #ef3f52; color: #fff;}/*pink2*/
.bgcolor-10{ background: #64448f; color: #fff;}/*Violet*/
.bgcolor-11{ background: #3755ad; color: #fff;}/*dark blue*/
.bgcolor-12{ background: #3498DB; color: #fff;}/*light blue*/
.bgcolor-20{ background: #494A5F;color: #D5D6E2;}
/* Header */
.htmleaf-header{
	padding: 1em 190px 1em;
	letter-spacing: -1px;
	text-align: center;
	background: #66677c;
}
.htmleaf-header h1 {
	color: #D5D6E2;
	font-weight: 600;
	font-size: 2em;
	line-height: 1;
	margin-bottom: 0;
}
.htmleaf-header h1 span {
	display: block;
	font-size: 60%;
	font-weight: 400;
	padding: 0.8em 0 0.5em 0;
	color: #c3c8cd;
}
/*nav*/
.htmleaf-demo a{color: #fff;text-decoration: none;}
.htmleaf-demo{width: 100%;padding-bottom: 1.2em;}
.htmleaf-demo a{display: inline-block;margin: 0.5em;padding: 0.6em 1em;border: 3px solid #fff;font-weight: 700;}
.htmleaf-demo a:hover{opacity: 0.6;}
.htmleaf-demo a.current{background:#1d7db1;color: #fff; }
/* Top Navigation Style */
.htmleaf-links {
	position: relative;
	display: inline-block;
	white-space: nowrap;
	font-size: 1.5em;
	text-align: center;
}

.htmleaf-links::after {
	position: absolute;
	top: 0;
	left: 50%;
	margin-left: -1px;
	width: 2px;
	height: 100%;
	background: #dbdbdb;
	content: '';
	-webkit-transform: rotate3d(0,0,1,22.5deg);
	transform: rotate3d(0,0,1,22.5deg);
}

.htmleaf-icon {
	display: inline-block;
	margin: 0.5em;
	padding: 0em 0;
	width: 1.5em;
	text-decoration: none;
}

.htmleaf-icon span {
	display: none;
}

.htmleaf-icon:before {
	margin: 0 5px;
	text-transform: none;
	font-weight: normal;
	font-style: normal;
	font-variant: normal;
	font-family: 'icomoon';
	line-height: 1;
	speak: none;
	-webkit-font-smoothing: antialiased;
}
/* footer */
.htmleaf-footer{width: 100%;padding-top: 10px;}
.htmleaf-small{font-size: 0.8em;}
.center{text-align: center;}
/****/
.related {
	color: #fff;
	background: #494A5F;
	text-align: center;
	font-size: 1.25em;
	padding: 0.5em 0;
	overflow: hidden;
}

.related > a {
	vertical-align: top;
	width: calc(100% - 20px);
	max-width: 340px;
	display: inline-block;
	text-align: center;
	margin: 20px 10px;
	padding: 25px;
	font-family: "Microsoft YaHei","宋体","Segoe UI", "Lucida Grande", Helvetica, Arial,sans-serif, FreeSans, Arimo;
}
.related a {
	display: inline-block;
	text-align: left;
	margin: 20px auto;
	padding: 10px 20px;
	opacity: 0.8;
	-webkit-transition: opacity 0.3s;
	transition: opacity 0.3s;
	-webkit-backface-visibility: hidden;
	text-decoration: none;
}

.related a:hover,
.related a:active {
	opacity: 1;
}

.related a img {
	max-width: 100%;
	opacity: 0.8;
	border-radius: 4px;
}
.related a:hover img,
.related a:active img {
	opacity: 1;
}
.related h3{font-family: "Microsoft YaHei", sans-serif;font-size: 1.2em}
.related a h3 {
	font-size: 0.85em;
	font-weight: 300;
	margin-top: 0.15em;
	color: #fff;
}
/* icomoon */
.icon-htmleaf-home-outline:before {
	content: "\e5000";
}

.icon-htmleaf-arrow-forward-outline:before {
	content: "\e5001";
}

@media screen and (max-width: 1024px) {
	.htmleaf-header {
		padding: 2em 10% 2em;
	}
	.htmleaf-header h1 {
        font-size:1.4em;
    }
    .htmleaf-links{font-size: 1.4em}
}

@media screen and (max-width: 960px) {
	.htmleaf-header {
		padding: 2em 10% 2em;
	}
	.htmleaf-header h1 {
        font-size:1.2em;
    }
    .htmleaf-links{font-size: 1.2em}
    .related h3{font-size: 1em;}
	.related a h3 {
		font-size: 0.8em;
	}
}

@media screen and (max-width: 766px) {
	.htmleaf-header h1 {
        font-size:1.3em;
    }
    .htmleaf-links{font-size: 1.3em}
}

@media screen and (max-width: 640px) {
	.htmleaf-header {
		padding: 2em 10% 2em;
	}
	.htmleaf-header h1 {
        font-size:1em;
    }
    .htmleaf-links{font-size: 1em}
    .related h3{font-size: 0.8em;}
	.related a h3 {
		font-size: 0.6em;
	}
}



/**
* VARIABLES
**/
@import url(http://fonts.googleapis.com/css?family=Open+Sans:400,700);
* {
  box-sizing: border-box;
}


header img{
    width: 100%;
}
body {
  font-family: "Open Sans";
  font-size: 16px;
  background-color: #eee;
}

/**
* Title
**/
.title {
  text-align: center;
  -webkit-transform: translateY(20px);
          transform: translateY(20px);
  font-size: 45px;
  color: coral;
  text-transform: uppercase;
}

/**
* CARD
**/
.card {
 
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%) translateZ(0);
          transform: translateX(-50%) translateY(-50%) translateZ(0);
  /* width: 370px; */
    width: 1000px;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  -webkit-transition: box-shadow 0.5s;
  transition: box-shadow 0.5s;
}
.card a {
  color: inherit;
  text-decoration: none;
}

.card:hover {
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
}

/**
* DATE
**/
.card__date {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 45px;
  height: 45px;
  padding-top: 10px;
  background-color: coral;
  border-radius: 50%;
  color: #fff;
  text-align: center;
  font-weight: 700;
  line-height: 13px;
}
.card__date__day {
  font-size: 14px;
}
.card__date__month {
  text-transform: uppercase;
  font-size: 10px;
}

/**
* THUMB
**/
.card__thumb {
  height: 340px;
  overflow: hidden;
  background-color: #000;
  -webkit-transition: height 0.5s;
  transition: height 0.5s;
}
.card__thumb img {
  display: block;
  opacity: 1;
  -webkit-transform: scale(1);
          transform: scale(1);
  -webkit-transition: opacity 0.5s, -webkit-transform 0.5s;
  transition: opacity 0.5s, -webkit-transform 0.5s;
  transition: opacity 0.5s, transform 0.5s;
  transition: opacity 0.5s, transform 0.5s, -webkit-transform 0.5s;
}
.card:hover .card__thumb {
  height: 130px;
}

.card:hover .card__thumb img {
  opacity: 0.6;
  -webkit-transform: scale(1.2);
          transform: scale(1.2);
}

/**
* BODY
**/
.card__body {
  position: relative;
  height: 185px;
  padding: 20px;
  -webkit-transition: height 0.5s;
  transition: height 0.5s;
}
.card:hover .card__body {
  height: 300px;
}

.card__category {
  position: absolute;
  top: -25px;
  left: 0;
  height: 25px;
  padding: 0 15px;
  background-color: coral;
  color: #fff;
  text-transform: uppercase;
  font-size: 11px;
  line-height: 25px;
}

.card__title {
  margin: 0;
  padding: 0 0 10px 0;
  color: #000;
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
}

.card__subtitle {
  margin: 0;
  padding: 0 0 10px 0;
  font-size: 19px;
  color: coral;
}

.card__description {
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 56px;
  margin: 0;
  padding: 0;
  color: #666C74;
  line-height: 27px;
  opacity: 0;
  -webkit-transform: translateY(45px);
          transform: translateY(45px);
  -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
  transition: opacity 0.3s, -webkit-transform 0.3s;
  transition: opacity 0.3s, transform 0.3s;
  transition: opacity 0.3s, transform 0.3s, -webkit-transform 0.3s;
  -webkit-transition-delay: 0s;
          transition-delay: 0s;
}
.card:hover .card__description {
  opacity: 1;
  -webkit-transform: translateY(0);
          transform: translateY(0);
  -webkit-transition-delay: 0.2s;
          transition-delay: 0.2s;
}

.card__footer {
  position: absolute;
  bottom: 12px;
  left: 20px;
  right: 20px;
  font-size: 11px;
  color: #A3A9A2;
}

.icon {
  display: inline-block;
  vertical-align: middle;
  margin: -2px 0 0 2px;
  font-size: 18px;
}
.icon + .icon {
  padding-left: 10px;
}

</style>
