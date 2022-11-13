
// CREATE LIST OF NUMBERS

var list_of_numbers = [];
lowEnd = 100;
highEnd = 160;
for (var i = lowEnd; i <= highEnd; i++) {
    list_of_numbers.push(i);
}

console.log(list_of_numbers);

solve(list_of_numbers);

var  nthDigit = getNthDigit(123, 1);
console.log("nthDigit of 123 = " + nthDigit);

// PRINT ALL
//list_of_numbers.map(value => console.log(value));

// SQUARE
//list_of_numbers.map(value => console.log(value * value));


/**
 * 
 * @param {*} val
 * @param {*} n
 * @returns
 */
function getNthDigit(val, n) {
    //Remove all digits larger than nth
    var modVal = val % Math.pow(10, n);

    //Remove all digits less than nth
    return Math.floor(modVal / Math.pow(10, n - 1));
}

function solve(array) {
    console.log("solve");
    var list_of_numbers = [];

    for (let index = 0; index < array.length; index++) {
        const number = array[index];
        var O = getNthDigit(number, 3);
        var U = getNthDigit(number, 2);
        var I = getNthDigit(number, 1);

        if ((O != U) && (U != I) && (O != I)) {
            list_of_numbers.push(number);

            var OUIsquare = Math.pow(number, 2);
            var OOUUi = "" + O + O + U + U + I;
            var deuxFoisOOUUi = 2 * OOUUi;

            if (OUIsquare == deuxFoisOOUUi) {
                console.log("" + number + " ^2 = " + OUIsquare + "   OOUUi = " + OOUUi + "    2 *  OOUUi = " + deuxFoisOOUUi);
            }
        }
    }
    return list_of_numbers;
}