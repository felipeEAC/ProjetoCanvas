// INITIAL DATA
let currentColor = 'black';
let screen = document.querySelector('#tela');
let ctx = screen.getContext('2d');
let canDraw = false;
let mouseX = 0;
let mouseY = 0;



// EVENTS
document.querySelectorAll('.colorArea .color').forEach(item =>{
    item.addEventListener('click', colorClickEvent);
});
/*
passo a passo para desenhar no canvas
-Quando o  click do mouse ABAIXAR, ative o mode desenho
-Quando o mouse se mover , se o modo deseho estiver ativado , desenhe
-Quando o click do mouse LEVANTAR , DESATIVE O MODO DESENHO
*/

screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);

document.querySelector('.clear').addEventListener('click',clearScreen);

// FUNCTIONS
function colorClickEvent(e){
    let color = e.target.getAttribute('data-color');
    console.log("COR SELECIONADA:", color);
    currentColor = color;

    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
}

function mouseDownEvent(e){
    //console.log("clicou no mouse!");
    canDraw = true;
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;

}
function mouseMoveEvent(e){
   // console.log("moveu o mouse");
    if(canDraw) {  
        draw(e.pageX , e.pageY);       
       /* let pointX = e.pageX - screen.offsetLeft;
        let pointY = e.pageY - screen.offsetTop;
        console.log (pointX , pointY); 
        */
    }
}
function mouseUpEvent(){
    //console.log("soltou o mouse");
    canDraw = false;
}
function draw(x , y){
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;

    //desenhar
    ctx.beginPath();
    ctx.lineWidth = 5 ;
    ctx.lineJoin = "round";
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pointX, pointY);
    ctx.closePath();
    ctx.strokeStyle = currentColor;
    ctx.stroke();

    mouseX = pointX;
    mouseY = pointY;
}

function clearScreen(){
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
