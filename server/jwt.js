// jwt.js,token中间件
const expressJwt = require("express-jwt");
const { secretKey } = require('./config')
const jwtAuth = expressJwt({ secret: secretKey }).unless({ path: [
  "/api-geek/nav/find",
  "/api-geek/audit/add",
  "/api-geek/login",
  "/api-geek/index",
  "/api-geek/category/list"
] });

module.exports = jwtAuth
