import { DiaryEntry } from '../types';
import data from './data.json';

const diaryEntries: Array<DiaryEntry> = data as Array<DiaryEntry>;

export const getEntries = () => diaryEntries;

export const addEntry = () => null;
