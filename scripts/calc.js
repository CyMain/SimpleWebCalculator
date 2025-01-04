let equ = localStorage.getItem('equation')||` `;

function addToEqu(value){
  if(value == "+"||value == "-"||value == "*"||value == "/"){
    equ+=` ${value} `
  } else{
    equ+=`${value}`;
  }

  document.querySelector('.current-eq').innerHTML = equ;
}

alert("HEELOOOO!!!")