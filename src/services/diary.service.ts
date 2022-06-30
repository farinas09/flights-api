import { DiaryEntry, DiaryEntryHeader, DiaryEntryRequest } from '../types';
import data from './data.json';

const diaryEntries: Array<DiaryEntry> = data as Array<DiaryEntry>;

export const addDiaryEntry = (newDiaryEntry: DiaryEntryRequest): DiaryEntry => {
  const newEntry = {
    id: Math.max(...diaryEntries.map((d) => d.id)) + 1,
    ...newDiaryEntry,
  };

  diaryEntries.push(newEntry);
  return newEntry;
};

export const getEntries = (): Array<DiaryEntry> => diaryEntries;

export const getEntriesHeaders = (): Array<DiaryEntryHeader> => {
  return diaryEntries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility,
    };
  });
};

export const getById = (id: number): DiaryEntry | undefined => {
  const entry = diaryEntries.find((d) => d.id === id);
  return entry;
};
