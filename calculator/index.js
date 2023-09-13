var str ="";

$("button").on("click",function(){
    if($(this).html()=='='){
        str=eval(str);
        $("h1").text(str);
    }
    else if($(this).html()=="DEL"){
        str=str.slice(0, -1);
        $("h1").text(str);
    }
    else if($(this).html()=='C' || $(this).html()=='AC'){
        str="";
        $("h1").text(str);
    }
    else{
    str=str+$(this).html();
    $("h1").text(str);
    }

    $("h1").scrollLeft =  $("h1").scrollWidth;
})



//for using keyboard

var keyMappings = {
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    "0": "0",
    ".": ".",
    "+": "+",
    "-": "-",
    "*": "*",
    "/": "/",
    "%": "%",
    "Enter": "=",
    "Backspace": "DEL",
    "Escape": "C",
  };
  

  $(document).keydown(function (event) {
    // Check if the pressed key is in our keyMappings
    var key = event.key;
    if (key in keyMappings) {
      // Simulate a button click with the corresponding text
      $("button:contains('" + keyMappings[key] + "')").click();
    }
  });

  