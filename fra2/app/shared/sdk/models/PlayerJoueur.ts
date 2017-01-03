/* tslint:disable */
import {
  Customer,
  Campaign,
  Picture
} from '../index';

declare var Object: any;
export interface PlayerJoueurInterface {
  name: string;
  level?: number;
  id?: any;
  authorId?: any;
  campaignId?: any;
  pictureId?: any;
  author?: Customer;
  campaigns?: Array<Campaign>;
  picture?: Picture;
}

export class PlayerJoueur implements PlayerJoueurInterface {
  name: string;
  level: number;
  id: any;
  authorId: any;
  campaignId: any;
  pictureId: any;
  author: Customer;
  campaigns: Array<Campaign>;
  picture: Picture;
  constructor(data?: PlayerJoueurInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PlayerJoueur`.
   */
  public static getModelName() {
    return "PlayerJoueur";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PlayerJoueur for dynamic purposes.
  **/
  public static factory(data: PlayerJoueurInterface): PlayerJoueur{
    return new PlayerJoueur(data);
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
      name: 'PlayerJoueur',
      plural: 'PlayerJoueurs',
      properties: {
        name: {
          name: 'name',
          type: 'string'
        },
        level: {
          name: 'level',
          type: 'number'
        },
        id: {
          name: 'id',
          type: 'any'
        },
        authorId: {
          name: 'authorId',
          type: 'any'
        },
        campaignId: {
          name: 'campaignId',
          type: 'any'
        },
        pictureId: {
          name: 'pictureId',
          type: 'any'
        },
      },
      relations: {
        author: {
          name: 'author',
          type: 'Customer',
          model: 'Customer'
        },
        campaigns: {
          name: 'campaigns',
          type: 'Array<Campaign>',
          model: 'Campaign'
        },
        picture: {
          name: 'picture',
          type: 'Picture',
          model: 'Picture'
        },
      }
    }
  }
}
