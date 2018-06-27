/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, currentScore, activePlayer;

scores = [0,0];
currentScore = 0;
activePlayer = 0;
dice = Math.floor(Math.random()*6)+1;
/*
//setter
document.querySelector('#current-'+ activePlayer).textContent = dice;
//getter
var x = document.querySelector('#score-0').textContent;
console.log(x);
*/
//display initial scores as zero
document.querySelector('#current-0').textContent = '0';
document.querySelector('#current-1').textContent = '0';
document.querySelector('#score-0').textContent = '0';
document.querySelector('#score-1').textContent = '0';

//hide dice initially
document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function(){

    //1. Generate random number
    var dice = Math.floor(Math.random()*6)+1;

    //2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //3. Update scores if dice did not roll 1
    if(dice !== 1){
        // add score
        currentScore += dice;
        document.querySelector('#current-'+ activePlayer).textContent = currentScore;
    } else{
        activePlayer === 0 ? document.querySelector('#current-0').textContent = '0':document.querySelector('#current-1').textContent = '0'
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        activePlayer === 0 ? activePlayer=1:activePlayer=0;
        currentScore = 0;
        
        //hide dice for beginning of next player's turn
        document.querySelector('.dice').style.display = 'none';
    };
});