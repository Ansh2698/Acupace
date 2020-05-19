import { Component, OnInit } from '@angular/core';
import {UserList} from './basic-elements'
@Component({
  selector: 'app-basic-elements',
  templateUrl: './basic-elements.component.html',
  styleUrls: ['./basic-elements.component.css']
})
export class BasicElementsComponent implements OnInit {
  public usersList:any;
  constructor(public users:UserList) {
    this.usersList=this.users.fetch();
  }
  ngOnInit() {
  }

}