
const board = document.querySelectorAll('.cell');
let playerOneTurn = true;

const playerRound = () => {
  playerOneTurn = !playerOneTurn
}

const gameBoardObj = (() => {
  const div1 = document.getElementById('b1');
  const div2 = document.getElementById('b2');
  const div3 = document.getElementById('b3');
  const div4 = document.getElementById('b4');
  const div5 = document.getElementById('b5');
  const div6 = document.getElementById('b6');
  const div7 = document.getElementById('b7');
  const div8 = document.getElementById('b8');
  const div9 = document.getElementById('b9');
  
  const gameBoardArr = [div1, div2, div3, div4, div5, div6, div7, div8, div9];

  board.forEach(button => {
    button.addEventListener('click', (e) => {
    if(playerOneTurn === true && e.target.innerHTML === ""){
      e.target.innerHTML = "X"
      playerRound();
    } else if(e.target.innerHTML === "") {
      e.target.innerHTML = "O"
      playerRound();
    }            
    });
  });
  return gameBoardArr
})();

let currBoardArr = gameBoardArr;

console.log(currBoardArr);

const playerFac = (player, score) => {
  score = 0;
  return {player, score};
};

const btnControl = (() => {
  const startBtn = document.querySelector('.play');
  const playerField1 = document.getElementById('player1');
  const playerField2 = document.getElementById('player2');
  const restartBtn = document.querySelector('.restart');
  const gameBox = document.getElementById('game-box');

  const sumResults = [];

  startBtn.addEventListener('click', () => {
    console.log(sumResults);
      const player1 = playerFac(
        playerField1.value,
        
      );
      const player2 = playerFac (
        playerField2.value,
      );
      
      sumResults.push(player1, player2);
      startBtn.style.display = "none";
      restartBtn.style.display = "flex";
      gameBox.style.display = "flex";

  })
  restartBtn.addEventListener('click', () => {
    console.log(sumResults);
    startBtn.style.display = "flex";
    restartBtn.style.display = "none";
    sumResults.pop();
    sumResults.shift();
    
  })
  
})();


