var parent = function(n){
    console.time("parent")

    console.log("get started");

var loop1 = function(){
    console.time("loop1")
    for (let i = 0; i < n; i++){
        console.log(i); 
    }
    console.timeEnd("loop1")
};

console.log("goingreverse");

var loop2 = function(){
    console.time("loop2")

    for (let j = n - 1; j >= 0; j--){
        console.log(j)
    }
    console.timeEnd("loop2")

}


loop1();
loop2();    
    console.timeEnd("parent")
}

// parent(10);


function printBoth(n){
    for(i=0; i<n; i++){ //operation n*n bad time complexity
        for(j=0; j<n; j++){
console.log(i,j);
        }
    }
}
// console.log(printBoth(5));

const constantTimeComplexity = function(n){
    return 2+(n+5)*n/2; //0(1) operation 1 best time complexity
}

// console.log(constantTimeComplexity(5));

//Space complexity 

// => Amount of memory an algorithm needs to run