import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  notificationArray: any = [];
  constructor(private location: Location,private notify:NotificationService) {
    
    this.notify.notification.subscribe(val =>{
      if(val){
        let reverseArray = val.reverse();
        this.notificationArray = reverseArray;
      }
      
    });
    
   }

  ngOnInit() {

  }

  markAsRead(index){
    this.notificationArray[index].IsRead = true;
    let notificationId = this.notificationArray[index].notification_id;
    let localStorage = JSON.parse(window.localStorage.getItem('readNotification'));
    if(localStorage){
      if(!localStorage.includes(notificationId)){
        localStorage.push(notificationId);
        window.localStorage.setItem('readNotification', JSON.stringify(localStorage));
      }
    }else{
      window.localStorage.setItem('readNotification', JSON.stringify([notificationId]));
    }

    if(this.notificationArray){
      let countUnread = this.notificationArray.filter((x) =>{ return !x.IsRead}).length;
        this.notify.unReadCount.next(countUnread);
    }
  }


  goBack(){
    this.location.back();
  }
}
