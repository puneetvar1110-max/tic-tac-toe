const tic = document.querySelector(".tic")
const boxes = document.querySelectorAll(".box")
const head = document.querySelector(".tictac")
const reset = document.querySelector(".reset")
let sign = "X"
let count = 0
let gameover = false

let winning = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]




function start(e){
    if(e.target.className == "box"){
    if(e.target.innerText == ""){
        if(gameover){
            return;
        }
        
        if(sign === "X"){
        
        e.target.innerText = sign;
        
        
        sign = "O"
        
        }else{
            
            e.target.innerText = sign;
            sign = "X"
        }
        winner();
        count++
       if(count === 9 && gameover === false){
        head.innerText = "Match Draw"
         for(let box of boxes){
        
        box.style.borderColor = "grey"
    }
       }
    }
    }


}




tic.addEventListener('click',start)

function winner(){
for(let pattern of winning){
    let val0 = boxes[pattern[0]].innerText
    let val1 = boxes[pattern[1]].innerText
    let val2 = boxes[pattern[2]].innerText
    // console.log(val0 , val1 , val2);
    if(val0 !== "" && val1 !== "" && val2!== "" && val0 == val1 && val1 == val2 ){
        
           for(let index of pattern){
            boxes[index].style.backgroundColor = "red"
           }
            head.innerText= `The Winner is ${val0}`
           gameover = true
             
        }
        
}
}

reset.addEventListener("click",function(e){
    count= 0
    sign = "X"
    gameover = false
    for(let box of boxes){
        box.innerText = ""
        box.style.backgroundColor = ""
        box.style.color = ""
        box.style.borderColor = ""
    }
    head.innerText = "Tic Tac Toe"
    

})