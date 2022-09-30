const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require ("cors")

const pokemonRouter = require("./routes/allRoutes");

app.use(cors({
  origin:"*",
  methods: ['GET','POST','DELETE','UPDATE']
}))


app.use(express.json());


app.use("/pokemon", pokemonRouter);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
