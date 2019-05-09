# Caliper example Sinatra/React app


## How to run locally
* Clone the repo
* Install Ruby dependencies: `$ bundle install`
* Install JS dependencies: `$ npm install` _or_ `$ yarn`
* Run the javascript watcher/server: `$ npm run dev` _or_ `$ yarn dev`
* Run the Sinatra app: `$ bundle exec shotgun`
* Load the Sinatra apps url, probably: http://localhost:9393/

#### How does it work?
When you run `npm run dev`, webpack is transpiling all your JS and CSS and serving them up as `http://localhost:8080/bundle.js`.

The Sinatra app references that bundle so that the latest React app is loaded when you refresh the page.

## Linting
To run the linter once:
```
$ npm run lint
// or
$ yarn lint
```

To run the watch task:
```
$ npm run lint:watch
// or
$ yarn lint:watch
```

## Testing
To run the tests:
```
$ npm test
// or
$ yarn test
```

## Production Build

- run `$ npm run build` _or_ `$ yarn build`
- run `APP_ENV=production bundle exec shotgun` 

This creates a transpiled asset file (`bundle.js`) of your JS and CSS in the `lib/app/public/` directory. This is great for production, but not so hot for development workflow as you would need to transpile _every time_ you made a change to the JS.

## Deploying to Heroku
This app is set up for deployment to Heroku!

_This assumes you have already have a Heroku account and have the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed_

🚨 _Be sure to run the build script before deploying._ 🚨

```
$ heroku login
$ heroku create -a name-of-your-app
$ git push heroku master
$ heroku open
```

If you're unfamiliar with Heroku deployment (or just need a refresher), they have a really great walkthrough [here](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction).


## Changelog

### v0.1.0
Initial release. Basic setup for a React + Sinatra integration
