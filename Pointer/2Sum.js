let arr = [3, 4, 1, 2, 4, 6, 7];
let k = 90;

function TwoSum(arr, k) {
    let i = 0;
    let remain = {};
    while (i < arr.length) {
        console.log(remain);
        let r = k - arr[i];
        if (r in remain) 
            return true;
        else 
            remain[arr[i]] = true;

        i+=1
    } 
    return false;
}



let bool = TwoSum(arr, k);

console.log(bool);