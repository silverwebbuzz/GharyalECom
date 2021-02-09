import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import { MagentoServiceService } from '../api/magento-service.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notificationArray = new BehaviorSubject(null);
  notification = new BehaviorSubject(null);
  IsRead = false;
  unReadCount = new BehaviorSubject(0);
  constructor(private services: MagentoServiceService, private localnotification: LocalNotifications) {
    this.getNotification();
    Observable.interval(500000)
      .subscribe(val =>{
        this.getNotification();
      })
    this.notificationArray.subscribe(val =>{
      if(val){
        let countUnread = val.filter((x) =>{ return !x.IsRead}).length;
        this.unReadCount.next(countUnread);
        this.notification.next(val);
      } 
    })

    
   }
   async getNotification(){
    await this.services.getAllNotification().subscribe(val=>{
      let localStorage = JSON.parse(window.localStorage.getItem('readNotification'));
      let localStorageNotification = JSON.parse(window.localStorage.getItem('Notification'));
      console.log('localStorage:',localStorageNotification);
      let notificationArray = []; 
      if(localStorageNotification){
        const lstData = val.filter(function (x) {
          return this.indexOf(x.notification_id) < 0;
        }, localStorageNotification.map(y =>{ return y.notification_id;}));
        lstData.forEach(element => {
          const ele = {
            id: element.notification_id,
            title: element.title,
            text: element.content,
            icon: 'http://gharyal.com/n_icon.png',
            smallIcon: 'n_icon',
            color: '#fff'
          }
          notificationArray.push(ele);
        });
      }else{
        val.forEach(element => {
          const ele = {
            id: element.notification_id,
            title: element.title,
            text: element.content,
            icon: 'http://gharyal.com/n_icon.png',
            smallIcon: 'n_icon',
            color: '#fff'
          }
          notificationArray.push(ele);
        });
        
      }
      console.log('notificationArray:',notificationArray);
      if(notificationArray){
        this.localnotification.schedule(notificationArray);
      }
      window.localStorage.setItem('Notification', JSON.stringify(val));
      
      let valArray = val.map(x => {  
        
      if(localStorage){
        if(localStorage.includes(x.notification_id)){
          x.IsRead = true;
        }
      }else{
        x.IsRead = false;
      }
      return x;})
      this.notificationArray.next(valArray);
    });
   }
}
