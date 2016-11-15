// a js engine handles async behaviour through an 'event queue'.
// every time something like a click or an http request happens,
// that event is put on a queue. this queue gets processed whenever
// the execution stack is empty.

// when the engine is processing a certain event it checks if there's
// a function that should be run as a response to that event, and if
// there's one, it executes it (creating the proper execution context
// and popping the event and then moving to the next event, IFF
// the execution stack is empty)

function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms) {
        // no op
    }
    console.log('finished');
}

function clickHandler() {
    console.log('click!');
}

document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution (on the global context)');