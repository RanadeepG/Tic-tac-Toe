let boxs= document.querySelectorAll(".box");
let winComb= [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 4, 8],
    [2, 4, 6],
    [1, 4, 7],
    [2, 5, 8]
];
let msg= document.querySelector("H2");
let newGame= document.querySelector(".new");
let reset= document.querySelector(".reset");
let marker= true;
let counter=0;

boxs.forEach((box) =>{
    box.addEventListener("click", () =>{
        if(marker===true){
            box.innerText="X";
            marker= false;
        }else{
            box.innerText="O";
            marker= true;
        }
        
        counter++;
        
        box.disabled = true;
        checkWinner(counter);

    })
    
})



let disabling=() =>{
    for(let box of boxs){
        box.disabled= true;
    }
}

let winner=(position1) =>{
    
    msg.innerText=`Winner is ${position1}`; 
    msg.setAttribute("class","");
}

let checkWinner= ()=>{
    for(let pattern of winComb){
        let position1= boxs[pattern[0]].innerText;
        let position2= boxs[pattern[1]].innerText;
        let position3= boxs[pattern[2]].innerText;

        if(position1!="" && position2!="" && position3!=""){
            if(position1==position2 && position2==position3){
                winner(position1);
                disabling();
            }else if(counter===9){
        
                msg.setAttribute("class","");
                msg.innerText="GAME DRAWN";
                counter=0;
            }
            
                
        }
    }
}


newGame.addEventListener("click",()=>{
    for(let box of boxs){
        box.innerText="";
        box.disabled= false;
    }
    marker= true;
    counter=0;
    msg.setAttribute("class","hide");
})

reset.addEventListener("click", () =>{
    for(let box of boxs){
        box.innerText="";
        box.disabled= false;
    }
    counter=0;
    marker=true;
})