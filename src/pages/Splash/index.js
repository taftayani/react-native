import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {Styles} from '../../components/assets/body';

const Splash = ({navigation}) => {
  return (
    <ImageBackground
      resizeMode="contain"
      style={styles.image}
      source={require('../../components/assets/img_bg_splash.png')}>
      <View style={styles.section1}>
        <Image
          source={require('../../components/assets/logo.png')}
          style={[Styles.logoSplash, {marginBottom: 40}]}
        />
        <Text style={[Styles.headerWhite]}>Modifikasi Mobil</Text>
        <Text style={[Styles.paragraphWhite, {width: '70%', marginTop: 10}]}>
          Modifikasi Mobil dengan gaya kamu
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('TabNav')}
          style={[Styles.btnGreen, {marginTop: 30}]}>
          <Text style={[Styles.textBtnGreen]}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    position: 'relative',
  },
  section1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    flexDirection: 'column',
  },
});
