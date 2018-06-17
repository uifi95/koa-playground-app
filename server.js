const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const helmet = require('koa-helmet');
const respond = require('koa-respond');
const formidable = require('koa2-formidable');

const app = new Koa();
const router = new Router();

app.use(helmet());

if (process.env.NODE_ENV === 'development') {
    app.use(logger())
}

// for multipart/form-data
app.use(formidable());

app.use(bodyParser({
    enableTypes: ['json', 'form'],
    jsonLimit: '5mb',
    onerror: function (err, ctx) {
        ctx.throw('body parse error', 422)
    }
}));
app.use(cors());


app.use(respond());

// API routes
require('./routes')(router);
app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;
