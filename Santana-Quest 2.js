console.log ('is this working?')
var canvas =document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 

var c = canvas.getContext('2d');
c.fillRect(345, 50, 50, 50); 
c.fillRect(320, 100, 100, 70);
c.fillRect(300, 170, 140, 80);
c.fillRect(350, 300, 50, 100);
c.fillRect(260, 230, 220, 100);