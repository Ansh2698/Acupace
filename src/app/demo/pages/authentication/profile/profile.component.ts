import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  editField: string;
    personList: Array<any> = [
      { id: 1, name: 'sumitsaraff', ID: 123456, companyMail: 'Acupace@gmail.com', Type: 'Basic', Language: 'English' }
    ];

    updateList(id: number, property: string, event: any) {
      const editField = event.target.textContent;
      this.personList[id][property] = editField;
    }

    changeValue(id: number, property: string, event: any) {
      this.editField = event.target.textContent;
    }

  constructor() { }

  ngOnInit() {
  }

}





/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

*/
