
    let score = JSON.parse(localStorage.getItem('score')) || {
      win: 0,
      lose: 0,
      tie: 0
    };

    updateScore();

    /*document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.win} Loses: ${score.lose} Ties: ${score.tie}`; */

    function pickComputerMove(){
      let computerMove = '';
      const randomNum = Math.random();

      if(randomNum >= 0 && randomNum < 1/3){
      computerMove = 'Rock';
      } else if(randomNum >= 1/3 && randomNum < 2/3){
      computerMove = 'Paper';
      } else {
      computerMove = 'Scissor';
      }

      return computerMove;
    }

    function yourMove(move){

      const computerMove = pickComputerMove();
      let result = ''; 
      

      if (move === 'Rock'){
        
      if(computerMove === 'Rock'){
        result = 'It\'s a Tie';
      } else if(computerMove === 'Paper'){
        result = 'You Lose';
      } else {
        result = 'You Win';
      }

      } else if(move === 'Paper'){
       
      if(computerMove === 'Rock'){
        result = 'You Win';
      } else if(computerMove === 'Paper'){
        result = 'It\'s a Tie';
      } else {
        result = 'You Lose';
      }

      } else if(move === 'Scissor'){
        
      if(computerMove === 'Rock'){
        result = 'You Lose';
      } else if(computerMove === 'Paper'){
        result = 'You Win';
      } else {
        result = 'It\'s a Tie';
      }
      }

      switch(result)
      {
        case 'You Win':
          score.win += 1;
          break;
        case 'You Lose':
          score.lose += 1;
          break;
        case 'It\'s a Tie':
          score.tie += 1;
          break; 
      }

      document.querySelector('.result')
      .innerHTML = result;

      document.querySelector('.moves')
        .innerHTML = `You 
        <img src="./images/${move}.jpeg"> 
        <img src="./images/${computerMove}.jpeg"> 
        Computer.`;

      updateScore();

      localStorage.setItem('score',JSON.stringify(score));

      

    /*alert(`You picked ${move}, Computer picked ${computerMove}. ${result}. \n Wins: ${score.win} Loses: ${score.lose} Ties: ${score.tie}`);*/
    
    }

    function updateScore() {
      document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.win} Loses: ${score.lose} Ties: ${score.tie}`; 
    }