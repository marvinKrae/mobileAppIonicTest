import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '../interfaces/store';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  public location: Store;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.initializeLocation();
  }

  initializeLocation(){
    this.location = history.state.location;
    if (!this.location || !(this.location.name)) {
      this.router.navigate(['/home']);
    }
  }

}
