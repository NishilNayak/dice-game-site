if (window.performance.navigation.type === 1) {

var randomNum1 = Math.floor(Math.random() * 6)+1;
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNum1 + ".png");
var randomnNum2 = Math.floor(Math.random() * 6)+1;
document.querySelector(".img2").setAttribute("src", "images/dice" + randomnNum2 + ".png");

if(randomNum1>randomnNum2){
    document.querySelector("h1").textContent=" ✌️ Player 1 wins";
};
if(randomNum1<randomnNum2){
    document.querySelector("h1").textContent="Player 2 wins ✌️ ";
};

if(randomNum1==randomnNum2){
    document.querySelector("h1").textContent="Draw";
};
};