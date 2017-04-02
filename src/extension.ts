import * as vscode from 'vscode';
import { getDateTime } from './timeFormatted';


export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "vscode-clock" is now active!');
	const statusbar: vscode.StatusBarItem = vscode.window
		.createStatusBarItem(vscode.StatusBarAlignment.Right, -1000); // higher number means more to the left
	
	statusbar.show();

	context.subscriptions.push(statusbar);
	updateTime();

	function updateTime() {
		setInterval(()=> {
			statusbar.text = getDateTime();
		}, 1000);
	}
}