/* tslint:disable */
import {
  Customer,
  Jdrpnj,
  Campaign
} from '../index';

declare var Object: any;
export interface RencontreInterface {
  name: string;
  id?: any;
  authorId?: any;
  createdAt: Date;
  updatedAt: Date;
  campaignId?: any;
  author?: Customer;
  jdrpnjs?: Array<Jdrpnj>;
  campaign?: Campaign;
}

export class Rencontre implements RencontreInterface {
  name: string;
  id: any;
  authorId: any;
  createdAt: Date;
  updatedAt: Date;
  campaignId: any;
  author: Customer;
  jdrpnjs: Array<Jdrpnj>;
  campaign: Campaign;
  constructor(data?: RencontreInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Rencontre`.
   */
  public static getModelName() {
    return "Rencontre";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Rencontre for dynamic purposes.
  **/
  public static factory(data: RencontreInterface): Rencontre{
    return new Rencontre(data);
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
      name: 'Rencontre',
      plural: 'Rencontres',
      properties: {
        name: {
          name: 'name',
          type: 'string'
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
        campaignId: {
          name: 'campaignId',
          type: 'any'
        },
      },
      relations: {
        author: {
          name: 'author',
          type: 'Customer',
          model: 'Customer'
        },
        jdrpnjs: {
          name: 'jdrpnjs',
          type: 'Array<Jdrpnj>',
          model: 'Jdrpnj'
        },
        campaign: {
          name: 'campaign',
          type: 'Campaign',
          model: 'Campaign'
        },
      }
    }
  }
}
