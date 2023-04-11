// Write a function that takes in a string and returns it when reversed
// let food = “eating”

function food(string) {

    
}
// Write a function that takes in the following array and consoles the target if it is found else
null
let num = [2,8,0,23,5,45,76]
Target = 23
function merge(array) {

    if(num.length<=1){
        return array
    }
    let middle=Math.floor(array.length/2)
    let left=array.slice(0,middle)
    let right=array.slice(middle)
    return binary(merge(left),merge(right))
    
}
function sort(left,right) {
    let emptyArray=[]
    while (left && right) {
        if(left[0]<right[0]){ 
        emptyArray.push(left.shift)
        }
        else{
            emptyArray.push(right.shift)
        }

        
    }
    console.log(emptyArray)
    return [...emptyArray,...left,...right]
    
}
let arr=[2,8,0,23,5,45,76]
console.log(arr)

function binary(array,target) {
    let left =0
    let right = array.length-1

    let middle=Math.floor(leftindex+rightindex/2)
    while (leftindex<=rightindex) {
        if(array[middle]===target){ 
        return middle
        }
        else if(array[middle]<target){ 
        left[middle] +1
        }
        
       else{
           right[middle] -1
       }
   
    }  
    let arr=[2,8,0,23,5,45,76]
    console.log(binary(array,target))
}
console.log (null)
// 3Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”


// Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
function numbers(array) {
    for (let n = 0; n < array.length; n++) {
        
     let numbers=numbers*4
        
    }
    console.log( array[n]*4);
}

