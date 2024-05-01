import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css'],
})
export class ViewQuizQuestionsComponent implements OnInit {
  qId: any;
  qTitle: any;
  questions: any[] = []; 

  constructor(
    private _route: ActivatedRoute,
    private _question: QuestionService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid'];
    this.qTitle = this._route.snapshot.params['title'];
    this._question.getQuestionsOfQuiz(this.qId).subscribe(
      (data: Object) => {
        console.log(data);
        this.questions = data as any[]; 
      },
      (error) => {
        console.log(error);
        this._snackBar.open('Failed to load questions', 'Close', {
          duration: 3000,
        });
      }
    );
  }

  deleteQuestion(qid: any) {
    Swal.fire({
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      title: 'Are you sure you want to delete this question?',
    }).then((result) => {
      if (result.isConfirmed) {
        this._question.deleteQuestion(qid).subscribe(
          (data) => {
            this.questions = this.questions.filter((q) => q.quesId != qid);
            Swal.fire('Success','Questions Deleted','success');
          },
          (error) => {
            Swal.fire('Error',' Error in Deleting Questions ','error');
          }
        );
      }
    });
  }
  
  
}
