import * as moment from 'moment';
import { Config, getConfig } from './config';


const datetime_format: string = getConfig().datetimeFormat;

export function getDateTime(): string {
  return moment().format(datetime_format);
}
