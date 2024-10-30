// onclick property just execute one function at a time
// where as event listener can execute multiple functions

// let btns = document.querySelectorAll("button");
// console.dir(btn);

// btn.onclick = function() {
//     alert("button was clicked")
// }

// for(btn of btns){
//     btn.onclick = SayHello;
//     btn.onmouseenter = function(){
//         console.log("You entered a button")
//         // how many times we hovered a button
//     }
//     console.dir(btn);
// }

// function SayHello(){
//     alert("Hello!");
// }


let btns = document.querySelectorAll("button");
for (let btn of btns) {
    // Event listeners for 'click' event
    // btn.addEventListener("click", SayHello);
    // btn.addEventListener("click", SayName);
    btn.addEventListener("dblclick",function (){
        console.log("you double clicked me");
    })
}

function SayHello() {
    alert("Hello!");
}

function SayName() {
    alert("Aman");
}











