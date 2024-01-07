import {useMemo} from 'react';
import {StatusBarStyle, useColorScheme} from 'react-native';
import {Colors} from '../constants';

export const usePrimaryColor = () => {
  const isDarkMode = useColorScheme() === 'dark';

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
