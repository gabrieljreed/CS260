function test2(test) {
    return !test;
}

function every(array, test) {
    // var isTrue = true;
    // array.forEach(element => isTrue = test(element));
    // return isTrue;
    // var isTrue = true;
    // isTrue = array.some(test);
    // return isTrue;

    return !array.some(value => !test(value));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
