

import { Navigation } from "react-native-navigation";
import * as colors from "../styles/colors";

import { START } from "./Screens";
import registerScreens from "./registerScreens";

console.disableYellowBox = true;

// Register all screens on launch
registerScreens();

export function goToStart() {
  Navigation.setDefaultOptions({
    topBar: {
      background: {
        color: colors.gray01
      },
      title: {
        color: colors.white,
        fontFamily: "Fenix",
        fontSize: 20
      },
      backButton: {
        title: "", // Remove previous screen name from back button
        color: colors.white
      },
      buttonColor: colors.white
    },
    statusBar: {
      style: "light"
    },
    layout: {
      orientation: ["portrait"]
    },
    bottomTabs: {
      titleDisplayMode: "alwaysShow"
    },
    bottomTab: {
      textColor: "gray",
      selectedTextColor: colors.gray01,
      iconColor: "gray",
      selectedIconColor: colors.gray01
    }
  });

  Navigation.setRoot({
    root: {
      stack: {
        id: "MAIN",
        children: [
          {
            component: {
              name: START,
              options: {
                topBar: {
                  visible: false
                },
                statusBar: {
                  style: "dark"
                }
              }
            }
          }
        ]
      }
    }
  });
}
