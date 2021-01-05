import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Store } from '../interfaces/store';
import { BackendCommunicatorService } from '../services/backend-communicator.service';
import { AddLocationComponent } from './add-location/add-location.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  foodLocations: Store[] = [];
  constructor(private backend: BackendCommunicatorService, private modalController: ModalController) {}

  ngOnInit(){
    this.loadLocations();
  }
  
  private loadLocations() {
    this.backend.getLocations().subscribe(
      data => {this.foodLocations = data},
      error => {console.log(error)}
    )
  }

  async openNewLocationModal(){
    
    const modal = await this.modalController.create({
      component: AddLocationComponent,
      cssClass: 'my-custom-class'
    });
    modal.onWillDismiss().then(res => {
      console.log("NOT DISMISSED???");
      if (!res.data.dismissed) {
        console.log("NOT DISMISSED!!!")
        this.loadLocations();
      }
    })
    await modal.present();
  }

}
