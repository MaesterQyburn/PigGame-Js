var scores, roundScore,activePlayer;
init();

document.querySelector('.btn-roll').addEventListener('click', function()
                                                    {
    // 1. Random number b/w 1 to 6
    var dice = Math.floor(Math.random()*6)+1;
    
    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display="block";
    diceDOM.src = 'dice-' + dice + '.png';
    
    // 3. Update the round score if the rolled number was not 1
    
    if(dice !== 1)
        {
            // Add score
            roundScore += dice;
            document.querySelector('#current-'+activePlayer).textContent = roundScore;
        }
    else
        {
            // Next player
            nextPlayer();
        }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    //Add current score to global score
    scores[activePlayer] += roundScore;
                                                     
    //update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    // CHeck if player won the game
    if(scores[activePlayer] >= 20)
        {
            document.querySelector('#name-'+activePlayer).textContent = "Winner!";
            document.querySelector('.dice').style.display = 'none';
        }
    else
        nextPlayer();
    
   
});

function nextPlayer()
{
    activePlayer === 0 ? activePlayer=1 : activePlayer=0;
    roundScore = 0;
    
    document.getElementById('current-0').textContent="0";
    document.getElementById('current-1').textContent="0";
    
    document.querySelector('.dice').style.display="none";
}

document.querySelector('.btn-new').addEventListener('click',init);

function init()
{
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    
    document.querySelector('.dice').style.display="none";

    document.getElementById('score-0').textContent = "0";
    document.getElementById('score-1').textContent = "0";
    document.getElementById('current-0').textContent = "0";
    document.getElementById('current-1').textContent = "0";
    
    document.querySelector('#name-0').textContent = "Player 1";
    document.querySelector('#name-1').textContent = "Player 2";
}







