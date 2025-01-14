// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];


var multiplied = numbers.map(function multiply(number) {
    return number * 100;
});

var multiplied1 = numbers.map(function (number) {
    return number * 100;
});

var multiplied2 = numbers.map(number => {
    return number * 100;
});

var multiplied3 = numbers.map(number => number * 100);

console.log(multiplied, multiplied1, multiplied2, multiplied3);