// Challenge 1
function countdown(n) {
    if(n >= 0){
        for(let i = n; i > 0; i--){
            console.log(i);
        }
    }
}

// To check if you've completed it, uncomment these console.logs!
// countdown(5);
// countdown(10);


// Challenge 2
function sum(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}

// uncomment these to check your work
//  console.log(sum([1,1,1])); // -> returns 3
//  console.log(sum([1,2,3,4,5,6])); // -> returns 21


// Challenge 3
function palindrome(string) {
    let resBool = true;
    string = string.replaceAll(" ", "").replaceAll(/[^\w\s]/g, "");
    for(let i = 0; i < Math.ceil(string.length/2); i++){
        if(string[i].toLowerCase() !== string[string.length - (1 + i)].toLowerCase()){
            resBool = false;
            break;
        }
    }
    return resBool;
}

// console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
// console.log(palindrome("llama mall")); //-> true
// console.log(palindrome("jmoney")); //-> false


// Challenge 4

function isPrime(num) {
    let resBool = true;
    if(num === 1){
        resBool = false;
    } else if(num === 2){
        resBool = true;
    } else {
        for(let i = 2; i < num; i++){
            if(num % i === 0){
                resBool = false;
            }
        }
    }
    return resBool;
}

// console.log(isPrime(1)); //-> false
// console.log(isPrime(2)); //-> true
// console.log(isPrime(3)); //-> true
// console.log(isPrime(4)); //-> false


//Challenge 5
function pathFinder(obj, arr) {
    let resPath = obj[arr[0]];
    for(let i = 1; i < arr.length; i++){
        resPath = resPath[arr[i]];
    }
    return resPath;
}

// const obj = { first: { second: { third: "finish" } }, second: { third: "wrong" } };
// const arr = ["first", "second", "third"];
// console.log(pathFinder(obj, arr));   //-> "finish"


//Challenge 6
function flattenRecursively(arr) {
    for(let i = 0; i < arr.length; i++){
        while(Array.isArray(arr[i])) {
            arr = arr.flat();
        }
    }
    return arr;
}

// console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
// console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]


//Challenge 7
function findInOrderedSet(arr, target) {
    let resBool = false;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            resBool = true;
            break;
        }
    }
    return resBool;
}

// const nums = [1, 4, 6, 7, 9, 17, 45];
// console.log(findInOrderedSet(nums, 4));  //-> true
// console.log(findInOrderedSet(nums, 2));  //-> false


//Challenge 8
function countWaysToReachNthStair(n) {
    let resArr = [];
    let isComplete = false;
    let count = n;
    let tempArr = [];

    while(isComplete === false) {
        let sum = 0;

        for (let i = count; i > 0; i--) {
            sum += 1;
            tempArr.push(1);
        }
        if (sum === 0) {
            if (n % 2 === 0) {
                for (let i = 0; i < (n / 2); i++) {
                    sum += 2;
                    tempArr.push(2);
                }
                resArr.push(tempArr.slice());
                tempArr = [];
            }
            isComplete = true;
            break;
        }
        if (sum !== n) {
            let temp = (n - sum);
            if (n % sum === 0 && temp >= 2) {
                for (let i = 0; i < (temp / 2); i++) {
                    sum += 2;
                    tempArr.push(2);
                }
                if(sum === n) {
                    resArr.push(tempArr.slice());
                    for (let i = 1; i < tempArr.length; i++) {
                        tempArr.push(tempArr.shift());
                        resArr.push(tempArr.slice());
                    }
                }
                tempArr = [];
            } else {
                tempArr = [];
            }
        }
        count--;
        if(tempArr.length !== 0) {
            resArr.push(tempArr.slice());
            tempArr = [];
        }
    }
    console.log(resArr);
    return resArr.length;
}

// console.log(countWaysToReachNthStair(1)) //-> 1 (only one way to climb 1 stair)
// console.log(countWaysToReachNthStair(2)) //-> 2 ((1, 1), (2))
// console.log(countWaysToReachNthStair(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (1, 2, 1), (2, 1, 1), (2, 2))


//Challenge 9
function getPermutations(arr) {
    let resArr = [];
    let tempArr = arr.slice();
    resArr.push(arr.slice());
    for(let i = 0; i < arr.length; i++){
        tempArr.push(tempArr.shift());
        if(!JSON.stringify(resArr).includes(JSON.stringify(tempArr))){
            resArr.push(tempArr.slice());
        }
        for(let j = arr.length - 1; j >= 0; j--){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            if(!JSON.stringify(resArr).includes(JSON.stringify(arr))){
                resArr.push(arr.slice());
            }
        }
    }
    return resArr;
}

// console.log(getPermutations([1, 2])) //-> [[1, 2], [2, 1]]
// console.log(getPermutations([1, 2, 3])) //-> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]


//Challenge 10
function getRangeBetween(x, y) {
    let z = x + 1;
    let res = [];
    if(x < 0) {
        for (let i = x + 1; i < 0; i++) {
            res.push(i);
        }
        z = 0;
    }
    for(let i = z; i < y; i++){
        res.push(i);
    }
    return res;
}

// console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
// console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]
