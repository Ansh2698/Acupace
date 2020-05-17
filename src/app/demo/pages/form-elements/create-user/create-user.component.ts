import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../../../../providers/users/users.service';



@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  issueForm: FormGroup;
  IssueArr: any = [];

  ngOnInit() {
  this.addUser()
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public usersService: UsersService
  ) { }


  addUser() {
    this.issueForm = this.fb.group({
      u_id: [''],
      u_name: [''],
      u_avatar: [''],
      u_link: [''],
      u_role: [''],
      u_mdata: [''],

    })
  }

  submitForm() {
    this.usersService.CreateUser(this.issueForm.value).subscribe(res => {
      console.log('User added!')
      this.ngZone.run(() => this.router.navigateByUrl('/admin/forms/basic'))
    });
  }




  
}
