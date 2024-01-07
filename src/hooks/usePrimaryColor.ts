import {useMemo} from 'react';
import {StatusBarStyle} from 'react-native';
import {Colors} from '../constants';

export const useCustomStatusBarStyle = (isDarkMode: boolean) => {
  const {primaryBackgroundColor, primaryTextColor, barStyle} = useMemo(
    () => ({
      primaryBackgroundColor: isDarkMode ? Colors.dark : Colors.light,
      primaryTextColor: isDarkMode ? Colors.light : Colors.dark,
      barStyle: (isDarkMode
        ? 'light-content'
        : 'dark-content') as StatusBarStyle,
    }),
    [isDarkMode],
  );

  return {primaryBackgroundColor, primaryTextColor, barStyle};
};
