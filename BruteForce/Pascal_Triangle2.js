let n = 4;
// [1] -> 0
// [1, 1] -> 1
// [1, 2, 1] -> 2
// [1, 3, 3, 1] -> 3
// [1, 4, 6, 4, 1] -> 4

function PascalTriangle2(n) {
    let arr = [1, 1];
    if (n === 0) return [1];
    if (n === 1) return arr;
    let res = [];
    for (let i = 2; i <= n; i++) {
        res = [1];
        let ind = 1;
        for (let j = 0; j < i-1; j++) {
            res[ind] = arr[j] + arr[j+1];  
            ind++;
        } 
        res.push(1);
        arr = res;  
    }

    return res;
}



let res = PascalTriangle2(n);

console.log(res);

