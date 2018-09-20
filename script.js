

//-----+++++ EXAMPLES FROM AKIRA +++++--------




// -----+++++ Function to reveal images +++++--------


var image_tracker = 'track';

 function change01(){
    var image = document.getElementById('backside01');
     if(image_tracker=='cover'){
         image.src="https://i.imgur.com/jazbpPp.png";
         image_tracker='scene1';
      }
     else{
         image.src="https://i.imgur.com/RAn2Lx4.png";
         image_tracker='cover';
      }
    }

  function change02(){
     var image = document.getElementById('backside02');
         if(image_tracker=='cover'){
             image.src="https://i.imgur.com/mkyeajF.png";
             image_tracker='scene2';
          }
         else{
             image.src="https://i.imgur.com/RAn2Lx4.png";
             image_tracker='cover';
          }
      }


  function change03(){
     var image = document.getElementById('backside03');
         if(image_tracker=='cover'){
             image.src="https://i.imgur.com/MNSHqyZ.png";
             image_tracker='scene3';
          }
         else{
             image.src="https://i.imgur.com/RAn2Lx4.png";
             image_tracker='cover';
          }
      }

//NEXT MOVIE

  function change05(){
     var image = document.getElementById('backside05');
         if(image_tracker=='cover5'){
             image.src="https://i.imgur.com/joSnsl6.png";
             image_tracker='scene5';
          }
         else{
             image.src="https://i.imgur.com/RAn2Lx4.png";
             image_tracker='cover5';
          }
      }


   function change06(){
     var image = document.getElementById('backside06');
         if(image_tracker=='cover6'){
             image.src="https://i.imgur.com/f4WuQA8.png";
             image_tracker='scene6';
          }
         else{
             image.src="https://i.imgur.com/RAn2Lx4.png";
             image_tracker='cover6';
          }
      }


    function change07(){
     var image = document.getElementById('backside07');
         if(image_tracker=='cover7'){
             image.src="https://i.imgur.com/YTJ5Kyr.png";
             image_tracker='scene7';
          }
         else{
             image.src="https://i.imgur.com/RAn2Lx4.png";
             image_tracker='cover7';
          }
      }


    function change09(){
     var image = document.getElementById('backside09');
         if(image_tracker=='cover9'){
             image.src="https://i.imgur.com/nmCsHVo.png";
             image_tracker='scene9';
          }
         else{
             image.src="https://i.imgur.com/RAn2Lx4.png";
             image_tracker='cover9';
          }
      }


    function change10(){
     var image = document.getElementById('backside10');
         if(image_tracker=='cover10'){
             image.src="https://i.imgur.com/wl9oLyC.png";
             image_tracker='scene10';
          }
         else{
             image.src="https://i.imgur.com/RAn2Lx4.png";
             image_tracker='cover10';
          }
      }


    function change11(){
     var image = document.getElementById('backside11');
         if(image_tracker=='cover11'){
             image.src="https://i.imgur.com/F9sCPeW.png";
             image_tracker='scene11';
          }
         else{
             image.src="https://i.imgur.com/RAn2Lx4.png";
             image_tracker='cover11';
          }
      }




// var image_tracker = 'track';

// function change() {

//     var image = document.getElementById("turnIt");

//     if(image.tracker==="cover"){

//         image.src="https://i.imgur.com/jazbpPp.png";
//         image_tracker="scene";

//     } else {
//         image.src="https://i.imgur.com/RAn2Lx4.png";
//         image_tracker="cover";
//     }


// }



console.log("This works")

var answerOne = "jurassic park"
var answerTwo = "terminator"
var answerThree = "pulp fiction"
var answerFour = "shawshank redemption"
var answerFive = "fight club"
var playerScore = 0;







//
//For 1st Question

var celebration01 = function() {


    var intoDiv = document.getElementById("gif01")
    var addGIF = document.createElement("IMG")
    addGIF.setAttribute("src", "https://i.imgur.com/fC72Ocn.gif")


    intoDiv.appendChild(addGIF)

    var toRemove = document.getElementById("joey");
    toRemove.remove();


}


var shame01 = function() {

    var intoDiv = document.getElementById("gif01")
    var addGIF = document.createElement("IMG")
    addGIF.setAttribute("src", "http://oi67.tinypic.com/n8221.jpg")


    intoDiv.appendChild(addGIF)

    var toRemove = document.getElementById("joey");
    toRemove.remove();

}

var userReply = document.getElementById("userInput1");
var questionOne = function() {

// var userReply = document.getElementById("userInput1");
        // debugger;
        if(userReply.value==answerOne) {

          document.getElementById('clue1').textContent = "woohoo! You got the right answer";

          // alert("Wow, well done!")
          playerScore+=5;
          document.getElementById('scoreNo').textContent = " Your Score = " + playerScore;
          celebration01();



        }

        else if(userReply.value!==""){
          // alert("Alamak! Wrong answer da deh!")
          document.getElementById('clue1').textContent = "Alamak wrong answer da deh!";
          shame01();
        }



    }

var testing = document.getElementById("submitButton");

testing.addEventListener("click",questionOne);

// //
// //
// //For 2nd Question

var celebration02 = function() {


    var intoDiv = document.getElementById("gif02")
    var addGIF = document.createElement("IMG")
    addGIF.setAttribute("src", "https://i.imgur.com/fC72Ocn.gif")


    intoDiv.appendChild(addGIF)

    var toRemove = document.getElementById("joey02");
    toRemove.remove();


}

var shame02 = function() {

    var intoDiv = document.getElementById("gif02")
    var addGIF = document.createElement("IMG")
    addGIF.setAttribute("src", "http://oi67.tinypic.com/n8221.jpg")


    intoDiv.appendChild(addGIF)

    var toRemove = document.getElementById("joey02");
    toRemove.remove();

}

var testingTwo = document.getElementById("userInput2");

var questionTwo = function() {

        // debugger;
        if(this.value==answerTwo) {


        document.getElementById('clue2').textContent = "woohoo! You got the right answer";
          // alert("Wow, well done!")
          playerScore+=5;
          document.getElementById('scoreNo').textContent = " Your Score = " + playerScore;
          celebration02();
        }

        else if(this.value!==""){
          // alert("Alamak! Wrong answer da deh!")
          document.getElementById('clue2').textContent = "Alamak wrong answer da deh!";
          shame02();
        }
    }

testingTwo.addEventListener("click",questionTwo);


//
//For 3rd Question

var celebration03 = function() {


    var intoDiv = document.getElementById("gif03")
    var addGIF = document.createElement("IMG")
    addGIF.setAttribute("src", "https://i.imgur.com/fC72Ocn.gif")


    intoDiv.appendChild(addGIF)

    var toRemove = document.getElementById("joey03");
    toRemove.remove();


}

var shame03 = function() {

    var intoDiv = document.getElementById("gif03")
    var addGIF = document.createElement("IMG")
    addGIF.setAttribute("src", "http://oi67.tinypic.com/n8221.jpg")


    intoDiv.appendChild(addGIF)

    var toRemove = document.getElementById("joey03");
    toRemove.remove();

}

var testingThree = document.getElementById("userInput3");

var questionThree = function() {

        if(this.value==answerThree) {


        document.getElementById('clue3').textContent = "woohoo! You got the right answer";

          // alert("Wow, well done!")
          playerScore+=5;
          document.getElementById('scoreNo').textContent = " Your Score = " + playerScore;
          celebration03();

           alert("Game Over");

        }

        else if(this.value!==""){
          // alert("Alamak! Wrong answer da deh!")
        document.getElementById('clue3').textContent = "Alamak wrong answer da deh!";
        shame03();

        alert("Game Over");

        }


    }


testingThree.addEventListener("click", questionThree);











