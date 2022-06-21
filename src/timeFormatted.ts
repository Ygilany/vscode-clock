import * as moment from "moment";
import { getConfig } from "./config";

const getDatetimeFormat: string = getConfig().datetimeFormat;

export function getDateTime(): string {
  return moment().format(getDatetimeFormat);
}
