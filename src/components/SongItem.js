// @flow

import React from 'react';
import {
  StyleSheet, View, Image, TouchableOpacity
} from 'react-native';
import * as Colors from '../styles/colors';
import { SFProDisplayMedium } from '../fonts/SFProDisplayMedium';
// import { Navigation } from 'react-native-navigation';

const styles = StyleSheet.create({
  contentContainer: {
    width: '76%',
    flexDirection: 'column',
    // borderWidth: 1,
    paddingLeft: 15,
    justifyContent: 'center',
    // borderWidth: 1,
  },
  image: {
    width: 100,
    height: 55,
    left: -15,
    position: 'absolute',
  },
  imageContainer: {
    overflow: 'hidden',
    height: 55,
    borderRadius: 4,
    width: 55,
    backgroundColor: 'transparent',
    marginLeft: 10,
  },
  mainContainer: {
    paddingVertical: 15,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray02,
    width: '100%',
  },
  subtitle: {
    color: Colors.gray03,
    fontSize: 16,
    fontFamily: 'Fenix',
    // borderWidth: 1,
  },
  title: {
    color: Colors.gray01,
    fontSize: 22,
    fontFamily: 'Fenix',
    marginBottom: 3,
    // borderWidth: 1,
  },
});


export class SongItem extends React.Component {

  handlePress = () => {
    //   Navigation.push(this.props.componentId, {
    //     component: {
    //       name: SONG,
    //       passProps: {
    //         ytubeId: this.props.id
    //       },
    //       options: {
    //         topBar: {
    //           title: {
    //             text: this.props.id
    //           }
    //         }
    //       }
    //     }
    //   });
  }

  render() {
    return (
      <TouchableOpacity onPress={this.handlePress} style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: this.props.imageSrc }}
          />
        </View>
        <View style={styles.contentContainer}>
          <SFProDisplayMedium style={styles.title}>
            {this.props.title}
          </SFProDisplayMedium>
          <SFProDisplayMedium style={styles.subtitle}>
            {this.props.date.slice(0, 10)}
          </SFProDisplayMedium>
        </View>
      </TouchableOpacity>
    );
  }
}
