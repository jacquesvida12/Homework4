min = 1;
max = 100;
const randomnumber = (Math.floor(Math.random()*(max-min+1)+min));
i=1;

const guessgame = (val) => {
    while (true) {
        guess = Number(prompt("Please guess a number!"))
        if (val === guess) {
            console.log(`Congratulations you have guessed the right number on attempt ${i}!`);
            break;
        }
        else if (guess > val){
            console.log("Sorry your guess was too High, Please try again!");
            i++;
        }
        else if (guess < val){
            console.log("Sorry your guess was too low, Please try again!");
            i++;
        }
        
    }

}
console.log(`${randomnumber} is the answer so you can proofcheck`);
guessgame(randomnumber);