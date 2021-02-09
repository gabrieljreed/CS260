// Your code here.
function arrayToList(myArr) {
    var temp = null;
    for(var i = myArr.length - 1; i >= 0; i--) {
        let list = {
            value: myArr[i],
            rest: temp
        };
        temp = list;
    }
    return temp;
}

function listToArray(myList) {
    var myArr = [];

    var temp = myList;
    while(temp != null) {
        myArr.push(temp.value);
        temp = temp.rest;
    }

    return myArr;
}

function prepend(a, myList) {
    let list = {
        value: a,
        rest: myList
    };
    return list;
}

function nth(myList, index) {
    var temp = myList;
    var count = 0;
    while(count < index && temp != null) {
        temp = temp.rest;
        count++;
    }
    if(temp == null) {
        return undefined;
    }
    else {
        return temp.value;
    }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
