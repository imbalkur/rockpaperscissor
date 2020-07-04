let gameCount = 0;
const play=document.querySelector('#play')
const comp=document.querySelector('#comp')
const p=document.querySelector('.p')
const h1=document.querySelector('.h1')
const rock=document.querySelector('.rock')
const paper=document.querySelector('.paper')
const scissor=document.querySelector('.scissor')
rock.onclick = () => {
playerSelection = 'rock';
computerSelection=computerPlay();
playRound(playerSelection, computerSelection);
score()
return 'rock';
}

paper.onclick = () => {
playerSelection = 'paper';
computerSelection=computerPlay();
playRound(playerSelection, computerSelection);
score()
return 'paper';
}

scissor.onclick = () => {
playerSelection = 'scissors';
computerSelection=computerPlay();
playRound(playerSelection, computerSelection);
score()
return 'scissors';
}

function computerPlay(){
    var items=['rock','paper','scissor']
    var item=items[Math.floor(Math.random()*items.length)]
    return item
}
let playscore=0
    let gamescore=0
function playRound (playerSelection, computerSelection) {
   
    if(playerSelection==='rock' && computerSelection==="paper" || playerSelection==='paper' && computerSelection==="scissor" || playerSelection==='scissor' && computerSelection==="rock"){
        p.innerHTML+=`You Lose! ${computerSelection} beats ${playerSelection} <br />`
        gameCount++
        gamescore++                
        return 0

    }
    else if(playerSelection==='paper' && computerSelection==="rock" || playerSelection==='scissor' && computerSelection==="paper" || playerSelection==='rock' && computerSelection==="scissor"){
        p.innerHTML+=`You Win! ${playerSelection} beats ${computerSelection} <br />`
        gameCount++
        playscore++
        return 1
    }
    else {
        p.innerHTML+=`Its a tie <br />`
        gameCount++
        return 2
        }              
}

function score(){
    play.innerHTML=playscore
    comp.innerHTML=gamescore
    if(gameCount===5){
        if(playscore>gamescore){
            h1.innerHTML=`You Win`
        }
        else if(playscore<gamescore){
            h1.innerHTML=`You lose`
        }
        else {
            h1.innerHTML="it's a draw"
        }
    }
    if(gameCount===6){
        window.location.reload();
    }
}




