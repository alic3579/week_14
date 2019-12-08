var light = document.getElementById("light");
var counter = 0;
// console.log(counter)
var l1 = document.querySelector(".header");
var l2 = document.querySelector(".sidebar");
var l3 = document.querySelector(".content");
var l4 = document.querySelector(".footer");

var checkIf = function(){
  if (light.style.backgroundColor == "" && body.style.backgroundColor == "black") {
      console.log("nothin")
      l1.style.visibility = "hidden";
      l2.style.visibility = "hidden";
      l3.style.visibility = "hidden";
      l4.style.visibility = "hidden";
    } else {
      l1.style.visibility = "visible";
      l2.style.visibility = "visible";
      l3.style.visibility = "visible";
      l4.style.visibility = "visible";
    }
}

var saveUserInfo = function(){
  if (!storageAvailable('localStorage')){ return; } // if we can use localStorage, don't return

  
  // localStorage.removeItem('color');
  // localStorage.removeItem('counter');


  // on first site load
  if(localStorage.getItem('color')){ // using a string
    // if color has been saved: 
    var color = localStorage.getItem('color');

    // apply color to element: 
    light.style.backgroundColor = color;
    checkIf()


  }


  if(localStorage.getItem('counter')){ 
    // console.log(localStorage.getItem('counter'))
    if (localStorage.getItem('counter') === "NaN") {
      counter = 0;
    } else {
      counter = parseInt(localStorage.getItem('counter'));
    }
    console.log(counter)
  }





  document.getElementById("button").addEventListener('click', function(){
    // when a user clicks on myDiv, produce a random color to save:

    console.log("clicked!")

    
    counter++;
    console.log(counter);


    var newColor = `#ebcb96`;
    var newColor2 = `#f6cd8b`;
    var newColor3 = `#ffd07e`;
    var newColor0 = ``;


    if (counter == 1) {
    localStorage.setItem('color', newColor); // save new color
     // set new color to item:
     light.style.backgroundColor = newColor;
    } 
    if (counter == 2) {
    localStorage.setItem('color', newColor2); // save new color
     // set new color to item:
     light.style.backgroundColor = newColor2;
    } 
    if (counter == 3) {
    localStorage.setItem('color', newColor3); // save new color
     // set new color to item:
     light.style.backgroundColor = newColor3;
    } 
    if (counter == 4) {
      console.log("reset")
      counter = 0;
      localStorage.setItem('color', newColor0);
       // set new color to item:
     light.style.backgroundColor = "";
    }


    var n = counter.toString();
    localStorage.setItem('counter', n);

   
    checkIf()

  

  })



///////////////
}

saveUserInfo(); // run saving user info

////////////

checkIf()