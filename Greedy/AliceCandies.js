function AliceCandies(n, arr) {
    // Write your code here
    let candies = [];
    for (let i = 0; i < n; i++) {
        candies[i] = 1;
    }
    for (let i = 1; i < n; i++) {
        if (arr[i] > arr[i-1]) candies[i] = candies[i-1]+1;
    }
    for (let i = n-2; i >= 0; i--) {
        if (arr[i] > arr[i+1]) 
            candies[i] = Math.max(candies[i],candies[i+1]+1);
    }
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum+=candies[i];
    }
    console.log(candies);
    return sum;
}


let scores = [2, 4, 3, 5, 2, 6, 4, 5]


AliceCandies(10, scores);