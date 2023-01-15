let firstcard=getrandomcard()
let secondCard=getrandomcard()
//let firstcard=5
//let secondCard = 15
let card = [firstcard,secondCard]
let sum= firstcard+secondCard
//console.log(sum)
let hasblackjack=false
let isalive=true
let message = " "
let messagett=document.getElementById("message-tt")
let sumtt=document.getElementById("sum-tt")
let cardbb=document.getElementById("card-bb")

let player=
{
    name:"mohammad",
    chips:123

}

let playermm=document.getElementById("player-mm")
playermm.textContent=player.name+ " $ "+player.chips

console.log(card)
function getrandomcard(){

    let randomnumber =Math.floor(Math.random()*10)+1
    if(randomnumber>10)
{
return 10

}
else if(randomnumber===1)
{
return 11

}
else 
{

    return randomnumber
}



}

function startgame()
{
    isalive=true
    let firstcard=getrandomcard()
    let secondCard=getrandomcard()
    card=[firstcard,secondCard]
    sum =firstcard+secondCard
    sumtt.textContent=("sum :")+sum
    cardbb.innerHTML =("cards :")+ card[0]+ " " +card[1]
    checkSum()

}




function checkSum()
{
    if(sum<20){

        message="Do you want to withdraw a card again?🙂"
     
     }
     else if(sum ===20){
     
     message="wow,you have got blackjack🥳"
     hasblackjack=true
     isalive=false
     
     }
     else {
     message="game over😭"
     isalive=false

     }

     sumtt.textContent=("sum :")+sum
    messagett.textContent=message


}
function newcard()
{
    if(isalive === true && hasblackjack ===false )
    {
        let card=getrandomcard()
        sum +=card
        console.log(card)
        cardbb.innerHTML += " " + card;
        checkSum()
    }

}




