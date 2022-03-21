// import Vue from 'vue';
import { createStore } from 'vuex';
import { auth } from './auth.module';
import { site } from './site.module';
// Vue.use(Vuex);
export default createStore({
  modules: {
    auth,
    site
  }
});
// export const store = createStore({
//   modules: {
//     auth
//   }
// });