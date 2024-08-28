# React Native Expo Application Setup with Tailwind CSS

This guide will walk you through setting up a React Native Expo project and integrating Tailwind CSS using NativeWind.

## Getting Started

### 1. Create a New Expo Project

First, create a new Expo project:

```bash
npx create-expo-app MyProject
cd MyProject


2. Install NativeWind and Tailwind CSS
Next, install the required packages:

npx expo install nativewind@^4.0.1 react-native-reanimated tailwindcss

3. Initialize Tailwind CSS
Generate the Tailwind CSS configuration file:


npx tailwindcss init

Then, update the tailwind.config.js file:

tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App/**/*.{js,jsx,ts,tsx}"], // Include your component paths
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}

4. Create a Global CSS File
Create a global.css file in the root directory and add the Tailwind directives:

global.css
@tailwind base;
@tailwind components;
@tailwind utilities;

5. Configure Babel
Update the babel.config.js file to include the NativeWind preset:

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};


6. Modify Metro Config
Modify your metro.config.js file to integrate with NativeWind:

const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: './global.css' });


7. Import the Global CSS File
Import the global.css file into your main application file (App.js or App.tsx):

import "./global.css";

export default function App() {
  // Your App code here
}

8. Expo Web Configuration (Optional)
If you plan to run your project on the web, update the app.json file:

{
  "expo": {
    "web": {
      "bundler": "metro"
    }
  }
}

9. TypeScript Setup (Optional)
If using TypeScript, create a nativewind-env.d.ts file and add:

/// <reference types="nativewind/types" />

10. Additional CSS Fix (If Needed)
If Tailwind CSS isn't working correctly, install the following package:

npm install twrnc

11. Run the Project
Run your project using:

npm start

run the project : 'npm start' is working or 'npm expo start' is needed?




