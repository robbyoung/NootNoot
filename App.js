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
        <Button title={pingus[0].name}
         onPress={pingus[0].onTap}
         color={buttonColor}></Button>
         <Button title={pingus[1].name}
         onPress={pingus[1].onTap}
         color={buttonColor}></Button>
         <Button title={pingus[2].name}
         onPress={pingus[2].onTap}
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
