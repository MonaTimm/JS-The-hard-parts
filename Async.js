/* CHALLENGE 1 */

function sayHowdy() {
    console.log('Howdy');
}

function testMe() {
    setTimeout(sayHowdy, 0);
    console.log('Partnah');
}
// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first?


/* CHALLENGE 2 */

function delayedGreet() {
    function welcome(){
        console.log('welcome');
    }
    setTimeout(welcome, 3000);
}
// Uncomment the following line to check your work!
// delayedGreet(); // should log (after 3 seconds): welcome


/* CHALLENGE 3 */

function helloGoodbye() {
    function goodbye(){
        console.log('good bye');
    }
    setTimeout(goodbye, 2000);
    console.log('hello');
}
// Uncomment the following line to check your work!
// helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye


/* CHALLENGE 4 */

function brokenRecord() {
    function sayHiAgain() {
        console.log('hi again');
    }
    setInterval(sayHiAgain, 1000);
}
// Uncomment the following line to check your work!
// brokenRecord(); // should log (every second): hi again


/* CHALLENGE 5 */

function limitedRepeat() {
    let counter = 0;
    let int = setInterval(() => {
        console.log('hi for now');
        counter++;

        if (counter === 5) {
            clearInterval(int);
        }
    }, 1000);
}
// Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now


/* CHALLENGE 6 */

function everyXsecsForYsecs(func, interval, duration) {
    let counter = 0;
    let int = setInterval(() => {
        func();
        counter++;

        if (counter === (duration / interval)) {
            clearInterval(int);
        }
    }, interval * 1000);
}

function sayHi(){
    console.log('Hi');
}

// everyXsecsForYsecs(sayHi, 1, 5);

// Uncomment the following lines to check your work!
//  function theEnd() {
//    console.log('This is the end!');
//  }
//  everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!


/* CHALLENGE 7 */

function delayCounter(target, wait) {
    let count = 1;
    function delay(){
        let int = setInterval(() => {
            console.log(count);

            if(count === target){
                clearInterval(int);
            }
            count++;
        }, wait);
    }
    return delay;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const countLogger = delayCounter(3, 1000)
// countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

/* CHALLENGE 8 */

function promised (val) {
    let myPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(val);
        }, 2000);
    });
    return myPromise;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const createPromise = promised('wait for it...');
// createPromise.then((val) => console.log(val));
// will log "wait for it..." to the console after 2 seconds

/* CHALLENGE 9 */

class SecondClock {
    constructor(cb) {
        this.cb = cb;
        this.count = 1;
        this.clock = {};
    }
    start(){
        this.clock = setInterval(() => {
            this.cb(this.count);
            if(this.count === 60){
                this.count = 1;
            } else {
                this.count++;
            }
        }, 1000);
    }
    reset(){
        clearInterval(this.clock);
        this.count = 1;
    }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const clock = new SecondClock((val) => { console.log(val) });
// console.log("Started Clock.");
// clock.start();
// setTimeout(() => {
//     clock.reset();
//     console.log("Stopped Clock after 6 seconds.");
// }, 6000);

/* CHALLENGE 10 */

function debounce(callback, interval) {
    let lastTime = new Date(Date.now()).getTime();
    let lastMS = 0;
    function bounce() {
        let res;
        lastMS += (new Date(Date.now()).getTime() - lastTime);
        // console.log(lastMS + ' ' + interval);
        if (lastMS >= interval) {
            res = callback();
            lastMS = 0;
        }
        lastTime = new Date(Date.now()).getTime();
        return res;
    }
    return bounce;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
//  function giveHi() { return 'hi'; }
//  const giveHiSometimes = debounce(giveHi, 3000);
//  console.log(giveHiSometimes()); // -> 'hi'
//  setTimeout(function() { console.log(giveHiSometimes()); }, 2000); // -> undefined
//  setTimeout(function() { console.log(giveHiSometimes()); }, 4000); // -> undefined
//  setTimeout(function() { console.log(giveHiSometimes()); }, 8000); // -> 'hi'

