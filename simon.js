let h4 = document.querySelector('h4');
let h3 = document.querySelector('h3');
let h5 = document.querySelector('h5');
let body = document.querySelector('body');

let highScore = 0;

let btnArr = ['yellow','purple','blue','red'];
let gameSeq = [];
let userSeq = [];

let started = false ;
let level = 0 ;

document.addEventListener('keypress', function(){
    if(started == false){
        started = true ;

        levelUp();
    }
})

function levelUp(){
    userSeq = [];
    level++;
    if(highScore <= level){
        highScore = level;
    }
    h4.innerText = `level - ${level}` ;

    // default btn fresh
    let randomeBtn = btnArr[Math.floor(Math.random()*4)];

    let btn = document.querySelector(`.${randomeBtn}`);
    gameSeq.push(randomeBtn);
    console.log(gameSeq);
    btnFlesh(btn);
}

function btnFlesh(btn){
    btn.classList.add('flesh');
    setTimeout(() => {
        btn.classList.remove('flesh');
    }, 250);

}
function userFlesh(btn){
    btn.classList.add('userFlesh');
    setTimeout(() => {
        btn.classList.remove('userFlesh');
    }, 250);

}



let allBtn = document.querySelectorAll('.innerBox');

for(btn of allBtn){
    btn.addEventListener('click',btnPress);
}

function btnPress(){
    let btn = this;
    userFlesh(btn);
    let userColor = btn.getAttribute('id');
    userSeq.push(userColor);
    

    // compare function.
    checkSeq(userSeq.length - 1);
}

function checkSeq(idx){
    // only check current level
    if(userSeq[idx]===gameSeq[idx]){
        if(gameSeq.length === userSeq.length){
           setTimeout(levelUp,1000);
        }
    }else{
        h3.innerText = `Your final score is : ${level}`;
        h4.innerText = `Game over! press any key to start the Game.`
        body.style.backgroundColor = 'red';
        setTimeout( ()=>{
            body.style.backgroundColor = 'white';
        },300);
        h5.innerText = `Your Higest score is : ${highScore}`;
        reset();
    }
}


function reset(){
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = false ;
}

