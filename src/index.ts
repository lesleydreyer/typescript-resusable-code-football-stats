import { CsvFileReader } from './CsvFileReader';

// LOAD data with node std lib
// PARSE data
const reader = new CsvFileReader('football.csv');
reader.read();

// array
// date index 0
// home team index 1
// away team index 2
// H for home A for away team that won index 5

// ANALYZE data
// enums are basically the same as an object
// but are good for signally to other developers
// that this is a collection of closely related values
// good for small sets of collections that won't change
// like small|medium|large, primary colors, etc
// but not things like blog post titles and netflix
// movie categories that will change a lot
enum MatchResult {
	HomeWin = 'H',
	AwayWin = 'A',
	Draw = 'D',
}
let manUnitedWins = 0;

for (let match of reader.data) {
	if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
		// manUnited won as home team
		manUnitedWins++;
	} else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
		// manUnited won as away team
		manUnitedWins++;
	}
}
// REPORT data
console.log(`Man United won ${manUnitedWins} games`);
