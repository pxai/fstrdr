const random = max => randomWithin(0, max);
const randomWithin = (min, max) => Math.round(Math.random() * (max - min)) + min;
const randomIndex = list => randomWithin(0, list.length - 1);
const shuffle = list => {
    let a, b, tmp;
    let shuffled = list.slice();
    shuffled.forEach( element => {
        a = randomIndex(shuffled);
        b = randomIndex(shuffled);
        tmp = shuffled[a];
        shuffled[a] = shuffled[b];
        shuffled[b] = tmp;
    });

    return shuffled;
};

export { random, randomWithin, randomIndex, shuffle };
