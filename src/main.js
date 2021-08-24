import Vue from 'vue';
import App from '@/app.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

// https://rules.sonarsource.com/javascript/RSPEC-5131
function nonCompliantCode(req, res){
  const tainted = req.query.name;
  res.send(tainted); // Noncompliant
}

// https://rules.sonarsource.com/javascript/RSPEC-5146
function redirection(req, res) {
  const url = req.query.url; // user controlled input

  res.redirect(url); // Noncompliant
}