import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  IcHome,
  IcHomeActive,
  IcList,
  IcListActive,
  IcNews,
  IcNewsActive,
  IcProfile,
  IcProfileActive,
  IcStories,
  IcStoriesActive,
} from '../../ImgActive/iconTabs';
import {Styles} from '../../assets/body';

const Icons = (label, isFocused) => {
  if (label === 'Home') {
    return isFocused ? (
      <>
        <Image style={[Styles.imgIconTab]} source={IcHomeActive} />
      </>
    ) : (
      <>
        <Image style={[Styles.imgIconTab]} source={IcHome} />
      </>
    );
  } else if (label === 'Stories') {
    return isFocused ? (
      <>
        <Image style={[Styles.imgIconTab]} source={IcStoriesActive} />
      </>
    ) : (
      <>
        <Image style={[Styles.imgIconTab]} source={IcStories} />
      </>
    );
  } else if (label === 'News') {
    return isFocused ? (
      <>
        <Image style={[Styles.imgIconTab]} source={IcNewsActive} />
      </>
    ) : (
      <>
        <Image style={[Styles.imgIconTab]} source={IcNews} />
      </>
    );
  } else if (label === 'List') {
    return isFocused ? (
      <>
        <Image style={[Styles.imgIconTab]} source={IcListActive} />
      </>
    ) : (
      <>
        <Image style={[Styles.imgIconTab]} source={IcList} />
      </>
    );
  } else if (label === 'Profile') {
    return isFocused ? (
      <>
        <Image style={[Styles.imgIconTab]} source={IcProfileActive} />
      </>
    ) : (
      <>
        <Image style={[Styles.imgIconTab]} source={IcProfile} />
      </>
    );
  }
};
const ButtomNav = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.containerTab}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            {Icons(label, isFocused)}
            <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ButtomNav;

const styles = StyleSheet.create({
  containerTab: {
    flexDirection: 'row',
    backgroundColor: '#FBF9F9',
    paddingVertical: 21,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
