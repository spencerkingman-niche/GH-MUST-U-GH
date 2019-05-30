// @flow

import React from 'react';
import {
  StyleSheet, Text, View, Image, TouchableWithoutFeedback
} from 'react-native';
// import { Navigation } from 'react-native-navigation';
// import Config from 'react-native-config';

const styles = StyleSheet.create({
  songItemContainer: {
    paddingTop: 20,
    alignItems: 'center'
  },
  songItemImage: {
    width: '100%',
    height: 200,
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
        <TouchableWithoutFeedback onPress={this.handlePress}>
          <View style={styles.songItemContainer}>
            <Image
              style={styles.songItemImage}
              source={{ uri: this.props.imageSrc }}
            />
            <Text>
              {this.props.title}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      );
    }
}
