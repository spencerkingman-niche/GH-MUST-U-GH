// @flow

import React from 'react';
import {
  StyleSheet, Text, View, FlatList
} from 'react-native';
import Config from 'react-native-config';
import { SongItem } from '../../components/SongItem';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

// eslint-disable-next-line max-len
const YOU_TUBE_REQUEST = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${Config.SPENKING_STUFF_PLAYLIST_ID}&maxResults=20&key=${Config.YOU_TUBE_API_KEY}`;

export class Songs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null,
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
        loading: false,
        // refreshing: false
      });
    } catch (error) {
      console.error(error);
      this.setState({
        loading: false,
        error,
      });
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.flex}>
          <Text>LOADING</Text>
        </View>
      );
    } if (this.state.error) {
      return (
        <View style={styles.flex}>
          <Text>{'I\'m sorry. There has been an error. Maybe you are not connected to the internet?'}</Text>
        </View>
      );
    }
    return (
      <View style={styles.flex}>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id.videoId}
          renderItem={({ item }) => <SongItem
            key={item.id.videoId}
            id={item.id.videoId}
            title={item.snippet.title}
            imageSrc={item.snippet.thumbnails.high.url}
          />}
        //   ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}
