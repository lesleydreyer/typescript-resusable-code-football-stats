// enums are basically the same as an object
// but are good for signally to other developers
// that this is a collection of closely related values
// good for small sets of collections that won't change
// like small|medium|large, primary colors, etc
// but not things like blog post titles and netflix
// movie categories that will change a lot
export enum MatchResult {
	HomeWin = 'H',
	AwayWin = 'A',
	Draw = 'D',
}
