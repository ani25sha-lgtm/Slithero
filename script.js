const board = document.querySelector('.board');
const blockHeight = 50
const blockWidth = 50

const cols=Math.floor(board.clientWidth/blockWidth);
const rows=Math.floor(board.clientHeight/blockHeight);

/*for(let i=0; i<rows*cols; i++){
    const block = document.createElement('div');
    block.classList.add("block")
    board.appendChild(block);
}*/
const blocks =[];

let a = Math.floor(Math.random()*rows);
let b =  Math.floor(Math.random()*cols);
 
const snake =[{x:1, y:2},{x:1,y:3},{x:1,y:4}];


for(let i =0; i<rows; i++){
    for(let j=0; j<cols; j++){
        const block = document.createElement('div');
        block.classList.add("block")
        board.appendChild(block);
        blocks[`${i}-${j}`]= block;
    }
}

function render(){
    snake.forEach(segment =>{
        blocks[`${segment.x}-${segment.y}`].classList.add("fill");
    })
}