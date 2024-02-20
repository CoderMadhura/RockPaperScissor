let userScore=0;
let compScore=0;

const msg=document.querySelector(".msg");

const U_Score=document.querySelector(".U-score");
const C_Score=document.querySelector(".C-score");


const compMove=document.querySelector(".compMove");



 const Winner= (userWin)=>
 {  
  if(userWin)
  {
  console.log("You Win!");
  msg.innerText=" 🥳 Bravo ,You Win ! 🤩 ";
  msg.style.color="green";
  userScore++;
  U_Score.innerText=userScore;


}
else
{
  console.log("You Lose");
  msg.innerText=" 😕 Opps! You Lose 😓 ";
  msg.style.color="red";
  compScore++;
  C_Score.innerText=compScore;
}
}



const gen_CompChoice= ()=>
{
    const options=["rock","paper","scissor"];
     let index=Math.floor(Math.random()*3);
     var compSrc=options[index];
     document.querySelector(".compImg").setAttribute("src",compSrc+'Comp.png');
     return compSrc;

}


const playGame= (userChoice)=>
{
   console.log("userChoice=",userChoice); 
    const compChoice= gen_CompChoice();
  console.log("compChoice",compChoice);

  if(userChoice===compChoice)
  {
    console.log("draw,Play again");
    msg.innerText="Game Draw , Play again! 😄 ";
    msg.style.color="black";
  }

  else
  {

    let userWin=true;
    if(userChoice==="rock")
    {
     userWin = compChoice==="paper"? false:true;       // paper/scissor
    }
    else if(userChoice==="paper")
    {
      userWin= compChoice==="scissor"? false:true;     // scissor/rock
    }
    else if(userChoice==="scissor")
    {
      userWin=compChoice==="rock"? false:true;      // rock/paper
    }
    Winner(userWin);

  }
  
}

const choices=document.querySelectorAll("button");

choices.forEach((button)=>
{
    button.addEventListener("click",()=>
    {  const userChoice=button.getAttribute("id");
       console.log("choice was clicked",userChoice);

       var userSrc=userChoice+"User.png";
       document.querySelector(".userImg").setAttribute("src",userSrc);
      
       
       playGame(userChoice);
    });
    
});




