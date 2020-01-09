const Koa = require('koa');
const app = new Koa();
const Stack = require('./Pilha/Stack');

const stack = new Stack();
console.log(stack);

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);