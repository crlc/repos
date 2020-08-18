## Tweets

Before you start this section, you will want to review [routing in Express](https://expressjs.com/en/guide/routing.html).

Utilizing your knowledge of validator, create an tweets validation. It should look something like:

```JavaScript
// validation/tweets.js

const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateTweetInput(data) {
  let errors = {};

  data.text = validText(data.text) ? data.text : '';

  if (!Validator.isLength(data.text, { min: 5, max: 140 })) {
    errors.text = 'Tweet must be between 5 and 140 characters';
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Text field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
```

Following a now-familiar pattern, let's setup a model for our tweets:

```JavaScript
// models/Tweet.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TweetSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Tweet = mongoose.model('tweet', TweetSchema);
```

Let's make routes to retrieve all tweets, a single user's tweets, and individual tweets:

```JavaScript
// routes/api/tweets.js
// Go ahead and delete the test route

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Tweet = require('../../models/Tweet');
const validateTweetInput = require('../../validation/tweets');

router.get('/', (req, res) => {
    Tweet.find()
        .sort({ date: -1 })
        .then(tweets => res.json(tweets))
        .catch(err => res.status(404).json({ notweetsfound: 'No tweets found' }));
});

router.get('/user/:user_id', (req, res) => {
    Tweet.find({user: req.params.user_id})
        .then(tweets => res.json(tweets))
        .catch(err =>
            res.status(404).json({ notweetsfound: 'No tweets found from that user' }
        )
    );
});

router.get('/:id', (req, res) => {
    Tweet.findById(req.params.id)
        .then(tweet => res.json(tweet))
        .catch(err =>
            res.status(404).json({ notweetfound: 'No tweet found with that ID' })
        );
});
```

Finally, we will create a protected route for a user to post tweets:

```JavaScript
// routes/api/tweets.js

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateTweetInput(req.body);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newTweet = new Tweet({
        text: req.body.text,
        user: req.user.id
      });
  
      newTweet.save().then(tweet => res.json(tweet));
    }
  );
```

Don't forget to export your router: `module.exports = router;`

If this were a real app, we would want to create an authenticated route to delete tweets, and perhaps some additional routes to add comments or likes. However, for the sake of this tutorial, we are going to keep things simple and stick with the ability to retrieve and create tweets.

Use Postman to test your new routes.

## Next Steps

* Think through your own database schema
* Finish setting up your backend skeleton
  * Models
  * Routes
  * Validations
* Populate your database with some dummy data

## Further Reading

* [Promises in JavaScript](https://developers.google.com/web/fundamentals/primers/promises)
* [SQL vs. NoSQL](https://www.janbasktraining.com/blog/sql-vs-nosql/)
* [Async functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)