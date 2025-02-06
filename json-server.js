const http = require('http');
const koaBode = require('koa-body');
const cors = require('koa-cors');
const Koa = require('koa');
const fs = require('fs');
const app = new Koa();

app.use(koaBode({
  urlencoded: true,
  json: true,
  multipart: true,
}));

app.use(cors());

app.use(async (ctx, next) => {
  
});
