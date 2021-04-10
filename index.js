
//Detecting button press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {

    buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });

}



//Detecting keyboard press
document.addEventListener("keydown", function(event){

  makeSound(event.key);
  buttonAnimation(event.key);

});


function makeSound(key){

  switch (key) {
    case "w":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "a":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var snare = new Audio("snare.mp3");
      snare.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:

  }
}

function buttonAnimation(currentButton){

  var activeButton = document.querySelector("." + currentButton );

  activeButton.classList.add("pressed")

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
