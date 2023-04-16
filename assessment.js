// Write a function that takes in a string and returns it when reversed
// let food = “eating”
function foods(string) {
foods=string.split("").reverse()
 return foods
   
}
let food ="eating"
 console.log(food)

// Write a function that takes in the following array and consoles the target if it is found else
null

let num = [2,8,0,23,5,45,76]
function merge(array) {

    if(array.length<=1){
        return array
    }
    let middle=Math.floor(array.length/2)
    let left=array.slice(0,middle)
    let right=array.slice(middle)
    return sort(merge(left),merge(right))
    
}
function sort(left,right) {
    let emptyArray=[]
    while (left.length && right.length) {
        if(left[0]<right[0]){ 
        emptyArray.push(left.shift())
        }
        else{
            emptyArray.push(right.shift())
        }

        
    }
    
    return [...emptyArray,...left,...right]
    
}
let array=[2,8,0,23,5,45,76]
console.log(merge(array))



function binary(array,target) {
    let left =0
    let right = array.length-1

  
    while (left<=right) {
        let middle=Math.floor(left+right/2)
        if(array[middle]===target){ 
        return middle
        }
        else if(array[middle]>target){ 
        right=middle -1
        }
        
       else{
           left=middle +1
       }
   
    }  
   return null 
}
 let arr=merge(array);
let target=23
    console.log(binary(array,target))

// 3Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
// if is divisible by 4 and 100 is not a leap year unless is divisible by 400  NOTE
for (let i = 2000; i <= 2023; ) {
    i++
    if(i%4===0){
        console.log(i + "is  a leap year")
    }
    else{
        console.log(i + "is not a leap year")
    }
   
}


// Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
function multiply(arr1) {
  const result = [];
  
  for(let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] * 4);
  }
  
  return result;
}
  

// Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
for (let numbers = 0; numbers<=100; numbers++) {
    if(numbers%3===0,numbers%5===0){
        console.log('FizzBuzz')

    }
    else if(numbers%5==0){ 
console.log('Buz')
    }
    else{
(numbers%3===0)
    }
    
}
// Write a function that takes in an array of strings and returns an array with every element
// turned into a number
// let nums = [“10”,”24”,”45”,”56”,”67”]
 function arrNums(array) {
    
    
 }

