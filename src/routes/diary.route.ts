import express from 'express';
import * as diaryService from '../services/diary.service';
import toNewDiaryEntry from '../utils/diary';

const router = express.Router();

router.get('/', (_req, res) => {
  const entries = diaryService.getEntriesHeaders();
  res.status(200).json({ data: entries });
});

router.get('/:id', (req, res) => {
  const diary = diaryService.getById(Number(req.params.id));
  return diary ? res.status(200).json({ data: diary }) : res.sendStatus(404);
});

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body);
    const diaryResponse = diaryService.addDiaryEntry(newDiaryEntry);
    res.status(200).json(diaryResponse);
  } catch (e: any) {
    res.status(400).json(e.message);
  }
});

export default router;
