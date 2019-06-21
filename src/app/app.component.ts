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
  videoUrl:"",
  rtmpUrl:"",
  time: new Date(),
  activityList:[],
  eventType: "live"
  };
  activityTypes=["TEXT","IMAGE"];
  questionCount=1;
  rewards=[{name:"20000 cash"},{name:"50000 cash"}];
  
 

  addQuestion()
  {
   let activityTemplate={
     activityType: "QUIZ",
    subType:"",
   metadata:{ question:"",
   length:0,
   url:"",
   answer:0,
    options:[{value:""},{value:""}]},
    timeToAnswer:0,
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
    this.uploadedQuiz.activityList[index].metadata.options=this.uploadedQuiz.activityList[index].metadata.options.concat({value:''});
    console.log(this.uploadedQuiz.activityList[index].metadata.options)
  }

  removeOption(questionIndex, optionIndex)
  {
    console.log("question index",questionIndex);
      if(optionIndex-1 < this.uploadedQuiz.activityList[questionIndex].metadata.answer)
 this.uploadedQuiz.activityList[questionIndex].metadata.answer =  this.uploadedQuiz.activityList[questionIndex].metadata.answer -1;

    this.uploadedQuiz.activityList[questionIndex].metadata.options.splice(optionIndex,1);
    console.log(this.uploadedQuiz.activityList[questionIndex].metadata.options);

  }

  displayAll()
  {
    console.log(this.uploadedQuiz);
  }
}
