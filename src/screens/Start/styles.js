import { StyleSheet } from 'react-native';
import * as colors from '../../styles/colors';

const LOGO_SIZE = 280;

export const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.yellow01,
  },
  logo: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    resizeMode: 'contain'
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.gray01,
    fontSize: 24,
    // fontFamily: 'Average-Regular',
    // fontFamily: 'Domine-Bold',
    fontFamily: 'Fenix',
    // fontFamily: 'Eczar-Regular',
    // fontFamily: 'FenixRegular',
    // fontFamily: 'Inconsolata-Bold',
    // fontFamily: 'Overlock-Bold',

  },
  menu: {
    width: 280,
    marginTop: 50,
  },
  menuRow: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
