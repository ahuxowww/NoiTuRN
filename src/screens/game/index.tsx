import React, {useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Container from '../../components/Container';
import LinearGradient from 'react-native-linear-gradient';
import Fonts from '../../assets/Fonts';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native';
import CounterTimer from '../../components/CounterTimer';
import TextInput from '../../components/TextInput';

const Game = () => {
  const navigation = useNavigation();
  const [value, setValue] = React.useState('');

  const customBack = useCallback(() => {
    return <FontAwesome name="home" size={24} color="white" />;
  }, []);

  const randomText = useCallback(() => {}, []);

  const onChangeText = useCallback((text: string) => {
    setValue(text);
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
        <Header
          isBack
          customBack={customBack}
          title="123"
          onGoBackButton={onGoHome}
        />
        <View style={styles.contentTimer}>
          <CounterTimer time={10} />
          <View style={styles.content}>
            <Text></Text>
          </View>
          <View>
            <TextInput
              value={value}
              onChangeText={onChangeText}
              placeholder="Nhập vào đây"
            />
          </View>
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
