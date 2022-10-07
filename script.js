const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')

const score0EL = document.querySelector('#score--0')
const score1EL = document.querySelector('#score--1')

const currentScore0EL = document.querySelector('#current--0')
const currentScore1EL = document.querySelector('#current--1')

const diceEl = document.querySelector('.dice')

let score, activePlayer, currScore, playing;

const init = () => {
    score = [0, 0];
    activePlayer = 0;
    currScore = 0;
    playing = true;

    diceEl.classList.add('hidden')

    player0.classList.add('player--active');
}

init()

const switchPlayer = () => {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active')
    player1.classList.toggle('player--active')

}

const onBtnRollCLick = () => {
    btnRoll.addEventListener('click', function() {
        if(playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;
        diceEl.classList.remove('hidden')
        diceEl.src = `dice-${dice}.png`
        if(dice !== 1) {
            currScore += dice;
            document.querySelector(`#current--${activePlayer}`).textContent = currScore
        } else {
            switchPlayer();
            }
        }
    })
}

onBtnRollCLick()