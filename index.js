import client from './client.js';
import chalk from 'chalk';
import { CommentStream, SubmissionStream, InboxStream } from 'snoostorm';
import config from './config.js';

console.log('Client started');
const BOT_START = Date.now() / 1000;

// Listen to comments
const comments = new CommentStream(client, config.streamOptions);
comments.on('item', async comment => {
    try {
        if (comment.created_utc < BOT_START) return;

        console.log(chalk.green('========='));
        console.log(comment.body);
    } catch (error) {
        console.log(error);
    }
});

// Listen to submissions
const submissions = new SubmissionStream(client, config.streamOptions);
submissions.on('item', async submission => {
    try {
        if (submission.created_utc < BOT_START) return;

        console.log(chalk.green('========='));
        console.log(submission.title);
    } catch (error) {
        console.log(error);
    }
});

// Listen to inbox
const pms = new InboxStream(client, config.streamOptions);
pms.on('item', async pm => {
    try {
        if (pm.created_utc < BOT_START) return;

        console.log(chalk.green('========='));
        console.log(pm.title);
    } catch (error) {
        console.log(error);
    }
});
