import { workspace } from "vscode";

const DEFAULT_DATETIME_FORMAT = `hh:mm:ss a`;
const DEFAULT_TIMEZONE = ``;

export interface Config {
  datetimeFormat: string;
  timezone: string;
}

export function getConfig(): Config {
  let configuration;
  try {
    configuration = workspace.getConfiguration(`clock`);
  } catch (error) {}

  return {
    datetimeFormat: configuration?.datetimeFormat || DEFAULT_DATETIME_FORMAT,
    timezone: configuration?.timezone || DEFAULT_TIMEZONE,
  } as Config;
}
