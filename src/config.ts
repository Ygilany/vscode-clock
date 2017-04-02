import { workspace } from 'vscode';

const DEFAULT_DATETIME_FORMAT = `h:mm:ss a`;

export interface Config {
    datetimeFormat: string
}

export function getConfig(): Config {
    let configuration;
    try {
    configuration = workspace.getConfiguration('clock');

    } catch (error) {
        console.log(error);
    }

    return {
        datetimeFormat: configuration.datetimeFormat || DEFAULT_DATETIME_FORMAT
    } as Config;
}