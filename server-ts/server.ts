import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan'
import cors from 'cors'

import router from './routes/user.routes'

const PORT = process.env.PORT || 3000;
const app = express();

//MIDDLEWARE INIT
app.use(cookieParser());
app.use(logger('dev'));
app.use(cors());

//ROUTES
app.use('/user', router)



app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})



