/* tslint:disable */
import {
  Rencontre
} from '../index';

declare var Object: any;
export interface JdrpnjInterface {
  name: string;
  level: number;
  initiative: number;
  perception: number;
  skill?: Array<any>;
  pv: number;
  ca: number;
  vig: number;
  reflex: number;
  volonte: number;
  move: number;
  experience: number;
  str: number;
  dex: number;
  sag: number;
  con: number;
  int: number;
  cha: number;
  immunity?: string;
  resistance?: string;
  vulnerability?: string;
  equipement?: string;
  alignement?: string;
  language?: string;
  informations?: string;
  power: Array<any>;
  id?: any;
  rencontres?: Array<Rencontre>;
}

export class Jdrpnj implements JdrpnjInterface {
  name: string;
  level: number;
  initiative: number;
  perception: number;
  skill: Array<any>;
  pv: number;
  ca: number;
  vig: number;
  reflex: number;
  volonte: number;
  move: number;
  experience: number;
  str: number;
  dex: number;
  sag: number;
  con: number;
  int: number;
  cha: number;
  immunity: string;
  resistance: string;
  vulnerability: string;
  equipement: string;
  alignement: string;
  language: string;
  informations: string;
  power: Array<any>;
  id: any;
  rencontres: Array<Rencontre>;
  constructor(data?: JdrpnjInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Jdrpnj`.
   */
  public static getModelName() {
    return "Jdrpnj";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Jdrpnj for dynamic purposes.
  **/
  public static factory(data: JdrpnjInterface): Jdrpnj{
    return new Jdrpnj(data);
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
      name: 'Jdrpnj',
      plural: 'Jdrpnjs',
      properties: {
        name: {
          name: 'name',
          type: 'string'
        },
        level: {
          name: 'level',
          type: 'number'
        },
        initiative: {
          name: 'initiative',
          type: 'number',
          default: 0
        },
        perception: {
          name: 'perception',
          type: 'number',
          default: 0
        },
        skill: {
          name: 'skill',
          type: 'Array&lt;any&gt;'
        },
        pv: {
          name: 'pv',
          type: 'number'
        },
        ca: {
          name: 'ca',
          type: 'number',
          default: 0
        },
        vig: {
          name: 'vig',
          type: 'number',
          default: 0
        },
        reflex: {
          name: 'reflex',
          type: 'number',
          default: 0
        },
        volonte: {
          name: 'volonte',
          type: 'number',
          default: 0
        },
        move: {
          name: 'move',
          type: 'number',
          default: 6
        },
        experience: {
          name: 'experience',
          type: 'number',
          default: 0
        },
        str: {
          name: 'str',
          type: 'number',
          default: 0
        },
        dex: {
          name: 'dex',
          type: 'number',
          default: 0
        },
        sag: {
          name: 'sag',
          type: 'number',
          default: 0
        },
        con: {
          name: 'con',
          type: 'number',
          default: 0
        },
        int: {
          name: 'int',
          type: 'number',
          default: 0
        },
        cha: {
          name: 'cha',
          type: 'number',
          default: 0
        },
        immunity: {
          name: 'immunity',
          type: 'string'
        },
        resistance: {
          name: 'resistance',
          type: 'string'
        },
        vulnerability: {
          name: 'vulnerability',
          type: 'string'
        },
        equipement: {
          name: 'equipement',
          type: 'string'
        },
        alignement: {
          name: 'alignement',
          type: 'string'
        },
        language: {
          name: 'language',
          type: 'string'
        },
        informations: {
          name: 'informations',
          type: 'string'
        },
        power: {
          name: 'power',
          type: 'Array&lt;any&gt;'
        },
        id: {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        rencontres: {
          name: 'rencontres',
          type: 'Array<Rencontre>',
          model: 'Rencontre'
        },
      }
    }
  }
}
