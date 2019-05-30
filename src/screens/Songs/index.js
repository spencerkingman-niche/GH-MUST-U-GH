// @flow

import React from 'react';
import {
  StyleSheet, Text, View, FlatList, Image, TouchableWithoutFeedback
} from 'react-native';
import Config from 'react-native-config';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export class Songs extends React.Component {

    static navigationOptions = {
      header: null
    }

    constructor(props) {
      super(props);
      this.state = { listLoaded: false };
    }

    componentDidMount() {
      return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=pluralsight&type=video&key=${Config.YOU_TUBE_API_KEY}`)
        .then(response => response.json())
        .then((responseJson) => {
          this.setState({
            listLoaded: true,
            videoList: Array.from(responseJson.items)
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }

    render() {
      return (
        <View>
          { this.state.listLoaded && (
            <View style={{ paddingTop: 30 }}>
              <FlatList
                data={this.state.videoList}
                renderItem={({ item }) => <TubeItem
                    key={item.id.videoId}
                    navigate={navigate}
                    id={item.id.videoId}
                    title={item.snippet.title}
                    imageSrc={item.snippet.thumbnails.high.url}
                  />
                }
              />
            </View>
          )}

          { !this.state.listLoaded && (
            <View style={{ paddingTop: 30 }}>
              <Text> LOADING </Text>
            </View>
          )}

        </View>
      );
    }
}
