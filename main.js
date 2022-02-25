let raceNumber = Math.floor(Math.random() * 1000);

let isRegisteredEarly = false;

let age = 26;

if (age > 18 && isRegisteredEarly) {
    raceNumber += 1000;
}

if (age > 18 && isRegisteredEarly) {
    console.log(` ${raceNumber} will race at 9:30am `);
} else if (age > 18 && (!isRegisteredEarly)) {
    console.log(` ${raceNumber} will race at 11:00am `);
}
if (age < 18) {
    console.log(` ${raceNumber} will race at 12:30pm `);
}
