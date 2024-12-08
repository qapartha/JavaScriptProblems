// Rev string
const firstName="partha"
let revString= [...firstName].reverse().join("")
revString = firstName.split().reverse().join("")
console.log(revString)

const line = "I dont know what to do?"
console.log(line.split(" ").reverse().join(" "))

let removeDuplicate = new Set (firstName)
console.log(removeDuplicate)
let newArray = [...removeDuplicate].join("")
console.log(newArray)

removeDuplicate = new Set ([1, 4, 5, 3])
newArray = [...removeDuplicate]
console.log(newArray)

// find the frequency of each element in the array

    //WAY 1
            const arrayList = [1,5,6,3,5,3]
            const newMapStore = new Map();
            for(const item of arrayList){
            if (newMapStore.has(item)) {
                newMapStore.set(item, newMapStore.get(item) + 1); // Increment count if item exists
            } else {
                newMapStore.set(item, 1); // Initialize count for new item
            }
            }
            for ([key, value] of newMapStore){
                console.log(`Key: ${key} value: ${value}`)
            }

    //WAY 2
            let arr = [1, 2, 2, 3, 1];
            let frequency = {};
            arr.forEach(item => frequency[item] = (frequency[item] || 0) + 1);
            // let hello = {  
            //     '1': 2,
            //     '2': 2,
            //     '3': 3
            // }
            console.log(frequency);

// print the duplicate elements of an array 
const arr1 = [1, 2, 3, 4, 2, 5, 6, 3, 7];
const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
console.log("Duplicate elements:", [...new Set(duplicates)]);
// print the elements of an array in reverse order 
// print the largest element in an array 
let max = arr1[0];
const largestNumber = arr1.filter((item)=> { 
    if(item>max){
        max = item;
    }
})
console.log("mAX" , max)
// print the smallest element in an array 
// print the sum of all the items of the array 
// sort the elements of an array in ascending order 
// find Second Largest Number in an Array 
// find Second Smallest Number in an Array 
// print Odd and Even Numbers from an Array
// remove all the white spaces in a string 
// Write a code in Java to prove that String objects are immutable 
// program to count the number of words in a string 
// program to check whether a string is a Palindrome 
// Reverse a string 
// Remove Leading zeros
// Print first letter of each word in a string
// Given a string s, find the length of the longest substring without repeating characters