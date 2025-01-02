let score = 0;
let timeLeft = 0;
let speed = 1000;

const target = document.getElementById('target');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const gameArea = document.getElementById('game-area');

function moveTarget() {
    const gameAreaWidth = gameArea.clientWidth;
    const gameAreaHeight = gameArea.clientHeight;
    const targetSize = target.offsetWidth;

    const randomX = Math.random() * (gameAreaWidth - targetSize);
    const randomY = Math.random() * (gameAreaHeight - targetSize);

    target.style.left = '${randomX}px';
    target.style.right = '${randomY}px';
}

function increaseSpeed() {
    if (speed > 400) {
        speed -= 50;
    }
}

function updateScore() {
    score++;
    scoreDisplay.textContent = score;
    increaseSpeed();
}

function startGame() {
    const gameInterval = setInterval(() => {
        moveTarget();
    }, speed);

    const timerInterval = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(gameInterval);
            clearInterval(timerInterval);
            alert('Game Over! Your final score is: ${score}');
            resetGame();
        }
    }, 1000);
}

function resetGame() {
    score = 0;
    timeLeft = 30;
    speed = 1000;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;
}

target.addEventListener('click', undateScore);

window.onload = startGame;