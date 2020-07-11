import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

// LOAD data with node std lib
// PARSE data
const reader = new CsvFileReader('football.csv');
reader.read();

const dateOfFirstMatch = reader.data[0][0];

// array
// date index 0
// home team index 1
// away team index 2
// H for home A for away team that won index 5

// ANALYZE data
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
