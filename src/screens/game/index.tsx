import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import Container from '../component/Container';
import LinearGradient from 'react-native-linear-gradient';
import {Images} from '../../assets';

const Game = () => {
  return (
    <Container
      backgroundColor={'transparent'}
      backgroundBody={'white'}
      header={<View />}
      barStyle="dark-content">
      <LinearGradient
        colors={['#FFCC70', '#C850C0', '#4158D0']}
        locations={[0, 0.4, 1]}
        style={styles.container}
        useAngle
        angle={140}>
        <View style={styles.content}>
          <Image source={Images.thumbnail} style={styles.thumnail} />
        </View>
      </LinearGradient>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumnail: {
    height: 180,
    width: 156,
  },
});

export default Game;
