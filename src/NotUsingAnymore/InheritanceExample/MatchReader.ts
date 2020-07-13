import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from '../../MatchResult';
import { dateStringToDate } from '../../utils';

// tuple
type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
	mapRow(row: string[]): MatchData {
		return [
			dateStringToDate(row[0]),
			row[1],
			row[2],
			parseInt(row[3]),
			parseInt(row[4]),
			// as MatchResult is a type assertion - override typescript behavior by telling typescript
			// to consider row[5] as value from enum 'H', 'A', or 'D'
			row[5] as MatchResult,
			row[6],
		];
	}
}
