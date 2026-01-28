function getArrayParams(...arr) {
    if (arr.length === 0) return { min: 0, max: 0, avg: 0 };

    let min = arr[0];
    let max = arr[0];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
        sum += arr[i];
    }

    let avg = Number((sum / arr.length).toFixed(2));

    return { min, max, avg };
}

function summElementsWorker(...arr) {
    if (arr.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) sum += arr[i];
    return sum;
}

function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) return 0;
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }
    return max - min;
}

function differenceEvenOddWorker(...arr) {
    if (arr.length === 0) return 0;
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) sumEven += arr[i];
        else sumOdd += arr[i];
    }
    return sumOdd - sumEven;
}

function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) return 0;
    let sumEven = 0;
    let countEven = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEven += arr[i];
            countEven++;
        }
    }
    return countEven === 0 ? 0 : sumEven / countEven;
}

function makeWork(arrOfArr, func) {
    let maxWorkerResult = -Infinity;
    for (let i = 0; i < arrOfArr.length; i++) {
        const result = func(...arrOfArr[i]);
        if (result > maxWorkerResult) maxWorkerResult = result;
    }
    return maxWorkerResult;
}