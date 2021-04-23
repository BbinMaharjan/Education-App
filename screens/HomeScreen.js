import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import {CardView, NavHeading} from '../components/Ui';
import color from '../constant/color';
import {data} from '../constant/data';

const HomeScreen = props => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.vimage}>
        <Image
          style={styles.simage}
          source={require('../assets/images/educationbg.png')}
        />

        <NavHeading iname="bars" />
      </View>
      <View style={styles.cview}>
        <Text
          style={{
            fontSize: 30,
            color: 'white',
            fontWeight: 'bold',
            marginLeft: 30,
          }}>
          Course
        </Text>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          {data.map((data, index) => {
            return (
              <View style={styles.vlist} key={index}>
                <CardView
                  imagesource={data.imagesource}
                  title={data.title}
                  info={data.info}
                  click={() => {
                    props.navigation.navigate('Course');
                  }}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: color.lighGray,
  },
  vimage: {
    flex: 1,
    backgroundColor: color.lightGray,
  },
  simage: {
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
  },
  cview: {
    flex: 3,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: color.lightRed,
  },
  scrollView: {
    padding: 5,
  },
});
export default HomeScreen;
