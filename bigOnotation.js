// const funnyNum = function(arr){ //4 operation
//     for (let i = 0; i < arr.length; i++) {
//                 if(i===3)return arr[i];
//     }
// }

const funnyNum = function(arr){ //1 operation
   return arr[3];
    }



    const num = [1,43,21,443,21,3];

    console.time("funnyNum")
    console.log(funnyNum(num));
    console.timeEnd("funnyNum")
