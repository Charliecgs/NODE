const express = require("express");
const cors = require("cors");
const { connect } = require("./utils/connect");
const MovieRoutes = require("./api/routes/movie.routes");
const ActorRoutes = require("./api/routes/actor.routes");

const PORT = process.env.PORT || 8080;

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

app.use("/api/movies", MovieRoutes);
app.use("/api/actors", ActorRoutes);

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
  console.log(`Server listening on port 🙈: ${PORT}`);
});
