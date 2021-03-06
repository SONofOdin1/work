const mongoose = require('mongoose');
const config = require('config');
const { Router } = require('express');
const router = require('../routes/api/auth');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
      await mongoose.connect(db, {
          useNewUrlParser: true
      });

      console.log('MongoDB Connected...');
    } catch(err) {
       console.error(err.message);
       process.exit(1);
    }
}

module.exports = connectDB;