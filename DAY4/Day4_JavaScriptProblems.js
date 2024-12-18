//10. Write a function to truncate a string to a certain number of letters
function truncateString(stringJS, truncNum) {
    stringJS = String(stringJS)
    return stringJS.length>truncNum? stringJS.slice(0, truncNum-3) + "..." : stringJS 

    
}
// Example
console.log(truncateString("JavaScript", 7)); // "Java..."
console.log(truncateString("JS is fun", 10)); // "JS is fun"
console.log(truncateString("JS is funny", 10)); // "JS is f..."

// 11. Write a code to truncate a string to a certain number of words
const str = "JavaScript is simple but not easy to master";
const wordLimit = 3;

console.log(str.split(" ").slice(0,wordLimit).join(" "))// "JavaScript is simple"

// 12. Create a regular expression to validate if the given input is valid Indian mobile number or not
function validateMobile(number) {
const regexMobile = /^(\+91|0)?\s?\d{10}$/;
  return regexMobile.test(str);
}

// Example
validateMobile("+919876543210"); // true
validateMobile("+91 9876543210"); // true
validateMobile("09876543210"); // true
validateMobile("9876543210"); // true
validateMobile("99876543210"); // false

//13. Write a function which returns a list of elements which contains at least one character as digit
function numInStr(arrayLst) {
    const arrayList = [...arrayLst]
    return arrayList.filter((item)=>{
        return /[0-9]/.test(item);
    })
}

// Example
console.log(numInStr(['1a', 'a', '2b', 'b']),              // ['1a', '2b']
numInStr(['abc', 'abc10']),                    // ['abc10']
numInStr(['abc', 'ab10c', 'a10bc', 'bcd']),    // ['ab10c', 'a10bc']
numInStr(['this is a test', 'test1']));         // ['test1']

// 14. Write a function which checks if a given search text is present either in the beginning of the first name or the second name
function validateName(fullName, matchName) {
    return fullName.split(" ").some((item)=>{
        return item.toLowerCase().startsWith(matchName.toLowerCase())
    }) 
}
console.log(
validateName("Nedson PETER", "pet"), // true
validateName("Peter Parker", "pet"), // true
validateName("Speter parker", "pet"), // false
validateName("John Doe Peter", "pet")
); // false

//15. Write a function to chop a string into chunks of a given length and return it as array
function stringChop (str, strChopSize = 0){
    let choppedStr = [];
    if (strChopSize>0) {
       for(let i=0; i< str.length; i+=strChopSize){
        choppedStr.push(str.slice(i, i+strChopSize));
       }
    }
    else{
        choppedStr.push(str)
    }
    return choppedStr;
}
function stringChopAnotherWay(str, size = str.length) {
    const arr = [];
    let i = 0;
    while (i < str.length) {
      arr.push(str.slice(i, i + size));
      i = i + size;
    }
    return arr;
  }

// Example
console.log(
stringChop("JavaScript"), // ["JavaScript"]
stringChop("JavaScript", 2), // ["Ja", "va", "Sc", "ri", "pt"]
stringChop("JavaScript", 3)); // ["Jav", "aSc", "rip", "t"]

// 16. Write a code to remove all the vowels from a given string
function removeVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']; // Include uppercase vowels
    let result=str.split("").filter((item)=> {!vowels.includes(item)}).join("")
    return result
}
console.log(removeVowels("I love JavaScript"))