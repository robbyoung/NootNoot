/**
 * Pingu Soundboard
 * https://github.com/robbyoung/NootNoot
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Image, Text, View, TouchableHighlight} from 'react-native';
import {pingus} from './pingus';

var backgroundColor = '#6D6D6D';
var textColor = "#DBDBDB";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        pingus.map((item, i) => (
        <View key={i}
          style={styles.container}>
          <Text key={i}
            style={styles.title}>
            {item.name}
          </Text>
          <TouchableHighlight key={i}
            onPress={item.onTap}>
            <Image key={i}
              style={styles.image}
              source={item.imageSource}/>
          </TouchableHighlight>
        </View>
      ))
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: backgroundColor,
  },
  title: {
    color: textColor,
    fontSize: 30,
    margin: 5,
    marginBottom: 0,
  },
  image: {
    width: 200,
    height: 100,
    margin: 5,
  }
});
