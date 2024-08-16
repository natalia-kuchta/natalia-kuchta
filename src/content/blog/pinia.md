---
title: Pinia
publishDate: 2019-10-02 00:00:00
img: /assets/Pinia.png
img_alt: Soft pink and baby blue water ripples together in a subtle texture.
description: Pinia
 
tags:
  - Frontend
  - Vue
  - Pinia

---



# Pinia – Your New Superhero in the Vue.js Universe

Time for some fun with Pinia! Imagine Pinia as a superhero in the frontend world, coming to rescue your Vue.js app from chaos. Ready for a funny journey with the fascinating Pinia framework? Let’s go…

Imagine your Vue.js app as a massive spaceship. One moment it’s cruising through uncharted galaxies, the next it’s sinking into chaos because someone forgot about the app state. Enter Pinia – our versatile captain, swooping in to save the day with grace and style.

## What is Pinia?

![Pinia3.png](../../assets/Pinia3.png)

Pinia https://pinia.vuejs.org/ is a state management library for Vue 3. Think of it as Vuex but with a modern twist. It’s lightweight, elegant, and ready to take charge. Its mission? To keep your apps organized when all your components start doing their own thing.

## Installing Pinia

Before we start the fun, we need to install our superhero. In your terminal, type:

```bash
bashCopy code
npm install pinia

```

Or, if you’re a Yarn fan:

```bash
bashCopy code
yarn add pinia

```

## Creating a Pinia Store

Pinia works like a store where you keep all the important stuff, like user info, preferences, and more. Here’s how to create your first store:

```jsx
javascriptCopy code
// stores/counterStore.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    }
  }
})

```

See? Now you’ve got your own store with one value – a counter. You can increase it whenever you like!

## Using the Store in a Component

Now it’s time for our store to shine. Let’s use it in a Vue component:

```
vueCopy code
<template>
  <div>
    <p>Current count: {{ counter.count }}</p>
    <button @click="counter.increment">Increase Count</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counterStore'

const counter = useCounterStore()
</script>

```

## Pinia at Your Fingertips

Pinia offers more than just basic operations. You can create stores with asynchronous actions, use getters, and more. Here’s an example of an advanced store:

```jsx
javascriptCopy code
// stores/userStore.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null
  }),
  actions: {
    async fetchUser() {
      // Simulate fetching data from an API
      this.user = await fetch('/api/user').then(res => res.json())
    }
  },
  getters: {
    isLoggedIn: (state) => !!state.user
  }
})

```

## Why is Pinia Awesome?

![Pinia2.png](../../assets/Pinia2.png)

- **Simplicity:** With Pinia, everything is like gold – simple and intuitive.
- **Modularity:** You can have stores like balls – as many as you want.
- **TypeScript Support:** If you’re a TypeScript fan, Pinia is as friendly as your favorite pillow.

## Conclusion

Pinia is the superhero you need in your Vue.js app. With it, you can manage state like a true wizard. So don’t wait – start using Pinia and make your apps more organized than ever before!

### May the Force be with you!
<video width="100%" height="500" controls>
  <source src="/assets/Pinia.mp4" type="video/mp4">
</video>
