var Keo=["Red", "Yellow", "Green", "Blue", "Orange", "Purple"];
var row, col, score=0;
row=Number(document.getElementById("rows").value);
col=Number(document.getElementById("colums").value);
window.onload = function() //hàm được gọi khi mở trang web
{
    startGame(); //chứa các khỏi tạo cho game
    window.setInterval(function()
    {
        crushCandy(); //phá kẹo
        slideCandy(); //di chuyển kẹo
        generateCandy(); //tạo ra kẹo
    }, 100);
}
function randomKeo() //chọn kẹo ngẫu nhiên
{
    return Keo[Math.floor(Math.random() * Keo.length)]; 
}
