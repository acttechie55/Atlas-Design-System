import { Component, OnInit } from '@angular/core';
import { items } from './items';

@Component({
  selector: 'app-atlas-cards',
  templateUrl: './atlas-cards.component.html'
})
export class AtlasCardsComponent implements OnInit {

  cardAltitudes = [
    {
      cardType: "Basic",
      className: "atlas-card-basic",
      cardBenefitHeading: "Default",
      cardBenefitContent: "The default appearance"
    },
    {
      cardType: "Raised",
      className: "atlas-card-raised",
      cardBenefitHeading: "Adds Shadow",
      cardBenefitContent: "Increases visual hierachy; Makes content feel more important"
    },
    {
      cardType: "Base",
      className: "atlas-card-base",
      cardBenefitHeading: "Removes Border",
      cardBenefitContent: "De-emphasizes content next to other cards"
    }
  ]

  cardBorderRadii = [
    {
      cardType: "Sharp",
      className: "atlas-card-sharp",
      cardBenefitHeading: "Makes Corners Less Rounded",
      cardBenefitContent: "Use in cards nested in other cards to keep corners smoothies"
    },
    {
      cardType: "Basic",
      className: "atlas-card-basic",
      cardBenefitHeading: "Rounded Corners",
      cardBenefitContent: "Used in the majority of containers"
    }
    // {
    //   cardType: "Circle",
    //   className: "atlas-card-circle-lg",
    //   cardAltitude: "basic",
    //   cardBorderRadii: "circle",
    //   cardBenefitHeading: "Fully Rounded",
    //   cardBenefitContent: "Used to display numerical data (or as few words as possible)"
    // }
  ]

  circleCards = [
    {
      className: "atlas-card-circle-xl"
    },
    {
      className: "atlas-card-circle-lg"
    },
    {
      className: "atlas-card-circle-md"
    },
    {
      className: "atlas-card-circle-sm"
    }
  ]

  public items: any[] = items;

  constructor() { }

  ngOnInit() {
  }

}
