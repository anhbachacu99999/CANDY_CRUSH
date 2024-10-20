var Keo=["Red", "Yellow", "Green", "Orange", "Purple", "Blue"];
var score=0;
var hang=7, cot=7;
var bang=[];
var currKeo, otherKeo;
function RandomKeo()
{
    return Keo[Math.floor(Math.random()*Keo.length)];
}
function nhankeo()
{
    currKeo=this;
}
function dichuyen(a)
{
    a.preventDefault();
}
function chonglen(){}
function keokeo(a)
{
    a.preventDefault();
}
function thakeo()
{
    otherKeo=this;
}
function traodoi()
{
    if(currKeo.src.includes("blank") || otherKeo.src.includes("blank")) return;
    
}
function StartGame()
{
    for(let h=0; h<hang; h++)
    {
        let row=[];
        for(let c=0; c<cot; c++)
        {
            // khởi tạo một phần tử kẹo
            let keo=document.createElement("img");
            keo.src="./Candy"+RandomKeo()+".png";
            keo.id=h.toString()+"-"+c.toString();
            // các thao tác với phần tử kẹo
            keo.addEventListener("dragstart", nhankeo); // bấm vào viên kẹo, chuẩn bị kéo
            keo.addEventListener("dragover", dichuyen); // di chuyển chuột để kéo viên kẹo
            keo.addEventListener("dragenter", keokeo); // kéo kẹo lên kẹo khác
            keo.addEventListener("dragleave", chonglen); // để kẹo chồng lên kẹo khác
            keo.addEventListener("drop", thakeo); // thả kẹo lên kẹo khác
            keo.addEventListener("dragend", traodoi); // sau khi kéo thả, tiến hành trao đổi kẹo
            document.getElementById("game").append(keo);
            row.push(keo);
        }
        bang.push(row);
    }
    console.log(bang);
}
window.onload=function()
{
    StartGame();
    window.setInterval(function{
        PhaKeo();
        ChuyenKeo();
        NewKeo();
    }, 100);
}
