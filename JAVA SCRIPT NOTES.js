JAVA SCRIPT NOTES





// Count occurences of a word 


let textBoxWord = textBox.value.toLowerCase();
  function countOccurences(string, word) {
    return string.split(word).length - 1;
 }
 var text=sentence.innerText.toLowerCase();
 var count=countOccurences(text,textBoxWord);
 alert ('The word "'+textBoxWord.toUpperCase()+'" shows up ' + count + ' times.');


//  textboxword is the word being searched, sentence.innerText is the text you are looking through for said 
//  word. and alert shows how it is to function


// find whether a word appears in text
if (sentence.innerText.toLowerCase().includes(textBox.value.toLowerCase())){

  

    searchResults.innerHTML=("found!")
  } else {
    
    
    searchResults.innerHTML=("nope!")}
//   sentence.innerText is sentences looking through, textbox.value is word in question that was typed, lowercase 
//  everything so make it easier. searchResults.innerHTML changes in the id within html


// audio
// below is finding the id of audio file within html
const swishSound = document.getElementById("swish")
//  below has a function waiting for click to play the audio 
resetButton.addEventListener("click", function () {
    swishSound.play(); })


// If the counter drops below 10, change the text color to black:
            if(newCounterValue < 9){
                counter.style.color = "black";
              }


// counter starts at 1, const states counterisperefect square if it equals a number, that is an
// an integer, doing math(.squareroots(starting at counter 5))

let counter5 = 1
while (counter5 <=100){

 const counterIsPerfectSquare = Number.isInteger(Math.sqrt(counter5))
  if(counterIsPerfectSquare)  
  console.log(counter5)
    counter5 +=1
}



// arrays

// word below is where we will look for letter in this case z
let word = 'rhetorically'; 
let letter = 'z'; 
let index = 0;
let letterCount= 0;
const body = document.querySelector("body");
// while loop to search the word[index being the number of the letter starting with 0]
// logging to console to verify code is working
// word.length will go to the last letter in the length'
// x is the letter associated with index number
// if states if x =letter then count it
while (index < word.length){
   let x = word[index];
   index ++;
   console.log(index);
   if (x === letter){
      letterCount += 1;
   }
   
}
// below shows if we have a letter that matches count will be greater then or equal to 1,
// add the letter bla blah blha to the body.innnerhtml if not then add its not there
console.log(letterCount);
if (letterCount >= 1){
   body.innerHTML = ('<p>the letter '+ letter + ' is here ' + letterCount + " times. </p>")
   } else {
      body.innerHTML = ('<p>the letter '+ letter + ' is not here . </p>')
   } 
   
