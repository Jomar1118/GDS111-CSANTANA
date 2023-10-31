console.log('1-Load');
console.log('2-Save');
console.log('3-Play');
console.log('4-Help');
console.log('5-Quit');
console.log('Make Selection');


let p=(prompt('Enter Number'));

if ( p >= 1 && p < 2){
    console.log('Loading Game...');
}
else if (p >= 2 && p < 3){
    console.log('Saving Status..');
}
else if (p >= 3 && p < 4 ){
    console.log('Lets Play!!!');
}
else if (p >= 4 && p < 5){
    console.log("Here's your help");
}
else if (p >= 5 && p <6){
    console.log('Game Over!!!');
}

else 
console.log('Invalid entry');

