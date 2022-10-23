const express = require("express");
const router = express.Router();

const data_db = require('./.data_db');

const { Sequelize } = require("sequelize");
const { status } = require("express/lib/response");

const bcrypt = require('bcrypt');

const sequelize = new Sequelize(
  data_db.Database,
  data_db.Username,
  data_db.Password,
  {
    dialect: "mysql",
    host: "localhost",
    port: data_db.Port,
  }
);

try {
  sequelize.authenticate();
  console.log("Connected to MySql database!");
} catch (error) {
  console.error("Unable to connect", error);
}

router.use((req, res, next) => {
  next();
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await sequelize.query(
    `SELECT * FROM users WHERE username = '${username}'`
  );
  
  if (user[0].length === 0) {
    res.status(400).json({ message: "User not found" });
  } else {
    const validPassword = await bcrypt.compare(password, user[0][0].password);

    if (validPassword) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(400).json({ message: "Invalid password" });
    }
  }
});

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const user = await sequelize.query(
    `SELECT * FROM users WHERE username = '${username}'`
  );

  if (user[0].length === 0) {
    const hashedPassword = await bcrypt.hash(password, 10);

    await sequelize.query(
      `INSERT INTO users (username, password) VALUES ('${username}', '${hashedPassword}')`
    );

    res.status(200).json({ message: "User created" });
  } else {
    res.status(400).json({ message: "User already exists" });
  }
});

router.get("/cart/:user", async (req, res) => {
  const { user } = req.params;

  const cart = await sequelize.query(
    `SELECT user_cart.* FROM user_cart JOIN users ON user_cart.user_id = users.id WHERE users.username = '${user}'`
  );

  res.status(200).json(cart[0]);
});

router.post("/cart/:user", async (req, res) => {
  const { user } = req.params;
  const { departure_date, arrival_date, departure_station, arrival_station } = req.body;

  const user_id = await sequelize.query(
    `SELECT id FROM users WHERE username = '${user}'`
  );

  const cart = await sequelize.query(
    `INSERT INTO user_cart (departure_date, arrival_date, departure_station, arrival_station, user_id) VALUES ('${departure_date}', '${arrival_date}', '${departure_station}', '${arrival_station}', '${user_id[0][0].id}')`
  );

  res.status(200).json({ message: "Added to cart" });
});

router.delete("/cart/:user", async (req, res) => {
  const { user } = req.params;
  const { departure_date, arrival_date, departure_station, arrival_station } = req.body;

  const user_id = await sequelize.query(
    `SELECT id FROM users WHERE username = '${user}'`
  );

  const cart = await sequelize.query(
    `DELETE FROM user_cart WHERE departure_date = '${departure_date}' AND arrival_date = '${arrival_date}' AND departure_station = '${departure_station}' AND arrival_station = '${arrival_station}' AND user_id = '${user_id[0][0].id}'`
  );

  res.status(200).json({ message: "Removed from cart" });
});

router.get("/reservations/:user", async (req, res) => {
  const { user } = req.params;

  const reservations = await sequelize.query(
    `SELECT reservations.* FROM reservations JOIN users ON reservations.user_id = users.id WHERE users.username = '${user}'`
  );

  res.status(200).json(reservations[0]);
});

router.post("/reservations/:user", async (req, res) => {
  const { user } = req.params;
  const { departure_date, arrival_date, departure_station, arrival_station } = req.body;
  const date_res = new Date().toISOString().slice(0, 19).replace('T', ' ');

  const user_id = await sequelize.query(
    `SELECT id FROM users WHERE username = '${user}'`
  );

  const reservation = await sequelize.query(
    `INSERT INTO reservations (departure_date, arrival_date, departure_station, arrival_station, date_res, user_id) VALUES ('${departure_date}', '${arrival_date}', '${departure_station}', '${arrival_station}', '${date_res}', '${user_id[0][0].id}')`
  );

  res.status(200).json({ message: "Reservation created" });
});

router.delete("/reservations/:user", async (req, res) => {
  const { user } = req.params;
  const { departure_date, arrival_date, departure_station, arrival_station } = req.body;

  const user_id = await sequelize.query(
    `SELECT id FROM users WHERE username = '${user}'`
  );

  const reservation = await sequelize.query(
    `DELETE FROM reservations WHERE departure_date = '${departure_date}' AND arrival_date = '${arrival_date}' AND departure_station = '${departure_station}' AND arrival_station = '${arrival_station}' AND user_id = '${user_id[0][0].id}'`
  );

  res.status(200).json({ message: "Reservation deleted" });
});


module.exports = router;
