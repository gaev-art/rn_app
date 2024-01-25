import {StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../constants';
import {SvgProps} from 'react-native-svg';

export const IconButton = ({
  onPress,
  Icon,
  width,
  height,
}: {
  onPress: () => void;
  Icon: React.FC<SvgProps>;
  height: number;
  width: number;
}) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={1}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}>
      <Icon
        width={width}
        height={height}
        color={isPressed ? Colors.primary : Colors.black}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    marginRight: 15,
  },
});
