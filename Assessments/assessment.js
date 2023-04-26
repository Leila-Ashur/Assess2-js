// Write a function that takes in a string and returns it when reversed
// let food = “eating”
function foods(string) {
foods=string.split("").reverse()
 return foods
   
}
let food ="eating"
 console.log(food)

// Write a function that takes in the following array and consoles the target if it is found else

let num = [2,8,0,23,5,45,76];
function merge(num){
    let middle=Math.floor(num.length/2)
    if(num.length<2){
        return num
    }
    let left=merge(num.slice(0,middle));
    let right=merge(num.slice(middle));
    return(mergeSort(left,right));
}
function mergeSort(left,right){
    let newNum=[];
    while(left.length&&right.length){
        if(left[0]<=right[0]){
            newNum.push(left.shift());
        }
        else{
            newNum.push(right.shift())
        }
    }
    return[...newNum,...left,...right];
}
let arr = [2,8,0,23,5,45,76];
console.log(merge(arr));
function search(num,target){
  let leftIndex=0;
  let rightIndex=num.length-1;
  let mid=Math.floor((leftIndex+rightIndex)/2);
  while(leftIndex<=rightIndex){
      if(target==num[mid]){
          return target
      }
      else if(target>=num[mid]){
          leftIndex=mid+1
      }
      else{
          rightIndex=mid-1
      }
  }
  return null;
}
let target = 23;
console.log(search(num,target));


// // 3Given years between 2000 and 2023, console all the leap years in the following
// // sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
// // if is divisible by 4 and 100 is not a leap year unless is divisible by 400  NOTE
for(let i=2000;i<=2023;i++){
  if(i%4==0){
    console.log(i+ "is a leap year");
  }
  else{
    console.log(i+"is not a leap year");
  }
}

// // // Write a function that takes in an array of numbers and returns an array that
// //  has all elements multiplied by 4.

let numArray = [1,2,3,4,5];
function multiply(arr){
    let newArray=[]
    for(let i=0;i<=arr.length-1;i++){
       newArray.push(arr[i]*4);
       return newArray;
}
}
multiply(numArray);


// // Given a range of numbers from 0 to 100, console”Fizz” if the numbers 
// are divisible by 3,
// // “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by
//  both 3 and 5.





 for (let numbers = 0; numbers<=100; numbers++) {
     if(numbers%3===0 && numbers%5===0){
        console.log('FizzBuzz')

    }
    else if(numbers%5===0){ 
 console.log('Buzz')
     }
     else if(numbers%3===0){
 
 console.log('Fizz');
     }
     else{
      console.log(numbers)
     }
    }
 
// // Write a function that takes in an array of strings and returns an array with
//  every element turned into a number
  // let nums = [“10”,”24”,”45”,”56”,”67”]
    function string (array) {
      return array.map(Number)
    }
    let nums=["10","24","45","56","67"]
    console.log(string(nums));
   
    
    
 