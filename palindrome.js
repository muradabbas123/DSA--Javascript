x = 23;      

const isPalindrome = function(x){
    return x<0 ? false : x === +x.toString().split("").reverse().join("");
};

const res = isPalindrome(x);  

console.log(res);

