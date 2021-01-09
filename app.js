const express = require("express");

const app = express();
const PORT = 3000;
const path = require("path");
const usersRoutes = require("./routes/users.js");
const cardsRoutes = require("./routes/cards.js");

//раздаём статические файлы
app.use(express.static(path.join(__dirname, "public")));
//JSON-список всех пользователей
app.use("/users", usersRoutes);
//JSON-список всех карточек
app.use("/cards", cardsRoutes);

//Несуществующий адрес
app.all("*", (req, res) =>
  res.status(404).send({ message: "Запрашиваемый ресурс не найден" })
);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});


//не совсем понял "ошибка линтера", как именно это посмотреть, ESLint установлен, 3 зависимости установлены.