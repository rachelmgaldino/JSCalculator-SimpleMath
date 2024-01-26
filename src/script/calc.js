let input = document.getElementById('calcInput');
let result = document.getElementById('calcResult');

document.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    const resultCalc = eval(input.value);
    result.innerHTML = resultCalc; // what eval does is it takes a string and evaluates it as if it were a JavaScript expression

    const history = {
      input: input.value,
      result: resultCalc
    };

    const previousValues = JSON.parse(window.localStorage.getItem('history')) || [];

    previousValues.push(history);
    window.localStorage.setItem('history', JSON.stringify(previousValues));
  }
});

