import React from 'react';
import { Text, View, useColorScheme, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView className="flex-1 bg-white dark:bg-slate-900">
        <View className="flex-1 items-center justify-center p-6">
          <View className="bg-blue-500 p-8 rounded-3xl shadow-xl transform active:scale-95 transition-all">
            <Text className="text-white text-4xl font-bold text-center mb-2">
              NativeWind
            </Text>
            <Text className="text-blue-100 text-lg text-center font-medium">
              Tailwind CSS in React Native
            </Text>
          </View>
          
          <View className="mt-12 space-y-4 w-full">
            <View className="bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl flex-row items-center border border-slate-200 dark:border-slate-700">
              <View className="w-10 h-10 bg-green-500 rounded-full items-center justify-center">
                <Text className="text-white font-bold">✓</Text>
              </View>
              <View className="ml-4">
                <Text className="text-slate-900 dark:text-white font-semibold">Zero-config Engine</Text>
                <Text className="text-slate-500 dark:text-slate-400 text-sm">Now fully operational</Text>
              </View>
            </View>

            <View className="bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl flex-row items-center border border-slate-200 dark:border-slate-700">
              <View className="w-10 h-10 bg-purple-500 rounded-full items-center justify-center">
                <Text className="text-white font-bold">⚡</Text>
              </View>
              <View className="ml-4">
                <Text className="text-slate-900 dark:text-white font-semibold">Fast Development</Text>
                <Text className="text-slate-500 dark:text-slate-400 text-sm">Real-time styling updates</Text>
              </View>
            </View>
          </View>

          <Text className="mt-auto text-slate-400 dark:text-slate-500 text-xs font-mono">
            d:\NATIVE\CLI\tailwind\App.tsx
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
