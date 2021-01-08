import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Store } from 'src/app/interfaces/store';
import { BackendCommunicatorService } from 'src/app/services/backend-communicator.service';
import { MapboxService } from 'src/app/services/mapbox.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss'],
})
export class AddLocationComponent implements OnInit {
  public tempStoreInput: Store = {
    name: "",
    address: "",
    category: ""
  }
  public locationCategories: string[] = ["Metzger", "Supermarkt", "do not go here!", "Brauhaus", "Italian", "Burger"]

  constructor(private modalCrtl: ModalController, private backend: BackendCommunicatorService, private toastController: ToastController, private mapbox: MapboxService) { }

  ngOnInit() {}

  public dismissModal() {
    this.modalCrtl.dismiss({
      'dismissed': true
    });
  }



  public saveinDB() {
    this.backend.saveStore(this.tempStoreInput).subscribe(
      async data => {
        console.log(data)
        const toast = await this.toastController.create({
          message: 'Location added',
          duration: 2000
        });
        toast.present();
        this.modalCrtl.dismiss({
          'dismissed': false
        })
      },
      async err => {
        console.log(err);
        const toast = await this.toastController.create({
          message: 'Please check your input',
          duration: 2000
        });
        toast.present();
      }
    )
  }

  public saveLocation(){
    this.mapbox.getLocations(this.tempStoreInput).subscribe(
      data => {
        this.saveinDB();
      },
      async error => {
        const toast = await this.toastController.create({
          message: 'Please check your Address',
          duration: 2000
        });
        toast.present();
      }
    )
  }
}
