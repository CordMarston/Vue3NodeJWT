// import Vue from 'vue';
import { createStore } from 'vuex';
import { auth } from './auth.module';
// Vue.use(Vuex);
export default createStore({
  modules: {
    auth
  }
});
// export const store = createStore({
//   modules: {
//     auth
//   }
// });