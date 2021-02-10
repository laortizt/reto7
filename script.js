const textEl = document.getElementById('text') /*se agrega text */ 
const speedEl = document.getElementById('speed') /*se agrega speedEL*/ 
const text = 'We Love Programming!'  /*aqui */ 
let idx = 1
let speed = 300 / speedEl.value /*se agrega 300*/ 

writeText()

function writeText(){
    textEl.innerText  = text.slice(0, idx)  /*se agrega text.slice(0, idx) */ 
    idx++

    /*se agrega .length */  
    if(idx > text.length) { 
        idx = 1
    }

    setTimeout(writeText, speed) /*writeText, speed */ 
}

/*aqui*/ 
speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)