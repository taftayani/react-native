import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BodyStyles, Styles} from '../../components/assets/body';
import Headers from '../../components/Elements/Header/header';
import CarouselSection from './Section/Carousel';

const Homepage = () => {
  return (
    <>
      <Headers />
      <View>
        <CarouselSection />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  page: {
    marginTop: 32,
    padding: 30,
  },
});
export default Homepage;
