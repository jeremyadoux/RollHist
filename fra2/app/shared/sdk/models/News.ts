/* tslint:disable */
import {
  Customer
} from '../index';

declare var Object: any;
export interface NewsInterface {
  title: string;
  description?: string;
  deleted?: Date;
  isDelete?: number;
  status: number;
  id?: any;
  authorId?: any;
  createdAt: Date;
  updatedAt: Date;
  author?: Customer;
  comments?: Array<any>;
  likes?: Array<any>;
}

export class News implements NewsInterface {
  title: string;
  description: string;
  deleted: Date;
  isDelete: number;
  status: number;
  id: any;
  authorId: any;
  createdAt: Date;
  updatedAt: Date;
  author: Customer;
  comments: Array<any>;
  likes: Array<any>;
  constructor(data?: NewsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `News`.
   */
  public static getModelName() {
    return "News";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of News for dynamic purposes.
  **/
  public static factory(data: NewsInterface): News{
    return new News(data);
  }  
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'News',
      plural: 'News',
      properties: {
        title: {
          name: 'title',
          type: 'string'
        },
        description: {
          name: 'description',
          type: 'string'
        },
        deleted: {
          name: 'deleted',
          type: 'Date'
        },
        isDelete: {
          name: 'isDelete',
          type: 'number',
          default: 0
        },
        status: {
          name: 'status',
          type: 'number',
          default: 1
        },
        id: {
          name: 'id',
          type: 'any'
        },
        authorId: {
          name: 'authorId',
          type: 'any'
        },
        createdAt: {
          name: 'createdAt',
          type: 'Date'
        },
        updatedAt: {
          name: 'updatedAt',
          type: 'Date'
        },
      },
      relations: {
        author: {
          name: 'author',
          type: 'Customer',
          model: 'Customer'
        },
        comments: {
          name: 'comments',
          type: 'Array<any>',
          model: ''
        },
        likes: {
          name: 'likes',
          type: 'Array<any>',
          model: ''
        },
      }
    }
  }
}
