/* tslint:disable */

declare var Object: any;
export interface JdrpjInterface {
  name: string;
  initiative?: number;
  gpio?: string;
  id?: any;
}

export class Jdrpj implements JdrpjInterface {
  name: string;
  initiative: number;
  gpio: string;
  id: any;
  constructor(data?: JdrpjInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Jdrpj`.
   */
  public static getModelName() {
    return "Jdrpj";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Jdrpj for dynamic purposes.
  **/
  public static factory(data: JdrpjInterface): Jdrpj{
    return new Jdrpj(data);
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
      name: 'Jdrpj',
      plural: 'Jdrpjs',
      properties: {
        name: {
          name: 'name',
          type: 'string'
        },
        initiative: {
          name: 'initiative',
          type: 'number'
        },
        gpio: {
          name: 'gpio',
          type: 'string'
        },
        id: {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
