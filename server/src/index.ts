import 'dotenv/config';
import express from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import cors from 'cors';

import routes from './routes/index';
import errorMiddleware from './middlewares/error.middleware';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(
    cors({
        credentials: true,
        origin: process.env.CLIENT_URL
    })
);

app.use('/api', routes);
app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
