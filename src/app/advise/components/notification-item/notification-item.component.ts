import {Component, Input} from '@angular/core';
import {Notification} from "../../model/notification";


@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.css']
})
export class NotificationItemComponent {
    @Input() notification: Notification | undefined;
}
