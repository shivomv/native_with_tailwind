import React from 'react';
import { Text, View, useColorScheme, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView className="flex-1 bg-slate-50 dark:bg-slate-950">
        <ScrollView className="flex-1 px-6">
          
          {/* Header Section */}
          <View className="flex-row justify-between items-center mt-6 mb-8">
            <View>
              <Text className="text-slate-500 dark:text-slate-400 text-sm font-medium">Welcome back,</Text>
              <Text className="text-slate-900 dark:text-white text-2xl font-bold">Shivom Verma</Text>
            </View>
            <TouchableOpacity className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 items-center justify-center border-2 border-white dark:border-slate-800 shadow-sm">
              <Text className="text-blue-600 dark:text-blue-300 font-bold text-lg">SV</Text>
            </TouchableOpacity>
          </View>

          {/* Featured Card */}
          <View className="bg-blue-600 p-6 rounded-3xl shadow-xl shadow-blue-300 mb-8">
            <View className="flex-row justify-between items-start mb-4">
              <View>
                <Text className="text-blue-100 text-xs font-semibold uppercase tracking-wider">Active Project</Text>
                <Text className="text-white text-xl font-bold mt-1">Mobile App Redesign</Text>
              </View>
              <View className="bg-blue-500 px-3 py-1 rounded-full border border-blue-400">
                <Text className="text-white text-xs font-medium">In Progress</Text>
              </View>
            </View>
            
            {/* Progress Bar */}
            <View className="w-full h-2 bg-blue-700/50 rounded-full mt-2 mb-2">
              <View className="w-3/4 h-full bg-white rounded-full" />
            </View>
            <View className="flex-row justify-between">
              <Text className="text-blue-100 text-xs mt-1">75% Complete</Text>
              <Text className="text-blue-100 text-xs mt-1">12/16 Tasks</Text>
            </View>
          </View>

          {/* Quick Stats Grid */}
          <View className="flex-row gap-4 mb-8">
            <View className="flex-1 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
              <Text className="text-slate-400 dark:text-slate-500 text-xs font-medium uppercase">Pending</Text>
              <Text className="text-slate-900 dark:text-white text-xl font-bold mt-1">08</Text>
            </View>
            <View className="flex-1 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
              <Text className="text-slate-400 dark:text-slate-500 text-xs font-medium uppercase">Completed</Text>
              <Text className="text-slate-900 dark:text-white text-xl font-bold mt-1">24</Text>
            </View>
          </View>

          {/* Tasks Section */}
          <View className="mb-4 flex-row justify-between items-center">
            <Text className="text-slate-900 dark:text-white text-lg font-bold">Upcoming Tasks</Text>
            <TouchableOpacity>
              <Text className="text-blue-600 dark:text-blue-400 font-medium text-sm">See all</Text>
            </TouchableOpacity>
          </View>

          <View className="space-y-3 gap-y-3 pb-8">
            <TaskItem title="User Interview Research" category="Research" time="09:00 AM" priority="High" />
            <TaskItem title="Style Guide Feedback" category="Design" time="11:30 AM" priority="Normal" />
            <TaskItem title="Database Migration" category="Dev" time="02:00 PM" priority="Urgent" />
          </View>

        </ScrollView>
        
        {/* Simple Navigation Feel */}
        <View className="h-20 bg-white/80 dark:bg-slate-900/80 border-t border-slate-100 dark:border-slate-800 flex-row justify-around items-center px-6">
          <NavItem label="Home" iconName="home" isDarkMode={isDarkMode} active />
          <NavItem label="Projects" iconName="folder" isDarkMode={isDarkMode} />
          <NavItem label="Tasks" iconName="check-square" isDarkMode={isDarkMode} />
          <NavItem label="Settings" iconName="settings" isDarkMode={isDarkMode} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

function TaskItem({ title, category, time, priority }) {
  const priorityColors = {
    High: "bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-300",
    Normal: "bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-300",
    Urgent: "bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-300"
  };

  return (
    <TouchableOpacity className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 flex-row items-center justify-between shadow-sm">
      <View className="flex-row items-center flex-1">
        <View className="w-2 h-10 rounded-full bg-blue-500 mr-4" />
        <View>
          <Text className="text-slate-900 dark:text-white font-semibold text-base" numberOfLines={1}>{title}</Text>
          <Text className="text-slate-400 dark:text-slate-500 text-xs mt-0.5">{category} • {time}</Text>
        </View>
      </View>
      <View className={`px-2 py-1 rounded-lg ${priorityColors[priority]}`}>
        <Text className="text-[10px] font-bold uppercase">{priority}</Text>
      </View>
    </TouchableOpacity>
  );
}

function NavItem({ label, iconName, isDarkMode, active = false }) {
  const activeColor = isDarkMode ? '#60a5fa' : '#2563eb';
  const inactiveColor = isDarkMode ? '#475569' : '#94a3b8';
  const color = active ? activeColor : inactiveColor;

  return (
    <TouchableOpacity className="items-center">
      <View className={`w-1 h-1 rounded-full mb-1 ${active ? 'bg-blue-600' : 'bg-transparent'}`} />
      <Icon name={iconName} size={22} color={color} style={{ marginBottom: 4 }} />
      <Text className={`text-xs font-semibold ${active ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-600'}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
