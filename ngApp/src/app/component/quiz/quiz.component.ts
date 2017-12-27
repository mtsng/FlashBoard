import { Component, OnInit } from "@angular/core";
import { Quiz } from "../../model/quiz";
import { QuizService } from "../../services/quiz/quiz.service";
import { of } from 'rxjs/observable/of';
import { Location } from '@angular/common';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-quiz',
    templateUrl: 'quiz.component.html',
    styleUrls: [
        'quiz.component.css'
    ]
})
export class QuizComponent implements OnInit {

    quiz: Quiz;
    public userAnswers: string[];
    selectedEntries: { [key: string]: any };

    constructor(
        private route: ActivatedRoute,
        private quizService: QuizService,
        private location: Location
    ) { }

    //On init get Quizes from database
    ngOnInit() {
        this.getQuiz();
    }

    // Retrieve Quiz from database
    getQuiz(): void {
        let id = +this.route.snapshot.paramMap.get('id');
        console.log(id);
        this.quizService.getQuiz(id)
            .subscribe(quiz => this.quiz = quiz);
    }

    // User must be signed in to add comment
    submitComment(): void {
        if (!localStorage.getItem("currentUser")) {
            console.log("sign in yo")
        } else {

        }
    }

    // Check quiz answers
    submitQuiz(): void {

        // TODO: add ! in from of localStorage when userSession is stored
        // if User is not signed in, tell them to sign in
        if (localStorage.getItem("currentUser")) {
            alert("Sign in if you want to check your answer.")
        }
        // check answer 
        else {
            let count = 0;
            for (let question of this.quiz.questions) {
                if(this.selectedEntries[count] == undefined){
                    alert("Not all answers are answered")
                    break;
                }


                if (question.answer == this.selectedEntries[count]){
                    console.log("Question " + (count +1) + " Correct")
                }
                else{
                    console.log("Question " + (count +1) + " Incorrect")
                }
                count++;
            }
        }

    }
    // Goes back a page
    goBack(): void {
        this.location.back();
    }

    onSelection(entry, questionNum) {
        let obj = {};
        obj[questionNum] = entry;
        this.selectedEntries = Object.assign({}, this.selectedEntries, obj);
        console.log(this.selectedEntries)
    }
}