import React, {FC, memo, useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface Props {
  isBack?: boolean;
  title?: string;
  titleHeader?: string;
  containerStyle?: any;
  colorButtonBack?: string;
  onGoBackButton?: () => void;
  customBack?: any;
  customRight?: any;
}

const Header: FC<Props> = ({
  isBack,
  title,
  onGoBackButton,
  customBack,
  customRight,
}) => {
  const navigation = useNavigation();

  const onGoBack = useCallback(async () => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={styles.container}>
      {isBack ? (
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={onGoBackButton ? onGoBackButton : onGoBack}>
          {customBack ? (
            customBack()
          ) : (
            <AntDesign name="left" size={20} color="white" />
          )}
        </TouchableOpacity>
      ) : (
        <View style={[styles.buttonBack, styles.boxNone]} />
      )}
      {title ? (
        <View style={styles.contentCenter}>
          <Text>{title}</Text>
        </View>
      ) : (
        <View />
      )}
      {customRight ? (
        customRight()
      ) : (
        <View style={[styles.buttonBack, styles.boxNone]} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
  },
  header: {
    display: 'flex',
    height: 40,
    justifyContent: 'space-between',
  },
  headerWidthBack: {
    justifyContent: 'flex-end',
  },
  buttonBack: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 8,
  },
  closeButton: {
    marginRight: -10,
  },
  title: {
    textAlign: 'center',
    color: '#ffffff',
  },
  boxNone: {
    height: 24,
    width: 24,
  },
  headerTitle: {
    alignItems: 'center',
  },
  contentCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default memo<Props>(Header);
