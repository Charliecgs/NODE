const express = require("express");
const cors = require("cors");
const { connect } = require("./utils/connect");
const { configCloudinary } = require("./middlewares/files.middleware");
const ConcesionarioRoutes = require("./api/routes/concesionario.routes");
const CarRoutes = require("./api/routes/car.routes");
const UsersRoutes = require("./api/routes/user.routes");

const PORT = process.env.PORT || 8080;

configCloudinary();

const app = express();
connect();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:4200"],
    credentials: true,
  })
);

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: true }));

app.use("/concesionarios", ConcesionarioRoutes);
app.use("/cars", CarRoutes);
app.use("/user", UsersRoutes);

app.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  return next(error);
});
app.use((error, req, res) => {
  return res
    .status(error.status || 500)
    .json(error.message || "Unexpected error");
});

app.disable("x-powered-by");

app.listen(PORT, () => {
  console.log(
    `Server listening on port: ${PORT} and route http://localhost:${PORT}`
  );
});
