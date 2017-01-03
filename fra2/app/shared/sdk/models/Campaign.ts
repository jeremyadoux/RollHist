/* tslint:disable */
import {
  Customer,
  Rencontre,
  PlayerJoueur,
  Story
} from '../index';

declare var Object: any;
export interface CampaignInterface {
  name: string;
  id?: any;
  authorId?: any;
  createdAt: Date;
  updatedAt: Date;
  playerJoueurId?: any;
  author?: Customer;
  rencontre?: Array<Rencontre>;
  playerJoueurs?: Array<PlayerJoueur>;
  story?: Array<Story>;
}

export class Campaign implements CampaignInterface {
  name: string;
  id: any;
  authorId: any;
  createdAt: Date;
  updatedAt: Date;
  playerJoueurId: any;
  author: Customer;
  rencontre: Array<Rencontre>;
  playerJoueurs: Array<PlayerJoueur>;
  story: Array<Story>;
  constructor(data?: CampaignInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Campaign`.
   */
  public static getModelName() {
    return "Campaign";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Campaign for dynamic purposes.
  **/
  public static factory(data: CampaignInterface): Campaign{
    return new Campaign(data);
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
      name: 'Campaign',
      plural: 'Campaigns',
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
        playerJoueurId: {
          name: 'playerJoueurId',
          type: 'any'
        },
      },
      relations: {
        author: {
          name: 'author',
          type: 'Customer',
          model: 'Customer'
        },
        rencontre: {
          name: 'rencontre',
          type: 'Array<Rencontre>',
          model: 'Rencontre'
        },
        playerJoueurs: {
          name: 'playerJoueurs',
          type: 'Array<PlayerJoueur>',
          model: 'PlayerJoueur'
        },
        story: {
          name: 'story',
          type: 'Array<Story>',
          model: 'Story'
        },
      }
    }
  }
}
