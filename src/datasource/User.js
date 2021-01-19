import { RESTDataSource } from 'apollo-datasource-rest';
import config from '../config/configuration';

export default class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${config.SERVICE_URL}/api/user`;
  }

  get() {
    return this.getMe('/me');
  }

  loginUser(payload) {
    return this.post('/login', payload);
  }
}
