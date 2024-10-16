import React, {useCallback} from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Container from '../../components/Container';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {Images} from '../../assets';
import Fonts from '../../assets/Fonts';
import Button from '../../components/Button';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native';
import CounterTimer from '../../components/CounterTimer';

const Game = () => {
  const navigation = useNavigation();
  const customBack = useCallback(() => {
    return <FontAwesome name="home" size={24} color="white" />;
  }, []);

  const onGoHome = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <Container
      header={<View />}
      backgroundColor={'transparent'}
      barStyle="dark-content">
      <LinearGradient
        colors={['#FFCC70', '#C850C0', '#4158D0']}
        locations={[0, 0.4, 1]}
        style={styles.container}
        useAngle
        angle={140}>
        <SafeAreaView>
          <Header
            isBack
            customBack={customBack}
            title="123"
            onGoBackButton={onGoHome}
          />
          <View style={styles.contentTimer}>
            <CounterTimer time={10} />
          </View>
        </SafeAreaView>
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
  thumnailContainer: {
    padding: 10,
  },
  thumnail: {
    height: 190,
    width: 266,
  },
  textTitle: {
    color: 'white',
    fontFamily: Fonts.fontFamilyCustom.PatrickHandRegular,
    fontSize: 40,
    height: 60,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonNormal: {
    marginTop: 12,
  },
  contentTimer: {
    marginTop: 16,
  },
});

export default Game;
