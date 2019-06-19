import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  selectedReward;
  uploadedQuiz={eventName:"Sample Event",
  time: new Date(),
  activityList:[{
    subType:"",
   metadata:{ question:"Sample question",
    options:["A","B","C","D"]},
    timeToAnswer:10
  }]
  };

  questionCount=1;
  rewards=[{name:"20000 cash"},{name:"50000 cash"}];
  
  activityTemplate={
    subType:"",
   metadata:{ question:"",
    options:["","","",""]},
    timeToAnswer:0
  }

  addQuestion()
  {
    console.log('here');
    // this.uploadedQuiz.activityList=null;
    this.uploadedQuiz.activityList = this.uploadedQuiz.activityList.concat(this.activityTemplate);
  }

  removeQuestion(index)
  {
    this.uploadedQuiz.activityList.splice(index,1);
  }
}
