let exampleCards = [
    {
        ID: 1,
        content: {
            front: "lingua",
            back: "language",
            phrases: ["lingua latina lingua mortua non est."],
        },
        tags: ["latin", "vocab"],
        rating: 0,
    },
    {
        ID: 2,
        content: {
            front: "język",
            back: "language",
            phrases: ["Lubię uczyć się języków obcych."],
        },
        tags: ["polish", "vocab"],
        rating: 0,
    },
    {
        ID: 3,
        conten: {
            front: "Syntax of a for-loop in JS",
            back: "<code>for ('1. initialize';'2. conditional'; '3. increment') {code;}</code>",
            remarks: "Expressions 1 and 3 are optional.",
        },
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
