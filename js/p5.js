vowels=0;
word = prompt("Please enter any word");
word.toLowerCase();
for(let i=0; i < word.length; i++){
    if (word[i] == 'a') {
        vowels++;
    }
    else if (word[i] == "e"){
        vowels++;
    }
    else if (word[i] == 'i') {
        vowels++;
    }
    else if (word[i] == "o"){
        vowels++;
    }
    else if (word[i] == 'u') {
        vowels++;
    }
    else if (word[i] == "y"){
        vowels++;
    }
    }
backwards = "";
for (let i = word.length-1; i >= 0; i--)
{
    backwards += word[i];
}
if (backwards == word){
    console.log(`${word} contains ${vowels} vowel(s) and is a palindrome`);
}
else{
    console.log(`${word} contains ${vowels} vowel(s) and is not a palindrome`);
}
