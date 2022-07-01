---
title: Hello, World!
description: In this post I will discuss how I built this blog using Next.js, TypeScript, Markdown and Redis.
---

## Why

As of now, I have just graduated from university. During my job search, I see that there are a lot of demand for web developers; so I think knowing how to create and maintain a website are valuable skills. I want to get into a habit of coding/writing. Making my own blog kills two birds with one stone. You can find the source code for this site [here](https://github.com/englishlayup/ductran.net).

## How

### Next.js

Depending on when you read this, the site could look identical to the [Next.js blog example](https://nextjs.org/learn/basics/create-nextjs-app) since I followed the tutorial as a starting point. It is intuitive to follow and all the concepts are explained clearly, which is why I this framework appeals to me.

Moreover, I think it will take too much time to implement the built-in features of Next.js if I were to build the site with React from scratch. Therefore, using Next.js will allow me to see the benefits of those features and also have a blog in production quickly.

Moreover, Next.js offers advanced built-in features that are too time-consuming and complex for me to implement. Among them, the ones that I found most useful so far are:

- Pre-rendering to improve page load time and search engine optimization.
- [Vercel](https://vercel.com/) makes deploying the site easy. All I had to do was add my GitHub link and custom domain to the project. Now it automatically re-build and deploy whenever I made a pull request (PR).
- Integrate TypeScript experience.

### TypeScript

I like types. I like to know what types I am using for variables and functions.

### Redis

Redis is adaptable. It can be both an in-memory cache or persistent database. It also supports multiple database paradigm. Because I want this project to give me exposure to more concepts and technologies, I think Redis offers the flexibility I need.
I am using Redis as a document database for this blog. It is hosted on Redis Cloud free tier with 30 MB storage. Given this post is around 1 KB, I think I'll be fine until I write 30720 posts.

### Markdown

I am using the same system as the [Next.js blog example](https://nextjs.org/learn/basics/create-nextjs-app). However, at build time the server fetch post data from the Redis DB instead of the local './posts' directory.

### How it all comes together

Now that I've explained why I picked those tools, let's talk about how they work together.

The front-end code is currently identical to the [Next.js blog example](https://nextjs.org/learn/basics/create-nextjs-app). I will make another post once I made significant changes. The data store, however, is a Redis document database instead of a local directory like the tutorial. You can see how I interact with the database in [redis.ts](https://github.com/englishlayup/ductran.net/blob/main/lib/redis.ts).

To publish a post, I first write it as a Markdown file. Then, I use [this script](https://github.com/englishlayup/publish-post) to parse the file to fit my schema and add it to my database.

As aforementioned, the site is hosted by Vercel, the creator of Next.js. Every time I made a PR to **main** the server renders the HTML contents and send it to whoever goes to this blog. One problem with that is because the posts are only fetched at build-time, they are not always up-to-date with the database. I plan to fix this in the future by either trigger a build whenever the database is updated or at intervals.

## Conclusion

Overall, I am happy with the choices I made for this project. It is at least a great start. Stay tuned as I plan to update the site UI with Tailwind, add a full-text search box and write many more interesting articles (probably less than 30720, though).
