import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";

// 绑定到原型
Vue.prototype.$axios = axios;

//设置默认的 api 域名
axios.defaults.baseURL = "http://111.230.181.206:3000";

// 引入 ui 库
import ElementUI from 'element-ui';
// 引入 css
import 'element-ui/lib/theme-chalk/index.css';
//注册组件库
Vue.use(ElementUI);
// 路由守卫
router.beforeEach((to,from,next)=>{
    if(to.path != '/login'){
      const token = localStorage.getItem('token');
      if(!token){
        router.push('/login');
      }else{
        next();
      }
    }else{
      next();
    }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
