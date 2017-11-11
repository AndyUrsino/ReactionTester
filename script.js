
var start = new Date().getTime();

var recordTime = 1000;

function shapeTimer()
{
    // set random display
    var marginTop = Math.random()*500;
    var marginLeft = Math.random()*500;
    var height = 50 + Math.random()*400;
    $("#shape").css("top", (marginTop + "px"));
    $("#shape").css("left", (marginLeft + "px"));
    $("#shape").css("width", height);
    $("#shape").css("height", height);
    $("#shape").css("background-color", getRandomColor());
    if(Math.random() < .5)
    {
        $("#shape").css("border-radius", "50%");
    }
    else
    {
        $("#shape").css("border-radius", "0%");
    }

    // make shape appear
    $("#shape").css("display", "block");
    
    // reset timer
    start = new Date().getTime();
}

function reappear()
{
    setTimeout(shapeTimer, Math.random()*2000);
}

reappear();

$("#shape").click(function()
{
    $("#shape").css("display", "none");

    var end = new Date().getTime();

    var timeTaken = (end - start) / 1000;

    $("#time").html(timeTaken + "s");

    if(timeTaken < recordTime)
    {
        recordTime = timeTaken;
        $("#record").html(recordTime + "s");
    }

    reappear();
});

// random color generator
function getRandomColor() 
{
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) 
    {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }