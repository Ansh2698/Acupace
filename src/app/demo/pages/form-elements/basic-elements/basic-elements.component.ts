import { Component, OnInit } from '@angular/core';
//import {UserList} from './basic-elements';
import { UsersService } from '../../../../providers/users/users.service';


@Component({
  selector: 'app-basic-elements',
  templateUrl: './basic-elements.component.html',
  styleUrls: ['./basic-elements.component.css']
})
export class BasicElementsComponent implements OnInit {
  UserList: any = [];


  ngOnInit() {
    this.loadUsers();
  }

  constructor(
    public usersService: UsersService
  ){ }

   // Issues list
   loadUsers() {
    return this.usersService.GetUser().subscribe((data: {}) => {
      this.UserList = data;
    })
  }

    // Delete issue
    deleteUser(data){
      var index = index = this.UserList.map(x => {return x.g_name}).indexOf(data.u_name);
       return this.usersService.DeleteUser(data.id).subscribe(res => {
        this.UserList.splice(index, 1)
         console.log('User deleted!')
       })
    }

}

