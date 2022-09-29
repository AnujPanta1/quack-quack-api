# Gas Tracker API Project

The goal of this project is to create a CRUD API that can be used with a front end app inorder to create a full stack bug tracking application. The API uses Node, Express, and Mongo.

## Authorization

The API uses json web tokens for authenticatino. After registering for an account, when loging in you will be returned a token that can be used for other API calls. The token will need to be placed in a header of a call.
