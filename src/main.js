import Vue from "vue";
import App from "./App.vue";
import 'normalize.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faConciergeBell,
  faSearch,
  faCheck,
  faMobileAndroid,
  faComments,
  faSmile,
  faDollarSign,
  faBalanceScaleLeft,
  faExclamationSquare,
  faCommentAltSmile,
  faDoorOpen,
  faPuzzlePiece,
  faBars,
  faTimes,
  faArrowLeft,
  faArrowRight,
  faAnalytics,
  faTreeAlt,
  faMobile,
  faHeart,
  faUtensilFork,
  faUtensilKnife,
  faUtensilSpoon,
  faUtensils,
  faUtensilsAlt,
} from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';

library.add(
  faConciergeBell,
  faSearch,
  faCheck,
  faMobileAndroid,
  faComments,
  faSmile,
  faDollarSign,
  faBalanceScaleLeft,
  faExclamationSquare,
  faCommentAltSmile,
  faDoorOpen,
  faPuzzlePiece,
  faBars,
  faTimes,
  faArrowLeft,
  faArrowRight,
  faAnalytics,
  faTreeAlt,
  faMobile,
  faHeart,
  faUtensilFork,
  faUtensilKnife,
  faUtensilSpoon,
  faUtensils,
  faUtensilsAlt,
);

AOS.init();

Vue.component('fa', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
