canvas=document.getElementbyId("myCanvas")
var ctx =canvas.getContext("2d")
var mouseEvent="empty"
var  lastPositionX,lastPositionY

canvas.addEventListener("mousedown", myMousedown)

function myMousedown(e){

    color = document.getElementById("color").value
    widthLine = document.getElementById("widthLine").value
    radius = document.getElementById("radius").value

 mouseEvent="mousedown"

}

canvas.addEventListener("mouseup", myMouseUp)
function myMouseUp(e){

    color = document.getElementById("color").value
    widthLine = document.getElementById("widthLine").value
    radius = document.getElementById("radius").value

    mouseEvent="mouseup"
}

canvas.addEventListener("mouseleave", myMouseLeave)
function myMouseLeave(e){

    color = document.getElementById("color").value
    widthLine = document.getElementById("widthLine").value
    radius = document.getElementById("radius").value

    mouseEvent="mouseleave"
    
}
canvas.addEventListener("mousemove", myMousMovep)
function myMouseMove(e){

    var positionMouseX =e.clientX-canvas.offsetLeft;
    var positionMouseY =e.clientY-canvas.offsetTop
    
    if (mouseEvent == "mouseDown") {
        console.log("Current position of x and y coordinates = ");
        console.log("x  ="+ positionMouseX + "y =" + positionMouseY);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthLine;
        ctx.arc(positionMouseX , positionMouseY, radius , 0 , 2 * Math.PI);
        ctx.stroke();
        
    }
}

