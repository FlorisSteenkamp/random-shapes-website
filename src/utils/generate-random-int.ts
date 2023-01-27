
function generateRandomInt() {
    return Math.random()/Number.EPSILON;
}


function generateRandomIntUpTo(n: number) {
    return (Math.random()/Number.EPSILON)%n;
}


export { generateRandomInt, generateRandomIntUpTo }


// TEST
// generateRandomInt();  //?
// generateRandomIntUpTo(20);  //?