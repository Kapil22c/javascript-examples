function ageIndays(){
    var birthYear= prompt("Which year you were born...dear friend?");
    var yourDays= (2020-birthYear)*365;
    var h1= document.createElement('h1');
    var textAnswer= document.createTextNode('You are '+yourDays+' days old..');
    h1.setAttribute('id', 'ageIndays'); //impoertant
    h1.appendChild(textAnswer); //important
    document.getElementById('flex-box-result').appendChild(h1); //important

}

function reset(){
    document.getElementById('ageIndays').remove();

}

// Challenge 4: Change the color of all buttons
var all_buttons=document.getElementsByTagName('button');


var copyAllButtons  = [];

for (let i=0;i<all_buttons.length;i++) {
  copyAllButtons.push(all_buttons[i]);
}

function buttonColorChange(buttonThingy){
  console.log(buttonThingy.value);
}
