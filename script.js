console.log("Lets Start the Tic-Tac-Toe");
let ping = new Audio("ting.mp3")
//Initial turn
let turn = "X";
// function for changing turn
let isgameover = false

const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

let cnt=0;
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('more-box');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.textr').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.yaar').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.yaar').getElementsByTagName('img')[0].style.length = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
            cnt=0;
            return true;
        }
    })
    return false;
}

let boxes = document.getElementsByClassName("box-content");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.more-box');
        element.addEventListener('click', ()=>{
            if(boxtext.innerText === '' && !isgameover){
                boxtext.innerText = turn;
                turn = changeTurn();
                ping.play();
                let m = checkWin();
                cnt++;
                if(m===false && cnt===9){
                    document.getElementsByClassName('textr')[0].innerText  = "Its a Tie";
                    isgameover=true;
                }
                if (!isgameover){
                    document.getElementsByClassName('textr')[0].innerText  = "Turn for " + turn;
                } 
            }
        })
    
})


reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.more-box');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    document.getElementsByClassName('textr')[0].innerText  = "Turn for X";
    document.querySelector('.yaar').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.yaar').getElementsByTagName('img')[0].style.length = "0px";
    document.querySelector('.line').style.width = "0vw";
    isgameover = false;
    cnt=0;
})

