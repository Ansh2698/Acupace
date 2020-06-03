import {Injectable} from '@angular/core';
export interface MeetingList{
    id:Number,
    host_id:Number,
    host_name?:string
    host_email?:string,
    role:string,
    room_id:Number,
    host_device_details:any,
    host_meeting_start_time:any,
    host_meeting_end_time:any ,
    attendee_email:any,
    meeting_status:Number,
    meeting_date:any
}
const UserLists=[];
const HostLists=[];
Injectable({
    providedIn: 'root'
})
export class MeetingLists{
    constructor() { }
    public Add(Notifications:any){
        UserLists.push(Notifications);
    }
    public Add_host(Notifications:any){
        HostLists.push(Notifications);
    }
    public fetch(){
        if(UserLists.length!=0){
            console.log(UserLists[0]);
            return UserLists[0];
        }
        console.log("userlist is empty")
    }
    public fetch_host(){
        if(HostLists.length!=0){
            console.log(HostLists[0]);
            return HostLists[0];
        }
        console.log("Hostlist is empty")
    }
}
