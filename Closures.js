// CHALLENGE 1
function createFunction() {
    function sayHello() {
        console.log('hello');
    }
    return sayHello;
}

 /*** Uncomment these to check your work! ***/
// const function1 = createFunction();
// function1(); // => should console.log('hello');


// CHALLENGE 2
function createFunctionPrinter(input) {
    function printInput(){
        console.log(input);
    }
    return printInput;
}

 /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter('sample');
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter('hello');
// printHello(); // => should console.log('hello');


// CHALLENGE 3
function outer() {
    let counter = 0; // this variable is outside incrementCounter's scope
    function incrementCounter () {
        counter ++;
        console.log('counter', counter);
    }
    return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before you do, guess what will be logged from each function call.

 /*** Uncomment these to check your work! ***/
// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();


function addByX(x) {
    function addByInput(input){
        const res = input + x;
        console.log(res);
        return res;
    }
    return addByInput;
}

 /*** Uncomment these to check your work! ***/
 const addByTwo = addByX(2);
// addByTwo(1); // => should return 3
// addByTwo(2); // => should return 4
// addByTwo(3); // => should return 5

// const addByThree = addByX(3);
// addByThree(1); // => should return 4
// addByThree(2); // => should return 5

// const addByFour = addByX(4);
// addByFour(4); // => should return 8
// addByFour(5); // => should return 9


// CHALLENGE 4
function once(func) {
    let resVal = 0;
    let calledFirst = true;
    function useCallback(value){
        if(calledFirst === true){
            resVal = func(value);
            calledFirst = false;
        }
        return resVal;
    }
     return useCallback;
}

 /*** Uncomment these to check your work! ***/
// const onceFunc = once(addByTwo);
// console.log(onceFunc(4));  // => should log 6
// console.log(onceFunc(10));  // => should log 6
// console.log(onceFunc(9001));  // => should log 6


// CHALLENGE 5
function after(count, func) {
    let funcCount = 1;
    function callFunc(){
        if(funcCount === count){
            func();
        }
        funcCount++;
    }
    return callFunc;
}

 /*** Uncomment these to check your work! ***/
// const called = function() { console.log('hello') };
// const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed


// CHALLENGE 6
function delay(func, wait) {
    function invFunc(arg){
        setTimeout(func, wait, arg);
    }
    return invFunc;
}

// const delayFunc = delay(addByTwo, 5);
// delayFunc(5);


// CHALLENGE 7
function rollCall(names) {
    let calledCount = 0;
    function callNum(){
        let res = 'Everyone accounted for';
        if(calledCount < names.length){
            res = names[calledCount];
        }
        calledCount++;
        console.log(res);
        return res;
    }
    return callNum;
}

 /*** Uncomment these to check your work! ***/
// const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
// rollCaller() // => should log 'Victoria'
// rollCaller() // => should log 'Juan'
// rollCaller() // => should log 'Ruth'
// rollCaller() // => should log 'Everyone accounted for'


// CHALLENGE 8
function saveOutput(func, magicWord) {
    let obj = {};
    function getOutput(arg){
        if(arg === magicWord){
            return obj;
        } else {
            let res = func(arg);
            obj[arg] = res;
            return res;
        }
    }
    return getOutput;
}

 /*** Uncomment these to check your work! ***/
// const multiplyBy2 = function(num) { return num * 2; };
// const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }


// CHALLENGE 9
function cycleIterator(array) {
    let count = 0;
    function cycle(){
        let res = array[count];
        if(count === array.length - 1){
            count = 0;
        } else {
            count++;
        }
        return res;
    }
    return cycle;
}

 /*** Uncomment these to check your work! ***/
// const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
// const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // => should log 'Fri'
// console.log(getDay()); // => should log 'Sat'
// console.log(getDay()); // => should log 'Sun'
// console.log(getDay()); // => should log 'Fri'


// CHALLENGE 10
function defineFirstArg(func, arg) {
    function execute(arg2){
        return func(arg,arg2);
    }
    return execute;
}

 /*** Uncomment these to check your work! ***/
// const subtract = function(big, small) { return big - small; };
// const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // => should log 15


// CHALLENGE 11
function dateStamp(func) {
    function getDate(arg){
        let obj = {};
        obj['date'] = new Date(Date.now()).toDateString();
        obj['output'] = func(arg);
        return obj;
    }
    return getDate;
}

 /*** Uncomment these to check your work! ***/
// const stampedMultBy2 = dateStamp(n => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }


// CHALLENGE 12
function censor() {
    let obj = {};
     function saveString(str1, str2){
         let res = '';
         if(!str2){
             Object.keys(obj).forEach(key => {
                 if(str1.toString().includes(key)){
                     str1 = str1.toString().replaceAll(key, obj[key]);
                 }
             });
             res = str1;
         } else {
            obj[str1] = str2;
         }
         return res;
     }
     return saveString;
}

 /*** Uncomment these to check your work! ***/
// const changeScene = censor();
// changeScene('dogs', 'cats');
// changeScene('quick', 'slow');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'


// CHALLENGE 13
function createSecretHolder(secret) {
    let obj = {};
    obj.getSecret = function(){
        console.log(secret);
        return secret;
    };
    obj.setSecret = function(value){
        secret = value;
    };
    return obj;
}

 /*** Uncomment these to check your work! ***/
// obj = createSecretHolder(5)
// obj.getSecret() // => returns 5
// obj.setSecret(2)
// obj.getSecret() // => returns 2


// CHALLENGE 14
function callTimes() {
    let count = 0;
    function call(){
        count++;
        console.log(count);
        return count;
    }
    return call;
}

 /*** Uncomment these to check your work! ***/
// let myNewFunc1 = callTimes();
// let myNewFunc2 = callTimes();
// myNewFunc1(); // => 1
// myNewFunc1(); // => 2
// myNewFunc2(); // => 1
// myNewFunc2(); // => 2


// CHALLENGE 15
function roulette(num) {
    let count = 0;
    function spins(){
        let res = '';
        count ++;
        if(count < num){
            res = 'spin';
        } else if(count === num){
            res = 'win';
        } else {
            res = 'pick a number to play again';
        }
        return res;
    }
    return spins;
}

 /*** Uncomment these to check your work! ***/
// const play = roulette(3);
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'win'
// console.log(play()); // => should log 'pick a number to play again'
// console.log(play()); // => should log 'pick a number to play again'


// CHALLENGE 16
function average() {
    let arr = [];
    function avg(num){
        let res = 0;
        if (num) {
            arr.push(num);
        }
        if(arr.length !== 0){
            for (let i = 0; i < arr.length; i++) {
                res += arr[i];
            }
            res = res / arr.length;
        }
        return res;
    }
    return avg;
}

 /*** Uncomment these to check your work! ***/
// const avgSoFar = average();
// console.log(avgSoFar()); // => should log 0
// console.log(avgSoFar(4)); // => should log 4
// console.log(avgSoFar(8)); // => should log 6
// console.log(avgSoFar()); // => should log 6
// console.log(avgSoFar(12)); // => should log 8
// console.log(avgSoFar()); // => should log 8


// CHALLENGE 17
function makeFuncTester(arrOfTests) {
    function test(callback){
         let bool = true;
         for(let i = 0; i < arrOfTests.length; i++){
             if(arrOfTests[i][1] !== callback(arrOfTests[i][0])){
                 bool = false;
                 break;
             }
         }
         return bool;
    }
    return test;
}

 /*** Uncomment these to check your work! ***/
// const capLastTestCases = [];
// capLastTestCases.push(['hello', 'hellO']);
// capLastTestCases.push(['goodbye', 'goodbyE']);
// capLastTestCases.push(['howdy', 'howdY']);
// const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
// const capLastAttempt1 = str => str.toUpperCase();
// const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
// console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true


// CHALLENGE 18
function makeHistory(limit) {
    let recLimit = [];
    function saveHistory(str){
        let res = '';
        if(str === 'undo'){
            if(recLimit.length === 0){
                res = 'nothing to undo';
            } else {
                res = recLimit.pop() + ' undone';
            }
        } else {
            if(recLimit.length === limit){
                recLimit.shift();
            }
            recLimit.push(str);
            res = str + ' done';
        }
        return res;
    }
    return saveHistory;
}

 /*** Uncomment these to check your work! ***/
// const myActions = makeHistory(2);
// console.log(myActions('jump')); // => should log 'jump done'
// console.log(myActions('undo')); // => should log 'jump undone'
// console.log(myActions('walk')); // => should log 'walk done'
// console.log(myActions('code')); // => should log 'code done'
// console.log(myActions('pose')); // => should log 'pose done'
// console.log(myActions('undo')); // => should log 'pose undone'
// console.log(myActions('undo')); // => should log 'code undone'
// console.log(myActions('undo')); // => should log 'nothing to undo'


// CHALLENGE 19
function blackjack(array) {
    let countDeal = 0;
    function dealer(num1, num2){
        let count = 1;
        let doneBool = false;
        let oldSum = 0;
        function player(){
            let res;
            if(count === 1) {
                oldSum = num1 + num2;
                res = oldSum;
                countDeal++;
            } else if(count === 2) {
                oldSum += array[countDeal - 1];
                if (oldSum <= 21) {
                    res = oldSum;
                } else {
                    doneBool = true;
                    res = 'bust';
                }
                countDeal++;
            } else {
                if(doneBool === true){
                    res = 'you are done!';
                } else {
                    oldSum += array[countDeal - 1];
                    if((oldSum) <= 21){
                        res = oldSum;
                        countDeal++;
                    } else {
                        doneBool = true;
                        res = 'bust';
                    }
                }
            }
            count++;
            return res;
        }
        return player;
    }
    return dealer;
}

 /*** Uncomment these to check your work! ***/

 /*** DEALER ***/
 const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

 /*** PLAYER 1 ***/
// const i_like_to_live_dangerously = deal(4, 5);
// console.log(i_like_to_live_dangerously()); // => should log 9
// console.log(i_like_to_live_dangerously()); // => should log 11
// console.log(i_like_to_live_dangerously()); // => should log 17
// console.log(i_like_to_live_dangerously()); // => should log 18
// console.log(i_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

 /*** BELOW LINES ARE FOR THE BONUS ***/

 /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // => should log 4
// console.log(i_TOO_like_to_live_dangerously()); // => should log 15
// console.log(i_TOO_like_to_live_dangerously()); // => should log 19
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

 /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
