import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {
  measure,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {usePrimaryColor} from '../hooks';
import {Colors} from '../constants';
import {AccordionType} from '../screens/AccordionsPage.tsx';

type Props = {
  task: AccordionType;
};

const Accordion = ({task}: Props) => {
  const listRef = useAnimatedRef();
  const heightValue = useSharedValue(0);
  const open = useSharedValue(false);
  const {primaryBackgroundColor, primaryTextColor} = usePrimaryColor();

  const heightAnimationStyle = useAnimatedStyle(() => ({
    height: heightValue.value,
  }));

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: primaryBackgroundColor,
          borderColor: primaryTextColor,
        },
      ]}>
      <Pressable
        onPress={() => {
          if (heightValue.value === 0) {
            runOnUI(() => {
              'worklet';
              heightValue.value = withTiming(measure(listRef)!.height);
            })();
          } else {
            heightValue.value = withTiming(0);
          }
          open.value = !open.value;
        }}
        style={styles.titleContainer}>
        <Text style={[styles.textTitle, {color: primaryTextColor}]}>
          {task.header}
        </Text>
      </Pressable>
      <Animated.View style={heightAnimationStyle}>
        <Animated.View style={styles.contentContainer} ref={listRef}>
          <View style={styles.content}>
            <Text style={[styles.textContent, {color: primaryTextColor}]}>
              {task.content}
            </Text>
          </View>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginHorizontal: '5%',
    marginVertical: 10,
    borderRadius: 14,
    borderWidth: 1,
    overflow: 'hidden',
  },
  textTitle: {
    fontSize: 16,
    color: 'black',
  },
  titleContainer: {
    position: 'relative',
    zIndex: 50,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  contentContainer: {
    display: 'flex',
    gap: 10,
    position: 'absolute',
    width: '100%',
    top: 0,
    zIndex: 50,
  },
  content: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  textContent: {
    fontSize: 14,
    color: Colors.black,
  },
});
