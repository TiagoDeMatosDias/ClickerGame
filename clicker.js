var points=0;


//Main Loop
var playing = true;
var time = 0;
var oldtime=0;
var frame = 0;
var loop = function(){
    if (playing){
        requestAnimationFrame(loop);
    }
    time=frame/60;
    frame++;
    try{      

        if(oldtime!=Math.floor(time)){
            auto_update_points();
            oldtime=Math.floor(time);
        }
        update_scoreboard();
        update_rank_label();
        console.log(rank);
        //displayerror("");
    } catch (e) {
        //displayError(e);
        throw e;
    }
}

//-----------------------------------------------------------------------------------

//Main Scoreboard

// get scoreboard
var scoreboard_html = document.getElementById("scoreboard");
//2. Update score
var update_scoreboard = function(){
    scoreboard.innerHTML =  "<b>" + points +"</b>"  ;
}

//-----------------------------------------------------------------------------------

// Main Button
// 1. Get the button
var main_btn = document.getElementById("main_btn");
// 2. Add event handler
main_btn.addEventListener ("click", function() {
    update_points(1);
});

//-----------------------------------------------------------------------------------

//Update points
var update_points = function(amount){
    points = points + amount;
}

//-----------------------------------------------------------------------------------

// Auto-Clicker mechanics

//How many points are being increased by auto-clickers per tick
var increment_by=0;
var rank = 1;

var auto_update_points = function(){
    update_points(increment_by);
}

// Creates an auto-clicker by updating the increment_by variable
var auto_clicker = function(rank){
    if(rank**2 <= points)
    {
        increment_by = increment_by + rank;
        points= points - rank**2;
    }
}

//-----------------------------------------------------------------------------------

// Auto-Clicker Buttons

//Auto-Clicker Buyer
  // 1. Get the button
  var auto_clicker_btn = document.getElementById("auto_clicker_btn");
  // 2. Add event handler
  auto_clicker_btn.addEventListener ("click", function() {
    auto_clicker(rank);
    });

//Auto-Clicker Rank increase
// 1. Get the Button
var auto_clicker_rank_increase_btn = document.getElementById("auto_clicker_rank_increase_btn");
// 2. Add event handler
auto_clicker_rank_increase_btn.addEventListener ("click", function() {
  rank++;
  });


//Auto-Clicker Rank decrease
// 1. Get the Button
var auto_clicker_rank_decrease_btn = document.getElementById("auto_clicker_rank_decrease_btn");
// 2. Add event handler
auto_clicker_rank_decrease_btn.addEventListener ("click", function() {
  if(rank!=1){
    rank--;
  }
  });

//Auto-Clicker Rank Label
// 1. Get the scoreboard
var rank_label_html = document.getElementById("rank_label");
//2. Update score
var update_rank_label = function(){
  rank_label_html.innerHTML =  "<b>" + rank +"</b>";
}

//-----------------------------------------------------------------------------------

//Run game
loop();