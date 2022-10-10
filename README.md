# Consuming the Twitter API

### Built with
- [Node.js](https://nodejs.org/en/)
    - [Twitter API](https://www.npmjs.com/package/twitter)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [EJS](https://ejs.co/)

### How to use
Enter a terminal and type
````
git clone https://github.com/fredcardoso191/twitter-api.git
````

And then
````
cd twitter-api
````

Install project dependencies
````
npm install express body-parser ejs nodemon twitter dotenv --save
````

Create a file .env, type in the terminal
````
echo > .env
````

Inside the .env file, type
````
CONSUMER_KEY = -generated key-
CONSUMER_SECRET = -generated secret-
ACCESS_TOKEN_KEY = -generated token key-
ACCESS_TOKEN_SECRET = -generated token secret-
````
To generate the keys and tokens, see the [Developer Twitter](https://developer.twitter.com/en/products/twitter-api) website.

To run the project, type
````
npm start
````

Preview
![Capture](./frontend/imgs/preview.gif)