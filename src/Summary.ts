import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReport';

// other objects can implicitly satisfy an interface so you don't have to export,
// but you can optionally use interface to satisfy it when writing out a class so need to
export interface Analyzer {
	run(matches: MatchData[]): string;
}

export interface OutputTarget {
	print(report: string): void;
}

export class Summary {
	static winsAnalysisWithHtmlReport(team: string): Summary {
		return new Summary(new WinsAnalysis(team), new HtmlReport());
	}

	constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

	buildsAndPrintReport(matches: MatchData[]): void {
		const output = this.analyzer.run(matches);
		this.outputTarget.print(output);
	}
}
