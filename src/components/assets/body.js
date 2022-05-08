import {StyleSheet, Text, View} from 'react-native';
export const Styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'white',
  },
  logoSplash: {
    width: 300,
    height: 190,
  },
  headerWhite: {
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 30,
  },
  paragraphWhite: {
    color: 'white',
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 16,
    letterSpacing: 0.2,
    lineHeight: 21,
  },
  btnGreen: {
    width: 221,
    borderRadius: 10,
    height: 58,
    paddingTop: 14,
    backgroundColor: '#4DEB70',
  },
  textBtnGreen: {
    color: '#533636',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  imgIconTab: {
    width: 22,
    height: 22,
    marginBottom: 10,
  },
  textHeader: {
    fontSize: 20,
    color: '#362F2F',
    lineHeight: 24,
  },
});
