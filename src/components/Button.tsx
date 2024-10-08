import React, {FC, memo, useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Fonts from '../assets/Fonts';

interface Props {
  disabled?: boolean;
  onPress: () => void;
  label: string;
  bigButton?: boolean;
}

const Button: FC<Props> = ({disabled, onPress, label, bigButton}) => {
  const [isSubmit, setIsSubmit] = React.useState(false);

  const onPressButton = useCallback(async () => {
    if (isSubmit) {
      return;
    }
    setIsSubmit(true);
    await onPress();

    setTimeout(() => setIsSubmit(false), 1000);
  }, [isSubmit, onPress]);

  return (
    <TouchableOpacity
    activeOpacity={0.5}
      style={bigButton ? styles.buttonBigContainer : styles.buttonContainer}
      disabled={disabled}
      onPress={onPressButton}>
      <View style={styles.content}>
        <Text style={styles.labelStyle}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 50,
    width: 150,
    borderRadius: 12,
  },
  buttonBigContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 50,
    width: 200,
    borderRadius: 12,
  },
  labelStyle: {
    color: '#dd2a7b',
    fontSize: 24,
    fontFamily: Fonts.fontFamilyCustom.PatrickHandRegular,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default memo<Props>(Button);
