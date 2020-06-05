# Github Repo Search

Search and view repo via the Github API

Performance(Caching): Requests are cached in session storage to limit the use of the API.

## What is this?

A take home project built with React v16.x with Hooks and Redux / Saga for state management.

Demo: https://github-user-search-project.herokuapp.com/

## Features:

- React 16.x
- React Hooks
- Rate Limiter (for making sure we don't exceed the limit)
- [Performance] Caching keywords, responses from API call.
- React Router for routing requests.
- Redux / Saga for state management.
- Prettier.io for codebase management.
- Ready to deploy on Heroku!
- Flow for static type checker.
- Styling done via Material UI.
- Jest for Unit / Snapshot testing.

![alt text](https://i.ibb.co/KVqr1gb/Screen-Shot-2020-06-05-at-2-17-54-PM.png 'Testing')

### Libraries and tools

- Aphrodite
- Babel
- Jest
- React
- React Router
- Redux
- Redux saga
- SUIT CSS
- Webpack
- lodash-fp
- normalizr
- Material-ui

## Running locally

1. Clone the repository
1. Install dependences `npm install`
1. Run the server `yarnpkg run start`
1. Visit `http://localhost:3001/` (note the trailing slash)

### API limit (Optional)

Github API has strict limit on number of requests you can send.

If you want to increase limit locally, you can follow these steps:

[personal access token](https://github.com/blog/1509-personal-api-tokens) and these will be sent along with the API calls you make.

```
export USER_SEARCH_OAUTH=<your token>
npm run start
```
