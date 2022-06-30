import { Visibility, Weather } from '../../enums';
import { DiaryEntryRequest } from '../types';

const isString = (input: any) => {
  return typeof input === 'string' || input instanceof String;
};

const isDate = (input: string): boolean => {
  return Boolean(Date.parse(input));
};

const isWeather = (input: any): boolean => {
  return Object.values(Weather).includes(input);
};

const isVisibility = (input: any): boolean => {
  return Object.values(Visibility).includes(input);
};

const parseComment = (input: any): string => {
  if (!isString(input)) {
    throw new Error('Incorrect or missing comment');
  }
  return input;
};

const parseDate = (inputDate: any): string => {
  if (!isString(inputDate) || !isDate(inputDate)) {
    throw new Error('Incorrect or missing date');
  }
  return new Date(inputDate).toLocaleString();
};

const parseWeather = (inputWeather: any): Weather => {
  if (!isString(inputWeather) || !isWeather(inputWeather)) {
    throw new Error('Incorrect or missing weather');
  }
  return inputWeather;
};

const parseVisibility = (inputVisibility: any): Visibility => {
  if (!isString(inputVisibility) || !isVisibility(inputVisibility)) {
    throw new Error('Incorrect or missing visibility');
  }
  return inputVisibility;
};

const toNewDiaryEntry = (object: any): DiaryEntryRequest => {
  const newEntry: DiaryEntryRequest = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility),
  };
  return newEntry;
};

export default toNewDiaryEntry;
