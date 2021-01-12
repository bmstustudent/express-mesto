const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const { PORT = 3000 } = process.env;
const usersRoutes = require('./routes/users.js');
const cardsRoutes = require('./routes/cards.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// id пользователя
app.use((req, res, next) => {
  req.user = {
    _id: '5ffdb76dcacd961d603e4c83', // вставьте сюда _id созданного пользователя в postman
  };
  next();
});

// JSON-список всех пользователей
app.use('/users', usersRoutes);
// JSON-список всех карточек
app.use('/cards', cardsRoutes);

// Несуществующий адрес
app.all('*', (req, res) => res.status(404).send({ message: 'Запрашиваемый ресурс не найден' }));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
