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
  activityList:[]
  };

  questionCount=1;
  rewards=[{name:"20000 cash"},{name:"50000 cash"}];
  
 

  addQuestion()
  {
   let activityTemplate={
    subType:"TEXT",
   metadata:{ question:"",
    options:["",""]},
    timeToAnswer:0
  }
    console.log('here');
    // this.uploadedQuiz.activityList=null;
    this.uploadedQuiz.activityList = this.uploadedQuiz.activityList.concat(activityTemplate);
    console.log(this.uploadedQuiz.activityList);
  }

  removeQuestion(index)
  {
    this.uploadedQuiz.activityList.splice(index,1);
    console.log(this.uploadedQuiz.activityList);
  }

  addOption(index)
  {
    console.log("question index",index);
    this.uploadedQuiz.activityList[index].metadata.options=this.uploadedQuiz.activityList[index].metadata.options.concat('');
    console.log(this.uploadedQuiz.activityList[index].metadata.options)
  }

  displayAll()
  {
    console.log(this.uploadedQuiz.activityList);
  }
}
