
try {
    let maybeAString = undefined; // We expected that this was a string but became udefined
    const stringLength = maybeAString.length; 
    console.log(stringLength);
} catch (err) {
    //console.log(err.message);
    //console.log(err.stack);
    //console.error(err);
    console.error(err.message);
}

function a() {
    const myError = new Error('This is my error (a)');  // Create a new error object
    myError.customAttribute = 23;                       // Declare a new custom attribute
    return myError;                                     // Return
}

function b() {
    const myException = new Error('This is my exception (b)');
    myException.customAttribute = { id: 12, status: "Failure" };
    throw myException;                                  // Create an exception from the Error-object
}

function c() {
    return "This has no error or no exception (c)";
}

const resultFromA = a();
if (resultFromA instanceof Error) {                     // Will be tru if resultFromA contains an Error object
    console.log(resultFromA.message);
    console.log(resultFromA.customAttribute);
} else {
    console.log('We should not end up here!');
}

try {
    const resultFromB = b(); 
    console.log(resultFromB);
} catch(err) {
    console.log(err.message);
    console.log(err.customAttribute);
}


try {
    let str = c();
    str = c();
    str = '';
    str = c();
    b();
    str = 'Klart!';
} catch(err) {
    console.log(str);
    console.log(err.message);
} finally {
    console.log('Finally Done!');
}