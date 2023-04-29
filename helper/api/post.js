import { Request } from './http';
import { getStorage } from './storage';

var request = new Request;

export class PostApi {
  async posts() {
    const user = await getStorage('user');
    request = new Request(user.token);

    return request.get(`posts`);
  }

  async createPost(content){
    const user = await getStorage('user')
    request = new Request(user.token)
  

    return request.post(`post`, content)

  }


}