var a;

// read a value into 'a' (from a file, http request, ...)


if (a) {
    console.log('we got a value back');
} else {
    console.log('didn\' get anything at all');
}

// given such undefined, "" and null are coerced to false, we can check
// for non-existence with just 'if (a)'