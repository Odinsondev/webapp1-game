let selectedParent = 'r1';
let selectedChild = 's5';
console.log(selectedParent);
console.log(selectedChild);

let nextParent = '';
let nextChild = '';

function colorSquare() {
  const selectedSquare = document.querySelector('#r1 #s5');
  selectedSquare.style.backgroundColor = ('black');
  selectedSquare.setAttribute('class', 'active square');
}
colorSquare();

function colorTetrominoO() {
  const selectedSquare1 = document.querySelector('#r1 #s5');
  const selectedSquare2 = document.querySelector('#r1 #s6');
  const selectedSquare3 = document.querySelector('#r2 #s5');
  const selectedSquare4 = document.querySelector('#r2 #s6');

  selectedSquare1.style.backgroundColor = ('black');
  selectedSquare2.style.backgroundColor = ('black');
  selectedSquare3.style.backgroundColor = ('black');
  selectedSquare4.style.backgroundColor = ('black');

  selectedSquare1.setAttribute('class', 'active square');
  selectedSquare2.setAttribute('class', 'active square');
  selectedSquare3.setAttribute('class', 'active square');
  selectedSquare4.setAttribute('class', 'active square');
}
/* colorTetrominoO();
 */
function moveSquare() {
  document.addEventListener('keydown', function(event) {

    console.log(event.code);

    if (event.code == 'ArrowUp') {
      goUp();
    } else if (event.code == 'ArrowDown') {
      goDown();
    } else if (event.code == 'ArrowRight') {
      goRight();
    } else if (event.code == 'ArrowLeft') {
      goLeft();
    } else {}
  });
}
moveSquare();

function goUp() {
  const selectedSquare = document.querySelector('.active');

  if (selectedParent === 'r1') {   //Keeps active square from leaving top grid border
    return;
  } else {
    selectedSquare.style.backgroundColor = ('rgb(196, 242, 222)');
    selectedSquare.setAttribute('class', 'square');

    const parent = selectedSquare.parentNode;
    const parent2 = parent.previousElementSibling;
    selectedParent = parent2.getAttribute('id');

    const newSquare = document.querySelector(`#${selectedParent} #${selectedChild}`);
    selectedChild = newSquare.getAttribute('id');
    newSquare.style.backgroundColor = ('black');
    newSquare.setAttribute('class', 'active square');

    console.log(selectedParent);
    console.log(selectedChild);
  }
}

function goDown() {

/*   for (let i = 0; i < 4; i++) {
 */
  const selectedSquare = document.querySelector('.active');
  console.log("executed goDown");

  if (selectedParent === 'r20') {   //Keeps active square from leaving grid and freezes it
    selectedSquare.setAttribute('class', 'stacked square');
    colorSquare();
    selectedParent = 'r1';
    selectedChild = 's5';

  } else if (selectedParent !== 'r20') {   //If runs on r20 - ERROR
    const parentTest = selectedSquare.parentNode;
    const parent2Test = parentTest.nextElementSibling;
    nextParent = parent2Test.getAttribute('id');
    const nextSquare = document.querySelector(`#${nextParent} #${selectedChild}`);
    const test = nextSquare.getAttribute('class');
    console.log(test);                     //gets the class of the next square

    if (test === 'stacked square') {       //tests if the next square is already stacked and freezes
      selectedSquare.setAttribute('class', 'stacked square');
      colorSquare();
      selectedParent = 'r1';  //need to add function for random block creation
      selectedChild = 's5';

    } else {

/*       const parentTest2 = selectedSquare.parentNode;
      const parent2Test2 = parentTest2.nextElementSibling;
      nextParent2 = parent2Test2.getAttribute('id');
      const nextSquare2 = document.querySelector(`#${nextParent} #${selectedChild}`);
      const test = nextSquare.getAttribute('class');
      console.log(test);                     //gets the class of the next square

      if (test === 'active square') {
        return
      } else {
 */
      selectedSquare.style.backgroundColor = ('rgb(196, 242, 222)');
      selectedSquare.setAttribute('class', 'square');

      const parent = selectedSquare.parentNode;
      const parent2 = parent.nextElementSibling;
      selectedParent = parent2.getAttribute('id');

      selectedChild = selectedSquare.getAttribute('id');   //Needed to update current square location

      const newSquare = document.querySelector(`#${selectedParent} #${selectedChild}`);
      selectedChild = newSquare.getAttribute('id');
      newSquare.style.backgroundColor = ('black');
      newSquare.setAttribute('class', 'active square');

      console.log(selectedParent);
      console.log(selectedChild);
/*       } //
 */    }
  } else {}
/* } //
 */}

function goRight() {
  const selectedSquare = document.querySelector('.active');

  if (selectedChild === 's10') {   //Keeps active square from leaving right grid border
    return;
  } else if (selectedSquare.nextElementSibling.getAttribute('class') === 'stacked square') {
    return;   //Keeps active square from going through a stacked square
  } else {
    selectedSquare.style.backgroundColor = ('rgb(196, 242, 222)');
    selectedSquare.setAttribute('class', 'square');

    const newSquare = selectedSquare.nextElementSibling;
    selectedChild = newSquare.getAttribute('id');
    newSquare.style.backgroundColor = ('black');
    newSquare.setAttribute('class', 'active square');

    console.log(selectedParent);
    console.log(selectedChild);
  }  
}

function goLeft() {
  const selectedSquare = document.querySelector('.active');

  if (selectedChild === 's1') {   //Keeps active square from leaving left grid border
    return;
  } else if (selectedSquare.previousElementSibling.getAttribute('class') === 'stacked square') {
    return;   //Keeps active square from going through a stacked square
  } else {
    selectedSquare.style.backgroundColor = ('rgb(196, 242, 222)');
    selectedSquare.setAttribute('class', 'square');

    const newSquare = selectedSquare.previousElementSibling;
    selectedChild = newSquare.getAttribute('id');
    newSquare.style.backgroundColor = ('black');
    newSquare.setAttribute('class', 'active square');

    console.log(selectedParent);
    console.log(selectedChild);
  }
}

function buttons() {
  const startButton = document.getElementById('start');
  const stopButton = document.getElementById('stop');

  startButton.addEventListener('click', drop);
  stopButton.addEventListener('click', stopDrop);
}
buttons()



let dropInterval = '';

function drop() {
  dropInterval = setInterval(goDown, 1000);
}

function stopDrop() {
  clearInterval(dropInterval);
}


//Bugs

//Hitting start multiple times