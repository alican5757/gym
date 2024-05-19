// App.tsx

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HomeScreen from "./scr/HomeScreen";
import TabBar from './scr/TabBar';
import ProfileScreen from './scr/ProfileScreen';
import PlayScreen from './scr/PlayScreen';
import QrScreen from './scr/QrScreen';
import TabBarPlay from './scr/TabBarPlay';
import Setting from './scr/ParentComponent';

const App = () => {
  const [selectedTab, setSelectedTab] = useState<string>('Home');
  const [showTabBar, setShowTabBar] = useState<boolean>(true);

  const toggleTabBarVisibility = () => {
    setShowTabBar(!showTabBar);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1C1E21',
    },
    content: {
      flex: 1,
    },
    tabBar: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {selectedTab === 'Profile' && <ProfileScreen />}
        {selectedTab === 'Home' && <HomeScreen />}
        {selectedTab === 'qr' && <QrScreen />}
        {selectedTab === 'play' && <PlayScreen />}
        {selectedTab === 'setting' && <Setting />}
      </View>
      
      {showTabBar && (
        <View style={styles.tabBar}>
          {selectedTab === 'play' ? (
            <TabBarPlay setSelectedTab={setSelectedTab} screen={selectedTab} />
          ) : (
            <TabBar setSelectedTab={setSelectedTab} screen={selectedTab} />
          )}
        </View>
      )}
    </View>
  );
};

export default App;
