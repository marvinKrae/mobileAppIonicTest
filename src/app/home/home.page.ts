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
      "name": "Five Guys",
      "address":  "Königsstraße 15",
      "category": "Burger"
    },
    {
      "name": "Carl's Brauhaus",
      "address":  "Schlossplatz 7",
      "category": "Brauhaus"
    },
    {
      "name": "Netto",
      "address":  "Im Nirwana 777",
      "category": "Scheißladen"
    },
    {
      "name": "McDonald's",
      "address":  "Königsstraße 7",
      "category": "Burger"
    },
    {
      "name": "Hans im Glück",
      "address":  "Königsstraße 20",
      "category": "Burger"
    },
    {
      "name": "Kübler",
      "address":  "Königsstraße 37",
      "category": "Bäcker"
    },
    {
      "name": "Fritty Bar",
      "address":  "Rotebühlplatz 8",
      "category": "Imbiss"
    },
    {
      "name": "LIDL",
      "address":  "Im Himmel 11",
      "category": "Bester Laden"
    },
    {
      "name": "ALDI",
      "address":  "Zur Hölle 999",
      "category": "Scheißladen"
    }
  ]
  constructor() {}

}
