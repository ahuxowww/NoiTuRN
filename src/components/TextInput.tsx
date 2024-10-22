import React, {FC, memo, useCallback, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Fonts from '../assets/Fonts';

interface Props {
  value?: string;
  onChangeText?: (value: string) => void;
  onFocus?: () => void;
  placeholder?: string;
  placeholderTextColor?: string;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
  onEndEditing?: () => void;
  onSubmitEditing?: () => void;
}
const Input: FC<Props> = ({
  value,
  onChangeText,
  onFocus,
  placeholder,
  keyboardType,
  placeholderTextColor,
  onSubmitEditing,
}) => {
  const [selected, setSelect] = useState(false);

  const onBlurInput = useCallback(() => setSelect(false), []);

  const onPressInput = useCallback(() => {
    setSelect(true);
  }, []);

  const onEndEditing = () => {
    setSelect(false);
  };

  return (
    <View>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.inputCenter}
        placeholder={selected ? '' : placeholder}
        onFocus={onFocus}
        onTouchStart={onPressInput}
        onBlur={onBlurInput}
        onEndEditing={onEndEditing}
        autoCapitalize={'none'}
        numberOfLines={1}
        autoCorrect={false}
        keyboardType={keyboardType}
        cursorColor={'#666666'}
        placeholderTextColor={
          placeholderTextColor ? placeholderTextColor : '#666666'
        }
        selectionColor={'#fefefe'}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputCenter: {
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    display: 'flex',
    height: 54,
    width: 300,
    textAlign: 'center',
    color: '#666666',
    fontSize: 24,
    borderRadius: 12,
    fontFamily: Fonts.fontFamilyCustom.PatrickHandRegular,
  },
});

export default memo<Props>(Input);
