import app from './app';
import 'reflect-metadata';
import 'dotenv/config';
import './database';

app.listen(3000, () => {
  console.log('🏃 Running Server');
});
