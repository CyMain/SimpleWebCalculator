let equ =` `;

//23 characters

const buttons = [1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', 0, '.', '/', '='];

let leftScreenSideIndex= 0;
let rightScreenSideIndex= 0;
let lastScore = Number(localStorage.getItem('lastScore')) || 0;
let isCalled= false;

buttons.forEach((button)=>{
  if(button == '='){
    document.querySelector('.buttons').innerHTML += `
    <button onclick="
          solveEqu('${button}');
          ">
          ${button}
    </button>
  `;
  } else{
    document.querySelector('.buttons').innerHTML += `
    <button onclick="
          addToEqu('${button}');
          ">
          ${button}
    </button>
  `;
  }
})

console.log(document.querySelector('.buttons').innerHTML);

function addToEqu(value){
  if(isCalled == true){
    document.querySelector('.current-eq').innerHTML = `${lastScore}`;
    equ = ` ${lastScore}`;
    isCalled = false;
  }

  if(value == '+'||value == '-'||value == '*'||value == '/'){
    equ+=` ${value} `;
  } else{
    equ+=`${value}`;
    if(eval(equ) !== ''){
      document.querySelector('.output').innerHTML = eval(equ);
      document.querySelector('.output').classList.add('transparent');
    }
  }
  console.log(equ);
  document.querySelector('.current-eq').innerHTML = equ.substring(equ.length-23, equ.length);
  
  leftScreenSideIndex = equ.length-23;
  rightScreenSideIndex = equ.length;
}

function solveEqu(){
  try {
    document.querySelector('.output').innerHTML = eval(equ);
    console.log(eval(equ)); 
    document.querySelector('.output').classList.remove('transparent');
    localStorage.setItem('lastScore', eval(equ))
    lastScore = eval(equ);
    isCalled = true;
  } catch (error) {
    document.querySelector('.output').innerHTML = 'please complete your expression.';
    console.log('terrible equ~');
  }
  
}

function clearEqu(){
  equ = ` `;
  document.querySelector('.current-eq').innerHTML = '';
  document.querySelector('.output').innerHTML = '';
}

function equScroll(dir){
  if(dir == 'left' && leftScreenSideIndex > 0){
    document.querySelector('.current-eq').innerHTML = equ.substring(leftScreenSideIndex-1, rightScreenSideIndex-1);
    leftScreenSideIndex -= 1;
    rightScreenSideIndex -= 1;
  }
  if(dir == 'right' && rightScreenSideIndex < equ.length){
    document.querySelector('.current-eq').innerHTML = equ.substring(leftScreenSideIndex+1, rightScreenSideIndex+1);
    leftScreenSideIndex += 1;
    rightScreenSideIndex += 1;
  }
}