var stress="https://i.pinimg.com/originals/42/33/17/423317db090ba7958eb093bd3d2e0430.jpg";
var confused="https://i.pinimg.com/236x/6d/6f/d6/6d6fd6f3f118be24560a391cdfe4c55f.jpg";
var shook="https://66.media.tumblr.com/836dbf0d9c725cfc7335cde72e0fe41d/tumblr_p0trn0LsZz1wvjbozo1_1280.jpg";
var high="https://data.whicdn.com/images/306705280/large.jpg";

$("button").click(function(){
    var mood = $("input").val();
    if(mood === "stress"){
        $(".message").text("Take a break");
        stressMood();
    }else if(mood === "confused"){
        $(".message").text("Watch some dramas");
        confusedMood();
    }else if(mood === "shook"){
        $(".message").text("Calm down");
        shookMood();
    }else if(mood === "high"){
        $(".message").text("you need to take a nap");
        highMood();
    
    }

});
function changeBackground(backgroundColor){
    $('body').css('background-color', backgroundColor);
}
function changeTextColor(color){
   $('body').css('color', color);
}

function showImage(pic){
    $("img").attr("src", pic);
    
}
function stressMood(){
   changeBackground("black");
    changeTextColor("red");
    showImage(stress);
    
}
function confusedMood(){
   changeBackground("#002156");
    changeTextColor("lightblue");
    showImage(confused);
    
}
function shookMood(){
   changeBackground("#8e3901");
    changeTextColor("#c95204");
    showImage(shook);
    
}
function highMood(){
   changeBackground("yellow");
    changeTextColor("#ff8800");
    showImage(high);
    
}


