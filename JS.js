/* ========== *
* Challenge 1 *
* =========== */

//Uncomment the lines below to test your code
//  console.log(typeof 7.0 === "number")
//  console.log(typeof 22 === "number")
//  console.log(typeof true === "boolean")
//
// var myVar;
//  console.log(typeof myVar === "undefined")
//
// myVar = "Timm"//add your name here
//  console.log(typeof myVar === "string")

//Comment them back out with two forward slashes at the beginning once you have finished


/* ========== *
* Challenge 2 *
* =========== */


function buildSentence(word1, word2, word3) {
     let res = word1.charAt(0).toUpperCase() + word1.slice(1) + ' ' + word2 + ' ' + word3 + '.';
     console.log(res);
}

// buildSentence("coding", "is", "awesome") //=> "Coding is awesome."
// buildSentence("we're", "number", "1") //=> "We're number 1."


/* ========== *
* Challenge 3 *
* =========== */


function lastLetter(word) {
    console.log(word[word.length - 1]);
}

//Uncomment the lines below to test your code
//  lastLetter("hello") //=> "o"
//  lastLetter("goodbye!") //=> "!"
//  lastLetter("ZeltoiD") //=> "D"


/* ========== *
* Challenge 4 *
* =========== */


function buildGreeting(time, name) {
    if(0 <= time && time <= 11){
        console.log("Good Morning, " + name + "!");
    } else if (12 <= time && time <= 16){
        console.log("Good Afternoon, " + name + "!");
    } else if (17 <= time && time <= 23){
        console.log("Good Evening, " + name + "!");
    } else {
        console.log("That's not a real time, " + name + ". Maybe you need some sleep!");
    }
}


// buildGreeting(8, "Maggie") //=> "Good Morning, Maggie!"
// buildGreeting(12, "John") //=> "Good Afternoon, John!"
// buildGreeting(22, "Stacey") //=> "Good Evening, Stacey!"
// buildGreeting(31, "Derrick") //=> "That's not a real time, Derrick. Maybe you need some sleep!"


/* ========== *
* Challenge 5 *
* =========== */


function indexOf(string1, string2){
    let index = -1;
    for(let i = 0; i < string1.length; i++){
        if(string1[i] === string2 && index === -1){
            index = i;
        }
    }
    return index;
}

// console.log( indexOf("CodeSmith", "o") === 1 )
// console.log( indexOf("hello", "ll") === -1 )
// console.log( indexOf("zebra", "z") === 0 )
// console.log( indexOf("banana", "B") === -1 )


/* ========== *
* Challenge 6 *
* =========== */


function letterExists(word, letter) {
    console.log(word.includes(letter));
}

// letterExists("superman", "e") //=> true
// letterExists("starship", "S") //=> false
// letterExists("th1s", "1") //=> true
// letterExists("he!lo", "!") //=> true


/* =========== *
* Challenge 7 *
* ============ */


function isPrime(number) {
    let isPrime = true;
    if(number < 0){
        isPrime = false;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrime = false;
            }
        }
    }
    console.log(isPrime);
}

// isPrime(-7); // => false
// isPrime(2); // => true
// isPrime(11); // => true
// isPrime(15); // => false


/* ========== *
* Challenge 8 *
* =========== */


function range(start, end) {
    let res = [];
    if(start < end) {
        for (let i = start; i <= end; i++){
            res.push(i);
        }
        console.log(res);
    }
}

//Uncomment the lines below to test your code
// range(1,4) //=> 1, 2, 3, 4
// range(4,2) //=>


/* =========== *
* Challenge 9 *
* ============ */


function myIndexOf(array, ele){
    if(array.includes(ele)){
        for(let i = 0; i < array.length; i++){
            if(array[i] === ele){
                console.log(i);
            }
        }
    } else {
        console.log(-1);
    }
}

// myIndexOf([1, 2, 3, 4, 5], 5) //=> 4
// myIndexOf(["a", "b", "c"], "a") //=> 0
// myIndexOf(["a", "b", "c"], "d") //=> -1


/* =========== *
* Challenge 10 *
* ============ */

function unique(array) {
    let resArr = [];
    for(let i = 0; i < array.length; i++){
        if(!resArr.includes(array[i])){
            resArr.push(array[i]);
        }
    }
    console.log(resArr);
}

// unique([1, 1, 2, 3, 3]) // => [1, 2, 3]
// unique(["a", "a", "c", "aa", "b", "b"]) // => ["a", "c", "aa", "b"]


/* =========== *
* Challenge 11 *
* ============ */

function longestWord(sentence) {
    let arr = sentence.split(' ');
    let length = 0;
    let res;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length >= length){
            length = arr[i].length;
            res = arr[i];
        }
    }
    return res;
}

//Uncomment the lines below to test your function:

// console.log(longestWord('my JavaScript is exceptional')); // => 'exceptional'
// console.log(longestWord('hate having hungry hippos')); // => 'hippos'
// console.log(longestWord('JavaScript')); // => 'JavaScript'
// console.log(longestWord('')); // => ''


/* =========== *
* Challenge 12 *
* ============ */

function disemvowel(string) {
    let arrVowels = ["a", "e", "i", "o", "u"];
    let res = "";
    for(let i = 0; i < string.length; i++){
        if(!arrVowels.includes(string[i].charAt(0).toLowerCase())){
            res += string[i];
        }
    }
    return res;
}


//Uncomment the lines below to test your function:

// console.log(disemvowel('CodeSmith')); // => 'CdSmth'
// console.log(disemvowel('BANANA')); // => 'BNN'
// console.log(disemvowel('hello world')); // => 'hll wrld'


/* =========== *
* Challenge 13 *
* ============ */

function divisibleByFivePairSum(array){
    let resArr = [];

    let checkSubset = (parentArray, subsetArray) => {
        let resBool = false;
        for(let i = 0; i < parentArray.length; i++){
            if(parentArray[i][0] === subsetArray[0] && parentArray[i][1] === subsetArray[1]){
                resBool = true;
            }
        }
        return resBool;
    }

    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(j !== i){
                if((array[i] + array[j]) % 5 === 0){
                    let subArr = [j, i];
                    if(checkSubset(resArr, subArr) === false) {
                        resArr.push([i, j]);
                    }
                }
            }
        }
    }
    return resArr;
}


//Uncomment the lines below to test your function:

// console.log(divisibleByFivePairSum([1, 5, 2, 0, 4])); // => [ [ 0, 4 ], [ 1, 3 ] ]
// console.log(divisibleByFivePairSum([13, 22, 8, -3, 12])); // => [[ 0, 1 ], [ 0, 3 ], [ 0, 4 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ]]


/* =========== *
* Challenge 14 *
* ============ */

function highestScore(students) {
    let res = "";
    let resIndex = 0;
    let highestScore = 0;
    for(let i = 0; i < students.length; i++){
        if(students[i].score > highestScore){
            highestScore = students[i].score;
            resIndex = i;
        }
    }
    let tempName = students[resIndex].name.split(" ");
    res = tempName[0].charAt(0) + tempName[1].charAt(0) + students[resIndex].id;
    return res;
}

//Uncomment the lines below to test your function:

// var students = [
// {name: 'Will Sentance', id: 128, score: -42},
// {name: 'Jamie Bradshaw', id: 32, score: 57},
// {name: 'Lisa Simpson', id: 2, score: 99},
// {name: 'Luke Skywalker', id: 256, score: 94}
// ];
//
// console.log(highestScore(students)); //=> 'LS2'


/* =========== *
* Challenge 15 *
* ============ */

function leastCommonMultiple(num1, num2) {
    let sum1 = num1;
    let resSum = num1 * num2;
    for(let i = 1; i < num2; i++){
        sum1 = num1 * i;
        let sum2 = num2;
        for(let j = 1; j < num1; j++){
            sum2 = num2 * j;
            if (sum1 === sum2) {
                resSum = sum2;
                break;
            }
        }
        if (sum1 === sum2) {
            resSum = sum2;
            break;
        }
    }
    return resSum;
}


//Uncomment the lines below to test your function:

// console.log(leastCommonMultiple(2, 3)); //=> 6
// console.log(leastCommonMultiple(6, 10)); //=> 30
// console.log(leastCommonMultiple(24, 26)); //=> 312


/* ========== *
* Extension 1 *
* =========== */

function arrayBuilder(count) {
    let resArr = [];
    Object.keys(count).forEach(key => {
        for(let j = 0; j < count[key]; j++) {
            resArr.push(key);
        }
    });
    return resArr;
}


//Uncomment the lines below to test your function:

// console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs']
// console.log(arrayBuilder({})); //=> []


/* ========== *
* Extension 2 *
* =========== */

function objectBuilder(count) {
    let resObj = {};
    for(let i = 0; i <= count; i++){
        resObj[i] = i * 5;
    }
    return resObj;
}


//Uncomment the lines below to test your function:

// console.log(objectBuilder(4)); //=> {
// 0: 0,
// 1: 5,
// 2: 10,
// 3: 15,
// 4: 20,
// }
// console.log(objectBuilder(0)); //=> { 0: 0 }


/* ========== *
* Extension 3 *
* =========== */

function secretCipher(sentence, cipher){
    let res = "";
    for(let i = 0; i < sentence.length; i++){
        let boolChanged = false;
        Object.keys(cipher).forEach(key => {
            if(key === sentence[i]){
                res += cipher[key];
                boolChanged = true;
            }
        });
        if(boolChanged === false){
            res += sentence[i];
        }
    }
    return res;
}



//Uncomment the lines below to test your function:

// console.log(secretCipher("lqq me on flcebzzk" , { l : "a", q : "d", z: "o"})); //=> "add me on facebook"
// console.log(secretCipher("where are you???" , { v : "l", '?' : "!"})) //=> "where are you!!!"
// console.log(secretCipher("twmce" , { m : "n", t : "d", w : "a"})); //=> "dance"


/* ========== *
* Extension 4 *
* =========== */

function passingStudents(students) {
    let resArr = [];
    for(let i = 0; i < students.length; i++){
        let avgGrade = 0;
        for(let j = 0; j < students[i].grades.length; j++) {
            avgGrade += students[i].grades[j].score;
        }
        avgGrade = avgGrade / students[i].grades.length;

        if(avgGrade >= 70){
            resArr.push(students[i].name);
        }
    }
    return resArr;
}


//Uncomment the lines below to test your function:

// var students = [
//   {
//     "name": "Marco",
//     "id": 12345,
//     "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
//   },
//   {
//     "name": "Donna",
//     "id": 55555,
//     "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
//   },
//   {
//     "name": "Jukay",
//     "id": 94110,
//     "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
//   }
// ];
//
// console.log(passingStudents(students)); // => [ 'Marco', 'Donna' ]



