---
slug: '/blog/creating-this-site-with-gatsbyjs'
date: '2019-12-09'
title: 'Creating This Site With Gatsby.js'
---

**EDIT 2-27-21: I've since rebuilt this site with [Next.js](https://nextjs.org/)!**

Back in July, I decided I wanted to learn React and Node.js so that I could start working on building a web app. Like many others, I decided that the excellent [Create React App](https://github.com/facebook/create-react-app) project was my way to get going. As I got deeper and deeper into React and the JavaScript ecosystem in general, I began seeing projects like [Gatsby.js](https://www.gatsbyjs.com/) and [Next.js](https://nextjs.org/) being talked about constantly. I had seen people refer to Gatsby as a "static-site generator" but I didn't really grasp what that meant or how it was different from Create React App.

My mission in building this site was to finally try to understand what Gatsby is. Now I get it.
Gatsby is essentially a full framework for building static sites based on technologies like React and GraphQL. However, it is important to note that these things aren't what make Gatsby what it is. These technologies just make working with Gatsby a more pleasant experience for developers that are already used to creating modern web apps. The real power behind Gatsby is its API and plugin system.

Behind the scenes, I am actually using [Contentful](https://www.contentful.com/) to write this post. Contentful is a headless CMS that exposes its data via an API. Luckily, there is a [Gatsby plugin for Contentful](https://www.gatsbyjs.org/packages/gatsby-source-contentful/) that lets me easily make use of this data. During build time, Gatsby reaches out to Contentful, grabs the data for my blog posts, and dynamically creates pages based on that data. In the end, I have a completely static website that has been mostly dynamically created. I can now host this site somewhere like [Netlify](https://www.netlify.com/) or in an Amazon S3 bucket without too much trouble at all. Pretty awesome!
Hopefully this helps clear up some confusion about Gatsby.

Jake
