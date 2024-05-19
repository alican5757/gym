import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image, ImageSourcePropType } from 'react-native';

type Tab = {
  name: string;
  icon: ImageSourcePropType;
};

const TabBar: React.FC<{ setSelectedTab: (tabName: string) => void; screen: string }> = ({ setSelectedTab, screen }) => {
  const tabs: Tab[] = [
    { name: 'Profile', icon: require('./icon/star.png') },
    { name: 'Home', icon: require('./icon/userk.png') },
    { name: 'qr', icon: require('./icon/qrcode.png') },
    { name: 'play', icon: require('./icon/note.png') },
    { name: 'setting', icon: require('./icon/setting.png') },
  ];

  const onPressHandler = (tabName: string) => {
    setSelectedTab(tabName);
  };

  const renderTab = (tab: Tab) => {
    return (
      <TouchableOpacity
        style={[
          styles.tabItem,
          {
            width: screen === tab.name ? 70 : 50,
            backgroundColor: screen === tab.name ? '#1C1E21' : 'transparent',
            top: screen === tab.name ? -35 : 0,
            zIndex: screen === tab.name ? 1 : 0,
          },
        ]}
        onPress={() => onPressHandler(tab.name)}
      >
        <View style={styles.outerContainer}>
          <View style={[styles.outerCircle, screen === tab.name ? styles.selectedOuterCircle : null]}>
            <View style={[styles.innerCircle, screen === tab.name ? styles.selectedInnerCircle : null]}>
              <Image source={tab.icon} style={styles.image} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {tabs.map(renderTab)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1C1E21',
    borderRadius: 16,
    height: 70,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  tabItem: {
    height: 100,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  outerContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  outerCircle: {
    width: 80,
    height: 80,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  innerCircle: {
    width: 40,
    height: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    position: 'relative',
  },
  selectedOuterCircle: {
    backgroundColor: '#2659E3',
  },
  selectedInnerCircle: {
    width: 70,
    height: 70,
    borderRadius: 20,
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default TabBar;
