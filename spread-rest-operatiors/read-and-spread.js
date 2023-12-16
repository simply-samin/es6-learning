// example 1 rest parameters
function restParameters(...numbers) {
    // implicite arrow function return
    return numbers.reduce((prev, current) => prev + current);

}

// example 2 spread

function spread(x, y) {

    return x + y;

}

let nums = [1, 2];

console.log(restParameters(1, 2, 3));
console.log(spread(...nums));