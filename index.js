// Import stylesheets
import './style.css';

const sum = document.getElementById('result');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
let num = 3;
const adder = function (event) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    let n = 'num';
    n = n + `${i}`;
    const n1 = document.getElementById(n);
    total += +n1.value;
  }

  sum.innerHTML = `Sum: ${total}`;
};
function eventadder() {
  for (let i = 1; i <= num; i++) {
    let n = 'num';
    n = n + `${i}`;
    const n1 = document.getElementById(n);

    n1.addEventListener('keyup', adder);
  }
}
eventadder();

btn1.addEventListener('click', addinput);
btn2.addEventListener('click', removeinput);

// Input Addition
function addinput() {
  num = num + 1;
  let strid = `num${num}`;
  let lbl = `Number ${num} `;
  const inrdiv = document.getElementById('innerdiv');
  const label = document.createElement('LABEL');
  label.innerHTML = lbl;
  const node = document.createElement('input');
  node.setAttribute('id', strid);
  const brk = document.createElement('br');
  inrdiv.appendChild(label);
  inrdiv.appendChild(node);
  for (let i = 1; i <= 2; i++) {
    inrdiv.appendChild(brk.cloneNode(true));
  }
  return eventadder();
}
// Remove Button
function removeinput() {
  const inrdiv = document.getElementById('innerdiv');
  console.log(inrdiv.childElementCount);
  if (num > 3) {
    for (let i = 1; i <= 4; i++) {
      const inrdiv = document.getElementById('innerdiv');
      inrdiv.removeChild(inrdiv.lastChild);
    }
    num -= 1;
    adder();
  } else {
    for (let i = 1; i <= 8; i++) {
      const inrdiv = document.getElementById('innerdiv');
      inrdiv.removeChild(inrdiv.lastChild);
    }
    num -= 1;
    adder();
  }
  console.log(inrdiv.childElementCount);
}
