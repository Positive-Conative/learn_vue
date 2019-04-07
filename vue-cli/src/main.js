import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')



// npm i -g @vue/cli
// vue create '/my/path'
// cd /my/path
// npm run serve

// ==
// new Vue({
//   el: '#app'
//   render: h => h(App),
// })