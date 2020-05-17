import { Component, OnInit, NgZone } from '@angular/core';
import { GroupsService } from '../../../../providers/groups/groups.service';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent {
    
  issueForm: FormGroup;
  IssueArr: any = [];

  ngOnInit() {
  this.addGroup()
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public groupsService: GroupsService
  ) { }


  addGroup() {
    this.issueForm = this.fb.group({
      g_id: [''],
      g_name: [''],
      g_type: [''],
      g_icon: [''],
      g_description: [''],
      g_mdata: [''],

    })
  }

  submitForm() {
    this.groupsService.CreateGroup(this.issueForm.value).subscribe(res => {
      console.log('Group added!')
      this.ngZone.run(() => this.router.navigateByUrl('/admin/forms/groups'))
    });
  }




  
}


/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/