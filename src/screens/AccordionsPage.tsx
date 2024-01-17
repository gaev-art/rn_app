import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {usePrimaryColor} from '../hooks';
import Accordion from '../components/Accordion.tsx';

export type AccordionType = {
  id: number;
  header: string;
  content: string;
};

export const AccordionsPage = () => {
  const {primaryBackgroundColor} = usePrimaryColor();
  const [accordions, _] = useState<AccordionType[]>([
    {
      id: 1,
      header: 'Accordion 1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate laboriosam officia vero. Consectetur eos esse eveniet mollitia ullam ut voluptates?',
    },
    {
      id: 2,
      header: 'Accordion 2',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate laboriosam officia vero. Consectetur eos esse eveniet mollitia ullam ut voluptates?',
    },
    {
      id: 3,
      header: 'Accordion 3',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate laboriosam officia vero. Consectetur eos esse eveniet mollitia ullam ut voluptates?',
    },
    {
      id: 4,
      header: 'Accordion 4',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate laboriosam officia vero. Consectetur eos esse eveniet mollitia ullam ut voluptates?',
    },
  ]);

  return (
    <View style={[styles.main, {backgroundColor: primaryBackgroundColor}]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {accordions.map((task, index) => {
          return <Accordion task={task} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1, paddingVertical: 20},
});
