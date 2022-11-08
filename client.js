import Snoowrap from 'snoowrap';
import * as dotenv from 'dotenv';

dotenv.config();

const client = new Snoowrap({
    userAgent: 'node:_niceBot:v1.0',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USER,
    password: process.env.REDDIT_PASS
});

export default client;
