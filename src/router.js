import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Contact from "./views/Contact.vue";
import Restaurants from "./views/Restaurants.vue";
import Demo from "./views/Demo.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/home',
      alias: '/',
      component: Home
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/restaurants',
      component: Restaurants,
    },
    {
      path: '/demo',
      component: Demo,
    },
  ]
});
