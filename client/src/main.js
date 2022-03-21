
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.scss'
import './assets/css/base.css';
window.$ = window.jQuery = require('jquery');

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouse, faGlobe, faChartBar, faCreditCard, faEnvelopeOpenText, faCookie, faMagnifyingGlass, faArrowRightFromBracket, faBars, faPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faHouse, faGlobe, faChartBar, faCreditCard, faEnvelopeOpenText, faCookie, faMagnifyingGlass, faArrowRightFromBracket, faBars, faPlus);
// import './assets/main.css'
import store from './store';
const app = createApp(App)
app.use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(store)
    .mount('#app')