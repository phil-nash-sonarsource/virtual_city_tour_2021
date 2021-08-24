import Vue from 'vue';
import Router from 'vue-router';
import PageNotFound from '@/components/page-not-found.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/heroes',
    },
    {
      path: '/heroes',
      name: 'heroes',
      component: () =>
        import(/* webpackChunkName: "heroes" */ './views/heroes/heroes.vue'),
    },
    {
      path: '/villains',
      name: 'villains',
      component: () =>
        import(
          /* webpackChunkName: "villains" */ './views/villains/villains.vue'
        ),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/about.vue'),
    },
    {
      path: '*',
      component: PageNotFound,
    },
  ],
});

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


let arr = ["a", "b", "c"];
let merged = arr.reduce(function(a, b) {
  a.concat(b);
}); // Noncompliant: No return statement, will result in TypeError


if (!"prop" in myObj) {  // Noncompliant;  "in" operator is checking property "false"
  doTheThing();  // this block will be never executed
}

if (!foo instanceof MyClass) {  // Noncompliant; "!foo" returns a boolean, which is not an instance of anything
  doTheOtherThing();  // this block is never executed
}