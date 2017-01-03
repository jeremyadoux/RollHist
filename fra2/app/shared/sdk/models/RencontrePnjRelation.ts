/* tslint:disable */
import {
  Rencontre,
  Jdrpnj
} from '../index';

declare var Object: any;
export interface RencontrePnjRelationInterface {
  data?: any;
  id?: any;
  rencontreId?: any;
  jdrpnjId?: any;
  rencontre?: Rencontre;
  jdrpnj?: Jdrpnj;
}

export class RencontrePnjRelation implements RencontrePnjRelationInterface {
  data: any;
  id: any;
  rencontreId: any;
  jdrpnjId: any;
  rencontre: Rencontre;
  jdrpnj: Jdrpnj;
  constructor(data?: RencontrePnjRelationInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RencontrePnjRelation`.
   */
  public static getModelName() {
    return "RencontrePnjRelation";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of RencontrePnjRelation for dynamic purposes.
  **/
  public static factory(data: RencontrePnjRelationInterface): RencontrePnjRelation{
    return new RencontrePnjRelation(data);
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
      name: 'RencontrePnjRelation',
      plural: 'RencontrePnjRelations',
      properties: {
        data: {
          name: 'data',
          type: 'any'
        },
        id: {
          name: 'id',
          type: 'any'
        },
        rencontreId: {
          name: 'rencontreId',
          type: 'any'
        },
        jdrpnjId: {
          name: 'jdrpnjId',
          type: 'any'
        },
      },
      relations: {
        rencontre: {
          name: 'rencontre',
          type: 'Rencontre',
          model: 'Rencontre'
        },
        jdrpnj: {
          name: 'jdrpnj',
          type: 'Jdrpnj',
          model: 'Jdrpnj'
        },
      }
    }
  }
}
