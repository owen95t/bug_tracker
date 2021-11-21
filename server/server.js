const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const limiter = require('express-rate-limit');

//SWAGGER
const swaggerUI = require('swagger-ui-express');
//const swaggerJSON = require('./swagger.json');

//ROUTES
const userRoutes = require('./routes/user_router')

//SWAGGER SETUP
//app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSON, {explorer: true}));
//END SWAGGER SETUP

//LISTEN
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})