import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

// tuple
type MatchData = [Date, string, string, number, number, MatchResult, string];
export class CsvFileReader {
	data: MatchData[] = []; // array of arrays (or array of MatchDatas)

	constructor(public filename: string) {}

	read(): void {
		this.data = fs
			.readFileSync(this.filename, {
				// readfilesync can read any type of file - image, json, csv, etc
				// encoding utf8 says what kind of content we expect to read so
				// essentially telling readfilesync to return a string, without
				// encoding utf8 we'd get returned a buffer with raw data from the file
				encoding: 'utf-8',
			})
			.split('\n')
			.map((row: string): string[] => {
				return row.split(',');
			})
			.map(
				(row: string[]): MatchData => {
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
			);
	}
}
