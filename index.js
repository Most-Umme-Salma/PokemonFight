const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require ("cors")
const { allpokemonRouter } = require("./routes/allRoutes");

const { pokemonRouter } = require("./routes/allRoutes");
const { pokemonBaseRouter } = require("./routes/allRoutes");

app.use("/pokemon", allpokemonRouter);
app.use("/pokemon", pokemonRouter);
app.use("/pokemon", pokemonBaseRouter);
app.use(cors)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
