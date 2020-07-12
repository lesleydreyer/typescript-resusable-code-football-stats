import fs from 'fs';

export abstract class CsvFileReader<T> {
	data: T[] = []; // array of arrays (or array of MatchDatas)

	constructor(public filename: string) {}

	abstract mapRow(row: string[]): T;

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
			.map(this.mapRow); // passing reference, not invoking
	}
}
