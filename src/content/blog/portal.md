---
title: Portal
publishDate: 2025-06-07 00:00:00
img: /assets/bubbles-portal-resized.gif

img_alt: Portal
description: |

tags:
    - Three js
    - portal
    - 3js
    - cyber effect
    - shaders
---

# How to Build a Cyberpunk Portal in THREE.js — A Hacker’s Journey Into the Neon Abyss with Neon Bubbles

Hey coder ninjas and pixel wizards! 👾 Today, we’re diving headfirst into the cybernetic wormhole of 3D graphics — building a wicked cool portal using THREE.js that sucks you into a neon-soaked cyberpunk universe. Ready your keyboards and summon your inner hacker because this tutorial’s gonna be a wild ride through shaders, animations, and some seriously glowing bubbles. Let’s get that code glowin’! 💥


### Step 1: Setting Up Your Dimensional Playground
First off, we create the scene — aka our digital universe. No fog machines needed here, but the feeling is just as mysterious.

```javascript
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 5;
```

Our camera’s sitting back at z=5, chilling and waiting for us to pull some cyber sorcery.


### Step 2: Summoning the Portal — Shader Magic Included 🌀

This is where the magic happens. Using a custom shader, we make a circle that spins and sucks in like the biggest black hole in the metaverse.

```javascript
const portalMaterial = new THREE.ShaderMaterial({
  uniforms: {
    uTime: { value: 0.0 },
    uProgress: { value: 0.0 }
  },
  vertexShader: `...`,
  fragmentShader: `...`,
  transparent: true
});
```
The shader does three things:

Spins the portal with time (uTime)

Creates a sucking whirlpool effect (uProgress)

Pulsates with neon colors, from electric teal to moody purple to black hole abyss

It’s like the portal’s alive, baby.

### Step 3: Click That Portal, Trigger the Madness 🚀

A simple click triggers the animation sequence where the portal grows, the screen fades, and BAM — you’re sucked into the cyberpunk world.

```javascript
renderer.domElement.addEventListener('click', (event) => {
  // Raycast to check if portal was clicked
  // If yes, start animating
  triggerTransition();
});
```

No clicky, no tripy.

### Step 4: Animations, Baby! Time, Scale & Camera Moves

Once triggered, the portal starts growing, the camera dives forward, and the fade plane slowly darkens the screen like your monitor after too many late-night hacks.

```javascript
if (animating) {
    const progress = (elapsedTime - startTime) / animationDuration;
    portal.material.uniforms.uProgress.value = progress;
    fadePlane.material.opacity = Math.max(0, (progress - 0.7) / 0.3);
    camera.position.z = 5 - 4 * Math.pow(progress, 1.5);
    portal.scale.setScalar(1 + progress * 3);
}
```
Pro tip: easing math makes your animations smoother than your favorite hacker playlist.

### Step 5: Enter the Neon Abyss — Cyberpunk World Loaded 🌐✨

Once inside, we clear the old scene like wiping logs before a big hack, then we spawn glowing neon bubbles — because what’s cyberpunk without some floating vaporwave vibes?

```javascript
function addNeonBubbles() {
  const bubbleGroup = new THREE.Group();
  // 100 shiny bubbles with emissive pink light
  scene.add(bubbleGroup);
}
```
The bubbles dance and shimmer with emissive materials — it’s like a rave for your eyes.

### Step 6: Bonus Round — Bubble Dynamics & Ambient Drift

Our neon bubbles gently pulse and drift, simulating an otherworldly neon fog. Your FPS might spike from sheer coolness.

```javascript
bubblesGroup.children.forEach((bubble, i) => {
  const scale = 0.8 + Math.sin(time * 2 + i) * 0.1;
  bubble.scale.setScalar(scale);
  bubble.position.y += Math.sin(time + i) * 0.002;
});
```

Feel free to add bubble-popping effects — hacker playgrounds love interactivity.


### Step 7: Texture That World! Loading Cyberpunk Backgrounds 🫧

No cyberpunk scene is complete without neon textures. We slap a pixelated cyberpunk image right behind everything for that authentic retro-futuristic vibe.

```javascript
const loader = new THREE.TextureLoader();
loader.load('/cyberpunk.png', (texture) => {
  const material = new THREE.MeshBasicMaterial({ map: texture });
  const geometry = new THREE.PlaneGeometry(width, height);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.z = -1;
  scene.add(mesh);
});
```
Pixel art rules. Always.


## Final Words — Code That Portal & Hack Reality

Final Words — Code That Portal & Hack Reality
And that’s how you build a slick cyberpunk portal in THREE.js that sucks you straight into a glowing neon realm. Want more? Go wild — add pulsating sound FX, trippy shaders, or even a snarky little AI sidekick that roasts your typos.

Now fire up that console, prep your fragment shaders, and remember:

Real hackers don’t just code — they bend reality and craft worlds. 🕶️

Stay neon. Stay curious. Stay chaotic.
 Full source code on GitHub:

```
git@github.com:natalia-kuchta/portal-project.git
``` 

fork it, break it, remix it. 🫧


![portal.gif](/assets/portal.gif)