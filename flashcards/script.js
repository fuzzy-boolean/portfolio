let exampleCards = [
    {
        ID: 1,
        front: "lingua",
        back: "language",
        tags: ["latin", "vocab"],
        rating: 0,
    },
    {
        ID: 2,
        front: "język",
        back: "language",
        tags: ["polish", "vocab"],
        rating: 0,
    },
    {
        ID: 3,
        front: "Syntax of a for-loop in JS",
        back: "<code>for ('1. initialize';'2. conditional'; '3. increment') {code} <br>Expressions 1 and 3 are optional.</code>",
        tags: ["JS", "coding"],
        rating: 0,
    },
];

for (let c of exampleCards) {
    console.log(c);
    const answer = prompt(
        c["front"] +
            "\n\n[d] - to discover back, \n[f] - if forgot, \n[g] - if good, \n[e] to exit."
    );
    if (answer === "e") {
        break;
    } else if (answer === "d") {
        alert(c["back"]);
    } else if (answer === "f") {
        c["rating"]--;
    } else if (answer === "g") {
        c["rating"]++;
    } else {
        break;
    }
}
