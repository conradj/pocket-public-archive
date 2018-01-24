## example site

https://conradj.github.io/pocket-public-archive

# Pocket articles history by week

Install Gatsby then run `npm install`

copy and rename `.env.example` to `.env`

Go to https://getpocket.com/developer/ and create a new app to get your consumer key.
Set `POCKET_CONSUMER_KEY` in `.env` to the pocket consumer key value.

Run `node plugins/gatsby-source-pocket/node_modules/node-getpocket/authorise --consumerkey 'YOUR-CONSUMER-KEY'` and point your browser to http://127.0.0.1:8080 will get you the `POCKET_ACCESS_TOKEN` string to put in `.env`.

(For more info on this process see https://github.com/vicchi/node-getpocket)

There are two other `.env` variables, set here because you might want to have different values between dev and prod:
`WEEKS_OF_HISTORY` will set the number of past weeks that will appear in your archive
`API_MAX_RECORDS` will limit the number of records to return, to stop you hitting your api limit. If the number of articles you've archived in the last `WEEKS_OF_HISTORY` is more than this number then the site may exhibit weird behavior.

Finally, run `gatsby develop` to generate your site

## Deploy

tbd full details but deploy via circle CI then schedule rebuild weekly to get a new Pocket history page for that week

### FAQS

1. Why have you made this?

   I've always wanted a way of easily seeing what I've recently read. Pocket gives you an infinitely scrolling list but I like the idea of a easily navigatable weekly digest.

2. but...isn't it like publishing your browsing history?

   Yeah...kind of. I could do with a way of hiding stuff!

3. Why is it a static site?

   Reading history doesn't change, so it seems a bit painful to get it from an API, do a load of transformations and stick it in a database, just to read it back out again. [I tried it once](https://github.com/conradj/Reading), and it was quite painful.

4. What plans have you got for this?

   Loads! Awesome stats, tags, filter by domain, subject etc. Social stuff, sharing etc. One day it will be a social network, probably bigger than Facebook.
But, mostly if you're a big Pocket user, I'd be interested in finding out your use case.

Lastly, now I've done this, it turns out I mostly read about Tech hiring methods, Facebook/Amazon, Donald Trump and cryptocurrency so maybe it's got an audience of one. Maybe your archive will be more interesting - send me a link!
