/* tslint:disable */

declare var Object: any;
export interface PictureInterface {
  name?: string;
  type?: string;
  container?: string;
  url: string;
  id?: any;
}

export class Picture implements PictureInterface {
  name: string;
  type: string;
  container: string;
  url: string;
  id: any;
  constructor(data?: PictureInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Picture`.
   */
  public static getModelName() {
    return "Picture";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Picture for dynamic purposes.
  **/
  public static factory(data: PictureInterface): Picture{
    return new Picture(data);
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
      name: 'Picture',
      plural: 'Pictures',
      properties: {
        name: {
          name: 'name',
          type: 'string'
        },
        type: {
          name: 'type',
          type: 'string'
        },
        container: {
          name: 'container',
          type: 'string'
        },
        url: {
          name: 'url',
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
