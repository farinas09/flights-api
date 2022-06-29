import express from 'express';
import diariesRouter from './routes/diary.route';

const app = express();
const PORT = 3000;

app.use(express.json()); //middleware to transform req.body to json
app.use('/api/diaries', diariesRouter);

app.get('/ping', (_, res) => {
  res.status(200).json({ ok: true });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
