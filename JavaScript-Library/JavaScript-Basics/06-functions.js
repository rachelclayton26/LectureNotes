function pacersWon(){
    console.log("Pacers won!");
}
pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();

function addAnyTwoNumbers(x, y){
    console.log(x + y);
}
addAnyTwoNumbers(4,5);

//Declare it
function subtractTwoNumbers(firstNum, secondNum){
    console.log(firstNum - secondNum);
}

//Call it
subtractTwoNumbers(5, 7);


function fullName(first, last){
    let wholeName = first + " " + last;
    return wholeName;}
console.log(fullName("Rachel", "Clayton"));

function costOfProducts(quantity, price){
    let totalprice = 1.07 * quantity * price;
    return totalprice;
}
console.log(costOfProducts(2,88))