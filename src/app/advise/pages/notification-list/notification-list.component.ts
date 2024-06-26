import {Component, OnInit} from '@angular/core';
import {Notification} from "../../model/notification";
import {NotificationService} from "../../services/notification.service";

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit{
  notifications: Notification[]=[];
  constructor(private notificationService: NotificationService) { }

  ngOnInit() {this.loadNotifications();
  }
  showNotifications() {
    this.loadNotifications();
  }
  loadNotifications(){
    this.notifications = this.notificationService.getNotifications();
  }
}
