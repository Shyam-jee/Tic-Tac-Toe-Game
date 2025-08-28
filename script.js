const grid=document.querySelectorAll(".cell");
const turn=document.querySelector(".turn");
const restart=document.querySelector(".restart-btn");
const output=document.querySelector(".output");

var playerX=true;
var playerO=false;
const arr=Array(9).fill(-1);
const winningCondition=[[0, 1, 2], [0, 3, 6], [0, 4, 8],
                        [1, 4, 7], [2, 4, 6], [2, 5, 8],
                        [3, 4, 5], [6, 7, 8]
];

for(let i=0;i<9;i++){
    grid[i].addEventListener('click', ()=>{
    if(playerX && arr[i]==-1)
    {
        grid[i].textContent='X';
        arr[i]=1;
        if(checkWinner()){
            turn.textContent="";
            output.textContent="Player X is winner"
            disabled();
            return;
        }
        if(isDraw()){
            turn.textContent="";
            output.textContent="Game is Draw"
            disabled();
        }
        else{
            playerX=false;
            playerO=true;
            turn.textContent="Player O's turn";
        }
    }
    else if(arr[i]==-1){
        grid[i].textContent='O';
        arr[i]=0;
        if(checkWinner()){
            turn.textContent="";
            output.textContent="Player O is winner";
            disabled();
            return;
        }
        if(isDraw()){
            turn.textContent="";
            output.textContent="Game is Draw"
            disabled();
        }
        else{
            playerX=true;
            playerO=false;
            turn.textContent="Player X's turn";
        }
    }
})}

function checkWinner(){
    for(let con of winningCondition)
    {
        if((arr[con[0]]==0 || arr[con[0]]==1) && arr[con[0]]==arr[con[1]] && arr[con[1]]==arr[con[2]]){
            HighlightWinningCell(con);
            return true;
        } 
    }
    return false;
}

restart.addEventListener('click', ()=>{
    location.reload();
})

function disabled(){
    grid.forEach((box)=>{
        box.classList.add("unclickable");
    })
}

function isDraw() {
  return arr.every(cell => cell !== -1) && !checkWinner();
}

function HighlightWinningCell(con){
    for(let i=0;i<3;i++){
        grid[con[i]].style.backgroundColor='#32CD32';
    }
}
