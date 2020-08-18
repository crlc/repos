## Express Routing

At this point, we will start using the Express router so that we can separate our resources. Let's start by creating routes for ```users``` and ```tweets```. 

NB: At this point you should be thinking about some of the routes you will need in your own project.

* Create a ```routes``` folder in your root directory.
* Create a folder within ```routes``` called ```api```.
* Create JavaScript files for each of your initial routes: ```users.js``` and ```tweets.js```.
* Follow this template to setup a test route for each file:

```JavaScript
const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

module.exports = router;
```

NB: The callback for every Express route requires a request and response as arguments

* In ```app.js```, after the other items you have already imported, import your routes:

```JavaScript
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
```

*  Tell Express to use your newly imported routes (put them with your 'Hello World' route):

```JavaScript
app.use("/api/users", users);
app.use("/api/tweets", tweets);
```

Try visiting ```localhost:5000/api/users/test``` - you should see the JSON you entered in the route's callback function. Check the other route and make sure it is working as well.

Lastly, let's import [body parser](https://www.npmjs.com/package/body-parser) to ```app.js``` so that we can parse the JSON we send to our frontend:

```JavaScript
const bodyParser = require('body-parser');
```

We'll also need to setup some middleware for body parser:

```JavaScript
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
```

You may want to read more about [Express routing](https://expressjs.com/en/guide/routing.html).