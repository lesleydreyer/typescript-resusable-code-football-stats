import fs from 'fs';

// LOAD data with node std lib
// PARSE data
const matches = fs
	.readFileSync('original.csv', {
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

// array
// date index 0
// home team index 1
// away team index 2
// H for home A for away team that won index 5

// ANALYZE data
let manUnitedWins = 0;
for (let match of matches) {
	if (match[1] === 'Man United' && match[5] === 'H') {
		// manUnited won as home team
		manUnitedWins++;
	} else if (match[2] === 'Man United' && match[5] === 'A') {
		// manUnited won as away team
		manUnitedWins++;
	}
}
// REPORT data
console.log(`Man United won ${manUnitedWins} games`);
