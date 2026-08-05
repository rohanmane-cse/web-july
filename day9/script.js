// console.log("hello world");
let a=10;
let cout=0;
for(let i=0;i<a;i++){
    cout+=i;
}
console.log(cout);
let b=10;
typeof b;
let temp=typeof b;
function checkType(temp){
    if(temp=="number"){
        console.log("this is number");
    }
    else if(temp=="string"){
        console.log("this is string");
    }
    else{
        console.log("this is not number or string");
    }
}
checkType(temp);
let c=10;
let d=20;
if(c>d){
    console.log("c is greater than d");
}
else if(c<d){
    console.log("c is less than d");
}
else{
    console.log("c is equal to d");
}   

function checkEvenOdd(num){
    if(num%2==0){
        console.log("this is even number"); 
    }else{
        console.log("this is odd number");
    }
}
checkEvenOdd(10);
// oops
let person={
    name:"rohan",
    age:20,
    city:"pune",
    isMarried:false,
    hobbies:["cricket","football","coding"],
    address:{
        street:"abc",
        city:"pune",
        state:"maharashtra"
    }
}
let person2={
    matrix:[2,3,4,5,6],
    add:function(a,b){
        return a+b;
    }   
}
for(let i=0;i<person2.matrix.length;i++){
console.log(person2.matrix[i]);
}
// making array of objects
let persons=[1,2,3,6,7,8,45]
let count=0;
for(let i=0;i<persons.length;i++){
    console.log(persons[i]);
    count++;

}
console.log(count);
// how to max value and min value of array and 2nd large and small digit
function findMaxMin(arr){
    let max=arr[0];
    let min=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
        if(arr[i]<min){
            min=arr[i];
        }
    }
    console.log("max value is "+max);
    console.log("min value is "+min);
}
findMaxMin([1,2,3,4,524,35,350,9,10]);
