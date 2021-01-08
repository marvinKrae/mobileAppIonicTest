import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { LocationComment } from 'src/app/interfaces/comment';
import { Store } from 'src/app/interfaces/store';
import { BackendCommunicatorService } from 'src/app/services/backend-communicator.service';

@Component({
  selector: 'app-add-comment-modal',
  templateUrl: './add-comment-modal.component.html',
  styleUrls: ['./add-comment-modal.component.scss'],
})
export class AddCommentModalComponent implements OnInit {
  @Input() location: Store;
  public tempComment:LocationComment = {
    name: "",
    text: "",
    time: 0
  } 
  constructor(private modalCrtl: ModalController, private backend: BackendCommunicatorService, private toastController: ToastController) { }

  ngOnInit() {}

  public dismissModal() {
    this.modalCrtl.dismiss({
      'dismissed': true
    });
  }

  public saveComment() {
    this.tempComment.time = +new Date();
    this.backend.addComment(this.tempComment, this.location._id).subscribe(
      data => {
        this.modalCrtl.dismiss({
          'dismissed': false,
          'comment': this.tempComment
        });
      },
      async error => {
        console.log(error)
        const toast = await this.toastController.create({
          message: 'Please check your input',
          duration: 2000
        });
        toast.present();
      }
    )
  }

}
