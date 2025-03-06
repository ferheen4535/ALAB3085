console.log(`---Part 1---`)
console.log(`45, 68, 53, 25`)
//Take an array of numbers and return the sum.//
function sumArray(ArrayOfNumbers) {
    let sum = 0;      //array of numbers will loop through zero to add up to the summ//
    for(let num of ArrayOfNumbers) {
      sum += num;                 //add number

    }
    return sum;
}
   console.log('Sum of Array is:', sumArray([45, 68, 53, 25]));
   //sum = 191//

   //Take an array of numbers and return the average.//

   function getAverageofArray(ArrayOfNumbers)   {          //declared I want to get the average of the numbers//
   let totalSum = sumArray(ArrayOfNumbers); {            //take the sum of the array//
       count = ArrayOfNumbers.length; 
    }                                                     //take the count of numbers//
      return totalSum / count;                              //divide sum of array / count of array//

   }
 console.log(`Average of the array is:`, getAverageofArray([45, 68, 53, 25]));   

 //source: stackoverflow//

 //Take an array of strings and return the longest string.//

 function longestString(ArrayOfNumbers) {   //declare what are we solving//
     let largest = ArrayOfNumbers[0];   
    for (const num of ArrayOfNumbers) {   //loop through array of numbers//
      if (num > largest) {
        largest = num;

      }
    }
    return largest;
          
         }
         console.log(`Longest string in the array is:`, longestString([45, 68, 53, 25]));
        

 
//Take an array of strings, and a number and return an array of the strings that are longer than the given number. //
let arr = ["Coding", "is", "fun"];
let num = 5;
function returnLargerArray(arr , num) {   //declare we want to find array elements larger than 5//
  return arr.filter(function (word) {      //filter through the words to find the lon
    return word.length > num;           //if the words are longer than 5 letter//
});
}
console.log(returnLargerArray( ["Coding", "is", "fun",], 5))   //code

///Take a number, n, and print every number between 1 and n without using loops. Use recursion.//

let rNum = 5
printRecursiveNum(num,1);
function printRecursiveNum(num,currentValue) { 
  if (currentValue>num) { 
      return; 
  } 
  console.log(currentValue); 
  printRecursiveNum(num, currentValue + 1); 
} 


//source: https://www.geeksforgeeks.org/ //
 //source: stackoverflow//


console.log("---Part 2---")

csvData = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

  const sortByage = (a,b) => {
    return a.age 
  };

  csvData.sort(age);

  console.log(sortByage);