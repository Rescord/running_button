let h;
let w;
let x;
let y;
let counter;

const arena = document.querySelector('.arena');
const btn = document.querySelector('#touchMeBtn');
const divCounter = document.querySelector('.counter1') 

function init()
{
  counter = 0;
  w = document.documentElement.clientWidth;
  h = document.documentElement.clientHeight;  
  
  btn.style.left = w / 2 - btn.clientWidth / 2 + 'px';
  btn.style.top = h / 2 - btn.clientHeight / 2 + 'px';
}



arena.addEventListener('mousemove', (e) => {
     x = e.clientX;
     y = e.clientY;
})

window.addEventListener('resize', function(event) {
    h = window.innerHeight;
    w = window.innerWidth; 
});

btn.addEventListener('mousemove', (e) => {
  let newX, newY;
  
  newX = x + ((Math.random() > 0.5)? 1 * btn.clientWidth*2 + 80 : -1 * btn.clientWidth*2 - 80);
  newY = y + ((Math.random() > 0.5)? 1 * btn.clientHeight*2 + 80 : -1 * btn.clientHeight*2 - 80)
    
  
    if(newY >= h - btn.clientHeight+4) {
        newY = h - btn.clientHeight-4 ;
    }
    if(newX >= w - btn.clientWidth+4 ) {
        newX = w - btn.clientWidth-4;
    }
    if(newX < 0) {
        newX = 0;
    }
    if(newY < 0) {
        newY = 0;
    }
  
  btn.style.left = newX + 'px';
    btn.style.top = newY + 'px';
});

document.querySelector('#touchMeBtn').onclick = (event) => {
    if(event.target.classList.contains('btn'))
    counter++;
    divCounter.textContent = "Your hits:" + " " + counter;
    
}

init();