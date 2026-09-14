function sumAll(num){
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
       sum +=num[i];   
    }
    return sum;
};

console.log(sumAll([1,3,4,1,23,24,2,42,4,2,42,34,2,42]));