import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScoreService} from "../../../shared/services/score/score.service";

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
})
export class ScoreComponent {
  scores: any[] = [];
  studentId: number | null = null;

  tabs = [
    { title: 'All' },
    { title: 'Graded' },
    { title: 'Submitted' }
  ];

  constructor(private route: ActivatedRoute, private scoreService: ScoreService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.studentId = +params['id'];
      this.fetchScoresAndStudent();
    });
  }

  fetchScoresAndStudent() {
    this.scoreService.getAll().subscribe(scores => {
      this.scores = scores;
    });
  }

  getScores(tabTitle: string) {
    if (tabTitle === 'Graded') {
      return this.scores.filter(score => score.status === 'GRADED');
    } else if (tabTitle === 'Submitted') {
      const gradedScores = this.scores.filter(score => score.status === 'GRADED');
      const submittedScores = this.scores.filter(score => score.status === 'SUBMITTED');
      return submittedScores.concat(gradedScores);
    } else {
      return this.scores;
    }
  }

  calculateUserTotal(tabTitle: string) {
    const userScores = this.getScores(tabTitle);
    const userTotal = userScores.reduce((total, score) => {
      if (score.scoreValue) {
        const scoreParts = score.scoreValue.split('/');
        if (scoreParts.length === 2) {
          return total + Number(scoreParts[0]);
        }
      }
      return total;
    }, 0);
    return userTotal + '/' + this.calculateAvailableTotal(tabTitle);
  }

  calculateAvailableTotal(tabTitle: string) {
    const availableScores = this.getScores(tabTitle);
    const totalAvailable = availableScores.reduce((total, score) => {
      if (score.scoreValue) {
        const scoreParts = score.scoreValue.split('/');
        if (scoreParts.length === 2) {
          return total + Number(scoreParts[1]);
        }
      }
      return total;
    }, 0);
    return totalAvailable;
  }

  formatDate(date: string) {
    // Implementa la lógica de formateo de fecha aquí
    return date; // Por ahora, devuelve la fecha sin formato
  }
}
