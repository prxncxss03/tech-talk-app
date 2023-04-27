import { Request } from '../helper/http';
import { getStorage, setStorage } from '../helper/storage';

var request = new Request;

export class PostApi {
  static async posts() {
    const user = await getStorage('user');
    request = new Request(user.token);

    return request.get(`posts`);
  }
}