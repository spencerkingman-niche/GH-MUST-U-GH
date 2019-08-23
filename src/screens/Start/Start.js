import React from "react";
import { View, Image } from "react-native";
import { Navigation } from "react-native-navigation";
import Touchable from "react-native-platform-touchable";
import { SFProDisplayRegular } from "src/fonts";
import { styles } from "./styles";
import { SONGS } from "../../navigation/Screens";
import { COVERS } from "../../navigation/Screens";
import { connectData } from 'src/redux';

class UnconnectedStart extends React.PureComponent {
  async componentDidMount() {
    const data = await this.props.getSongsData()
    console.log('WEE', data)
  }
  
  handleSongsPress = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: SONGS,
        options: {
          topBar: {
            title: {
              text: "SONGS"
            }
          }
        }
      }
    });
  };

  handleShowsPress = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: SHOWS,
        options: {
          topBar: {
            title: {
              text: "Shows"
            }
          }
        }
      }
    });
  };

  handleCoversPress = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: COVERS,
        options: {
          topBar: {
            title: {
              text: "COVERS"
            }
          }
        }
      }
    });
  };

  render() {
    return (
      <View style={styles.flex}>
        <Image style={styles.logo} source={require("assets/images/logo.png")} />
        <View style={styles.menu}>
          <View style={styles.menuRow}>
            <Touchable
              onPress={() => this.handleSongsPress()}
              style={styles.button}
            >
              <SFProDisplayRegular style={styles.buttonText}>
                SONGS
              </SFProDisplayRegular>
            </Touchable>
            <Touchable
              onPress={() => this.handleShowsPress()}
              style={styles.button}
            >
              <SFProDisplayRegular style={styles.buttonText}>
                Shows
              </SFProDisplayRegular>
            </Touchable>
          </View>
          <View style={styles.menuRow}>
            <Touchable
              onPress={() => { }}
              style={styles.button}
            >
              <SFProDisplayRegular style={styles.buttonText}>
                ------
              </SFProDisplayRegular>
            </Touchable>
            <Touchable
              onPress={() => this.handleGetStartAction("Single")}
              style={styles.button}
            >
              <SFProDisplayRegular style={styles.buttonText}>
                Writing
              </SFProDisplayRegular>
            </Touchable>
          </View>
          <View style={styles.menuRow}>
            <Touchable
              onPress={() => this.handleCoversPress()}
              style={styles.button}
            >
              <SFProDisplayRegular style={styles.buttonText}>
                Covers
              </SFProDisplayRegular>
            </Touchable>
            <Touchable
              onPress={() => this.handleCoversPress()}
              style={styles.button}
            >
              <SFProDisplayRegular style={styles.buttonText}>
                About
              </SFProDisplayRegular>
            </Touchable>
          </View>
        </View>
      </View>
    );
  }
}

// export default Start
export const Start = connectData()(UnconnectedStart)