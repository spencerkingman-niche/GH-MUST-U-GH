import { StyleSheet } from 'react-native';
import * as colors from '../../styles/colors';

const LOGO_SIZE = 280;

export const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
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
    fontSize: 20,
    fontWeight: 'bold'
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
