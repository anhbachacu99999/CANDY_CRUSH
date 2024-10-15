var Keo=["Red", "Yellow", "Green", "Blue", "Orange", "Purple"];
var row, col, score=0;
row=Number(document.getElementById("rows").value);
col=Number(document.getElementById("colums").value);
function Tao_Bang()
{
    //var inputSection=document.getElementById("game");
    //inputSection.style.display="none";
    document.getElementById("diem").innerHTML="Score:"
    // Tạo bảng
    const newSquare=document.createElement("div");
    newSquare.classList.add("bang");
    // Thêm bảng vào trang
    const squareContainer=document.getElementById("game");
    squareContainer.appendChild(newSquare);
    // Ẩn hộp input
    //const inputSection=document.getElementById("Input_");
    //inputSection.style.display="none";
}
/*function randomKeo() //sinh giá trị ngẫu nhiên trong mảng Keo[]
{
    return Keo[Math.floor(Math.random() * Keo.length)]; //0 - 5.99
}
function start()
{
    for(let h=0; h<row; h++)
    {
        let hang=[];
        for(let c=0; c<col; c++)
        {
            let phan_tu=document.createElement("img");
            phan_tu.id=h.toString()+"-"+c.toString();
            phan_tu.src="C:/TranHuyHoang/Candy"+randomKeo()+".png";
        }
    }
}
function START()
{
    window.onload = function() 
    {
        start(); //chứa các khỏi tạo cho game
        window.setInterval(function () 
        {
            Pha_Keo(); //phá kẹo
            Dichuyen_Keo(); //di chuyển kẹo
            Tao_Keo(); //tạo ra kẹo
        }, 100);
    }
}*/
