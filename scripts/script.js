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
  const board = document.querySelectorAll('.cell');
  
  const gameBoardArr = [div1, div2, div3, div4, div5, div6, div7, div8, div9];
  
  function resetBoard() {
    div1.innerHTML = "";
    div2.innerHTML = "";
    div3.innerHTML = "";
    div4.innerHTML = "";
    div5.innerHTML = "";
    div6.innerHTML = "";
    div7.innerHTML = "";
    div8.innerHTML = "";
    div9.innerHTML = "";
  };

  const checkForStatusX = () => {
    if (div1.innerHTML === "X" && div2.innerHTML === "X" && div3.innerHTML === "X") {
      btnControl.render();
    } else if (div4.innerHTML === "X" && div5.innerHTML === "X" && div6.innerHTML === "X") {
      btnControl.render();
    } else if (div7.innerHTML === "X" && div8.innerHTML === "X" && div9.innerHTML === "X") {
      btnControl.render();
    } else if (div1.innerHTML === "X" && div4.innerHTML === "X" && div7.innerHTML === "X") {
      btnControl.render();;
    } else if (div2.innerHTML === "X" && div5.innerHTML === "X" && div8.innerHTML === "X") {
      btnControl.render();
    } else if (div3.innerHTML === "X" && div6.innerHTML === "X" && div9.innerHTML === "X") {
      btnControl.render();
    } else if (div1.innerHTML === "X" && div5.innerHTML === "X" && div9.innerHTML === "X") {
      btnControl.render();
    } else if (div3.innerHTML === "X" && div5.innerHTML === "X" && div7.innerHTML === "X") {
      btnControl.render();
    } else if()

  }

  const checkForStatusO = () => {
    if (div1.innerHTML === "O" && div2.innerHTML === "O" && div3.innerHTML === "O") {
      btnControl.render2();
    } else if (div4.innerHTML === "O" && div5.innerHTML === "O" && div6.innerHTML === "O") {
      btnControl.render2();
    } else if (div7.innerHTML === "O" && div8.innerHTML === "O" && div9.innerHTML === "O") {
      btnControl.render2();
    } else if (div1.innerHTML === "O" && div4.innerHTML === "O" && div7.innerHTML === "O") {
      btnControl.render2();
    } else if (div2.innerHTML === "O" && div5.innerHTML === "O" && div8.innerHTML === "O") {
      btnControl.render2();
    } else if (div3.innerHTML === "O" && div6.innerHTML === "O" && div9.innerHTML === "O") {
      btnControl.render2();
    } else if (div1.innerHTML === "O" && div5.innerHTML === "O" && div9.innerHTML === "O") {
      btnControl.render2();
    } else if (div3.innerHTML === "O" && div5.innerHTML === "O" && div7.innerHTML === "O") {
      btnControl.render2();
    } else if {
      
    }
  }


  board.forEach(button => {
    button.addEventListener('click', (e) => {
    if(playerOneTurn === true && e.target.innerHTML === ""){
      e.target.innerHTML = "X"
      playerRound();
      checkForStatusX();
      checkForStatusO();

    } else if(e.target.innerHTML === "") {
      e.target.innerHTML = "O"
      playerRound();
      checkForStatusX();
      checkForStatusO();
      }            
    });
  });
  return {
    resetBoard, gameBoardArr, checkForStatusX
  }
})();



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
  const divWinner = document.createElement('div');
  const nameWinner = document.createElement('h4');
  const modWin = document.querySelector('.modalWin');

  const sumResults = [];

  startBtn.addEventListener('click', () => {
      const player1 = playerFac(
        playerField1.value,
        
      );
      const player2 = playerFac (
        playerField2.value,
      );
      playerOneTurn = true;
      sumResults.push(player1, player2);
      startBtn.style.display = "none";
      restartBtn.style.display = "flex";
      gameBox.style.display = "flex";
      modWin.innerHTML = "";
      gameBoardObj.resetBoard();
  })
  restartBtn.addEventListener('click', () => {
    playerOneTurn = true;
    startBtn.style.display = "flex";
    gameBox.style.display = "flex";
    modWin.innerHTML = "";
    restartBtn.style.display = "none";
    sumResults.pop();
    sumResults.shift();
    gameBoardObj.resetBoard();
  });

  function render() {
    nameWinner.innerHTML = "";
    gameBox.style.display = "none";
    modWin.append(nameWinner);
    nameWinner.append(player1.value + " is the winner!");
    
  }

  function render2() {
    nameWinner.innerHTML = "";
    gameBox.style.display = "none";
    modWin.append(nameWinner);
    nameWinner.append(player2.value + " is the winner!");
    
  }

  function render3() {
    nameWinner.innerHTML = "";
    gameBox.style.display = "none";
    modWin.append(nameWinner);
    nameWinner.append("It is a TIE!");
  }

  return {
    render, render2, render3
  }
})();




