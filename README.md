# Tweeter

Tweeter is a simple, single-page Twitter clone. This project is class work from [Lighthouse Labs](https://github.com/lighthouse-labs/).

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

During installation, Node will attempt installation of the following packages:

- [body-parser](https://www.npmjs.com/package/body-parser): ^1.15.2
- [chance](https://www.npmjs.com/package/chance): ^1.0.2
- [express](https://www.npmjs.com/package/express): ^4.13.4
- [md5](https://www.npmjs.com/package/md5): ^2.1.0
- [mongodb](https://www.npmjs.com/package/mongodb): ^2.2.30

Plus, the following JS and CSS is linked in `index.html` or included in `public/vendor`:

- [flash-message](https://www.npmjs.com/package/flash-message)
- [Font Awesome](http://fontawesome.io/)
- [jQuery](https://jquery.com/)
- [Moment.js](https://momentjs.com/)
- [Roboto font](https://fonts.google.com/specimen/Roboto)

## Screenshots

The Tweeter home screen is shown here in the Chrome Dev Tools emulating the Samsung Galaxy S5.
![Tweeter home screen, shown in Galaxy S5 aspect ratio](https://raw.githubusercontent.com/ty2k/tweeter/master/docs/Tweeter-screenshot-home-screen.png)

A flash message informs the user that their tweet is too long.
![Tweeter flash error message, shown in Galaxy S5 aspect ratio](https://raw.githubusercontent.com/ty2k/tweeter/master/docs/Tweeter-screenshot-error-flash.png)

## Contact Author

[Tyler Krys](https://tylerkrys.ca) made this to learn about web development.