import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import {Styles} from '../../assets/body';

const WidthMax = Dimensions.get('window').width;
const HeightMax = Dimensions.get('window').height;
const Headers = () => {
  return (
    <View style={styles.rowHeader}>
      <View>
        <Image
          style={[styles.logo]}
          source={require('../../assets/logo_mini.png')}
        />
      </View>
      <View style={[styles.viewIcon]}>
        <Image
          style={[styles.icon]}
          source={require('../../assets/ic_notif.png')}
        />
        <View style={styles.viewTextNotif}>
          <Text style={styles.textNotif}>1</Text>
        </View>
      </View>
    </View>
  );
};

export default Headers;

const styles = StyleSheet.create({
  logo: {
    width: WidthMax * 0.4,
    height: HeightMax * 0.048,
  },
  icon: {
    width: 20,
    height: 20,
    marginTop: 10,
    marginLeft: 'auto',
    zIndex: 2,
  },
  rowHeader: {
    flex: 1,
    flexDirection: 'row',
    position: 'relative',
    marginTop: 32,
    padding: 30,
  },
  viewIcon: {
    marginLeft: 'auto',
    position: 'relative',
  },
  textNotif: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
  viewTextNotif: {
    width: 16,
    height: 16,
    backgroundColor: '#FF5F5F',
    position: 'absolute',
    borderRadius: 100,
    left: 12,
  },
});
