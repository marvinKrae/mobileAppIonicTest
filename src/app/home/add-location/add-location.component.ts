import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Store } from 'src/app/interfaces/store';
import { BackendCommunicatorService } from 'src/app/services/backend-communicator.service';

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
  constructor(private modalCrtl: ModalController, private backend: BackendCommunicatorService, private toastController: ToastController) { }

  ngOnInit() {}

  public dismissModal() {
    this.modalCrtl.dismiss({
      'dismissed': true
    });
  }

  public saveLocation() {
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
}
