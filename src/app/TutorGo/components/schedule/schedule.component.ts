import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent implements OnInit{
  schedules: any[] = [];
  idTutor: number = 1;

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.scheduleService.getAll().subscribe((response: any) => {
      this.schedules = response.filter((schedule: any) => schedule.idTutor === this.idTutor);
    });
  }
}
