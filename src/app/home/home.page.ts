import { Component } from '@angular/core';
import { Store } from '../interfaces/store';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  foodLocations: Store[] = [
    {
      "name": "Five Guys"
    },
    {
      "name": "Carl's Brauhaus"
    },
    {
      "name": "Netto"
    },
    {
      "name": "McDonald's"
    },
    {
      "name": "Hans im Glück"
    },
    {
      "name": "Kübler"
    },
    {
      "name": "Fritty Bar"
    },
    {
      "name": "LIDL"
    },
    {
      "name": "ALDI"
    }
  ]
  constructor() {}

}
