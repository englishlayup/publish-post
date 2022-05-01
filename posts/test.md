---
title: First Post
description: bla bla bla
---

In this post I will discuss how I built this blog using Next.js, TypeScript, Markdown and Redis. You can find the source code for this site [here](https://github.com/englishlayup/ductran.net).

## Why

As of now, I have just graduated from university. During my job search, I see that there are a lot of demand for web developers; so I think knowing how to create and maintain a website are valuable skills. I want to get into a habit of coding/writing. Making my own blog kills two birds with one stone.

## How

### Next.js

Depending on when you read this, the site could look identical to the [Next.js blog example](https://nextjs.org/learn/basics/create-nextjs-app) since I followed the tutorial as a starting point. It is very easy to follow and all the concepts are explained very clearly, which is why I this framework appeals to me.

Moreover, I think it will take too much time to implement the built-in features of Next.js if I were to build the site with React from scratch. Therefore, using Next.js will allow me to see the benefits of those features and also have a blog in production quickly.

### TypeScript

I like types. I like to know what types I am using for variables and functions.

### Redis

Redis is very adaptable. It can be both an in-memory cache or persistent database. It also supports multiple database paradigm. Because I want this project to give me exposure to more concepts and technologies, I think Redis offers the flexibility I need.
I am using Redis as a document database for this blog.

### Markdown

I am using the same system as the [Next.js blog example](https://nextjs.org/learn/basics/create-nextjs-app). However, at build time the server fetch post data from the Redis DB instead of the local './posts' directory.

### How it all comes together

Now that I've explained why I picked those tools, let's talk about how they work together.

I have my 

To publish a post, I first write it in VS Code, my editor of choice. Then, I use [this script](https://github.com/englishlayup/publish-post) to parse the Markdown file to fit my schema and add it to my database.

```javascript
% Insert some code here Duc
```

