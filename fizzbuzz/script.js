let o;

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        o = "fizzbuzz";
    } else if (i % 3 == 0) {
        o = "fizz";
    } else if (i % 5 == 0) {
        o = "buzz";
    } else {
        o = i;
    }

    console.log(`${o}`);
}
