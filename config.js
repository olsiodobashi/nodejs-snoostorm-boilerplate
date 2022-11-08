const subreddit = 'askreddit';

const streamOptions = {
    subreddit,
    limit: 1000,
    pollTime: 2000
};

const config = {
    streamOptions
};

export default config;
