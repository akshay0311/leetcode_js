let bills = [5,5,5,5,10,5,20,10,5,5];

var lemonadeChange = function(bills) {
    let billCount = {5 : 0, 10 : 0, 20 : 0};
    for(let i = 0; i < bills.length; i++) {
        let flag = 0;
        if (bills[i] === 5) {
            flag = 1;
            billCount[5] += 1;
        }
        if (bills[i] === 10 && billCount[5] > 0) {
            flag = 1;
            billCount[5] -= 1;
            billCount[10] += 1;
        }    
        if (bills[i] === 20 && billCount[5] > 0 && billCount[10] > 0) {
            flag = 1;
            billCount[5] -= 1;
            billCount[10] -= 1;
            billCount[20] += 1; 
        }
        if (bills[i] === 20 && billCount[5] > 2 && flag === 0) {
            flag = 1;
            billCount[5] -= 3;
            billCount[20] += 1; 
        }
        if (flag === 0)
            return false;
    }
    return true
}


let givenChange = lemonadeChange(bills);

console.log(givenChange);



















