// Написать функцию, которая принимает как аргумент(параметр) два массива и 
// сравнивает суммы всех ЧИСЛОВЫХ элементов. Тот массив, сумма которого 
// большая – должен вернутся функцией.



// Пример:

// a = [1,2,3, 'hello',4,5] => summA = 15

// b = [1,2,3, true, 4, undefined, 6] => summB = 16

// if(summA < summB) => return b

const firstArr = [1,2,3, 'hello',4,5];
const secondArr = [1,2,3, true, 4, undefined, 6];

function getSum(arr) {
    let sum = 0;
    for(let i=0; i < arr.length; i++) {
        if(typeof arr[i] === "number")  sum += arr[i];
    }
    return sum;
}

function sumArray(arr1, arr2) {
    let sum = getSum(arr1);
    let sum1 = getSum(arr2);
    return sum < sum1 ? arr2 : arr1;
}

console.log (sumArray (firstArr, secondArr))



