/* eslint-disable space-before-function-paren */
import { RESTDataSource } from 'apollo-datasource-rest';
import { makePostDataloader } from './dataloaders';

export class PostApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${process.env.API_URL}/posts/`;
    this.dataloader = makePostDataloader(this.getPosts.bind(this));
  }

  async getPosts(urlParams = {}) {
    return this.get('', urlParams, {
      cacheOptions: {
        ttl: 60,
      },
    });
  }

  async getPost(id) {
    return this.get(id, undefined, {
      cacheOptions: {
        ttl: 60,
      },
    });
  }

  batchLoadByUserId(id) {
    this.dataloader.load(id);
  }
}