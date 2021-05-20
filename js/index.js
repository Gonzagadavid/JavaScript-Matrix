import { calculationWidth } from './renderDisplay.js';
import { moveWord } from './wordsMove.js';

const container = document.getElementById('container');
container.innerHTML = '';
const containerWidth = +window
  .getComputedStyle(container)
  .width.replace(/px/g, '');

function matrixRender(string) {
  const arrayBig = document.querySelectorAll('.big');
  const arrayMedium = document.querySelectorAll('.medium');
  const arraySmall = document.querySelectorAll('.small');
  const arrayElemnts = [...arrayBig, ...arrayMedium, ...arraySmall];
  moveWord(string, arrayElemnts);
}

function matrixInit(e) {
  if (e.key === 'Enter') {
    const div = document.querySelector('.div-input');
    div.style.display = 'none';
    calculationWidth(containerWidth);
    matrixRender(e.target.value);
  }
  e.target.removeEventListener('keypress', (e) => matrixInit(e));
}

const div = document.createElement('div');
div.className = 'div-input';
const input = document.createElement('input');
input.className = 'input-text';
input.spellcheck = false;
input.style.fontSize = `${containerWidth * 0.045}px`;
input.addEventListener('keypress', (e) => matrixInit(e));
div.appendChild(input);
container.appendChild(div);
input.focus();
