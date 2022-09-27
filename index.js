const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const { pokemonRouter } = require("./routes/pokemon");

app.use("/pokemon", pokemonRouter);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
