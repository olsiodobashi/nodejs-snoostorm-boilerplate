# nodejs-snoostorm-boilerplate
Simple boilerplate app to listen to submissions, comments and PMs from reddit.

## Running the project
To run the project you first need to install the dependencies by running `npm i`.
Next step is to create your reddit bot from your [old preferences page](https://old.reddit.com/prefs/apps/). Your app type should be "personal script". While script apps don't need the "redirect URI" field, reddit still requires it. You can put something like "http://localhost:8080" in that field.
Finally, create a `.env` file and add the following information in it:

```
CLIENT_ID=
CLIENT_SECRET=
REDDIT_USER=
REDDIT_PASS=
```

Now you're ready to run the app. Simply run `node .` and your bot will start listening to whatever item you set it to.
