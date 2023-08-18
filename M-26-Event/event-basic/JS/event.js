// basics

// console.log("this is a seperate event file")

// option 1  directly write on the tag
// option 2
function makeRed(){
    document.body.style.backgroundColor = "red";
}

// option 3  function on different place
function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

// option 4  direct fucntion on the button 
const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function(){
    document.body.style.backgroundColor = 'purple';
}

// option 5 and final (addEventListener)
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})