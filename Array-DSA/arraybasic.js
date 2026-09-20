// declaration of array
let arr1 = new Array();

let human = {
    name: "Muradabbas",
    age: 25,
};

// easier way 
let arr2 = ["apple" , "banana" , "orange", human];
// index starts from 0 ,1,2,3,4,5,..n
// store any data type object also
// console.log(arr2[2]);
// console.log(arr2[3].age);

// to find the length of array simple write .length 
// console.log(arr2.length)

// add and remove element array

//add element at the end
// arr2.push("MURADABASSBHAT");
// console.log(arr2);

//remove last element from the array

// arr2.pop();
// arr2.pop();
// console.log(arr2);


//shift and unshift 



// add to top of the array (0 index)
// arr2.unshift("first");
// console.log(arr2);

// remove the first element
// arr2.shift();
// console.log(arr2);


//looping on array

// let arr2 = ["apple" , "banana" , "orange", human];

for (let i = 0; i < arr2.length; i++) {
    // console.log(arr2[i]);
}

let i = 0;
while(i < arr2.length){
    //  console.log(arr2[i]);
    i++;
}

//in build loop methods


// const new2num = numbers.map(function(num){
//     return num*2;
// });
// console.log(new2num);

// const new2num = numbers.map(function(item , index , array){
//     return item*2;
// });
// console.log(new2num);

// const new3num = numbers.filter(function(item , index , array){
//     return item > 4;
// });
// console.log(new3num);

const numbers = [1,2,3,4,5,6,7,8,9,1,2,311,2332,22];

const sum = numbers.reduce(function(prev , item
)
{
return prev + item
});

console.log(sum);