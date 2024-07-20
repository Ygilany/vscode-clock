import * as moment from "moment-timezone";
import { getConfig } from "./config";

const config = getConfig();
const getDatetimeFormat: string = config.datetimeFormat;

export function getDateTime(): string {
  const now = moment();

  if(config.timezone) {
    return now.tz(config.timezone).format(getDatetimeFormat);
  } else {
    return now.format(getDatetimeFormat);
  }
}
