import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { error } from 'protractor';
import { Store } from '../interfaces/store';
import { MapboxService } from '../services/mapbox.service';
import { AddCommentModalComponent } from './add-comment-modal/add-comment-modal.component';

declare let mapboxgl: any;
@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  public location: Store;
  private accessToken: string = "pk.eyJ1IjoiYXBnMTc3IiwiYSI6ImNraWlrOGN5dTA2eGUyeHF1enJ3dGhocDAifQ.us00PS-Gl522-LTz_RNJQQ";
  constructor(private router: Router, private mapbox: MapboxService, private modalController: ModalController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.initializeLocation();
  }

  clickAddComment(){
    this.openNewLocationModal();
  }

  async openNewLocationModal(){
    
    const modal = await this.modalController.create({
      component: AddCommentModalComponent,
      cssClass: 'my-custom-class',
      componentProps: {location: this.location}
    });
    modal.onWillDismiss().then(res => {
      console.log("NOT DISMISSED???");
      if (!res.data.dismissed) {
        console.log("NOT DISMISSED!!!")
        if (!this.location.comments) {
          this.location.comments = [];
        }
        this.location.comments.push(res.data.comment)
      }
    })
    await modal.present();
  }

  loadMap(){
    let zoom = Math.floor(Math.random() * 10) + 10 ;
    console.log(zoom)
    mapboxgl.accessToken = this.accessToken;
    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
      center: this.location.coordinates, // starting position [lng, lat]
      zoom: zoom  // starting zoom
    });
    new mapboxgl.Marker().setLngLat(this.location.coordinates).addTo(map);
  }

  initializeLocation() {
    this.location = history.state.location;
    if (!this.location || !(this.location.name)) {
      this.router.navigate(['/home']);
    }
    if (!this.location.coordinates) {
      this.loadCoordinates();
    }else {
      this.loadMap();
    }
  }

  loadCoordinates() {
    this.mapbox.getLocations(this.location).subscribe(
      data => {
        this.loadMap();
      },
      error => {
        console.log(error);
      }
    )
  }

}
