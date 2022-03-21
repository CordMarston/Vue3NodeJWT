import axios from 'axios';
import corsHeader from './cors-header';
const API_URL = 'https://api.cordmarston.com/api/auth/';
class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'signin', {
        email: user.email,
        password: user.password
      }, { headers: corsHeader() })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem('user');
  }
  register(user) {
    return axios.post(API_URL + 'signup', {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: user.password
    });
  }
}
export default new AuthService();