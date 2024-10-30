import React, {useCallback, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Container from '../../components/Container';
import LinearGradient from 'react-native-linear-gradient';
import Fonts from '../../assets/Fonts';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native';
import CounterTimer from '../../components/CounterTimer';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  capitalizeFirstLetter,
  checkCorrectAnswer,
  getRandomString,
} from '../../util';

const Game = () => {
  const navigation = useNavigation();
  const [value, setValue] = React.useState('');
  const [string, setString] = React.useState('');
  const timerRef = React.useRef(null);

  useEffect(() => {
    setString(getRandomString());
  }, []);

  const handleReset = useCallback(() => {
    if (timerRef.current) {
      timerRef?.current?.resetTimer();
    }
  }, []);

  const customBack = useCallback(() => {
    return <FontAwesome name="home" size={24} color="white" />;
  }, []);

  const onChangeText = useCallback((text: string) => {
    setValue(text);
  }, []);

  const onGoHome = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  const onSubmit = useCallback(() => {
    const checkAnswer = checkCorrectAnswer(string, value);
    console.log(checkAnswer,"checkAnswer");
    // handleReset();
  }, [string, value]);

  const onEnd = useCallback(() => {}, []);

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
            title="Nối từ"
            onGoBackButton={onGoHome}
          />
          <View style={styles.contentTimer}>
            <CounterTimer ref={timerRef} time={10} onEnd={onEnd} />
            <View style={styles.content}>
              <Text style={styles.titleText}>
                Từ : {capitalizeFirstLetter(string)}
              </Text>
            </View>
            <View>
              <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder="Nhập câu trả lời"
              />
              <View
                style={{
                  marginTop: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Button onPress={onSubmit} label="Xác nhận" />
              </View>
            </View>
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
    marginBottom: 24,
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
  titleText: {
    fontSize: 20,
    lineHeight: 26,
    fontFamily: Fonts.fontFamilyCustom.PatrickHandRegular,
  },
});

export default Game;
