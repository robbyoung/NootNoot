/**
 * Pingu Soundboard
 * https://github.com/robbyoung/NootNoot
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
import {pingus} from './pingus';

var backgroundColor = '#6D6D6D';
var textColour = '#DBDBDB';
var buttonColor = '#D82600';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        pingus.map((item, index) => (
        <View style={styles.container}
          key = {item.id}>
          <Button
            title={item.name}
            onPress={item.onTap}
            color={buttonColor}>
          </Button>
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
    color: textColour,
  },
  title: {
    color: textColour,
    fontSize: 30,
    margin: 10,
  },
});
