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
import data, {chapter} from '../constant/data';
import {List} from 'react-native-paper';

const CourseScreen = props => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.vimage}>
        <Image
          style={styles.simage}
          source={require('../assets/images/educationbgI.png')}
        />

        <NavHeading
          iname="arrow-left"
          onclick={() => {
            props.navigation.navigate('Home');
          }}
        />
      </View>
      <View style={styles.cview}>
        <Text
          style={{
            fontSize: 30,
            color: 'white',
            fontWeight: 'bold',
            marginLeft: 30,
          }}>
          Course Title
        </Text>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          {chapter.map((chapter, index) => {
            return (
              <View style={styles.vlist} key={index}>
                <List.Item
                  title={chapter.title}
                  description={chapter.description}
                  left={props => <List.Icon {...props} icon="book" />}
                  style={styles.listview}
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
  listview: {
    borderRadius: 30,
    backgroundColor: color.lightGray,
    borderColor: 'green',
    borderEndWidth: 4,
    borderBottomColor: 'green',
    borderBottomWidth: 2,
  },
});
export default CourseScreen;
