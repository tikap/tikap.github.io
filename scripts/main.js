//Image change
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Gladiator_Helm_Circuit.webp') {
      myImage.setAttribute('src','images/Brain_Circuit.png');
    } else {
      myImage.setAttribute('src','images/Gladiator_Helm_Circuit.webp');
    }
}

//Change user button
let myButton = document.querySelector('.change-user-button');
let myHeading = document.querySelector('h1');
let homeGreeting = "Welcome to Tikasity, "

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = homeGreeting + myName + "!";
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = homeGreeting + storedName + "!";
  }

  myButton.onclick = function() {
    setUserName();
  }