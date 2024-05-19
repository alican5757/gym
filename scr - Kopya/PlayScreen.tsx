import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PlayScreenProps {}

const PlayScreen: React.FC<PlayScreenProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.textBig}>PlayScreen</Text>
      </View>
      <View style={styles.songContainer}>
        {[...Array(5)].map((_, index) => (
          <View style={styles.songItem} key={index}>
            <Text style={styles.songText}>Euphoria</Text>
            <Text style={styles.durationText}>3:{index < 10 ? `0${index}` : index}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: -10, // Adjusted margin to bring content up slightly
  },
  topView: {
    width: 280,
    height: 400,
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1, // Add border width
    borderColor: '#3D3D3D', // Add border color with transparency
    backgroundColor: 'white',
    shadowColor: '#3CB0CD',
    shadowOffset: {
      width: 0,
      height: 50,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 50,
  },
  textBig: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  songContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 10,
  },
  songText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  durationText: {
    color: 'black',
    fontSize: 16,
  },
});

export default PlayScreen;
