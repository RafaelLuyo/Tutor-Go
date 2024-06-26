import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-information-window',
  templateUrl: './information-window.component.html',
  styleUrls: ['./information-window.component.css']
})
export class InformationWindowComponent {
  @Input() message: string | undefined;
  @Output() close = new EventEmitter<void>();
  closeWindow() {
    this.message = undefined;
    this.close.emit();
  }
}
