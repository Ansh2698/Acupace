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
Injectable()
export class MeetingLists{
    public UserLists=[];
    constructor() { }
    public Add(Notifications:any){
        this.UserLists.push(Notifications);
    }
    public fetch(){
        return this.UserLists[0];
    }
}
