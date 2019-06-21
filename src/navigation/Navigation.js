// @flow

import { Navigation } from 'react-native-navigation';
import * as colors from '../styles/colors';

import {
  // WELCOME_SCREEN,
  SINGLE_APP_SCREEN,
  TAB1_SCREEN,
  TAB2_SCREEN,
  START,
} from './Screens';
import registerScreens from './registerScreens';

console.disableYellowBox = true;

// Register all screens on launch
registerScreens();

export function pushTutorialScreen() {
  Navigation.setDefaultOptions({
    topBar: {
      background: {
        color: colors.gray01
      },
      title: {
        color: colors.white,
        fontFamily: 'Fenix',
        fontSize: 20,
      },
      backButton: {
        title: '', // Remove previous screen name from back button
        color: colors.white
      },
      buttonColor: colors.white
    },
    statusBar: {
      style: 'light'
    },
    layout: {
      orientation: ['portrait']
    },
    bottomTabs: {
      titleDisplayMode: 'alwaysShow'
    },
    bottomTab: {
      textColor: 'gray',
      selectedTextColor: colors.gray01,
      iconColor: 'gray',
      selectedIconColor: colors.gray01
    }
  });

  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: START,
              options: {
                topBar: {
                  visible: false
                },
                statusBar: {
                  style: 'dark'
                }
              }
            }
          }
        ]
      }
    }
  });
}

export function pushSingleScreenApp() {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: SINGLE_APP_SCREEN,
              options: {
                topBar: {
                  title: {
                    text: 'SINGLE SCREEN APP'
                  },
                  leftButtons: [
                    {
                      id: 'nav_user_btn',
                      icon: require('assets/icons/ic_nav_user.png'),
                      color: 'white'
                    }
                  ],
                  rightButtons: [
                    {
                      id: 'nav_logout_btn',
                      icon: require('assets/icons/ic_nav_logout.png'),
                      color: 'white'
                    }
                  ]
                }
              }
            }
          }
        ]
      }
    }
  });
}

export function pushTabBasedApp() {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: TAB1_SCREEN,
                    options: {
                      topBar: {
                        title: {
                          text: 'TAB 1'
                        },
                        leftButtons: [
                          {
                            id: 'nav_user_btn',
                            icon: require('assets/icons/ic_nav_user.png'),
                            color: 'white'
                          }
                        ],
                        rightButtons: [
                          {
                            id: 'nav_logout_btn',
                            icon: require('assets/icons/ic_nav_logout.png'),
                            color: 'white'
                          }
                        ]
                      }
                    }
                  }
                }
              ],
              options: {
                bottomTab: {
                  icon: require('assets/icons/ic_tab_home.png'),
                  testID: 'FIRST_TAB_BAR_BUTTON',
                  text: 'Tab1'
                }
              }
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: TAB2_SCREEN,
                    options: {
                      topBar: {
                        title: {
                          text: 'TAB 2'
                        },
                        leftButtons: [
                          {
                            id: 'nav_user_btn',
                            icon: require('assets/icons/ic_nav_user.png'),
                            color: 'white'
                          }
                        ],
                        rightButtons: [
                          {
                            id: 'nav_logout_btn',
                            icon: require('assets/icons/ic_nav_logout.png'),
                            color: 'white'
                          }
                        ]
                      }
                    }
                  }
                }
              ],
              options: {
                bottomTab: {
                  icon: require('assets/icons/ic_tab_menu.png'),
                  testID: 'SECOND_TAB_BAR_BUTTON',
                  text: 'Tab2'
                }
              }
            }
          }
        ]
      }
    }
  });
}
