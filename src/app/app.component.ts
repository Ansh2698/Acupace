import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  deviceDetails: any;
  constructor(private router: Router ,private device: DeviceDetectorService) { }

  ngOnInit() {
    this.Initialize();
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
  Initialize(){
    this.deviceDetails =  this.device.getDeviceInfo();
    localStorage.setItem("devicedetails", this.deviceDetails);
  }
}
