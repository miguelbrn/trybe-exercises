require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);
const fileExists = (fileName) => {
  const files = fs.readdirSync(`${__dirname}/uploads`);
  return files.some((file) => file === fileName);
};

const storage = multer.diskStorage({
  filename: (req, file, callback) => 
    callback(null, `${Date.now()}-${file.originalname}`),
  destination: (req, file, callback) => callback(null, 'uploads'),
});

const fileFilter = (req, file, callback) => {
  if (file.mimetype !== 'image/png') {
    req.fileValidationError = true;
    return callback(null, false);
  }
  if (fileExists(file.originalname)) {
    req.fileDuplicated = true;
    return callback(null, false);
  }
  callback(null, true);
};
const upload = multer({ fileFilter, storage });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', controllers.ping);
app.post('/upload',
  upload.single('file'),
  (req, res) => {
    if (req.fileValidationError) {
      return res.status(403).send({ error: { message: 'Extension must be `png`' } }); 
}
  
  if (req.fileDuplicated) {
    return res.status(403).send({ error: { message: 'File already exists' } }); 
  }
  return res.status(200).send('OK');
});

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
