let input = document.getElementById('calcInput');
let result = document.getElementById('calcResult');

document.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    result.innerHTML = eval(input.value); // what eval does is it takes a string and evaluates it as if it were a JavaScript expression
  }
});
