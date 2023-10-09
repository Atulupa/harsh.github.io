const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    display.value += button.textContent;
  });
});

document.getElementById('c').addEventListener('click', () => {
  display.value = '';
});

document.getElementById('=').addEventListener('click', () => {
  const expression = display.value;
  const result = eval(expression);
  display.value = result;
});
