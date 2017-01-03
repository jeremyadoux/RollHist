/* tslint:disable */
import { Injectable } from '@angular/core';
import { Customer } from '../../models/Customer';
import { News } from '../../models/News';
import { Jdrpnj } from '../../models/Jdrpnj';
import { Rencontre } from '../../models/Rencontre';
import { RencontrePnjRelation } from '../../models/RencontrePnjRelation';
import { Jdrpj } from '../../models/Jdrpj';
import { Campaign } from '../../models/Campaign';
import { PlayerJoueur } from '../../models/PlayerJoueur';
import { Container } from '../../models/Container';
import { Picture } from '../../models/Picture';
import { Story } from '../../models/Story';

@Injectable()
export class SDKModels {

  private models: { [name: string]: any } = {
    Customer: Customer,
    News: News,
    Jdrpnj: Jdrpnj,
    Rencontre: Rencontre,
    RencontrePnjRelation: RencontrePnjRelation,
    Jdrpj: Jdrpj,
    Campaign: Campaign,
    PlayerJoueur: PlayerJoueur,
    Container: Container,
    Picture: Picture,
    Story: Story,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }
}
