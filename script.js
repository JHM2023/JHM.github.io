window.addEventListener('DOMContentLoaded', (event) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const message = document.getElementById('message');
  
    guessButton.addEventListener('click', () => {
      const userGuess = parseInt(guessInput.value);
      
      if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
        return;
      }
      
      if (userGuess === randomNumber) {
        message.textContent = 'Congratulations! You guessed the correct number!';
      } else if (userGuess < randomNumber) {
        message.textContent = 'Too low! Try again.';
      } else {
        message.textContent = 'Too high! Try again.';
      }
    });
  });
  