const display = document.getElementById('display');

function addChar(char) {
  display.value += char;
}

function addFunc(func) {
  display.value += func;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  let expr = display.value;
  try {
    // percent support
    expr = expr.replace(/(\d+)%/g, "($1/100)");
    // functions
    expr = expr.replace(/sin\(/g, "Math.sin(");
    expr = expr.replace(/cos\(/g, "Math.cos(");
    expr = expr.replace(/tan\(/g, "Math.tan(");
    expr = expr.replace(/log\(/g, "Math.log10(");
    let result = eval(expr);
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

// Keyboard support
document.addEventListener('keydown', (e) => {
  if ((e.key >= '0' && e.key <= '9') || '+-*/%.'.includes(e.key)) {
    addChar(e.key);
  } else if (e.key === 'Enter') {
    calculate();
  } else if (e.key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  }
});
