console.log("Main Menu Bar");


console.log("1.Change Actions");
console.log("2.Button Layout");
console.log("3.Keybindings");
console.log("4.OnEvent Scripts");
console.log("5.Main Menu Bar");
console.log("6.Misc Options");
console.log("7.Unlocking Dragging");
console.log("8.Show Button IDs");
console.log("Show Action IDs");
console.log("10.Copy");
console.log("11.Paste");

function function1(){
  console.log("I'm inside Change Actions function")
}

function function2(){
  console.log("I'm inside Button Layout Function")
}

function function3(){
  console.log("I'm inside Key Bindings function")
}
  function function4(){
    console.log("I'm inside On Event Scripts function")
  }
  function function5(){
    console.log("I'm inside Main Menu Bar function")
  }
  function function6(){
    console.log("I'm inside Misc Options function")
  }
  function function7(){
    console.log("I'm inside Unlock Dragging function")
  }
  function function8(){
    console.log("I'm inside Show Button IDs function")
  }
  function function9(){
    console.log("I'm inside Show Action IDs function")
  }
  function function10(){
    console.log("I'm inside Copy fucntion")
  } 
  function function11(){
    console.log("I'm inside paste fucntion ")
  }

  do {
  
    var p = prompt("Enter your selection")

    if(p === "1"){
      function1()
    }
    else if (p === "2"){
      function2()
    }
    else if (p === "3"){
      function3()
    }
    else if (p === "4"){
      function4()
    }
    else if (p === "5"){
      function5()
    }
    else if (p === "6"){
      function6()
    }
    else if (p === "7"){
      function7() 
    }
    else if (p === "8"){
      function8()
    }
    else if (p === "9"){
      function9()
    }
    else if (p === "10"){
      function9()
    }
    else if (p === "11"){
      function11()
    }

    switch(p){
      case "1":
        function1()
        break 
      case "2":
        function2()
        break 
      case "3":
        function3()
        break 
      case "4":
        function4()
        break 
      case "5":
       function5()
       break
      case "6":
        function6()
        break
      case "7":
        function7()
        break 
      case "8":
        function8()
        break
      case "9":
        function9()
        break
      case "10":
        function10()
        break
      case "11":
        function11()
        break   
                       
    }
  }while (p!=0)

  console.log ("The End!!")