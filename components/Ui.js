import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import color from '../constant/color';

const NavHeading = props => {
  return (
    <View style={styles.navheading}>
      <View
        style={{
          ...styles.iconContainer,
          backgroundColor: color.lightGray,
          top: 5,
          left: 5,
          height: 40,
          width: 40,
        }}>
        <Icon
          name={props.iname}
          size={25}
          color="black"
          onPress={props.onclick}
        />
      </View>
      <View
        style={{
          ...styles.iconContainer,
          backgroundColor: color.lightRed,
          top: 5,
          left: 15,
          height: 40,
          width: 40,
        }}>
        <Icon name="user" size={30} color="white" />
      </View>
    </View>
  );
};

const CardView = props => {
  return (
    <View style={styles.list}>
      <View style={styles.vimage}>
        <Image source={{uri: props.imagesource}} style={styles.image} />
      </View>

      <View style={styles.text}>
        <Text
          numberOfLines={1}
          textBreakStrategy="highQuality"
          style={styles.title}>
          {props.title}
        </Text>
        <Text
          numberOfLines={3}
          textBreakStrategy="highQuality"
          style={styles.info}>
          {props.info}
        </Text>
      </View>
      <View style={styles.menuleft}>
        <View style={styles.iconContainer}>
          <Icon name="eye" size={20} color="white" onPress={props.click} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navheading: {
    width: '100%',
    height: 50,
    backgroundColor: 'transparent',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  list: {
    flexDirection: 'row',
    width: '100%',
    height: 100,
    margin: 1,
    padding: 10,
    borderRadius: 25,
    justifyContent: 'space-between',
    backgroundColor: color.lightGray,
    borderColor: 'green',
    borderEndWidth: 8,
    borderBottomColor: 'green',
    borderBottomWidth: 4,
  },
  vimage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 75,
    height: 80,
    borderRadius: 15,
    resizeMode: 'cover',
    margin: 2,
    alignItems: 'center',
  },
  text: {
    flex: 3,
    marginLeft: 5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  title: {fontSize: 20, fontWeight: 'bold'},
  info: {color: 'gray', fontSize: 14},
  menuleft: {
    right: 0,
    top: 2,
    marginLeft: 10,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: color.lightRed,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    borderColor: 'green',
    borderWidth: 1,
  },
  txt: {
    margin: 5,
  },
});
export {NavHeading, CardView};
