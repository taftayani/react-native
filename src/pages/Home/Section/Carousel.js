import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Styles} from '../../../components/assets/body';

const CarouselSection = () => {
  return (
    <View style={styles.paddingCarousel}>
      <Text style={[Styles.textHeader]}>Ada yang baru nih </Text>
      <ScrollView>
        <View style={{flexDirection: 'row', overflow: 'scroll'}}>
          <ImageBackground
            style={[styles.imageCarousel]}
            source={require('../../../components/assets/bg_carousel.png')}>
            <Text style={[Styles.textHeader]}>Ada yang baru nih </Text>
          </ImageBackground>
          <ImageBackground
            style={[styles.imageCarousel]}
            source={require('../../../components/assets/bg_carousel.png')}>
            <Text style={[Styles.textHeader]}>Ada yang baru nih </Text>
          </ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
};

export default CarouselSection;

const styles = StyleSheet.create({
  paddingCarousel: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  imageCarousel: {
    width: 261,
    height: 143,
    borderRadius: 10,
    marginRight: 20,
  },
});
