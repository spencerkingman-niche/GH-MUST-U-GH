import React from "react";
import PropTypes from "prop-types";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import YouTube from "react-native-youtube";
import Config from "react-native-config";
import * as Colors from "../../styles/colors";
import { songData } from "../../constants/songData";

const vidWidth = Dimensions.get("window").width;
const vidHeight = (vidWidth * 9) / 16;

const styles = StyleSheet.create({
  contentBottom: {
    alignSelf: "flex-start",
    height: 100,
    borderWidth: 1
  },
  contentTop: {
    alignSelf: "flex-end",
    height: 100,
    borderWidth: 1
  },
  flex: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  lyricsContainer: {
    backgroundColor: Colors.yellow01,
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 50,
    width: "100%"
  },
  lyrics: {
    color: Colors.gray01,
    fontSize: 18,
    lineHeight: 22,
    fontFamily: "Fenix",
    paddingBottom: 500
  },
  youTube: {
    // position: "absolute",
    // top: 0,
    alignSelf: "flex-start",
    width: vidWidth,
    height: vidHeight
  }
});

export class Song extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // isReady: false,
      // status: null,
      // quality: null,
      // error: null
    };
  }

  render() {
    const { id } = this.props;
    return (
      <View style={styles.flex}>
        <View style={styles.shadow}>
          <YouTube
            apiKey={Config.YOU_TUBE_API_KEY}
            controls={1}
            videoId={this.props.id} // The YouTube video ID
            play={true} // control playback of video with true/false
            fullscreen={false} // control whether the video should play in fullscreen or inline
            loop={true} // control whether the video should loop when ended
            modestbranding={true}
            // onReady={this.setState({ isReady: true })}
            // onChangeState={e => this.setState({ status: e.state })}
            // onChangeQuality={e => this.setState({ quality: e.quality })}
            // onError={e => this.setState({ error: e.error })}
            rel={false}
            showFullscreenButton={false}
            style={styles.youTube}
          />
        </View>
        {this.props.songType === "cover" && (
          <View style={styles.contentTop}>
            <Text>{songData[id].displayTitle}</Text>
            <Text>{songData[id].originalBy}</Text>
          </View>
        )}
        <ScrollView style={styles.lyricsContainer}>
          <Text style={styles.lyrics}>
            {songData[id].lyric1 ? songData[id].lyric1 : ""}
          </Text>
        </ScrollView>
        {this.props.songType === "cover" && (
          <View style={styles.contentBottom}>
            <Text>
              {"From the album "}
              <Text>{songData[id].onAlbum}</Text>
            </Text>
            <Text>{songData[id].writingDate}</Text>
          </View>
        )}
      </View>
    );
  }
}

Song.propTypes = {
  id: PropTypes.string.isRequired,
  songType: PropTypes.oneOf(["cover", "original"]).isRequired
};
