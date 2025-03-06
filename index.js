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
        

      
      //loop starting first element in the array//
 