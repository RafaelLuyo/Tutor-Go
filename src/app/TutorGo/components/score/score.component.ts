import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScoreService } from "../../../shared/services/score/score.service";

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
})
export class ScoreComponent {
  scores: any[] = [];
  studentId: number | null = null;

  constructor(private route: ActivatedRoute, private scoreService: ScoreService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.studentId = +params['id'];
      this.fetchScoresAndStudent();
    });
  }

  fetchScoresAndStudent() {
    if (this.studentId) {
      this.scoreService.getScoresByStudentId(this.studentId).subscribe(scores => {
        this.scores = scores;
      });
    }
  }

  fetchScoresByFilter(filter: string) {
    if (this.studentId) {
      this.scoreService.getScoresByStudentId(this.studentId, filter).subscribe(scores => {
        this.scores = scores;
      });
    }
  }

  formatDate(date: string) {

    return date;
  }
}
