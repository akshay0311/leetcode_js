/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    let sum = 0;
    arr.map((a) => sum+=a);
    if (sum % 3 !== 0) return false
    let partionSum = sum/3;
    let count = 0, acc = 0;
    for (let i = 0; i < arr.length; i++) {
        acc+=arr[i];
        if (acc === partionSum) {
            count+=1;
            acc = 0;
        }
        if (count > 2) return true;
    }
    return false;
};

let arr = [0,2,1,-6,6,-7,9,1,2,0,1]

console.log(canThreePartsEqualSum(arr));