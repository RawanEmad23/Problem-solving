function count(arr) {
    let positiveSum = 0;
    let negativeSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveSum += arr[i];
        } else if (arr[i] < 0) {
            negativeSum += arr[i];
        }
    }
    return [positiveSum, negativeSum];
 }
 
 console.log(count([1, 5, 8, -7]));  // الإخراج: [14, -7]
 