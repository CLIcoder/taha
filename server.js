//in case I wanna use require module
//import { createRequire } from "module";
//const require = createRequire(import.meta.url);
import express from "express";
//import mongoose from "mongoose";
import cors from "cors";

const app = express();

//

//midllwares
app.use(express.json());
app.use(cors());

/**
 // you should use your own URI for mongodb connection
mongoose
  .connect(process.env.URI)
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));
 */

// port setup
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  return res.status(200).send("<h1> this is the costumer data page</h1>");
});

//costumerData
app.get("/costumerData", (req, res) => {
  return res.status(200).send("<h1> this is the costumer data page</h1>");
});

//Track Data
app.get("/trackData", (req, res) => {
  return res.status(200).send("<h1> this is the track data page</h1>");
});
//app listen connection stream
app.listen(port, () => console.log(`server running at port ${port}`));
