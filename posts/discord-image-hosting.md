---
title: Discord is technically a fast, free and unlimited cloud storage
description: Discord is an amazing messaging application, but can it be more? Let's see if using Discord as an image CDN is viable.
---

Discord is an amazing messaging application, but can it be more? Let's see if using Discord as an image CDN is viable.

## What are you talking about?

If you're unfamiliar with [Discord](https://discord.com/), it is a popular chat app targeting the gamer demographic. For the discussion in this blog, all you need to know is users can share attachments and images in the conversations. Once sent, you can get a link for the image by clicking on it and then "Open original". Then, everyone who have the link can view the image in their browser. However, unlike Facebook or Instagram, Discord does not compress images. So whenever you share an image to a conversation, Discord generates a unique link to its [CDN](https://www.cloudflare.com/en-ca/learning/cdn/what-is-a-cdn/).

As discussed in ["Hello, World!"](https://www.ductran.net/posts/01G1YZY90F56DQ8S7BM3CRYGV0), I write these posts in Markdown. Then, I use [remark](https://github.com/remarkjs/remark) and [rehype](https://github.com/rehypejs/rehype) to convert markdown into HTML. In Markdown, I can link to an image using this element syntax: **\!\[alt text\]\(image.png\)**. So, what if every time I want to embed an image to the blog, I upload it to Discord, get the CDN link, then put it in the element (by replacing "image.png")? Would I have a free, unlimited and fast image CDN? Let's find out.

## Is it possible?

Absolutely, for now, at least. As image links are public, anyone can see any images on Discord if they have the right link. As a matter of fact, even if you delete an image from a chat, the link might still work because it is cached in the local CDN. And if someone sends that same link to Discord, it will be saved again. Therefore, **it is a bad idea to send or store any sensitive images and attachments on Discord.** For a publicly available blog, however, it sounds like a dream: a free and unlimited storage for my images with an intuitive GUI to cache them on Discord's CDNs.

![This image of flower will no longer work when Discord changes their image delivery](https://cdn.discordapp.com/attachments/972715461898829824/973123706886959144/pexels-evie-shaffer-11431628.jpg)

That, however, can change if Discord decided to change their image delivery. If the picture above isn't shown properly, then the method discussed no longer works.

## Concerns

Now that I've demonstrated that we could use Discord to embed images to any website, let's discuss whether we should. The concerns I have are:

- Privacy: the links usually have this format: cdn.discordapp.com/attachments/[channel ID]/[attachment ID]/\[image.png\]. I want to figure out what information can be retrieved using the IDs in the URL.
- Compatibility: Next.js has their own [\<Image \/\> component](https://nextjs.org/docs/api-reference/next/image) with built-in performance optimizations. However, it prefers static paths.
- Longevity: if Discord decided to change all their existing attachment URLs in any way, the images on my blog will no longer work properly. Depending on the number of blogs I've written by then, the migration process could take huge effort.

Let's address these possible issues:

### Privacy

To Discord, a [channel](https://discord.com/developers/docs/resources/channel#channel-object) ID points to a guild or direct message channel. Therefore, only the people who are in the same channel where the image is sent can figure out who originally sent it, which is information they already have. Moreover, if you literally trust no one, you can create a bot account or a private channel/server so that everything is under your (and Discord's) control.

### Compatibility

Although this is the deal-breaker for me (spoilers for the conclusion), not everybody is using Next.js. Moreover, with some effort I can write a JavaScript function to download the image and put it in a local directory at build time.

### Longevity

Discord is unlikely to change the URL of all the existing attachments as that would take an enormous amount of resource. Additionally, they have incentive to not compress their images because keeping the file size large means that more users will buy Discord Nitro. However, they might require some form of authentication to access the image in the future. This is just an unmanageable risk of using a free and unlimited file storage.

## Conclusion

Although it might work, the idea is just a fun thought experiment to me. I don't have any issue with storing my images within the project directory. The performance is probably better, too. I hope I pointed out an interesting use case for Discord and explained it well to you.
