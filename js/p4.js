let words = [];

while(true) {
    let word = prompt("Please add a word the enter, type stop when finished:");

    if (word.toLowerCase() === "stop" && words.length === 0){
        console.log("No words to display, stop was entered first")
        break;
    }
    else if (word.toLowerCase() === "stop") {
        console.log(`You entered the following words: ${words}`);
        break;
    }
    else {
        words.push(word);
    }
    
}