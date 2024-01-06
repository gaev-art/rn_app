import {useMemo} from 'react';
import {StatusBarStyle} from 'react-native';
import {Colors} from '../constants';

export const useCustomStatusBarStyle = (isDarkMode: boolean) => {
  const {primeBackgroundColor, primeTextColor, barStyle} = useMemo(
    () => ({
      primeBackgroundColor: isDarkMode ? Colors.dark : Colors.light,
      primeTextColor: isDarkMode ? Colors.light : Colors.dark,
      barStyle: (isDarkMode
        ? 'light-content'
        : 'dark-content') as StatusBarStyle,
    }),
    [isDarkMode],
  );

  return {primeBackgroundColor, primeTextColor, barStyle};
};
