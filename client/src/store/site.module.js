// import AuthService from '../services/auth.service';
import SiteService from '../services/site.service';
// const user = JSON.parse(localStorage.getItem('user'));
// const initialSiteState = [];
export const site = {
  namespaced: true,
  state: [],
  actions: {
    create({ commit }, site) {
      return SiteService.create(site).then(
        site => {
          commit('siteCreated', site);
          return Promise.resolve(site);
        },
        error => {
        //   commit('loginFailure');
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    siteCreated(state, site)
    {
        state.sites.push(site);
    }
  }
};