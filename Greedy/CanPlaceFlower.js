let flowerbed = [1,0,0,0,1];

let n = 1;


function canPlaceFlowers(flowerbed, n) {
    let ind = 0;

    while(ind < flowerbed.length) {
        let prev = (flowerbed[ind - 1] === 0 || ind === 0) ? 0 : 1;
        let next = (flowerbed[ind + 1] === 0 || ind === flowerbed.length - 1) ? 0 : 1;
        
        if ((prev === next == 0) && flowerbed[ind] === 0) {
            console.log("Inside")
            flowerbed[ind] = 1;
            n-=1;
        }
        ind+=1
    }
    console.log(flowerbed);
    if (n > 0)  return false;
    else return true;
}



let bool = canPlaceFlowers(flowerbed, n);

console.log(bool);