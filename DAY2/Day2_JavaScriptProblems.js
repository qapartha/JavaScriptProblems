// 6. Write a program to reverse a given integer number
function reverseNumber(num){
    let revNum = 0;
    //Way 1
    while(num>0){
        // Get the last number
        let lastNum = num%10 // 9
        // add a zero at the last then add the last number
        revNum= revNum * 10 + lastNum 
        // remove the last number by adding decimal before last number and removing the number by rounding
        num = Math.floor(num / 10) // Math.floor(5102.9)
    }

    //Way 2
    // revNum = String(num)
    // revNum= +revNum.split("").reverse().join("")
     return revNum;
}

console.log(reverseNumber(51029))

// 7. Write a code to replace all the spaces of the string with underscores
