import Koa from 'koa';
import Stack from './Pilha/Stack';
import StackV2 from './Pilha/Stackv2';
import Queue from './Fila/queue';
import LinkedList from './ListaLigada/linkedlist';
import Sets from './Sets/sets';

const stack = new Stack();
const stack2 = new StackV2();
const app = new Koa();
const queue = new Queue();
const linkedList = new LinkedList();
const set = new Sets();
const set2 = new Sets();

// stack.push(5);
// stack.push(8);
// stack.push(11);
// stack.push(15);
// console.log(stack);
// stack.pop();
// stack.pop();
// console.log(stack);


queue.enqueue('Guilherme');
queue.enqueue('Marina');

console.log(queue);

linkedList.push(15);
linkedList.push(10);

console.log(linkedList);

queue.dequeue();

console.log(queue.toString());

set.add(1);
set.add(2);
set2.add(2);
set2.add(1);

const union = set.union(set2);

console.log(set);
console.log(set.has(1));
console.log(set.size());
set.delete(1);



// function decimalToBinary(decNumber) {
//
  // let number = decNumber;
  // let rem;
  // let binaryString;
//
  // while(number > 0) {
    // rem = Math.floor(number % 2);
    // stack.push(rem);
    // number = Math.floor(number / 2);
  // }
//
  // while(!stack.isEmpty()) {
    // binaryString += stack.pop().toString();
  // }
//
  // return binaryString;
// }
// console.log(decimalToBinary(10));
//
//
// function baseConverter(decNumber, base) {
  // const remStack = new Stack();
  // const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // let number = decNumber;
  // let rem;
  // let baseString ='';
//
  // if(!(base >= 2 && base <=36)) {
    // return '';
  // }
//
  // while(number >0) {
    // rem = Math.floor(number % base);
    // remStack.push(rem);
    // number = Math.floor(number / base);
  // }
//
  // while(!remStack.isEmpty()) {
    // baseString += digits[remStack.pop()];
  // }
//
  // return baseString;
// }
//
// console.log(baseConverter(100345, 16));
//

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);
