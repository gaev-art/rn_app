import {useMemo} from 'react';
import {StatusBarStyle, useColorScheme} from 'react-native';
import {Colors} from '../constants';

export const usePrimaryColor = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const {primaryBackgroundColor, primaryTextColor, barStyle} = useMemo(
    () => ({
      primaryBackgroundColor: isDarkMode ? Colors.black : Colors.light,
      primaryTextColor: isDarkMode ? Colors.white : Colors.black,
      barStyle: (isDarkMode
        ? 'light-content'
        : 'dark-content') as StatusBarStyle,
    }),
    [isDarkMode],
  );

  return {primaryBackgroundColor, primaryTextColor, barStyle};
};
