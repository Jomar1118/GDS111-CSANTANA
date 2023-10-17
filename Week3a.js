console.log("Im inside Week 3 JavaScript");

/* Comments are not executed by the program.
    They are there to help explain the code for maintenace 
    programmers.Use slash-asterik and asterik-slash to create multiline
    text description of code. */

 // Use slash-slash for one-line comment.
 
//Use console.log() function to display text 
// in the console.


//Use fillText() function to display text
// in canvas.
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
c.font = "30px Arial";
c.fillText("Welcome To My Game!!", 10, 50)