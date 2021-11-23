import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan'
import cors from 'cors'
import ConnectDB from './configs/db'

import router from './routes/user.routes'

const PORT = process.env.PORT || 3000;
const app = express();

//MIDDLEWARE INIT
app.use(cookieParser());
app.use(logger('dev'));
app.use(cors());
//DB
ConnectDB();
//ROUTES
app.use('/user', router)



app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})



