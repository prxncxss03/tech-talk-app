import {Request} from './http';
import {getStorage} from './storage';

var request = new Request;

export class UserApi {
  login(email, password) {
    return request.post(`login`, {email, password});
  }

   register(firstname, lastname, email, password) {
    return request.post(`register`, {firstname, lastname, email, password});
   }

  async logout() {
    const user = await getStorage('user');
    request = new Request(user.token);

    return request.post('logout');
  }
}