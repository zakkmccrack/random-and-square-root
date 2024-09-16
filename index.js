const normale = [];
const square = [];

function genNormale() {
  for (var i = 0; i < 1000000; i++) {
    x1 = Math.random();
    x2 = Math.random();
    normale.push(Math.max(x1, x2));
  }
  const sun = normale.reduce((a, b) => a + b, 0);
  const avg = (sun/normale.length)||0;
  var out = document.createElement('p');
  out.textContent = 'Average of generated square numbers:'+ avg;
  document.getElementById("genNormale").append(out);
}

function genRad() {
  for (var i = 0; i < 1000000; i++) {
    x1 = Math.random();
    x1 = Math.sqrt(x1);
    square.push(x1);
  }
  const sun = square.reduce((a, b) => a + b, 0);
  const avg = (sun/square.length)||0;
  var out = document.createElement('p');
  out.textContent = 'Average of generated square numbers:'+ avg;
  document.getElementById("generaRad").append(out);
}
