---
slug: "/blog/using-zustand-with-typescript"
date: "2020-08-15"
title: "Using Zustand With TypeScript"
---

I love working with [Zustand](https://github.com/react-spring/zustand) when I need client-side state management in my React applications. However, one of the things I struggled with recently was using it with TypeScript. I decided to write this short post to help anyone else that might run into a similar problem.

My need in this case was simple: I wanted to be able to fetch some data from an API one time when my application started up and then make that data available everywhere in my application.

Here is what my typed Zustand store looks like:

```typescript
// utils/store.ts

import create from "zustand"
import { FeedItemProps } from "../types"
import { fetchInitialFeedContent } from "./helpers" // returns data from the API using axios

interface Set {
  json: FeedItemProps[] // this property will hold my data
  fetch: (url: string) => void // this function will store the fetched data in the json property
}

export const [useStore, api] = create<Set>(
  (set): Set => ({
    json: [],
    fetch: async (url: string) => {
      try {
        const response = await fetchInitialFeedContent()
        set({ json: response })
      } catch (err) {
        console.error("Couldn not fetch initial data")
        set({ json: [] })
      }
    },
  })
)
```

Using the `Set` interface in the right spots here is key. While this is not too bad at all, most of my trouble came from struggling to find examples of how to type the store correctly.

For the sake of completion, here's an example using the store:

```typescript
// pages/_app.tsx

import { AppProps } from 'next/app';
import { useStore } from '../utils/stores';
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const { json, fetch } = useStore();
  const [isFetched, setIsFetched] = useState(false);

  // initial feed data fetch
  useEffect(() => {
    if (!isFetched) {
      fetch(TIMELINE_KEY);
      setIsFetched(true);
    }
  }, [setIsFetched, json]);

...

}
```

I'm calling the `fetch` function once at the start of my application and then using `json` from the store in many other spots of the app.

I hope this helps you!

Jake
