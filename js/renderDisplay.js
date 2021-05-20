const container = document.getElementById('container');

function createDiv(size, width) {
  const div = document.createElement('div');
  div.style.width = `${width}px`;
  div.className = size;
  return div;
}

function createDisplay(containerWidth, bigSize, mediumSize, smallSize) {
  let limitSize = 0;

  while (limitSize < containerWidth) {
    container.appendChild(createDiv('small', smallSize));
    limitSize += smallSize;
    container.appendChild(createDiv('medium', mediumSize));
    limitSize += mediumSize;
    container.appendChild(createDiv('big', bigSize));
    limitSize += bigSize;
    container.appendChild(createDiv('medium', mediumSize));
    limitSize += mediumSize;
  }
}

function formatFont(array, size) {
  const sizeFont = parseInt(size - size * 0.5);
  for (let index = 0; index < array.length; index += 1) {
    array[index].style.fontSize = `${sizeFont}px`;
  }
}

function insertFormatFont(bigSize, mediumSize, smallSize) {
  const arrayBig = document.getElementsByClassName('big');
  const arrayMedium = document.getElementsByClassName('medium');
  const arraySmall = document.getElementsByClassName('small');
  formatFont(arrayBig, bigSize);
  formatFont(arrayMedium, mediumSize);
  formatFont(arraySmall, smallSize);
}

function calculationWidth(containerWidth) {
  const bigSize = containerWidth * 0.06;
  const mediumSize = containerWidth * 0.04;
  const smallSize = containerWidth * 0.02;
  createDisplay(containerWidth, bigSize, mediumSize, smallSize);
  insertFormatFont(bigSize, mediumSize, smallSize);
}

export { calculationWidth };
