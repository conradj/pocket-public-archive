# Pocket articles history by week

Install Gatsby then run `npm install`

copy and rename .env.example to .env

Go to https://getpocket.com/developer/ and create a new app to get your consumer key.
Set `POCKET_CONSUMER_KEY` in .env to the pocket consumer key.

Run `node plugins/gatsby-source-pocket/node_modules/node-getpocket/authorise --consumerkey 'YOUR-CONSUMER-KEY'` and point your browser to http://127.0.0.1:8080 will get you the `POCKET_ACCESS_TOKEN` string to put in .env.

There are two other .env variables, set here because you might want to have different values between dev and prod:
`WEEKS_OF_HISTORY` will set the number of past weeks that will appear in your archive
`API_MAX_RECORDS` will limit the number of records to return, to stop you hitting your api limit. If the number of articles you've archived in the last `WEEKS_OF_HISTORY` is more than this number then the site may exhibit weird behavior.

(For more info on this see https://github.com/vicchi/node-getpocket)

Finally, run `gatsby develop` to generate your site

## Deploy

tbd full details but deploy via circle CI then schedule rebuild weekly to get a new Pocket history page for that week
