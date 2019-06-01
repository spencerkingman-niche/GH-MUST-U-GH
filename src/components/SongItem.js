// @flow

import React from 'react';
import {
  StyleSheet, View, Image, TouchableOpacity
} from 'react-native';
import * as Colors from '../styles/colors';
import { SFProDisplayMedium } from '../fonts/SFProDisplayMedium';
// import { Navigation } from 'react-native-navigation';

const styles = StyleSheet.create({
  title: {
    color: Colors.gray01,
    fontSize: 20,
    marginLeft: 15,
    width: '76%',
  },
  mainContainer: {
    paddingVertical: 15,
    alignItems: 'flex-start',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray02,
    width: '100%',
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
  }
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
          <SFProDisplayMedium style={styles.title}>
            {this.props.title}
          </SFProDisplayMedium>
        </TouchableOpacity>
      );
    }
}
