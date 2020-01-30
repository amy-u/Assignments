function myFunction(){
    function deterNum(){
    return Math.floor((Math.random() * 2) + 1);
    }
    
    var result = deterNum();

    switch(result){
    case 1:
        text = "Heads";
        break;
    case 2:
        text = "Tails"
        break;;
    }

    document.getElementById("coin").innerHTML = text;
}

//Try to get the animation to stop/pause
//
// $(document).ready(function(){
//     $(".play-animation").click(function(){
//         $(".animated").css("animation-play-state", "running");
//     });
//     $(".stop-animation").click(function(){
//         $(".animated").css("animation-play-state", "paused");
//     });
// });