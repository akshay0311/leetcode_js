const arr = [2, 3, 1, 1, 4];
const arr2 = [0, 2, 0, 1, 4];
const arr3 = [0]
const arr4 = [2,0,0]

function JumpGame(arr) {
    let last = arr.length-1;
    if (arr.length === 1)
        return true;
    for (let i = last; i >= 1; i--) {
        let flag = false;
        for (let j = i-1; j >= 0; j--) {
            if (arr[j] + j >= i) {
                flag = true;
                break;
            }
        }
        if (flag === false)
            return false;
    }
    return true
}

let isLand = JumpGame(arr4);
console.log(isLand)
