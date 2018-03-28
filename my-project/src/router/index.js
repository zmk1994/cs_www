import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import customCase from '../page/customCase.vue'
import brand from '../page/brand.vue'
import about from '../page/about.vue'
import usemethods from '../page/usemethods.vue'
import websiteIndex from '../page/websiteIndex.vue'
import functionShow from '../page/functionShow.vue'
import absolve from '../page/absolve'
import apply from '../page/apply'
import websiteTop from '../components/websiteTop'
import brandNews from '../components/brandNews'
import swiper2 from '../components/swiper2'
import con from "../components/con"
import websiteFoot from '../components/websiteFoot'
import aboutMap from '../components/aboutMap'
import aboutUs from '../components/aboutUs'
import aboutContent from '../components/aboutContent'
import  cont from '../components/cont'
import  card from '../components/card'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'websiteIndex',
      component:websiteIndex,
      redirect:"websiteIndex",
      children:[
        {   
            path:'/websiteIndex',
            name:'websiteIndex',         
          },
        
      ]
    },

    {
      path:'/customCase',
      name:'customCase',
      component: customCase
 
    },
    {
      path:'/about',
      name:'about',
      component: about
 
    },
    {
      path:'/functionShow',
      name:'functionShow',
      component: functionShow
 
    },
    
    {
      path:'/absolve',
      name:'absolve',
      component: absolve
 
    },
    {
      path:'/usemethods',
      name:'usemethods',
      component: usemethods
 
    },
    {
      path:'/apply',
      name:'apply',
      component: apply
 
    },
    {
      path:'/brand',
      name:'brand',
      component: brand,
    },
    {
      path: '/brand/:id',
      component: brandNews
    },
    {
      path: '/card',
      name:card,
      component: card
    }
    
    ]
})
