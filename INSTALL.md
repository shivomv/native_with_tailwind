# NativeWind & Reanimated Installation

To install the latest NativeWind v4 with Reanimated and Worklets support, run the following command in your terminal:

```bash
npm install nativewind react-native-reanimated react-native-worklets react-native-safe-area-context --force
```

## Important Notes:
1.  **Babel Setup**: Ensure that your `babel.config.js` includes the following plugins:
    ```javascript
    module.exports = {
      presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
      plugins: ['react-native-reanimated/plugin'], // Must be last
    };
    ```
2.  **Metro Config**: Requires the `withNativeWind` wrapper in `metro.config.js`.
3.  **Cache Reset**: Always reset the bundler cache after changing native modules or babel configs:
    ```bash
    npm start -- --reset-cache
    ```
