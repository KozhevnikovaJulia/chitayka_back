const express = require('express');
const picturesRouter = require('./routes/picturesRouter');
const testRouter = require('./routes/testRouter');
const config = require('config');
const port = process.env.PORT || 5555;
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json({ extended: true }));
app.use('/test', testRouter);
app.use('/pictures', picturesRouter);

const mongoose = require('mongoose');

async function start() {
  try {
    await mongoose.connect('mongodb://localhost/chitayka', {
      useNewUrlParser: true,
      useUnifiedTopology: true      
    });



    app.listen(port, () => console.log(`App has been started on port ${port}...`));
  } catch (e) {
    console.log('Server Error', e.message);
    process.exit(1);
  }
}

start();


