// @flow

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Navigation } from 'react-native-navigation';
import { LOGIN_SCREEN } from 'src/navigation';

const styles = StyleSheet.create({
  button: {},
  buttonText: {
    fontSize: 24
    // fontWeight: "bold"
  },
  menu: {
    marginTop: 50,
    width: 320,
    height: 120
  },
  menuRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export class Menu extends React.PureComponent {
  handleGetStartAction = (screenType) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: LOGIN_SCREEN,
        passProps: {
          screenType
        },
        options: {
          topBar: {
            title: {
              text: 'LOGIN'
            }
          }
        }
      }
    });
  };

  render() {
    return (
      <View style={styles.menu}>
        <View style={styles.menuRow}>
          <Touchable
            hitSlop={{
              top: 15,
              left: 15,
              right: 15,
              bottom: 15
            }}
            onPress={() => this.handleGetStartAction('Single')}
            buttonStyle={styles.button}
          >
            <Text style={styles.buttonText}>Songs</Text>
          </Touchable>
          <Touchable
            hitSlop={{
              top: 15,
              left: 15,
              right: 15,
              bottom: 15
            }}
            onPress={() => this.handleGetStartAction('Single')}
            buttonStyle={styles.button}
          >
            <Text style={styles.buttonText}>Covers</Text>
          </Touchable>
        </View>
        <View style={styles.menuRow}>
          <Touchable
            hitSlop={{
              top: 15,
              left: 15,
              right: 15,
              bottom: 15
            }}
            onPress={() => this.handleGetStartAction('Single')}
            buttonStyle={styles.button}
          >
            <Text style={styles.buttonText}>SONGS</Text>
          </Touchable>
          <Touchable
            hitSlop={{
              top: 15,
              left: 15,
              right: 15,
              bottom: 15
            }}
            onPress={() => this.handleGetStartAction('Single')}
            buttonStyle={styles.button}
          >
            <Text style={styles.buttonText}>COVERS</Text>
          </Touchable>
        </View>
      </View>
    );
  }
}
