// @flow

import React from 'react';
import {
  StyleSheet, Text, View, Image
} from 'react-native';
// import { Button } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';
import Touchable from 'react-native-platform-touchable';

import { LOGIN_SCREEN } from 'src/navigation';
import { SFProDisplayRegular } from 'src/fonts';
import { Menu } from './Menu';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  // button: {
  //   backgroundColor: '#039893',
  //   width: 230,
  //   marginTop: 30,
  //   borderRadius: 25
  // },
  // buttonTitle: {
  //   fontSize: 14,
  //   fontWeight: 'bold'
  // },
  logo: {
    width: 220,
    height: 220,
    resizeMode: 'contain'
  },
  // logoContainer: {
  //   paddingTop: ,
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // },
  // menuContainer: {
  //   flex: 1,
  //   width: 280,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   paddingBottom: 25,
  // },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#262',
    fontSize: 18,
    fontWeight: 'bold'
  },
  menu: {
    width: 280,
    marginTop: 16,
  },
  menuRow: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center'
  }
  // logoTitle: {
  //   marginTop: 10,
  //   fontSize: 16,
  //   fontWeight: '500'
  // }
});

export class Start extends React.PureComponent {
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
      <View style={styles.flex}>
        <Image
          style={styles.logo}
          source={require('assets/images/logo.png')}
        />
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
              style={styles.button}
            >
              <SFProDisplayRegular style={styles.buttonText}>Songs</SFProDisplayRegular>
            </Touchable>
            <Touchable
              hitSlop={{
                top: 15,
                left: 15,
                right: 15,
                bottom: 15
              }}
              onPress={() => this.handleGetStartAction('Single')}
              style={styles.button}
            >
              <SFProDisplayRegular style={styles.buttonText}>Covers</SFProDisplayRegular>
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
              style={styles.button}
            >
              <SFProDisplayRegular style={styles.buttonText}>Shows</SFProDisplayRegular>
            </Touchable>
            <Touchable
              hitSlop={{
                top: 15,
                left: 15,
                right: 15,
                bottom: 15
              }}
              onPress={() => this.handleGetStartAction('Single')}
              style={styles.button}
            >
              <SFProDisplayRegular style={styles.buttonText}>Other</SFProDisplayRegular>
            </Touchable>
          </View>
        </View>
        {/* <SFProDisplayMedium style={styles.logoTitle}>
          {'Welcome to RNN v2 Starter Kit!'}
        </SFProDisplayMedium>
        <Button
          onPress={() => this.handleGetStartAction('Single')}
          title={'Start Single Screen App'}
          style={styles.button}
          titleStyle={styles.buttonTitle}
        />
        <Button
          onPress={() => this.handleGetStartAction('Tab')}
          title={'Start Tab Based App'}
          style={styles.button}
          titleStyle={styles.buttonTitle}
        /> */}
      </View>
    );
  }
}
