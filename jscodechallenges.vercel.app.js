// 1. Swap two integers present in variables num1 and num2 without using temporary variable
    console.log(`Question 1:`)
    let numOne = 10 , numTwo = 20

    // Solution #1
    numOne = numTwo+numOne
    numTwo = numOne-numTwo
    numOne = numOne-numTwo
    console.log(`numOne= ${numOne}, numTwo=${numTwo}`)

    //Solution #2
    {[numTwo, numOne] = [numOne, numTwo]}
    
    console.log(`numOne= ${numOne}, numTwo=${numTwo}`)

    console.log(`----------------------------------------------------------`)

//2. Write a function which returns true if given value of number is an integer without using any inbuilt functions
    console.log(`Question 2:`)
    
    let isInt = (num)=> {return (num % 1 === 0)? true : false}
    console.log(`isInt: ${isInt(5)}`)
    console.log(`isInt: ${isInt(5.4)}`)

    console.log(`----------------------------------------------------------`)

// 3. Create a function which returns a random number in the given range of values both inclusive
    console.log(`Question 2:`)
    let randomNumber = function(start, end){
        return start + Math.round(Math.random() * (end - start))
    }
    console.log(`Random number: ${randomNumber(5,60)}`)

    console.log(`----------------------------------------------------------`)
// 4. Write a program to reverse a string
    let firstName= "Buront's Kitty and (*)(*)"

    function reverseString(firstName){
        // Way 1
        
        for(let i=firstName.lenght()-1; i<=0; i--){
            reverseString=+ firstName.charAt(i)
        }
        for(let i =0; i<=firstName.lenght-1; i++){
            reverseString= firstName+reverseString
        }
        // Way 2
        let reverseString = firstname.split("").reverse().join("")
        console.log(firstName)
    }
    
    
    //5. Write a program to reverse a string by words. Also show the reverse of each words in place

    firstName= "Hello World"
    function reverseStringPartbyPart(name){
        let listOfWords = name.split(" ") // Splited into an array

        //Way 1
        // for(let i=0; i<listOfWords.length; i++){ //3 times
        //     let word = listOfWords[i]
        //     let reversedWord=""
        //     for(let j=0; j<word.length; j++){
        //         reversedWord=word[j]+reversedWord
        //     }
        //     listOfWords[i]=reversedWord
        // }
        // return listOfWords.join(" ")

        //Way 2
        name
        .split(" ") // Splits each words and keep in array 
        .map((val) => val.split("").reverse().join("")) // map to modify each words in array, reverse it and join it together and stroe it
        .join(" "); // "tpircSavaJ si emosewa" [Then join the words together]
        
    }
    console.log(reverseStringPartbyPart(firstName))


