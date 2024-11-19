// script.js
const body = document.getElementById("body");
const container = document.querySelector(".container");
const button = document.querySelector("button")


function changeText() {
    const welcomeText = document.getElementById("welcome-text");
    const button = document.getElementById("change-text-btn");
    body.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
    body.style.textAlign ="Center";
    
    container.style.backgroundColor = "#FAF3DD";

    container.style.width= "1000px";

    container.style.color = "grey"
    container.style.borderRadius = "200px";
    container.style.height = "100vh";
    container.style.textAlign = "center";
    button.style.backgroundColor = "#000000";
    button.style.color = "white";

    button.style.borderRadius = "100px";
   

    
    


    
    // Change text content
    welcomeText.innerText = "JavaScript is Dynamic and Fun!";
    
    // Add a pulsating animation
    welcomeText.classList.add("pulse-animation");
    
    // Change button color randomly
    body.style.backgroundColor = "#BCB88A";
  

    // script.js
   

}



function myMove() {
  let mySound = new Audio('audio.mp3')
  mySound.play()
  let id = null;
  const elem = document.getElementById("animate");
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 12);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.left = pos + 'px';

    }
  }
}

function myMoveDown() {
  let id = null;
  const elem = document.getElementById("animateTwo");
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 12);

  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      
      pos++;
      elem.style.top = pos + 'px';
    }
  }
}

function myMoveTop() {
  let id = null;
  const elem = document.getElementById("animateThree");
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 12);

  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      
      pos++;
      elem.style.right = pos + 'px';
    }
  }
}





  


