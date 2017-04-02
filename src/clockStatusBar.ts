import * as vscode from 'vscode';

import { getDateTime } from './timeFormatted';

export class ClockStatusBar { 
  private statusBar: vscode.StatusBarItem;

  constructor() {
    this.statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, -1000); // small number ensures it's always on the leftmost position
    this.statusBar.show();

    this.updateTime();    
  }

  private updateTime() {
    return setInterval(()=> {
      this.statusBar.text = getDateTime();
    }, 1000);
  }

  public dispose() {
    this.statusBar.dispose();
    clearInterval(this.updateTime());
  }
}