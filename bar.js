var test = function (a) {
    if (typeof a === 'number') {
        return String(a);
    }
    return a.map(String);
};
console.log(test(10));
console.log(test([10, 20]));
