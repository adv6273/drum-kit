

for (var i = 0; i < 7; i++) 
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let b = this.innerHTML;
        // switch (b) 
        // {                                                                                 
        // case "w":
        // var audio = new Audio("sounds/tom-1.mp3");
        // audio.play();
        // break;
    
        // case "a":
        // var audio = new Audio("sounds/tom-2.mp3");
        // audio.play();
        // break;
        //  case "s":
        // var audio = new Audio("sounds/tom-3.mp3");
        // audio.play();
        // break; 
        //      case "d":
        // var audio = new Audio("sounds/tom-4.mp3");
        // audio.play();
        // break; 
        //  case "j":
        // var audio = new Audio("sounds/snare.mp3");
        // audio.play();
        // break;  
        
        // case "k":
        // var audio = new Audio("sounds/crash.mp3");
        // audio.play();
        // break;
        
        //  case "l":
        // var audio = new Audio("sounds/kick-bass.mp3");
        // audio.play();
        // break;
        // default:
        //     alert("choose any instrument!");
        makesound(b);
        animation(b);
    
    });
}

// var audio=new Audio("sounds/tom-"+1+".mp3");
// audio.play();



document.addEventListener("keydown",function(event){
     

    makesound(event.key);
    animation(event.key)

});
// let char=prompt("daba ");

function makesound(key){
    switch (key) 
    {                                                                                 
    case "w":
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    break;

    case "a":
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
    break;
     case "s":
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    break; 
         case "d":
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
    break; 
     case "j":
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
    break;  
    
    case "k":
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
    break;
    
     case "l":
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;
    // default:
    //     alert("choose any instrument!");
} 
}
function animation(key)
{
      let ckey=document.querySelector("."+key);
        
      ckey.classList.add("pressed");
  
      setTimeout(function()
       {
        ckey.classList.remove("pressed");}
        ,100);
      }

