/* tslint:disable */
import {
  Customer,
  Campaign
} from '../index';

declare var Object: any;
export interface StoryInterface {
  title?: string;
  chapter: number;
  id?: any;
  authorId?: any;
  campaignId?: any;
  storyId?: any;
  author?: Customer;
  campaign?: Campaign;
}

export class Story implements StoryInterface {
  title: string;
  chapter: number;
  id: any;
  authorId: any;
  campaignId: any;
  storyId: any;
  author: Customer;
  campaign: Campaign;
  constructor(data?: StoryInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Story`.
   */
  public static getModelName() {
    return "Story";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Story for dynamic purposes.
  **/
  public static factory(data: StoryInterface): Story{
    return new Story(data);
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
      name: 'Story',
      plural: 'Stories',
      properties: {
        title: {
          name: 'title',
          type: 'string'
        },
        chapter: {
          name: 'chapter',
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
        campaignId: {
          name: 'campaignId',
          type: 'any'
        },
        storyId: {
          name: 'storyId',
          type: 'any'
        },
      },
      relations: {
        author: {
          name: 'author',
          type: 'Customer',
          model: 'Customer'
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
