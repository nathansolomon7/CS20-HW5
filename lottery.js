
var pick = [5];

for( i = 0; i < 5; i++){
    //The maximum is exclusive and the minimum is inclusive
    pick[i] = Math.round(Math.random() * (48 - 1) + 1); 
    
}
// console.log("pick pre sorting: " + pick);

var myBall = Math.round(Math.random() * (18 - 1) + 1); 
console.log("myBall: " + myBall);


var winningCombo = [12,15,24,35,48];
winningLuckyBall = 3;
numMatches = 0;

//printing out the user's pick values
document.getElementById('picksInfo').innerHTML = "Your picks before sorting: <br>";
for( i = 0; i < 5; i++){
    if(i == 4) {
        document.getElementById('picksInfo').innerHTML += "<strong>" + pick[i] + "<br>";
    }
    else{
        document.getElementById('picksInfo').innerHTML += "<strong>" + pick[i] + ", ";
    }
    
}

pick.sort();
//printing out the user's pick sorted values
document.getElementById('picksInfo').innerHTML += "Your picks after sorting: <br>";
for( i = 0; i < 5; i++){
    if(i == 4) {
        document.getElementById('picksInfo').innerHTML += "<strong>" + pick[i] + "<br>";
    }
    else{
        document.getElementById('picksInfo').innerHTML += "<strong>" + pick[i] + ", ";
    }
    
}
document.getElementById('picksInfo').innerHTML += "Your lucky ball pick: " + "<strong>" + myBall + "<br>";


document.getElementById('winningInfo').innerHTML += "The winning numbers: <br>";
//printing out the winning picks
for( i = 0; i < 5; i++){
    if(i == 4) {
        document.getElementById('winningInfo').innerHTML += "<strong>" + winningCombo[i] + "<br>";
    }
    else{
        document.getElementById('winningInfo').innerHTML += "<strong>" + winningCombo[i] + ", ";
    }
}

document.getElementById('winningInfo').innerHTML += "Winning Lucky Ball: " + "<strong>" + winningLuckyBall + "<br>";



//counting how many matches the user has for their picks vs the winning picks
for(z = 0; z < 5; z++){
    for(i = 0; i < 5; i++){
        if(pick[i] == winningCombo[z]){
            numMatches++;
        }
    }
}




isLuckyBall = false;

if(myBall == winningLuckyBall){
    isLuckyBall = true;
} 




payout = "Sorry you get no payout :(";

if(numMatches == 5 && isLuckyBall){
    payout = "$7,000 a WEEK for LIFE";
}
else if(numMatches == 5 && isLuckyBall == false){
    payout = "$25,000 a YEAR for LIFE";
}
else if(numMatches == 4 && isLuckyBall){
    payout = "$5,000";
}
else if(numMatches == 4 && isLuckyBall == false){
    payout = "$200";
}
else if(numMatches == 3 && isLuckyBall){
    payout = "$150";
}
else if(numMatches == 3 && isLuckyBall == false){
    payout = "$20";
}
else if(numMatches == 2 && isLuckyBall){
    payout = "$25";
}
else if(numMatches == 2 && isLuckyBall == false){
    payout = "$3";
}
else if(numMatches == 1 && isLuckyBall){
    payout = "$6";
}
else if(numMatches == 0 && isLuckyBall == true){
    payout = "$4";
}

// printing out the results of the users picks
document.getElementById('results').innerHTML += "Number of matching picks: " + "<strong>" + numMatches + "<br>";

if(isLuckyBall){
    document.getElementById('results').innerHTML += "Your lucky ball matched!";
}
else{
    document.getElementById('results').innerHTML += "Your lucky ball did not match :(";
}

//printing out the user's payout
document.getElementById('payout').innerHTML += "<strong>" + "Your payout: " + payout;






