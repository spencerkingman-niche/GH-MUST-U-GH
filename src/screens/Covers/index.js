import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Config from "react-native-config";
import { SongItem } from "../../components/SongItem";
import { songData } from "../../constants/songData";

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  errorTextContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 50
  }
});

// eslint-disable-next-line max-len
const YOU_TUBE_REQUEST = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${Config.SPENKING_COVERS_PLAYLIST_ID}&maxResults=20&key=${Config.YOU_TUBE_API_KEY}`;
export class Covers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null
      //   refreshing: false,
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = async () => {
    try {
      this.setState({
        loading: true
      });
      const response = await fetch(YOU_TUBE_REQUEST);
      const responseJSON = await response.json();
      this.setState({
        data: Array.from(responseJSON.items),
        error: responseJSON.error || null,
        loading: false
        // refreshing: false
      });
    } catch (error) {
      console.error(error);
      this.setState({
        loading: false,
        error
      });
    }
  };

  render() {
    const { data, error, loading } = this.state;
    if (loading) {
      return (
        <View style={styles.flex}>
          <Text>LOADING</Text>
        </View>
      );
    }
    if (error) {
      return (
        <View style={styles.errorTextContainer}>
          <Text style={styles.errorText}>
            {`I'm sorry. There has been an error.\n I will be working on it\n\n Also, this app only works if you are connected to the internet, so make sure you have a good signal.`}
          </Text>
        </View>
      );
    }
    return (
      <View style={styles.flex}>
        <FlatList
          data={data}
          keyExtractor={item => item.snippet.resourceId.videoId}
          renderItem={({ item }) => {
            const {
              publishedAt,
              description,
              resourceId,
              thumbnails,
              playlistId,
              position
            } = item.snippet;
            const id = resourceId.videoId;
            return (
              <SongItem
                date={publishedAt}
                description={description}
                id={id}
                imageSrc={thumbnails.standard.url}
                key={id}
                originalBy={
                  songData[id].originalBy ? songData[id].originalBy : null
                }
                playlistId={playlistId}
                position={position}
                songType="cover"
                thumbnailSrc={thumbnails.default.url}
                title={songData[id].displayTitle}
              />
            );
          }}
        //   ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}
