import axios from 'axios';
// import corsHeader from './cors-header';
import authHeader from './auth-header';
const API_URL = 'https://api.cordmarston.com/api/site/';
class SiteService {
  create(site) {
    return axios
      .post(API_URL + 'create', {
        name: site.name,
        scheme: site.scheme,
        url: site.url
      }, { headers: authHeader() })
      .then(response => {
        return response.data;
      });
  }
//   logout() {
//     localStorage.removeItem('user');
//   }
//   register(user) {
//     return axios.post(API_URL + 'signup', {
//       firstname: user.firstname,
//       lastname: user.lastname,
//       email: user.email,
//       password: user.password
//     });
//   }
}
export default new SiteService();