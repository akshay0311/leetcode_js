const arr = [2, 3, 1, 1, 4];
const arr2 = [2, 3, 0, 1, 4];
const arr3 = [0]
const arr4 = [2,0,0]


function JumpGame2(arr) {
    let result = [];

    let c = 0;
    for (let i = arr.length - 1; i >= 1; i--) {
        let ind = i;
        for (let j = ind - 1; j >= 0; j--) {
            if ((arr[j] + j) >= ind) {
                result[c] = j;
                i = j; 
            }
        }
        i+=1;
        c++;        
    }
    return result.length;
}


console.log(JumpGame2(arr2));