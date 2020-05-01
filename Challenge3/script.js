function rpsGame(yourChoice){
  console.log(yourChoice);
  var humanChoice,botChoice;
  humanChoice=yourChoice.id;

  botChoice=numberToChoice(randToRpsInt());
  console.log('Computer choose',botChoice);

  results=decideWinner(humanChoice,botChoice); // [0.5,0.5] tie ,[1,0] human won, bot lost
  console.log(results);

  message=finalMessage(results); //'{message':You won!', 'color':'green'}
  console.log(message);

  rpsFrontEnd(yourChoice.id,botChoice,message);

}

function randToRpsInt(){
  return Math.floor(Math.random()*3);
}

function numberToChoice(number){
  return ['rock','paper','scissor'][number];
}

function decideWinner(yourChoice,computerChoice){
  var rpsDatabase={
    'rock':{'scissor':1,'rock':0.5,'paper':0},
    'paper':{'rock':1,'paper':0.5,'scissor':0},
    'scissor':{'paper':1,'scissor':0.5,'rock':0},
  }
  var yourScore=rpsDatabase[yourChoice][computerChoice];
  var computerScore=rpsDatabase[computerChoice][yourChoice];
  return [yourScore,computerScore];
}
function finalMessage([yourScore,computerScore]){
  if(yourScore===0){
    return{'message':'You Lost!','color':'red'}
  }
  else if (yourScore===0.5) {
    return{'message':'You Tied!','color':'yellow'}
  }
  else{
    return{'message':'You Won!','color':'green'}
  }
}

function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
  var imageDatabase={
    'rock':document.getElementById('rock').src,
    'paper':document.getElementById('paper').src,
    'scissor':document.getElementById('scissor').src
  }
  //let's remove all the images
  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissor').remove();

  var humanDiv=document.createElement('div');
  var botDiv=document.createElement('div');
  var messageDiv= document.createElement('div');

  humanDiv.innerHTML="<img src='"+ imageDatabase[humanImageChoice] +"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
  document.getElementById('flex-box-rps-div').appendChild(humanDiv);

  messageDiv.innerHTML="<h1 style='color: " + finalMessage['color']+ "; font-size:60px; padding:30px; '>"+ finalMessage['message']+"</h1>"
  document.getElementById('flex-box-rps-div').appendChild(messageDiv);
  botDiv.innerHTML="<img src='"+ imageDatabase[botImageChoice] +"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>"
  document.getElementById('flex-box-rps-div').appendChild(botDiv);



}
