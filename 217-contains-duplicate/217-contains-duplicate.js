/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var flag = false;
    for(var i=0; i < nums.length; i++){
        if( nums.includes(nums[i]) && nums.indexOf(nums[i]) != i ) {
            flag = true ;
            break;
        }
        else flag = false
    }
    return flag;
};