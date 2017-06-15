import { workspace } from 'vscode';

const DEFAULT_DATETIME_FORMAT = `hh:mm:ss a`;

export interface Config {
    datetimeFormat: string
}

export function getConfig(): Config {
    let configuration;
    try {
    configuration = workspace.getConfiguration('clock');

    } catch (error) {
    }

    return {
        datetimeFormat: configuration.datetimeFormat || DEFAULT_DATETIME_FORMAT
    } as Config;
}