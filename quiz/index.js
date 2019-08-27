function check() {
    var q1=document.quiz.q1.value;
    var q2=document.quiz.q2.value;
    var q3=document.quiz.q3.value;
    var q4=document.quiz.q4.value;
    var q5=document.quiz.q5.value;
    var q6=document.quiz.q6.value;
    var q7=document.quiz.q7.value;
    
    var questions=[q1,q2,q3,q4,q5,q6,q7];
    var answers=["d","a","b","c","a","d","b"];
    
    var point=0;
    
    var total=7;
    
    for(var i=0;i<=total;i++){
                          if(questions[i]===answers[i]){
                              point++;
                          }
                          alert("you got "+point+" correct out of" +total);
    
                      }
                      }