import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'StartApp',
    message: 'Backend operational',
  });
});

app.post('/api/contact', (req, res) => {
  const { name, email, service, message } = req.body || {};

  if (!name || !email || !service || !message) {
    return res.status(400).json({
      success: false,
      message: 'Veuillez remplir tous les champs requis.',
    });
  }

  console.log('New StartApp lead:', { name, email, service, message });

  return res.status(200).json({
    success: true,
    message: 'Merci ! Notre équipe StartApp vous répondra très rapidement.',
  });
});

if (process.env.NODE_ENV === 'production') {
  const distPath = path.join(__dirname, 'dist');

  app.use(express.static(distPath));

  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api/')) {
      return next();
    }
    return res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`StartApp server running on http://localhost:${PORT}`);
});
