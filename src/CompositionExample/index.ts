import { MatchResult } from '../MatchResult';
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';

// Create abject that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// ANALYZE data
let manUnitedWins = 0;

for (let match of matchReader.matches) {
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
