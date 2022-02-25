// Pin generating function

function generatePin(){
    const pin = Math.round(Math.random()*10000);
    pinString = pin + '';
    if (pinString.length == 4){
        document.getElementById('display-pin').value = pin;
    }
    else{
        generatePin();
    }
   
}

// Pin input key click handler event delegate

function keyClicked(event) {
    document.getElementById('');
}