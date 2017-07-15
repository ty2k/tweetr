# Tweeter

Tweeter is a simple, single-page Twitter clone built with [Node.js](https://nodejs.org/en/), [Express](https://expressjs.com/), and [MongoDB](https://www.mongodb.com/). This project is class work from [Lighthouse Labs](https://github.com/lighthouse-labs/).

This repository is a fork of the [lighthouse-labs/tweetr base](https://github.com/lighthouse-labs/tweetr):

> Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express and MongoDB back-end skills.

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

\* Note that /server/index.js is looking for MongoDB on localhost:27017:

```js
const MONGODB_URI   = "mongodb://localhost:27017/tweeter";
```

## Dependencies

### Backend

- [Node.js](https://nodejs.org/en/) 5.10.x or above
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

### Frontend

- [jQuery](https://jquery.com/)
- [Font Awesome](http://fontawesome.io/)
- [Moment.js](https://momentjs.com/)
- [flash-message](https://www.npmjs.com/package/flash-message)

## Contact Author

[Tyler Krys](https://tylerkrys.ca) made this to learn about web development.