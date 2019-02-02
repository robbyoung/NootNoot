/**
 * Pingu Soundboard
 * https://github.com/robbyoung/NootNoot
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

function noot() {
  console.error('NOOT NOOT');
}

var backgroundColor = '#6D6D6D';
var textColour = '#DBDBDB';
var buttonColor = '#D82600';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Noot Noot!</Text>
        <Button title="Tap to Noot"
         onPress={noot}
         color={buttonColor}></Button>
      </View>
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
