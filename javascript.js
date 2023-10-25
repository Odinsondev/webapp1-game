//Variables for 1 square
let selectedParent = '';
let selectedChild = '';

//Variables for Tetrominos
let selectedParent1 = '';
let selectedChild1 = '';

let selectedParent2 = '';
let selectedChild2 = '';

let selectedParent3 = '';
let selectedChild3 = '';

let selectedParent4 = '';
let selectedChild4 = '';

//Variables for stack test
let nextParent1 = '';
let nextParent2 = '';
let nextParent3 = '';
let nextParent4 = '';



function colorSquare() {
  const selectedSquare = document.querySelector('#r1 #s5');
  selectedSquare.style.backgroundColor = ('black');
  selectedSquare.setAttribute('class', 'active square');

  selectedParent = 'r1';  
  selectedChild = 's5';
}
/* colorSquare();
 */



function colorTetrominoO() {
  const selectedSquare1 = document.querySelector('#r1 #s5');
  selectedSquare1.style.backgroundColor = ('black');
  selectedSquare1.setAttribute('class', 'active1 square');
  selectedParent1 = 'r1';
  selectedChild1 = 's5';

  const selectedSquare2 = document.querySelector('#r1 #s6');
  selectedSquare2.style.backgroundColor = ('black');
  selectedSquare2.setAttribute('class', 'active2 square');
  selectedParent2 = 'r1';
  selectedChild2 = 's6';

  const selectedSquare3 = document.querySelector('#r2 #s5');
  selectedSquare3.style.backgroundColor = ('black');
  selectedSquare3.setAttribute('class', 'active3 square');
  selectedParent3 = 'r2';
  selectedChild3 = 's5';

  const selectedSquare4 = document.querySelector('#r2 #s6');
  selectedSquare4.style.backgroundColor = ('black');
  selectedSquare4.setAttribute('class', 'active4 square');
  selectedParent4 = 'r2';
  selectedChild4 = 's6';
}
colorTetrominoO();



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



/* function goUp() {
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
 */

function goDown() {

  const selectedSquare1 = document.querySelector('.active1');
  const selectedSquare2 = document.querySelector('.active2');
  const selectedSquare3 = document.querySelector('.active3');
  const selectedSquare4 = document.querySelector('.active4');

  console.log("executed goDown");

  if (selectedParent1 === 'r20' || selectedParent2 === 'r20' ||
  selectedParent3 === 'r20' || selectedParent4 === 'r20') {
    selectedSquare1.setAttribute('class', 'stacked square');
    selectedSquare2.setAttribute('class', 'stacked square');
    selectedSquare3.setAttribute('class', 'stacked square');
    selectedSquare4.setAttribute('class', 'stacked square');
    
    colorTetrominoO();      //Keeps active square from leaving grid and freezes it

  } else if (selectedParent1 !== 'r20' || selectedParent2 !== 'r20' ||
  selectedParent3 !== 'r20' || selectedParent4 !== 'r20') {   //If runs on r20 - ERROR
    const stackTest1 = selectedSquare1.parentNode.nextElementSibling;
    nextParent1 = stackTest1.getAttribute('id');
    const nextSquare1 = document.querySelector(`#${nextParent1} #${selectedChild1}`);
    const test1 = nextSquare1.getAttribute('class');   //gets the class of the next square

    const stackTest2 = selectedSquare2.parentNode.nextElementSibling;
    nextParent2 = stackTest2.getAttribute('id');
    const nextSquare2 = document.querySelector(`#${nextParent2} #${selectedChild2}`);
    const test2 = nextSquare2.getAttribute('class'); 

    const stackTest3 = selectedSquare3.parentNode.nextElementSibling;
    nextParent3 = stackTest3.getAttribute('id');
    const nextSquare3 = document.querySelector(`#${nextParent3} #${selectedChild3}`);
    const test3 = nextSquare3.getAttribute('class'); 

    const stackTest4 = selectedSquare4.parentNode.nextElementSibling;
    nextParent4 = stackTest4.getAttribute('id');
    const nextSquare4 = document.querySelector(`#${nextParent4} #${selectedChild4}`);
    const test4 = nextSquare4.getAttribute('class'); 

    if (test1 === 'stacked square' || test2 === 'stacked square' ||
    test3 === 'stacked square' || test4 === 'stacked square' ) {       //tests if the next square is already stacked and freezes
      selectedSquare1.setAttribute('class', 'stacked square');
      selectedSquare2.setAttribute('class', 'stacked square');
      selectedSquare3.setAttribute('class', 'stacked square');
      selectedSquare4.setAttribute('class', 'stacked square');

      colorTetrominoO();   //need to add function for random block creation

    } else {
      selectedSquare3.style.backgroundColor = ('rgb(196, 242, 222)');
      selectedSquare3.setAttribute('class', 'square');

      const parent3 = selectedSquare3.parentNode.nextElementSibling;
      selectedParent3 = parent3.getAttribute('id');

      selectedChild3 = selectedSquare3.getAttribute('id');   //Needed to update current square location

      const newSquare3 = document.querySelector(`#${selectedParent3} #${selectedChild3}`);
      selectedChild3 = newSquare3.getAttribute('id');
      newSquare3.style.backgroundColor = ('black');
      newSquare3.setAttribute('class', 'active3 square');


      selectedSquare4.style.backgroundColor = ('rgb(196, 242, 222)');
      selectedSquare4.setAttribute('class', 'square');

      const parent4 = selectedSquare4.parentNode.nextElementSibling;
      selectedParent4 = parent4.getAttribute('id');

      selectedChild4 = selectedSquare4.getAttribute('id');   //Needed to update current square location

      const newSquare4 = document.querySelector(`#${selectedParent4} #${selectedChild4}`);
      selectedChild4 = newSquare4.getAttribute('id');
      newSquare4.style.backgroundColor = ('black');
      newSquare4.setAttribute('class', 'active4 square');


      selectedSquare1.style.backgroundColor = ('rgb(196, 242, 222)');
      selectedSquare1.setAttribute('class', 'square');

      const parent1 = selectedSquare1.parentNode.nextElementSibling;
      selectedParent1 = parent1.getAttribute('id');

      selectedChild1 = selectedSquare1.getAttribute('id');   //Needed to update current square location

      const newSquare1 = document.querySelector(`#${selectedParent1} #${selectedChild1}`);
      selectedChild1 = newSquare1.getAttribute('id');
      newSquare1.style.backgroundColor = ('black');
      newSquare1.setAttribute('class', 'active1 square');


      selectedSquare2.style.backgroundColor = ('rgb(196, 242, 222)');
      selectedSquare2.setAttribute('class', 'square');

      const parent2 = selectedSquare2.parentNode.nextElementSibling;
      selectedParent2 = parent2.getAttribute('id');

      selectedChild2 = selectedSquare2.getAttribute('id');   //Needed to update current square location

      const newSquare2 = document.querySelector(`#${selectedParent2} #${selectedChild2}`);
      selectedChild2 = newSquare2.getAttribute('id');
      newSquare2.style.backgroundColor = ('black');
      newSquare2.setAttribute('class', 'active2 square');
    }
  } else {}
}



function goRight() {

  const selectedSquare1 = document.querySelector('.active1');
  const selectedSquare2 = document.querySelector('.active2');
  const selectedSquare3 = document.querySelector('.active3');
  const selectedSquare4 = document.querySelector('.active4');


  if (selectedChild1 === 's10' || selectedChild2 === 's10' ||
  selectedChild3 === 's10' || selectedChild4 === 's10') {
    console.log("Right border")
    return;   //Keeps active square from leaving right grid border
  } else if (selectedSquare1.nextElementSibling.getAttribute('class') === 'stacked square' ||
  selectedSquare2.nextElementSibling.getAttribute('class') === 'stacked square' ||
  selectedSquare3.nextElementSibling.getAttribute('class') === 'stacked square' ||
  selectedSquare4.nextElementSibling.getAttribute('class') === 'stacked square') {
    return;   //Keeps active square from going through a stacked square
  } else {
    selectedSquare4.style.backgroundColor = ('rgb(196, 242, 222)');   //Square4
    selectedSquare4.setAttribute('class', 'square');

    const newSquare4 = selectedSquare4.nextElementSibling;
    selectedChild4 = newSquare4.getAttribute('id');
    newSquare4.style.backgroundColor = ('black');
    newSquare4.setAttribute('class', 'active4 square');

    selectedSquare3.style.backgroundColor = ('rgb(196, 242, 222)');   //Square3
    selectedSquare3.setAttribute('class', 'square');

    const newSquare3 = selectedSquare3.nextElementSibling;
    selectedChild3 = newSquare3.getAttribute('id');
    newSquare3.style.backgroundColor = ('black');
    newSquare3.setAttribute('class', 'active3 square');

    selectedSquare2.style.backgroundColor = ('rgb(196, 242, 222)');   //Square2
    selectedSquare2.setAttribute('class', 'square');

    const newSquare2 = selectedSquare2.nextElementSibling;
    selectedChild2 = newSquare2.getAttribute('id');
    newSquare2.style.backgroundColor = ('black');
    newSquare2.setAttribute('class', 'active2 square');

    selectedSquare1.style.backgroundColor = ('rgb(196, 242, 222)');   //Square1
    selectedSquare1.setAttribute('class', 'square');

    const newSquare1 = selectedSquare1.nextElementSibling;
    selectedChild1 = newSquare1.getAttribute('id');
    newSquare1.style.backgroundColor = ('black');
    newSquare1.setAttribute('class', 'active1 square');
  }  
}

function goLeft() {

  const selectedSquare1 = document.querySelector('.active1');
  const selectedSquare2 = document.querySelector('.active2');
  const selectedSquare3 = document.querySelector('.active3');
  const selectedSquare4 = document.querySelector('.active4');


  if (selectedChild1 === 's1' || selectedChild2 === 's1' ||
  selectedChild3 === 's1' || selectedChild4 === 's1') {
    console.log("Left border")
    return;   //Keeps active square from leaving right grid border
  } else if (selectedSquare1.previousElementSibling.getAttribute('class') === 'stacked square' ||
  selectedSquare2.previousElementSibling.getAttribute('class') === 'stacked square' ||
  selectedSquare3.previousElementSibling.getAttribute('class') === 'stacked square' ||
  selectedSquare4.previousElementSibling.getAttribute('class') === 'stacked square') {
    return;   //Keeps active square from going through a stacked square
  } else {
    selectedSquare1.style.backgroundColor = ('rgb(196, 242, 222)');   //Square1
    selectedSquare1.setAttribute('class', 'square');

    const newSquare1 = selectedSquare1.previousElementSibling;
    selectedChild1 = newSquare1.getAttribute('id');
    newSquare1.style.backgroundColor = ('black');
    newSquare1.setAttribute('class', 'active1 square');

    selectedSquare2.style.backgroundColor = ('rgb(196, 242, 222)');   //Square2
    selectedSquare2.setAttribute('class', 'square');

    const newSquare2 = selectedSquare2.previousElementSibling;
    selectedChild2 = newSquare2.getAttribute('id');
    newSquare2.style.backgroundColor = ('black');
    newSquare2.setAttribute('class', 'active2 square');

    selectedSquare3.style.backgroundColor = ('rgb(196, 242, 222)');   //Square3
    selectedSquare3.setAttribute('class', 'square');

    const newSquare3 = selectedSquare3.previousElementSibling;
    selectedChild3 = newSquare3.getAttribute('id');
    newSquare3.style.backgroundColor = ('black');
    newSquare3.setAttribute('class', 'active3 square');

    selectedSquare4.style.backgroundColor = ('rgb(196, 242, 222)');   //Square4
    selectedSquare4.setAttribute('class', 'square');

    const newSquare4 = selectedSquare4.previousElementSibling;
    selectedChild4 = newSquare4.getAttribute('id');
    newSquare4.style.backgroundColor = ('black');
    newSquare4.setAttribute('class', 'active4 square');
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