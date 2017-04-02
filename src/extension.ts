import * as vscode from 'vscode';
import { ClockStatusBar } from './clockStatusBar';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(new ClockStatusBar());
}