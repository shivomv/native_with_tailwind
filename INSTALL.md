# Comprehensive Guide to Setting Up NativeWind v4 in React Native CLI

This guide covers the entire setup process to integrate **NativeWind** (Tailwind CSS for React Native) securely in your framework-less React Native CLI project, tailored specifically for the architecture found in this repository.

## Step 1: Install Dependencies
Install all the necessary runtime dependencies along with `react-native-reanimated` and `react-native-worklets`.

```bash
npm install nativewind react-native-reanimated react-native-worklets react-native-safe-area-context --force
npm install --save-dev tailwindcss postcss prettier-plugin-tailwindcss
```

## Step 2: Initialize Tailwind CSS and Configure Content Paths
Create a `tailwind.config.js` file at the root of your project:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Update this to include all your project paths:
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Step 3: Create the Global CSS Setup
Create a file named `global.css` in the project root to integrate the fundamental Tailwind CSS directives:

```css
/* global.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Step 4: Import CSS in your App Entry Point
You need to import your UI styling at the root initialization of your app (`index.js`):

```javascript
// index.js
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import "./global.css"; // Ensure this import is maintained

AppRegistry.registerComponent(appName, () => App);
```

## Step 5: Configure Metro Bundler
Your `metro.config.js` needs to apply NativeWind's custom CSS transformations.

```javascript
// metro.config.js
const { getDefaultConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// Manually ensure CSS files are treated as source extensions correctly
config.resolver.sourceExts.push('css');

// Wrap configuration
module.exports = withNativeWind(config, { input: './global.css' });
```

## Step 6: Add the Babel Configuration
For NativeWind v4, add the `nativewind/babel` setup straight to your `presets` array in `babel.config.js`:

```javascript
// babel.config.js
module.exports = {
  presets: [
    'module:@react-native/babel-preset', 
    'nativewind/babel'
  ],
};
```

*(Note: If utilizing Reanimated's specialized hooks, you may still need to add `'react-native-reanimated/plugin'` to the `plugins: [...]` array at the end of this setup).*

## Step 7: Configure TypeScript Types
Add a `nativewind-env.d.ts` definitions file at the root so IDEs accurately offer type completion for `className` props:

```typescript
// nativewind-env.d.ts
/// <reference types="nativewind/types" />
```

## Step 8: Cache Reset and First Start
When migrating the Babel and Metro infrastructure, it's highly recommended to completely reset caching upon your next compilation:

```bash
npm start -- --reset-cache
# And on a separate terminal:
npm run android
```
