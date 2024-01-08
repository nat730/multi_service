import express from "express";

const app = express();
const PORT = 4000;

app.get('/', (_, res) => {
    res.status(200);
    res.send('Hello world!');
  });

app.listen(PORT, () => {
  console.log("Express server started on port " + PORT);
});

