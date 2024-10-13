var Keo=["Red", "Yellow", "Green", "Blue", "Orange", "Purple"];
var row, col, score=0;
row=Number(document.getElementById("rows").value);
col=Number(document.getElementById("colums").value);
function START()
{
    window.onload = function() 
    {
        startGame(); //chứa các khỏi tạo cho game
        window.setInterval(function () 
        {
            Pha_Keo(); //phá kẹo
            Dichuyen_Keo(); //di chuyển kẹo
            Tao_Keo(); //tạo ra kẹo
        }, 100);
    }
    function randomKeo() //sinh giá trị ngẫu nhiên trong mảng Keo[]
    {
        return Keo[Math.floor(Math.random() * Keo.length)]; //0 - 5.99
    }
    
}
