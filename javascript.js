let selectedParent = 'r10';
let selectedChild = 's5';
console.log(selectedParent);
console.log(selectedChild);

function colorSquare() {
  const selectedSquare = document.querySelector('#r10 #s5');
  selectedSquare.style.backgroundColor = ('black');
  selectedSquare.setAttribute('id', 'active');
}

colorSquare();


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
  const selectedSquare = document.getElementById('active');
  selectedSquare.style.backgroundColor = ('rgb(196, 242, 222)');
  selectedSquare.setAttribute('id', `${selectedChild}`);

  const parent = selectedSquare.parentNode;
  const parent2 = parent.previousElementSibling;
  selectedParent = parent2.getAttribute('id');

  const newSquare = document.querySelector(`#${selectedParent} #${selectedChild}`);
  selectedChild = newSquare.getAttribute('id');
  newSquare.style.backgroundColor = ('black');
  newSquare.setAttribute('id', 'active');

  console.log(selectedParent);
  console.log(selectedChild);
}

function goDown() {
  const selectedSquare = document.getElementById('active');
  selectedSquare.style.backgroundColor = ('rgb(196, 242, 222)');
  selectedSquare.setAttribute('id', `${selectedChild}`);

  const parent = selectedSquare.parentNode;
  const parent2 = parent.nextElementSibling;
  selectedParent = parent2.getAttribute('id');

  const newSquare = document.querySelector(`#${selectedParent} #${selectedChild}`);
  selectedChild = newSquare.getAttribute('id');
  newSquare.style.backgroundColor = ('black');
  newSquare.setAttribute('id', 'active');

  console.log(selectedParent);
  console.log(selectedChild);
}

function goRight() {
  console.log("fireright");
  const selectedSquare = document.getElementById('active');
  selectedSquare.style.backgroundColor = ('rgb(196, 242, 222)');
  selectedSquare.setAttribute('id', `${selectedChild}`);

  const newSquare = selectedSquare.nextElementSibling;
  selectedChild = newSquare.getAttribute('id');
  newSquare.style.backgroundColor = ('black');
  newSquare.setAttribute('id', 'active');

  console.log(selectedParent);
  console.log(selectedChild);
}
function goLeft() {
  console.log("fireleft");
  const selectedSquare = document.getElementById('active');
  selectedSquare.style.backgroundColor = ('rgb(196, 242, 222)');
  selectedSquare.setAttribute('id', `${selectedChild}`);

  const newSquare = selectedSquare.previousElementSibling;
  selectedChild = newSquare.getAttribute('id');
  newSquare.style.backgroundColor = ('black');
  newSquare.setAttribute('id', 'active');

  console.log(selectedParent);
  console.log(selectedChild);
}

