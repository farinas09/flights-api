import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.status(200).json({ fetching: true });
});

router.post('/', (_req, res) => {
  res.status(200).json({ fetching: true });
});

export default router;
