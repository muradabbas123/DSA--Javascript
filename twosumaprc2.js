const twoSum = function(nums,target){
    //num = [1,3,4,7]
   var obj ={};

   for (let i = 0; i < nums.length; i++) {
    n = nums[i];
    
   if(obj[target-n]>=0){
    return[obj[target-n], i]
   } else {
    obj[n] =i;
   } 
   }
};
console.log(twoSum([2,7,4,6,7,8,2,3], 7))