

import React from 'react';
import { View, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Touchable from 'react-native-platform-touchable';
import { SFProDisplayRegular } from 'src/fonts';
import { styles } from './styles';
import { SONGS } from '../../navigation/Screens';

export class Start extends React.PureComponent {
  handleSongsPress = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: SONGS,
        options: {
          topBar: {
            title: {
              text: 'SONGS'
            }
          }
        }
      }
    });
  }

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
              onPress={() => this.handleSongsPress('Songs')}
              style={styles.button}
            >
              <SFProDisplayRegular style={styles.buttonText}>SONGS</SFProDisplayRegular>
            </Touchable>
            <Touchable
              onPress={() => this.handleGetStartAction('Single')}
              style={styles.button}
            >
              <SFProDisplayRegular style={styles.buttonText}>Shows</SFProDisplayRegular>
            </Touchable>
          </View>
          <View style={styles.menuRow}>
            <Touchable
              onPress={() => this.handleGetStartAction('Single')}
              style={styles.button}
            >
              <SFProDisplayRegular style={styles.buttonText}>------</SFProDisplayRegular>
            </Touchable>
            <Touchable
              onPress={() => this.handleGetStartAction('Single')}
              style={styles.button}
            >
              <SFProDisplayRegular style={styles.buttonText}>Writing</SFProDisplayRegular>
            </Touchable>
          </View>
          <View style={styles.menuRow}>
            <Touchable
              onPress={() => this.handleGetStartAction('Single')}
              style={styles.button}
            >
              <SFProDisplayRegular style={styles.buttonText}>Covers</SFProDisplayRegular>
            </Touchable>
            <Touchable
              onPress={() => this.handleGetStartAction('Single')}
              style={styles.button}
            >
              <SFProDisplayRegular style={styles.buttonText}>About</SFProDisplayRegular>
            </Touchable>
          </View>
        </View>
      </View>
    );
  }
}
