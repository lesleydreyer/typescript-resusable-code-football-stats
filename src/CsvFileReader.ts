import fs from 'fs';

export class CsvFileReader {
	data: string[][] = [];

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
			});
	}
}
