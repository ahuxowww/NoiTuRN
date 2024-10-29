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
import Button from '../../components/Button';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {saveName} from '../../feature/user/userSlice';
const AddInfo = () => {
  const navigation = useNavigation();
  const [value, setValue] = React.useState('');
  const dispatch = useDispatch();
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
    dispatch(saveName(value));
  }, [dispatch, value]);

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
            title="Nhập tên"
            onGoBackButton={onGoHome}
          />
          <View style={styles.contentTimer}>
            <CounterTimer time={0} />
            <View style={styles.content}>
              <Text></Text>
            </View>
            <View>
              <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder="Nhập tên của bạn"
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

export default AddInfo;
