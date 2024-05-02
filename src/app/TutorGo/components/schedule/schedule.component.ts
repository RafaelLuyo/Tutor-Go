import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScheduleService } from '../../../shared/services/schedule/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  schedules: any[] = [];
  idTutor!: number;

  constructor(
    private route: ActivatedRoute,
    private scheduleService: ScheduleService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.idTutor = +params['idTutor'];

      this.scheduleService.getAll().subscribe((response: any) => {
        this.schedules = response.filter((schedule: any) => schedule.idTutor === this.idTutor);
      });
    });
  }
}
