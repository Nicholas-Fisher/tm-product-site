import Vue from "vue";
import App from "@/App.vue";
import router from '@/router.js'
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
  faCoffeeTogo,
  faCoins,
  faTasks,
  faSurprise,
  faLaptop,
  faBookOpen,
  faAngleRight,
  faTypewriter,
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
  faCoffeeTogo,
  faCoins,
  faTasks,
  faSurprise,
  faLaptop,
  faBookOpen,
  faTypewriter,
  faAngleRight,
);

AOS.init();

Vue.component('fa', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
