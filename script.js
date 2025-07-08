const letterSearch = ['non', 'banan', 'mashina', 'asal', 'olma', 'aziza', 'Gul'];

const nWords = letterSearch.filter(letterSearch => letterSearch.includes('n'));
const noWords = letterSearch.filter( letterSearch =>!letterSearch.includes('n'));

console.log(nWords, "'n' harfi ishtirok etgan so'zlar");
console.log(noWords, "'n' harfi ishtirok etmagan so'zlar");
