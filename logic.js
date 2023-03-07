// const tick1 = document.querySelector('.box-options__social__img');
// const time = document.querySelector('#hours');
// let number=5;
// function increment(number) {
//     time.textContent = number + 10;
//     return hour;

//   }
// if (document.getElementById("one") == "1-10"){
//     const number = 5
// }
// else if (document.getElementById("two") == "11-50"){
//     const number = 13
// }
// else if (document.getElementById("three") == "51-100"){
//     const number = 38
// }
// else if (document.getElementById("four") == "101-201"){
//     const number = 75
// }

// Define the increment function
const number = 5
function increment(number) {
    return number + 10;
  }
  
  // Get the result element from HTML
  const resultElement = document.getElementById('hour');
  
  // Define the function that increments the number and displays the result in HTML
  function incrementNumber() {
    // Get the current number from HTML
    const currentNumber = parseInt(resultElement.innerText);
    
    // Increment the number using the increment function
    const incrementedNumber = increment(currentNumber);
    
    // Set the result element in HTML to the incremented number
    resultElement.innerText = incrementedNumber;
  }
function decrement(number) {
    return number - 10;
  }
  
  // Get the result element from HTML
  const resultElement2 = document.getElementById('hour');
  
  // Define the function that increments the number and displays the result in HTML
  function decremntNumber() {
    // Get the current number from HTML
    const currentNumber = parseInt(resultElement.innerText);
    
    // Increment the number using the increment function
    const incrementedNumber = increment(currentNumber);
    
    // Set the result element in HTML to the incremented number
    resultElement.innerText = incrementedNumber;
  }
