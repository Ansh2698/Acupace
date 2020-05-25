import {Injectable} from '@angular/core';
export interface UserList{
    id:Number;
    Name:string;
    task:string;
    date?:string;
    status?:string;
    images?:Array<string>;
}
const UserLists=[
    {
        id: "12",
        task: "Add Proper Cursor In Sortable Page",
        Name:"Arvind",
        date: "2017-08-01",
        status:"opt5",
        images: ["assets/images/user/avatar-1.jpg","assets/images/user/avatar-2.jpg"]
      },
      {
        id: "56",
        task: "Checkbox Design issue",
        Name:"Mayank",
        date: "2017-08-05",
        status:"opt3",
        images: ["assets/images/user/avatar-3.jpg"]
      },
      {
        id: "78",
        task: "Create UI design model",
        Name:"Piyush",
        date: "2017-08-12",
        status:"opt2",
        images: ["assets/images/user/avatar-2.jpg","assets/images/user/avatar-3.jpg"]
      }
];

Injectable()
export class UserList{
    public fetch(){
        return UserLists;
    }
}
