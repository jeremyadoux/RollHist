/* tslint:disable */
import {
  Campaign,
  PlayerJoueur
} from '../index';

declare var Object: any;
export interface CustomerInterface {
  firstname: string;
  lastname: string;
  realm?: string;
  username?: string;
  password: string;
  email: string;
  emailVerified?: boolean;
  verificationToken?: string;
  id?: any;
  accessTokens?: Array<any>;
  contents?: Array<any>;
  likes?: Array<any>;
  campaigns?: Array<Campaign>;
  playerjoueurs?: Array<PlayerJoueur>;
}

export class Customer implements CustomerInterface {
  firstname: string;
  lastname: string;
  realm: string;
  username: string;
  password: string;
  email: string;
  emailVerified: boolean;
  verificationToken: string;
  id: any;
  accessTokens: Array<any>;
  contents: Array<any>;
  likes: Array<any>;
  campaigns: Array<Campaign>;
  playerjoueurs: Array<PlayerJoueur>;
  constructor(data?: CustomerInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Customer`.
   */
  public static getModelName() {
    return "Customer";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Customer for dynamic purposes.
  **/
  public static factory(data: CustomerInterface): Customer{
    return new Customer(data);
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
      name: 'Customer',
      plural: 'Customers',
      properties: {
        firstname: {
          name: 'firstname',
          type: 'string'
        },
        lastname: {
          name: 'lastname',
          type: 'string'
        },
        realm: {
          name: 'realm',
          type: 'string'
        },
        username: {
          name: 'username',
          type: 'string'
        },
        password: {
          name: 'password',
          type: 'string'
        },
        email: {
          name: 'email',
          type: 'string'
        },
        emailVerified: {
          name: 'emailVerified',
          type: 'boolean'
        },
        verificationToken: {
          name: 'verificationToken',
          type: 'string'
        },
        id: {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'Array<any>',
          model: ''
        },
        contents: {
          name: 'contents',
          type: 'Array<any>',
          model: ''
        },
        likes: {
          name: 'likes',
          type: 'Array<any>',
          model: ''
        },
        campaigns: {
          name: 'campaigns',
          type: 'Array<Campaign>',
          model: 'Campaign'
        },
        playerjoueurs: {
          name: 'playerjoueurs',
          type: 'Array<PlayerJoueur>',
          model: 'PlayerJoueur'
        },
      }
    }
  }
}
