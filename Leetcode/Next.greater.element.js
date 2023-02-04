/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let nextGreater = new Map();
       let stack = [];
       for (let num of nums2) {
           while (stack.length && stack[stack.length - 1] < num) {
               let popped = stack.pop();
               nextGreater.set(popped, num);
           }
           stack.push(num);
       }
       let ans = [];
       for (let num of nums1) {
           ans.push(nextGreater.has(num) ? nextGreater.get(num) : -1);
       }
       return ans;    
   };
   
   