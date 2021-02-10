---
slug: "/blog/learning-in-public-javascript"
date: "2020-02-10"
title: "Learning in Public: JavaScript"
---

Inspired by [@swyx](https://twitter.com/swyx)'s idea of [learning in public](https://www.swyx.io/writing/learn-in-public/), that's the route I decided to take with this post 😄.

I have been learning JavaScript for quite a while now. I've created applications, I have learned about ES6, I have used Angular, React, Node, and Typescript. However, I have been wanting to dive deeper into how JavaScript actually works. I know that JavaScript is single threaded, I have heard of the V8 engine, and I have heard of the event loop. So what are all of these things and how do they affect JavaScript? Well, let's take a look at a few of the big ones.

## V8 Engine

Let's start with the V8 engine. V8 is an open source JavaScript and WebAssembly engine that is written in C++ and maintained by Google. This is the engine that powers Google Chrome as well as Node.js.
V8 does a couple of things for us. Firstly, V8 provides a call stack. When you make a call to a function in your JavaScript code, that function call gets placed on to this stack. When a return statement is executed, this function call gets removed from the stack. This process happens again and again until the stack is finally clear of any function calls. Secondly, V8 also provides a heap, which is responsible for handling memory allocation.

## Node.js

Okay, V8 is the engine that executes our JavaScript code. So what exactly is Node then?
Node itself is not a JavaScript engine like V8. Instead, Node is a runtime that allows us to execute JavaScript code outside of a browser. What this means is that V8 is just one piece that helps to make up Node, but there are other pieces as well. We'll explore those pieces next.
The Event Loop, Task Queue, and Thread Pool
The reason why Node is considered to be "non-blocking" is due to the event loop, task queue, and thread pool. As I mentioned earlier, it is true that JavaScript is single threaded, but that is also a bit misleading. In the case of Node, we are able to pass asynchronous work off to the thread pool. This thread pool is another piece of Node that makes use of the libuv library written in C. Our asynchronous code is passed to this thread pool, handled by these threads, and then passed back to the task queue. The event loop monitors this task queue and places tasks back on to the stack when the time comes.

## Conclusion

I wrote this post mainly to force myself to do some research and gain a better understanding of the inner workings of JavaScript and Node. If anything here needs to be corrected due to an error, please tweet me ([@\_jakewheeler](https://twitter.com/_jakewheeler)) and I'll happily make any fixes!

Jake
