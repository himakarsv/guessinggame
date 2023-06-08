
'use strict'


let random_number=Math.ceil(Math.random()*20);
console.log(random_number);

let score=20;
let highscore=0;
// let check=document.querySelector('#check');
const message=(msg)=>document.querySelector('#gt').textContent=msg;
document.querySelector('#check').addEventListener('click', function(){
    let guess=(document.querySelector('.numinput').value);
    if(guess==0) message('No Number');
    else if(guess == random_number){
        message('You Win !');
        document.querySelector('#randno').textContent=random_number;
        document.querySelector('.guess').style.background='green';
        if(score>highscore){ highscore=score;
            document.querySelector('#highscore').textContent=highscore;
        }
    }
    else if(guess != random_number)
    {
        if(score>1)
        {
            message(guess>random_number ? 'Too High' : 'Too Low');
            score--;
            document.querySelector('#score').textContent=score;
        }
        else
        {
            message('Game Over');
            document.querySelector('#score').textContent=0;
        }
    }
});

document.querySelector('.ng').addEventListener('click',function(){
    location.reload();
});

document.querySelector('.playagain').addEventListener('click',function(){
    score=20;
    random_number=Math.ceil(Math.random()*20);
    console.log(random_number);
    document.querySelector('#score').innerHTML=20;
    message('GUESS THE NUMBER');
    document.querySelector('.guess').style.background='black';
    document.querySelector('#score').textContent=score;
    document.querySelector('#randno').textContent='?';
    document.querySelector('.numinput').value='';
});