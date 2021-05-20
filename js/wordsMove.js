function randomIndex(size) {
  const arrayIndex = [];
  while (arrayIndex.length <= size) {
    const randomNumber = Math.round(Math.random() * size);
    if (!arrayIndex.includes(randomNumber)) arrayIndex.push(randomNumber);
  }
  return arrayIndex;
}

function createDiv(size, indice) {
  const div = document.createElement('div');
  div.className = 'letter-green';
  if (indice === 0) div.className = 'letter-white';
  div.style.height = size + 'px';
  return div;
}

function incrementAtributes(stringArray, objCont, size) {
  const div = createDiv(size, objCont.indice);
  if (objCont.indice < stringArray.length) {
    div.innerHTML = stringArray[objCont.indice];
  } else {
    objCont.clearCont++;
  }
  objCont.indice += 1;
  objCont.cont += 1;
  return { objCont, div };
}

function removeLast(cont, limit, element) {
  if (cont > limit) {
    element.removeChild(element.lastElementChild);
  }
}

function checkLimit(objCont, limit, element) {
  if (objCont.clearCont > limit) {
    element.innerHTML = '';
    objCont = { indice: 0, clearCont: 0, cont: 0 };
  }
  return { element, objCont };
}

function addLetter(stringArray, arrObj, height) {
  const element = arrObj.element;
  const size = +element.style.fontSize.replace(/px/g, '');
  const limit = Math.floor(height / size);
  let { objCont, div } = incrementAtributes(stringArray, arrObj.objCont, size);

  removeLast(objCont.cont, limit, element);
  element.insertAdjacentElement('afterbegin', div);
  return checkLimit(objCont, limit, element);
}

function intervalProgressive(arrayObj, stringArray, randomArray, height) {
  let limit = 0;
  const interval = setInterval((_) => {
    for (let index = 0; index < limit; index += 1) {
      let indice = randomArray[index];
      arrayObj[indice] = addLetter(stringArray, arrayObj[indice], height);
    }
    if (limit < randomArray.length) {
      limit++;
    }
  }, 100);
}

function moveWord(string, arrayElemnts) {
  const height = +window.getComputedStyle(container).height.replace(/px/g, '');
  const stringArray = string.split('').reverse();
  const randomArray = randomIndex(arrayElemnts.length - 1);
  let arrayObj = arrayElemnts.map((el) => ({
    element: el,
    objCont: { indice: 0, clearCont: 0, cont: 0 },
  }));
  intervalProgressive(arrayObj, stringArray, randomArray, height);
}

export { moveWord };
