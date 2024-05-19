import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

interface TabBarPlayProps {
  setSelectedTab: (tab: string) => void;
  screen: string;
}

const TabBarPlay: React.FC<TabBarPlayProps> = ({ setSelectedTab, screen }) => {
  const [showMenuButton, setShowMenuButton] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMenu = () => {
    setShowMenuButton(!showMenuButton);
  };

  return (
    <View style={styles.container}>
      {/* Main buttons */}
      <View style={{ position: 'relative' }}>
        <TouchableOpacity
          style={[styles.button, styles.firstButton, { backgroundColor: '#1C1E21' }]}
          onPress={toggleMenu}
        >
          <Image
            source={showMenuButton ? require('./icon/cancel.png') : require('./icon/menu.png')}
            style={styles.menuIcon}
          />
        </TouchableOpacity>

        {/* Menu buttons */}
        {showMenuButton && (
          <View style={styles.menuContainer}>
            {/* First menu button */}
            <TouchableOpacity
              style={[styles.menuButton, { backgroundColor: '#276ACE' }]}
              onPress={() => setSelectedTab('Profile')}
            >
              <Image
                source={require('./icon/star.png')}
                style={styles.menuButtonImage}
              />
            </TouchableOpacity>
            {/* Second menu button */}
            <TouchableOpacity
              style={[styles.menuButton, { backgroundColor: '#276ACE' }]}
              onPress={() => setSelectedTab('Home')}
            >
              <Image
                source={require('./icon/userk.png')}
                style={styles.menuButtonImage}
              />
            </TouchableOpacity>
            {/* Third menu button */}
            <TouchableOpacity
              style={[styles.menuButton, { backgroundColor: '#276ACE' }]}
              onPress={() => setSelectedTab('Setting')}
            >
              <Image
                source={require('./icon/setting.png')}
                style={styles.menuButtonImage}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Profile button */}
      <TouchableOpacity
        style={[styles.button, styles.secondButton]}
        onPress={() => console.log("Profile button pressed")}
      >
        <Image
          source={require('./icon/backward.png')}
          style={styles.buttonImage}
        />
      </TouchableOpacity>

      {/* Play/Pause button */}
      <TouchableOpacity
        style={[styles.button, styles.biggestButton]}
        onPress={() => {
          setIsPlaying(!isPlaying);
          console.log("Play/Pause button pressed");
        }}
      >
        <Image
          source={isPlaying ? require('./icon/pause.png') : require('./icon/play.png')}
          style={styles.bigButtonImage}
        />
      </TouchableOpacity>

      {/* Forward button */}
      <TouchableOpacity
        style={[styles.button, styles.secondButton]}
        onPress={() => console.log("Forward button pressed")}
      >
        <Image
          source={require('./icon/forward.png')}
          style={styles.buttonImage}
        />
      </TouchableOpacity>

      {/* Another screen button */}
      <TouchableOpacity
        style={[styles.button, styles.firstButton]}
        onPress={() => console.log("Another screen button pressed")}
      >
        <Image
          source={require('./icon/headphones.png')}
          style={styles.buttonImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26282C',
    borderRadius: 100,
    width: 40,
    height: 40,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 5,
  },
  firstButton: {
    width: 30,
    height: 30,
  },
  secondButton: {
    width: 40,
    height: 40,
  },
  biggestButton: {
    width: 60,
    height: 60,
  },
  menuIcon: {
    width: 15,
    height: 15,
  },
  buttonImage: {
    width: 15,
    height: 15,
  },
  bigButtonImage: {
    width: 25,
    height: 25,
  },
  menuButtonImage: {
    width: 15,
    height: 15,
  },
  menuContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -140, // Adjust this value according to your design
    left: 0,
    right: 0,
  },
  menuButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#276ACE',
    borderRadius: 100,
    width: 30,
    height: 30,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
});

export default TabBarPlay;
