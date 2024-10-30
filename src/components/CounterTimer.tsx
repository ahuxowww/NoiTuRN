import React, {
  useState,
  useEffect,
  FC,
  memo,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Fonts from '../assets/Fonts';

interface Props {
  time?: number;
  onEnd?: () => void;
}

const CountdownTimer: FC<Props> = forwardRef(({time = 10, onEnd}, ref) => {
  const [count, setCount] = useState(time);

  useEffect(() => {
    if (count > 0) {
      const timer = setInterval(() => {
        setCount(prevCount => prevCount - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      onEnd && onEnd();
    }
  }, [count, onEnd]);

  const resetTimer = useCallback(() => {
    setCount(time);
  }, [time]);

  // Expose `resetTimer` to the parent component
  useImperativeHandle(ref, () => ({
    resetTimer,
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{count}</Text>
    </View>
  );
});

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
  resetButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  resetButtonText: {
    fontSize: 18,
    color: 'white',
  },
});

export default memo(CountdownTimer);
