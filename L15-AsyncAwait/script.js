
let currentTime = 18;   // We start the simulation at 18
const closeTime = 22;   // Restuarnt has last seating at 22
const probabillityNotFreeTable = 8;    // 7 out of 10 ca 70%

function formatTime(hour) { // hour is a decimal number, .5 means 30min of the hour
    let h = Math.floor(hour);
    return "" + h + ":" + (hour-h>0 ? "30" : "00");
}

function waitTable(resolve, reject) {
    let intervalId = setInterval(() => {   // start simulation by running every 500ms
        currentTime += 0.5; // 30 minutes has passed since last interval
        console.log(`Time is now: ${formatTime(currentTime)}`);
        if(currentTime >= closeTime) {  // Check the clock have we closed?
            clearInterval(intervalId);  // Stop setInterval from creating more itterations
            reject('Sorry the resturant closed for the day!');  // Waiter buzzes and notifies the family
        }
        let checkTable = Math.floor(Math.random()*10) + 1;  // Should give us a random number between 1 and 10
        if(checkTable > probabillityNotFreeTable) {
            clearInterval(intervalId);  // Stop setInterval from creating more itterations
            resolve('Your table is now ready!'); // Let's notify the family
        }
    }, 500);  // 500ms (real time) == 30min simulation time
}

let pager = new Promise(waitTable); // Create promise - waiter gives us the pager

pager
    .then((messageFromWaiter) => {  // Pager "buzzes" because there is a table free (resolve)
        console.log('Hey kids! The waiter said: ' + messageFromWaiter);
    })
    .catch((messageFromWaiter) => {
        console.log('Sorry kids! The waiter said: ' + messageFromWaiter);
    });
