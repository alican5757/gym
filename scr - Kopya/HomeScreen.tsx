import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Home } from './Home';


const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Home />
        <Home />
      </View>
      <View style={styles.row}>
        <Home />
        <Home />
      </View>
      <View style={styles.row}>
        <Home />
        <Home />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:-60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
});

export default HomeScreen;
