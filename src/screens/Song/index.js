// @flow

import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import YouTube from "react-native-youtube";

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export class Song extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      status: null,
      quality: null,
      error: null
    };
  }

  render() {
    return (
      <View style={styles.flex}>
        <YouTube
          videoId={this.props.id} // The YouTube video ID
          play={false} // control playback of video with true/false
          fullscreen={false} // control whether the video should play in fullscreen or inline
          loop={false} // control whether the video should loop when ended
          onReady={e => this.setState({ isReady: true })}
          onChangeState={e => this.setState({ status: e.state })}
          onChangeQuality={e => this.setState({ quality: e.quality })}
          onError={e => this.setState({ error: e.error })}
          style={{ alignSelf: "stretch", height: 300 }}
        />
        <Text>{this.props.title}</Text>
        <Text>{this.props.description}</Text>
      </View>
    );
  }
}

Song.propTypes = {};
