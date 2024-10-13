var Keo=["Red", "Yellow", "Green", "Blue", "Orange", "Purple"];
var row, col, score=0;
window.onload = function()
{
    startGame();
    window.setInterval(function()
    {
        crushCandy();
        slideCandy();
        generateCandy();
    }, 100);
}
function randomCandy() 
{
    return candies[Math.floor(Math.random() * candies.length)]; //0 - 5.99
}
row=Number(document.getElementById("rows").value);
col=Number(document.getElementById("colums").value);

