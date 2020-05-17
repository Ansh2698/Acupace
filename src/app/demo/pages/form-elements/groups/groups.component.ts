import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../../../../providers/groups/groups.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  GroupList: any = [];


  ngOnInit() {
    this.loadGroups();
  }

  constructor(
    public groupsService: GroupsService
  ){ }

   // Issues list
   loadGroups() {
    return this.groupsService.GetGroup().subscribe((data: {}) => {
      this.GroupList = data;
    })
  }

    // Delete issue
    deleteGroup(data){
      var index = index = this.GroupList.map(x => {return x.g_name}).indexOf(data.g_name);
       return this.groupsService.DeleteGroup(data.id).subscribe(res => {
        this.GroupList.splice(index, 1)
         console.log('Group deleted!')
       })
    }

}
