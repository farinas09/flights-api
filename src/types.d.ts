import { Visibility, Weather } from '../enums';

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}
//export type DiaryEntryHeader = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>;
export type DiaryEntryHeader = Omit<DiaryEntry, 'comment'>;

export type DiaryEntryRequest = Omit<DiaryEntry, 'id'>;
