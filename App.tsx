import React from 'react';
import {StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.dark : Colors.light,
  };

  const styles = StyleSheet.create({
    main: {flex: 1, justifyContent: 'center', alignItems: 'center'},
    circle: {
      height: 200,
      width: 200,
      borderRadius: 100,
      backgroundColor: backgroundStyle.backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: isDarkMode ? Colors.light : Colors.dark,
      fontSize: 18,
    },
  });

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.main}>
        <View style={styles.circle}>
          <Text style={styles.text}>
            Dark mode is on? {isDarkMode ? 'Yes' : 'No'}
          </Text>
        </View>
      </View>
    </>
  );
};

export default App;
