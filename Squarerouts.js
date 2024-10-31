function Squarerouts(numbers) {
    return numbers.map(num => {
        if (num >= 0) {
            const squareRoot = Math.sqrt(num);
            if (Number.isInteger(squareRoot)) {
                return squareRoot; 
            } else {
                return num * num;
            }
        } else {
            return num * num; 
        }
    });
}


console.log(Squarerouts([4, 3, 9, 7, 2])); 
