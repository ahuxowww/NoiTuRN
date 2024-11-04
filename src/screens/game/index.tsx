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
import {useDispatch, useSelector} from 'react-redux';
import {addPoint, subPoint, userInfo} from '../../feature/user/userSlice';

const Game = () => {
  const navigation = useNavigation<any>();
  const [value, setValue] = React.useState('');
  const [string, setString] = React.useState('');
  const [pause, setPause] = React.useState(false);
  const timerRef = React.useRef(null);
  const dispatch = useDispatch();
  const userInfomation = useSelector(userInfo);

  useEffect(() => {
    setString(getRandomString());
  }, []);

  const handleReset = useCallback(() => {
    if (timerRef.current) {
      timerRef?.current?.resetTimer();
      setString(getRandomString());
    }
    setValue('');
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
    if (pause) {
      handleReset();
    } else {
      const checkAnswer = checkCorrectAnswer(string, value);
      if (checkAnswer) {
        dispatch(addPoint());
      } else {
        dispatch(subPoint());
      }
      handleReset();
    }
  }, [dispatch, handleReset, pause, string, value]);

  const onEnd = useCallback(() => {
    dispatch(subPoint());
    setValue('');
    setPause(true);
  }, [dispatch]);

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
            <View
              style={{marginBottom: 24, marginTop: 12, alignItems: 'center'}}>
              <Text style={styles.titleText}>
                Điểm: {userInfomation?.point}
              </Text>
            </View>
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
                  marginTop: 60,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Button
                  onPress={onSubmit}
                  label={pause ? 'Tiếp tục' : 'Xác nhận'}
                />
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
    fontSize: 28,
    lineHeight: 34,
    fontFamily: Fonts.fontFamilyCustom.PatrickHandRegular,
  },
});

export default Game;
