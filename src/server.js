import express from 'express';

const app = express();
const port = 3000;

app.use(express.static('./src/frontend'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
