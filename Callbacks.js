// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
    let res = num + 2;
    return res;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
function addS(word) {
    let res = word + 's';
    return res;
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
    let resArr = [];

    for(let i = 0; i < array.length; i++){
        resArr.push(callback(array[i]));
    }

    return resArr;
}

// console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
    for(let i = 0; i < array.length; i++){
        console.log(callback(array[i]));
    }
}

// forEach([1, 2, 3], addTwo);

// see for yourself if your forEach works!


// Challenge 5
function mapWith(array, callback) {
    let resArr = [];

    array.forEach(element => {
        resArr.push(callback(element));
    });

    return resArr;
}

// console.log(mapWith([1, 2, 3], addTwo));


// Challenge 6
function reduce(array, callback, initialValue) {
    for(let i = 0; i < array.length; i++){
        initialValue = callback(initialValue, array[i]);
    }

    return initialValue;
}

// const nums = [4, 1, 3];
// const add = function(a, b) { return a + b; }
// console.log(reduce(nums, add, 0));   //-> 8


// Challenge 7
function intersection(arrays) {
    let resArr = [];

    for(let i = 0; i < arrays[0].length; i++){
        let used = false;
        for(let j = 1; j < arrays.length; j++){
            let data = arrays[0][i];
            if(arrays[j].includes(data)){
                used = true;
            } else {
                used = false;
                break;
            }
        }
        if(used === true){
            resArr.push(arrays[0][i]);
        }
    }

    return resArr;
}

// console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
// should log: [5, 15]


// Challenge 8
function union(arrays) {
    let resArr = [];

    for(let i = 0; i < arrays.length; i++){
        for(let j = 0; j < arrays[i].length; j++){
            if(!resArr.includes(arrays[i][j])){
                resArr.push(arrays[i][j]);
            }
        }
    }

    return resArr;
}

// console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]


// Challenge 9
function objOfMatches(array1, array2, callback) {
    let resObj = {};

    for(let i = 0; i < array1.length; i++){
        let res = callback(array1[i]);
        if(array2[i] === res){
            resObj[array1[i]] = array2[i];
        }
    }

    return resObj;
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }


// Challenge 10
function multiMap(arrVals, arrCallbacks) {
    let resObj = {};

    for(let i = 0; i < arrVals.length; i++){
        let resArr = [];
        for (let j = 0; j < arrCallbacks.length; j++){
            resArr.push(arrCallbacks[j](arrVals[i]));
        }
        resObj[arrVals[i]] = resArr;
    }

    return resObj;
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


// Challenge 11
function objectFilter(obj, callback) {
    let resObj = {};

    Object.keys(obj).forEach(key => {
        if(obj[key] === callback(key)){
            resObj[key] = obj[key];
        }
    });

    return resObj;
}

// const cities = {
// London: 'LONDON',
// LA: 'Los Angeles',
// Paris: 'PARIS',
// };
// console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}


// Challenge 12
function majority(array, callback) {
    let resMaj = false;
    let countTrue = 0;

    for(let i = 0; i < array.length; i++){
        if(callback(array[i]) === true){
            countTrue++;
        }
        if(countTrue > array.length / 2){
            resMaj = true;
            break;
        }
    }

    return resMaj;
}

 /*** Uncomment these to check your work! ***/
// const isOdd2 = function(num) { return num % 2 === 1; };
// console.log(majority([1, 2, 3, 4, 5], isOdd2)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd2)); // should log: false


// Challenge 13
function prioritize(array, callback) {
    let resArr = [];
    let tempArr = [];

    for(let i = 0; i < array.length; i++){
        if(callback(array[i]) === true){
            resArr.push(array[i]);
        } else {
            tempArr.push(array[i]);
        }
    }
    resArr = resArr.concat(tempArr);

    return resArr;
}

 /*** Uncomment these to check your work! ***/
// const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
// console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS));
// should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']


// Challenge 14
function countBy(array, callback) {
    let resObj = {};

    for(let i = 0; i < array.length; i++){
        if(Object.keys(resObj).includes(callback(array[i]))){
            resObj[callback(array[i])]++;
        } else {
            resObj[callback(array[i])] = 1;
        }
    }

    return resObj;
}

 /*** Uncomment these to check your work! ***/
// console.log(countBy([1, 2, 3, 4, 5], function(num) {
// if (num % 2 === 0) return 'even';
// else return 'odd';
// })); // should log: { odd: 3, even: 2 }


// Challenge 15
function groupBy(array, callback) {
    let resObj = {};

    for(let i = 0; i < array.length; i++){
        if(Object.keys(resObj).includes(callback(array[i]).toString())){
            let tempArr = [resObj[callback(array[i])]];
            tempArr = tempArr.concat(array[i]);
            resObj[callback(array[i])] = tempArr;
        } else {
            resObj[callback(array[i])] = array[i];
        }
    }

    return resObj;
}

// /*** Uncomment these to check your work! ***/
// const decimals = [1.3, 2.1, 2.4];
// const floored = function(num) { return Math.floor(num); };
// console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }


// Challenge 16
function goodKeys(obj, callback) {
    let resArr = [];

    Object.keys(obj).forEach(key => {
        if(callback(obj[key]) === true){
            resArr.push(key);
        }
    });

    return resArr;
}

 /*** Uncomment these to check your work! ***/
// const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
// const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']


// Challenge 17
function commutative(func1, func2, value) {
    let resBool = false;

    if(func2(func1(value)) === (func1(func2(value)))){
        resBool = true;
    }

    return resBool;
}

 /*** Uncomment these to check your work! ***/
// const multBy3 = n => n * 3;
// const divBy4 = n => n / 4;
// const subtract5 = n => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false


// Challenge 18
function objFilter(obj, callback) {
    let resObj = {};

    Object.keys(obj).forEach(key => {
        if(callback(key) === obj[key]){
            resObj[key] = obj[key];
        }
    })

    return resObj;
}

 /*** Uncomment these to check your work! ***/
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = n => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }


// Challenge 19
function rating(arrOfFuncs, value) {
    let resPerc = 0;
    let tempTrue = 0;

    for(let i = 0; i < arrOfFuncs.length; i++){
        if(arrOfFuncs[i](value) === true){
            tempTrue++;
        }
    }
    resPerc = (tempTrue * 100) / arrOfFuncs.length;

    return resPerc;
}

 /*** Uncomment these to check your work! ***/
// const isEven = n => n % 2 === 0;
// const greaterThanFour = n => n > 4;
// const isSquare = n => Math.sqrt(n) % 1 === 0;
// const hasSix = n => n.toString().includes('6');
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75


// Challenge 20
function pipe(arrOfFuncs, value) {
    let res = value;

    for(let i = 0; i < arrOfFuncs.length - 1; i++){
        res = arrOfFuncs[i](res);
    }
    res = arrOfFuncs[arrOfFuncs.length - 1](res);
    return res;
}

 /*** Uncomment these to check your work! ***/
// const capitalize = str => str.toUpperCase();
// const addLowerCase = str => str + str.toLowerCase();
// const repeat = str => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'


// Challenge 21
function highestFunc(objOfFuncs, subject) {
    let res = '';
    let resNum = 0;

    Object.keys(objOfFuncs).forEach(key => {
        let tempNum = objOfFuncs[key](subject);
        if(tempNum > resNum){
            resNum = tempNum;
            res = key;
        }
    })

    return res;
}

 /*** Uncomment these to check your work! ***/
// const groupOfFuncs = {};
// groupOfFuncs.double = n => n * 2;
// groupOfFuncs.addTen = n => n + 10;
// groupOfFuncs.inverse = n => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'


// Challenge 22
function combineOperations(startVal, arrOfFuncs) {
    let resVal = startVal;

    for(let i = 0; i < arrOfFuncs.length; i++){
        resVal = arrOfFuncs[i](resVal);
    }

    return resVal;
}

function add100(num) {
    return num + 100;
}

function divByFive(num) {
    return num / 5;
}

function multiplyByThree(num) {
    return num * 3;
}

 /*** Uncomment these to check your work! ***/
// console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->


// Challenge 23
function myFunc(array, callback) {
    let res = -1;

    for(let i = 0; i < array.length; i++){
        let tempBool = callback(array[i]);
        if(tempBool === true){
            res = i;
            break;
        }
    }

    return res;
}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOdd(num) {
    return (num % 2 !== 0);
}

 /*** Uncomment these to check your work! ***/
// console.log(myFunc(numbers, isOdd)); // Output should be 1
// console.log(myFunc(evens, isOdd)); // Output should be -1


// Challenge 24
function myForEach(array, callback) {
    let res = 0;

    for(let i = 0; i < array.length; i++){
        res += callback(array[i])
    }

    return res;
}

let sum = 0;

function addToSum(num) {
    sum += num;
}

 /*** Uncomment these to check your work! ***/
// const nums = [1, 2, 3];
// myForEach(nums, addToSum);
// console.log(sum); // Should output 6
