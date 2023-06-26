
const board=document.querySelector(".play-board");
const scoreholder=document.querySelector(".score");
const highscoreholder=document.querySelector(".high-score");

let gameover=false;
let snakebody=[];
let foodx, foody
let dirx=0,diry=0;
let snakex=5, snakey=5;
let setIntervalID;
let score=0;
let highscore=localStorage.getItem("high-score")||0;
highscoreholder.innerText=`High-Score: ${highscore}`;


const changedirection=(e)=>{
    if(e.key==="ArrowUp" && diry!=1){
        dirx=0;
        diry=-1;
    }
    else if (e.key==="ArrowDown" && diry!=-1){
        dirx=0;
        diry=1;
    }
    else if(e.key==="ArrowLeft" && dirx!=1){
        dirx=-1;
        diry=0;
    }else if(e.key==="ArrowRight" && dirx!=-1){
        dirx=1;
        diry=0;
    }

}

const foodposition=()=>{
    foodx=Math.floor(Math.random()*40)+1;
    foody=Math.floor(Math.random()*40)+1;
}

const handlegameover=()=>{
    clearInterval(setIntervalID);
    alert("Game Over. Try Again!!!")
    location.reload();
}
const initGame=()=>{
    if(gameover){
        return handlegameover();
    }

    let htmlmarkup=`<div class="food" style="grid-area:${foody}/${foodx}"></div>`;

    if(snakex===foodx && snakey===foody){
        foodposition();
        snakebody.push([foodx,foody])
        score++;

        highscore=score>=highscore ? score:highscore;
        localStorage.setItem("high-score",highscore)

        scoreholder.innerText=`Score: ${score}`;
        highscoreholder.innerText=`High-Score: ${highscore}`;
    }

    for(let i=snakebody.length-1; i > 0; i--){
        snakebody[i]=snakebody[i-1];
    }

    if(snakex<0 || snakex>40 || snakey<0 || snakey>40){
        gameover=true;
    }


    snakebody[0]=[snakex,snakey];

    snakex +=dirx;
    snakey +=diry;

    for(let i=0;i<snakebody.length;i++){
        htmlmarkup +=`<div class="head" style="grid-area:${snakebody[i][1]}/${snakebody[i][0]}"></div>`;
        if(i!==0 && snakebody[0][1]===snakebody[i][1] && snakebody[0][0]===snakebody[i][0] ){
            gameover=true;
        }
    }

    board.innerHTML=htmlmarkup;
    

}
setIntervalID=setInterval(initGame,125)
window.addEventListener("keydown",changedirection);
foodposition();
initGame();