import React from 'react';
import { View, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.circleContainer}>
          <View style={styles.innerCircle} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: 160,
    height: 160,
    backgroundColor: '#26282C',
    borderRadius: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 50,
    shadowRadius: 3.84,
    elevation: 9,
    marginRight: 10,
    marginBottom: 10,
    justifyContent: 'center', // Center the circular container horizontally
    alignItems: 'center', // Center the circular container vertically
  },
  circleContainer: {
    shadowRadius: 7,
    borderRadius: 50,
    backgroundColor: '#276ACE',
    width: 130,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
  },
  innerCircle: {
    shadowRadius: 7,
    borderRadius: 40,
    backgroundColor: '#26282C',
    width: 120,
    height: 120,
    shadowColor: '#000',  
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 50,
    elevation: 9,
   
  },
});

// Oluşturulan bileşeni başka bir yerde kullanmak için dışa aktarabilirsiniz.
export { Home };
