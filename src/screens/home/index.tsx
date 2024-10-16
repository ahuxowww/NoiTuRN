import React, {useCallback} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

import Container from '../../components/Container';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {Images} from '../../assets';
import Fonts from '../../assets/Fonts';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

interface Button {
  label: string;
}

const listButton: Button[] = [
  {label: 'Vua tiếng việt'},
  {label: 'Cheater'},
  {label: 'Cheater VTV'},
  {label: 'EngLish'},
];

const Home = () => {
  const navigation = useNavigation();
  const renderListButton = useCallback(({item, index}: any) => {
    return (
      <View
        style={[styles.buttonNormal, index % 2 === 0 ? {marginRight: 8} : {}]}>
        <Button label={item?.label} onPress={() => {}} />
      </View>
    );
  }, []);

  const onNavToGame = useCallback(() => {
    navigation.navigate('Game');
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
          <Text style={styles.textTitle}>Nối từ không ?</Text>
          <View style={styles.content}>
            <View style={styles.thumnailContainer}>
              <Image source={Images.thumbnail} style={styles.thumnail} />
            </View>
            <View style={styles.buttonContainer}>
              <Button label="Chơi ngay" onPress={onNavToGame} bigButton />
            </View>
            <FlatList
              data={listButton}
              renderItem={renderListButton}
              numColumns={2}
            />
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
});

export default Home;
