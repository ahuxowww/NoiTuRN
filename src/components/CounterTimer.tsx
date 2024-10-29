import React, {useState, useEffect, FC, memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Fonts from '../assets/Fonts';

interface Props {
  time?: number;
}

const CountdownTimer: FC<Props> = ({time}) => {
  const [count, setCount] = useState(time ?? 10);

  useEffect(() => {
    if (count > 0) {
      const timer = setInterval(() => {
        setCount(prevCount => prevCount - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 48,
    color: 'white',
    fontFamily: Fonts.fontFamilyCustom.PatrickHandRegular,
  },
});

export default memo<Props>(CountdownTimer);
