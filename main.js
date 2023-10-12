// ...............setting variables.....................//
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const rollDice = document.querySelector('#rolldice');
const dice1Image = document.querySelector('#n1');
const dice2Image = document.querySelector('#nn1');
const playerCurrent1 = document.querySelector('.player1-value');
const playerCurrent2 = document.querySelector('.player2-value');
const playerglobal1 = document.querySelector('.player1global');
const playerglobal2 = document.querySelector('.player2global');
const hold = document.querySelector('#hold');
const player1BackGround = document.querySelector('.player1BackGround');
const player2BackGround = document.querySelector('.player2BackGround');
const status1 = document.querySelector('#status1');
const status2 = document.querySelector('#status2');
const playersPopUp = document.querySelector('.players-pop-up');
const closeSixSix = document.querySelector('#closeSixSix')
const inputValue = document.querySelector('#scoregoal');
const winner = document.querySelector('.you-win');
const loser = document.querySelector('.you-lose');
const winText =document.querySelector('.you-win-text'); 
const loseText =document.querySelector('.you-lose-text'); 
const newGame = document.querySelector('.newgame');
const winCount1 = document.querySelector('#player1-win-count h4');
const winCount2 = document.querySelector('#player2-win-count h4');
const backgroundMusic =document.querySelector('#background-music')
const onOffButton = document.querySelector('#background-music1');
const onOff = document.querySelector('.on-off');


let start = new Audio('./sounds/board-start-38127.mp3');
let rollingDice = new Audio('./sounds/diceRoll_sound.mp3');
let gettingSixSix = new Audio('./sounds/sixsix_sound.mp3');
let switchingPlyer = new Audio('./sounds/switch-player.mp3');
let winning = new Audio('./sounds/goodresult-82807.mp3');
let newGameA = new Audio('./sounds/decidemp3-14575.mp3');
let clickingSound = new Audio('./sounds/rclick-13693.mp3')
let inputVal = 0;
let rand1dice = 0;
let rand2dice = 0;
let gamePlay = 1;
let sum = 0;
let current1 = 0;
let current2 = 0;
let game = true;
let player1Current = 0;
let player2Current = 0;
let player1global = 0;
let player2global = 0;
let totalVal1 = 0;
let totalVal2 = 0;
let onOff1 = false;



//..............Add events..................//
        
document.addEventListener('DOMContentLoaded',() => {

        instractions();
        onOffButton.addEventListener('click', () => {
            
            music() 
        })
           
})



//.......Setting for hold button by clicking......//             
        hold.addEventListener('click', () => {

    if(game === false){
        return;
    }else{
    updateScore();
    winOrLose();
    switchPlayer();
    settings()
    }
})

//..............Roll dice randomly ..............//
        rollDice.addEventListener('click', () => { 

            if(game === false){
                return; 
            }else {
                
                score()       
            }  

            
})


//....Closing sixsix-popup & contuinue playing....// 
       
    closeSixSix.addEventListener('click', () => {
        
        playersPopUp.style.display = 'none';
        game = true;
})


//...........New Game button...........//
newGame.addEventListener('click', () =>{

        newGameButton();
        game =true;
})
         
//....................Setting functionality...................//

    function switchPlayer(){
    if(gamePlay === 2){
        player1.style.background = "rgba(250, 177, 207, 0.847)";
        player2.style.background = 'rgba(184, 122, 147, 0.88)';
        gamePlay = 1;
    } else { 
        player1.style.background = 'rgba(184, 122, 147, 0.88)';
        player2.style.background = 'rgba(250, 177, 207, 0.847)';
        gamePlay = 2;
    }
    switchingPlyer.play()
}  


//........setting Random dice roll.......//
    function randDice(){
        return Math.ceil(Math.random()*6);
    }

//........setting sumup for player...........//

    function updateScore(){
        player1global += player1Current;
        playerglobal1.innerText = player1global;
        player2global += player2Current;
        playerglobal2.innerText = player2global;
        player1Current = 0;
        player2Current = 0;
        playerCurrent1.innerText = player1Current;
        playerCurrent2.innerText = player2Current;
          
}

//.............Setting score Display for players.....///
    function score(){
        rand1dice = randDice();
        dice1Image.src = `./PICS/dice-${rand1dice}.png`;
        rand2dice = randDice()
        dice2Image.src = `./PICS/dice-${rand2dice}.png`;
        dice1Image.style.display = 'block';
        dice1Image.style.zIndex =  5;
        dice2Image.style.display = 'block';
        dice2Image.style.zIndex =  5;
        sum = rand1dice + rand2dice; 
    if(sum === 12){   
        playersPopUp.style.display = 'block';
        gettingSixSix.play();
        
    if(gamePlay === 1){
        player1Current = 0;
        status1.style.display = 'block';
        status2.style.display = 'none';
} else {
        player2Current = 0;
        status1.style.display = 'none';
        status2.style.display = 'block';
        }

        hold.click()
        game = false;
       
} else {
      if(gamePlay === 1){
        player1Current += sum;
        } 

    else{
        player2Current += sum;
        }
    } 
        playerCurrent1.innerText = player1Current;
        playerCurrent2.innerText = player2Current;
        rollingDice.play()
}

   
//.......................Winner announcment........................//
    function winOrLose() {
        inputVal = parseInt(inputValue.value);
        if(player1global == inputVal || player2global > inputVal ){
        winner.style.display = 'block';
        loser.style.display = 'block';
        loser.style.transform = 'translateX(27rem)';
        winText.style.display = 'block';
        loseText.style.display = 'block';
        loseText.style.transform = 'translateX(30.5rem)';
        game = false;
        totalVal1 ++;
        winCount1.innerText = totalVal1;
        winning.play();
    }
        else if(player2global == inputVal || player1global > inputVal){
        winner.style.display = 'block';
        loser.style.display = 'block';
        winner.style.transform = 'translateX(27rem)';
        winText.style.display = 'block';
        loseText.style.display = 'block';
        winText.style.transform = 'translateX(27rem)';
        game = false;
        totalVal2 ++;
        winCount2.innerText = totalVal2;
        winning.play();
    } 
    
        
}

//...............New Game button(reset)...............//

function newGameButton(){
instractions()
 gamePlay = 1;
 inputVal = "";
 rand1dice = 0;
 rand2dice = 0;
 sum = 0;
 current1 = 0;
 current2 = 0;
 game = true;
 player1Current = 0;
 player2Current = 0;
 player1global = 0;
 player2global = 0;
 playerCurrent1.innerText = player1Current;
 playerCurrent2.innerText = player2Current;
 playerglobal1.innerText = player1global;
 playerglobal2.innerText = player2global;
 inputValue.value = inputVal;
 player1.style.background = "rgba(250, 177, 207, 0.847)";
 player2.style.background = 'rgba(184, 122, 147, 0.88)';
 winner.style.display = 'none';
 winner.style.transform = 'translateX(0rem)';
 loser.style.display = 'none';
 loser.style.transform = 'translateX(0rem)';
 winText.style.display = 'none';
 winText.style.transform = 'translateX(0rem)';
 loseText.style.display = 'none';
 loseText.style.transform = 'translateX(0rem)';
 playerglobal1.style.transform = 'translateX(0rem)';
 playerglobal2.style.transform = 'translateX(0rem)';
 newGameA.play()
 onOff1 = false;

}



//..................Openning Screen..................//

function instractions(){
    
    setTimeout( () => {
        let popup = document.querySelector('.popup');
        if (popup) {
            popup.style.display = "block";
        }
    }, 0);
    const popup = document.querySelector('.popup');
    const close = document.querySelector('.close');
    const score = document.querySelector('#scoregoal');
    
    close.disabled = true;
    close.style.cursor = "not-allowed";

        close.addEventListener('mouseover', () => {
            if(!close.disabled){
                close.style.cursor = 'pointer';
            } 
        });
        
        score.addEventListener('input', () => {
            let scoreVal = parseInt(score.value);
            if(scoreVal > 0){
                close.disabled = false;
                } else{
                    close.disabled = true;
                }
        });
   
        close.addEventListener('click', () => {
            popup.style.display = "none";
            start.play()
            
        });
    
        rand1dice = Math.ceil(Math.random()*6);
        rand2dice = Math.ceil(Math.random()*6);
        dice1Image.src = `./PICS/dice-${rand1dice}.png`;
        dice2Image.src = `./PICS/dice-${rand2dice}.png`;
        dice1Image.style.display = 'block';
        dice2Image.style.display ='block';
        dice1Image.style.zIndex = 4;
        dice2Image.style.zIndex = 4;
        
        
}

//...........Adjust display according to input`s...........//
function settings(){
    if(player1global >= 10 && player1global <= 99){
        playerglobal1.style.transform = 'translateX(-1rem)';
    } 
    if(player1global >= 100){
        playerglobal1.style.transform = 'translateX(-2rem)';
    }

    if(player2global >= 10 && player2global <= 99){
        playerglobal2.style.transform = 'translateX(-1rem)';
    }

    if(player2global >= 100){
        playerglobal2.style.transform = 'translateX(-2.1rem)';
    }
}

//...........Adding background music...........//

function music() {
    if(onOff1 === false){
        backgroundMusic.pause()
        onOff.innerHTML = 'OFF'
    } else {
        backgroundMusic.play()
        onOff.innerHTML = 'ON';
    }
    onOff1 = !onOff1; 
}