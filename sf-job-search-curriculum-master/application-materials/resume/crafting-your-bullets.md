# Crafting Resume Bullets

The primary purpose of your resume is to demonstrate to a recruiter that you possess specific
skills. Recruiters spend only a few seconds glancing over your resume so you have to rely on
keywords to tell the story.

When you are crafting TECHNICAL BULLET POINTS do not discuss a feature of a project but discuss what YOU did as an 
engineer to create that feature!

## Steps to take

1. Identify a key skill that you will demonstrate. See [this list][keywords] for ideas.
2. Answer the following for each bullet:
  * What did I do?
  * How does it demonstrate the key skill?
  * What was the impact or benefit?

**Steps to take:**

A. Identify a key skill or technology you want to demonstrate knowledge in.

B. Pick a feature from one of your projects that either was enabled by said technology or let you use the skill you want to demonstrate.

C. **Use the skill and feature in a bullet point that tells us how you implemented said feature using said skill/technology. Your goal is to demonstrate that you understand how that skill/technology actually works from an engineering standpoint.

Examples:

**Skill: APIs**

Feature: Global on-off switch

*Designed global on-off switch & dimmer React-Native components by making HTTP post requests to the Phillips Hue API changing the state of the bulbs in turn.*

**Skill: UI/UX Design**

Feature: Drag and drop canvas for lightbulbs

*Developed a smooth, intuitive UI with high usability by leveraging the React-Native PanResponder Library to allow users to map bulbs to their physical space in their room*

**Skill: JS Promises & Async Functions**

Feature: Saving user preferences

*Implemented scenes feature to allow users to save their current settings by utilizing React-Native’s AsyncStorage library & JavaScript promises to fetch & store data asynchronously*

Compile a list of the skills you want to demonstrate, then craft your bullets around them.

### Example 1 (Non technical)
__Skill to Demonstrate__: Leadership

__What did I do?__: Founded company softball team

__How does it demonstrate the key skill?__: Took initiative. Organized long-term project.

__What was the impact or benefit?__: Improved team morale and collaboration.

__Result__: "Founded and managed company softball team, resulting in improved morale and communication."

**Software related skills**
* Anything you coded.  Even if it was brief or unfinished or unofficial
* Quantitative analysis / handling data
* Improvements to a website 

**Recognition**
* Published something
* Gave a talk
* Won an award
* Given a new responsibility or job title

**Interpersonal skills**
* Were part of a team
* Handled heavy volume of customer...
* Mentored someone
* Made clients happy
* Made coworkers happy
* Attracted customers
* Negotiated something

**Output**
* Made something faster or better
* Reduced number of errors
* Took initiative to do something
* Delivered project on time

**Money**
* Made or saved money
* Handled lots of money (or widgets worth a lot of money)
* Delivered project within budget


### Example 2 (Technical)

## TECHNICAL SKILLS IMPORTANT NOTE:  When writing, try not to discuss a feature, but try to let the reader know about the feature and what YOU did to make it happen!

__Skill to Demonstrate__: Scaling an App

__What did I do?__: Stored images in the cloud.

__How does it demonstrate the key skill?__: Shows I know how to use AWS S3.

__What was the impact or benefit?__: Reduces server load and allows for scale.

__Result__: "Stores image uploads in the cloud using AWS S3, reducing server load and allowing app to scale gracefully."

## Example 3 (Technical)
__Skill to Demonstrate__: Use of Third-Party API.

__What did I do?__: Determine user locations and filter searches.

__How does it demonstrate the key skill?__: Shows I know how to use the Google Maps API.

__What was the impact or benefit?__: Allows users to search for each other based on location

__Result__: "Integrates Google Maps API with geolocation based searching to display location of other users on a map."

## Notes from a Technical Coach:

Bullet points should be substantive.  A good pattern to follow is the following:

**GOOD:**

**"Used -technology- to implement -feature/idea/functionality- allowing for -very brief description of the capabilities-"**


Example: *"Utilized AWS S3 and the Paperclip gem to implement user image uploads reducing server load and allowing for scalability of image services."*

We do not want to you use overly simple, un-substantive, or all jargon bullet points. We also do not want to simply describe what our apps do:

**BAD:**

"Implemented CRUD functionality for note taking."

"Persisted user data with AJAX requests to the Rails backend"

"Leveraged ActiveRecord in Rails to make queries to the PostgreSQL database and generate JSON views with the jBuilder gem."

-Technical language that's too casual.

**BAD:**
"Vanilla"
"Hand rolled"
"..in 2 weeks"

We want to **avoid terms like 'handrolled' and 'vanilla' in a resume.**  They are fine in conversation, but don't read well on a resume.  Instead use words like 'custom'  or say that you 'designed' or 'implemented' the idea or technology in question.  Rather than say 'vanilla' you can use the term 'basic' in some cases  (like when you build your own middleware from basic javascript) or simply say the name of the tech or library without any qualifiers.  It conveys the same message.

Also, **do not want to talk about the amount of time it took to build apps or their features.**  It does not read as impressive when you say "Implemented music sharing functionality in 2 weeks."  If you want to highlight an impressive time constraint (say, 48 hours for a fullstack app at a hackathon) Include the name of the event/the amount of time you took to build it in parenthesis in the description of the app before the bullet points, BUT DO THIS SPARINGLY.

### To help get you brainstorming:
 
* Did you find some clever way to DRY up your code?
* Did you bootstrap some data to avoid extraneous AJAX requests?
* Did you make some tough choices in your database schema?
* Did you use cookies to store anything other than a session token?
* Does your Javascript use any math to resize something in the DOM?
* Did you use a library in a way that its author probably didn't anticipate?
* Do you have any data that's nested one degree deeper than usual?
* Did you override a Rails or Backbone.js method? (eg. Model#parse or Model#as_json)
* Do your ActiveRecord models run any custom SQL queries?
* Did you make any trade-offs related to performance, eg. store information that's costly to compute?
* Are you doing any caching?
* Do you make AJAX requests to any unexpected routes?
* Did you write a custom CompositeView class with a recursive #remove method?
* Does your chess game make a recursive deep_dup to validate moves without modifying the game state?
* Do your chess pieces inherit from a Slideable and Steppable class?

# RESUME PROJECT BULLET POINT CHEAT SHEET...[CHECK THIS OUT](https://docs.google.com/document/d/1YN61Ly9nceRQmBGEohyW6w2Oi3IFJJ9smiDJYz2CAzA/edit?usp=sharing)!!!
[Cheat Sheet-Project Bullets](https://docs.google.com/document/d/1YN61Ly9nceRQmBGEohyW6w2Oi3IFJJ9smiDJYz2CAzA/edit?usp=sharing)

When answering these questions, the key is to point out features you built that went **above and beyond the basic requirements**.

### Example bullet points:
#### Project Name (Rails, PostgreSQL, React, Redux, React Player, Sass, Webpack, AWS, Heroku)		           
**A single-page Spotify clone where users can stream music, create playlists, and follow their friends and favorite artists.**
* Integrated React Player with Redux’s global store by dispatching actions only when sharing information across components and encapsulating music player data to give the user a seamless, uninterrupted experience.
* Reduced needed PostgreSQL database tables by 25% and heavily DRYed up backend code by utilizing a one-to-many polymorphic table on the database level, as well as Rails concerns on the model and controller level.
* Designed a weighted search algorithm that initially displays the category with the most results and orders items based upon the relevance of the search query.

#### Project Name  (React VR, npm)  	              		      		           
**A developer’s toolkit for streamlining the creation of applications in virtual reality using React VR.**
* Published a component library and navigation system for React VR as an npm that bypasses common 
pitfalls of content rendering and 360° visualization in virtual reality.
* Created an npx package runner that generates and initiates a pre-configured React VR project and demo 
app with a one-line terminal command to unburden the user of needed boilerplate code.
* Packaged a script that scrapes HTML content and dynamically renders it in a VR preview with the component library.

#### Project Name (JavaScript, HTML, CSS)    			      		           
**A minimalist side-scrolling puzzle platformer that requires cooperation and intuitive thinking in order to solve puzzles.**
* Constructed a unidirectional data flow architecture with a single application-level state object to prevent mutated state and data collision, and to ensure reliable DOM rendering.
* Built a custom physics engine that supports collision of many objects at once and manages movement patterns, gravity, and condition for each player while flying, swimming, or in gravity chambers.
* Implemented a tile-map parsing system that reads in a level, dynamically assigns individual tiles to ‘actor’ and ‘background’ layers, and ensures that only ‘actor’ tiles are repainted to the DOM, thus heavily reducing game lag.

------------------------------------------------------------------------------------------------------------------------------------------------------

#### Project Name
**A web app inspired by Airbnb, built with Rails, React, Redux HTML5, and CSS3**       				
* Created custom SQL queries and reduced server load through the utilization of Active Record associations to 
extract data from multiple tables in a single query
* Ensured user privacy and autonomy through frontend and backend authentication measures and React Router, 
allowing users to only access and make changes to their own reservations when logged in
* Introduced improvements in efficiency and complexity to the architecture of Airbnb’s current stylesheets 
through the use of the SASS pre-compiler


#### Project Name
**A fully interactive JavaScript and HTML5 Canvas game based on the classic Super Nintendo game Bomberman 2**
* Improved player retention through the development of an opponent AI and randomized level rendering through the implementation of conditional logic and engaging sprites
* Engineered layers of gaming complexity through the introduction of game state changes that rely on OOP techniques and vector calculations
* Decreased graphic rendering lag through the use of HTML5 Canvas and animation frames, resulting in a more realistic gaming experience


#### Project Name
**A food-sharing iOS app built using React Native and Google Firebase**
* Facilitated primary use case of the app by integrating native camera functions with photo uploads to the app database
* Developed user autonomy by linking their food posts to their account, allowing for fast and efficient post editing and deletion
* Produced the food post UI using React Native styling and user-centered design techniques , improving usability and user retention

* Integrated Google Maps API with the Ruby Geocoder gem and custom search functionality to dynamically present business locations based on user parameters.
* Utilized Redux architecture's unidirectional data flow with React for predictable state and reliablle DOM rendering
* Used observer pattern to handle management of global Z-indexes for overlapping items.
* Lowered latency of DB read/write by factor of 7 by using Unicorn to enable virtual multi-threaded processing.
* Used xcode in conjunction with React Native library to hook into mobile device cameras and geolocation.
* Designed dynamic data-visualizations with Javascript implemented algorithms based on user input
* Created custom modal framework using React component architecture allowing for efficient development of new forms.
* Created top-level music player using HTML5 audio and React, giving the user seamless audio streaming during navigation.
* Leveraged custom event listeners and the Redux cycle to dynamically sync audio waveforms and play-pause toggle buttons with music player.
* Utilized CSS media queries to create a fully responsive, device agnostic design. 
* Configured the Node backend with PostgreSQL, using the Sequelize ORM for validations and database queries.
* Incorporated MVC architecture with Polymorphic model associations, reducing the number of required tables by almost 50%.
* Implemented local strategy for user authentication with Passport.js, using BCrypt for password hashing.
* Generated intelligent, movement-based animation using asynchronous Javascript.
* Developed collision detection algorithm for sprite characters, and integrated with keystroke event listeners to predict future player direction and movement.
* Utilized HTML Image Maps to allow users to click directly on an item in a photograph.
* Recorded user activity using React Router to create a seamless user
experience during authentication process and app navigation.
* Processed and displayed reat-time BTC price data in the Sentiment Analysis by simultaneously leveraging Twitter Streaming API and CoinBase Digital Currency API
* Designed intuitive, device-agnostic UI using Adobe Xd to meet Progressive Web
App (PWA) standards.
* Developed a custom responsive calendar using CSS3 to display logged infusions.



[keywords]: resume-keywords.md
