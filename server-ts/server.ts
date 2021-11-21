import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan'

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cookieParser());
app.use(logger('mini'))



