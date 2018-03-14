# Pocket articles history by week

**[Deployed Site](https://conradj.co.uk/weeklyreads)**

## Make Your Own

1. Install Gatsby then run `npm install`

2. Copy and rename `.env.example` to `.env`

3. Go to https://getpocket.com/developer/ and create a new app to get your consumer key.
   Set `POCKET_CONSUMER_KEY` in `.env` to the pocket consumer key value.

4. Run `node node_modules/node-getpocket/authorise --consumerkey 'YOUR-CONSUMER-KEY'` and point your browser to http://127.0.0.1:8080 to get the `POCKET_ACCESS_TOKEN` string to put in `.env`.

(For more info on this process see https://github.com/vicchi/node-getpocket)

5. There are three other `.env` variables, set here because you might want to have different values between dev and prod:

* `WEEKS_OF_HISTORY` will set the number of past weeks that will appear in your archive

* `API_MAX_RECORDS` will limit the number of records to return, to stop you hitting your api limit. If the number of articles you've archived in the last `WEEKS_OF_HISTORY` is more than this number then the site may exhibit weird behavior.

* `GET_CURRENT_WEEKS_ARTICLES_ONLY`: TRUE will only get articles for the this weeks and last (because it may be 1 minute into the week, it will always go back to the previous week). FALSE will get as many articles as it can based on `WEEKS_OF_HISTORY` and `API_MAX_RECORDS`.

6. Finally, run `gatsby develop` to generate your site

## Deploy

After deploying an initial build, set `GET_CURRENT_WEEKS_ARTICLES_ONLY` to `FALSE`. If your CI allows it, run a daily build to pick up the articles you read that day.

Alternatively your CI/CD pipeline might have an API which you can kick off with a Zapier scheduled task or similar.

I also run a weekly build that rebuilds all pages (`GET_CURRENT_WEEKS_ARTICLES_ONLY: FALSE`) so that all pages refresh with any styling or functionality that I've added.

### FAQS

1. Why have you made this?

   I've always wanted a way of easily seeing what I've recently read. Pocket gives you an infinitely scrolling list but I like the idea of a easily navigatable weekly digest.

   It's also a way of highlighting topics and issues that I find interesting - I could tweet or blog about them, but this is really low friction and gets straight to the source.

2. Why is it a static site?

   Reading history doesn't change, so it seems a bit painful to get it from an API, do a load of transformations and stick it in a database, just to read it back out again. [I tried it once](https://github.com/conradj/Reading), and it was quite painful.

3. What plans have you got for this?

   Loads! Awesome stats, tags, filter by domain, subject etc. Social stuff, sharing etc. One day it will be a social network, probably bigger than Facebook.
   But, mostly if you're a big Pocket user, I'd be interested in finding out your use case.

Lastly, now I've done this, it turns out I mostly read about Tech hiring methods, Facebook/Amazon, Donald Trump and cryptocurrency so maybe it's got an audience of one. Perhaps though, your archive will be more interesting - send me a link!
