// 7. Write a code to replace all the spaces of the string with underscores
let sentence = "Marry had a little lamb"
let newSentence= sentence.split(" ").join("_")
console.log(newSentence)

// 8. Write a function which can convert the time input given in 12 hours format to 24 hours format
let convertTo24HrsFormat = (time)=> {
let hours = time.split(":")[0]
let min = time.split(":")[1].slice(0,-2)
if(time.includes("AM")){
    hours= hours == 12 ? "0" : hours
}
else if(time.includes("PM")  ){
    hours= hours == 12 ? hours : String(+hours + 12)
}
return hours.padStart(2, 0)+":"+min.padStart(2,0);
}

console.log(convertTo24HrsFormat("12:10AM")); // 00:10 
console.log(convertTo24HrsFormat("5:00AM")); // 05:00
console.log(convertTo24HrsFormat("12:33PM")); // 12:33
console.log(convertTo24HrsFormat("01:59PM")); // 13:59
console.log(convertTo24HrsFormat("11:8PM")); // 23:08
console.log(convertTo24HrsFormat("10:02PM")); // 22:02 

// 9. Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'

let getTheGapX = (sentence) => {
    sentence = String(sentence)
    const firstIndex=sentence.indexOf("X")
    const lastIndex=sentence.lastIndexOf("X")
    return  lastIndex == -1 || firstIndex == -1 || firstIndex == lastIndex ? -1 : lastIndex - firstIndex
};

// Example
console.log(getTheGapX("XeroX")); // 4
console.log(getTheGapX("Xamarin")); // -1       (If there is only single character 'X')
console.log(getTheGapX("JavaScript")); // -1       (If there is no character 'X')
console.log(getTheGapX("F(X) !== G(X) !== F(X)")); // 18