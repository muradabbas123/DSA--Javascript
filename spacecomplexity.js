function sumAll(num){ //O(1) space complexity
    let sum = 0; //no matter what input is it will return single output
    for (let i = 0; i < num.length; i++) {
       sum +=num[i];   
    }
    return sum;
};

console.time("sumAll")
console.log(sumAll([1,3,4,1,23,24,2,42,4,2,42,34,2,42])); 
console.timeEnd("sumAll")

function updateArr(n){ //O(n) space complexity
    array = []; //output changes with respect to input determined
    for (let i = 0; i < n; i++) {
        array.push(i*69);
    }
    return array;
}

console.time("updateArr")
console.log(updateArr(10))
console.timeEnd("updateArr")

//o(n^2) exponential space complexity 

function createMatrix(n){ //exponential increase
    let matrix = [];
    for (let r = 0; r < n; r++) {
        matrix[r]=[];
    for (let i = 0; i < n; i++) {
        matrix[r][i]= i+r;
    }
    }
    return matrix;

}

const matrix = createMatrix(5);

console.time("matrix");
console.log(matrix);
console.timeEnd("matrix");