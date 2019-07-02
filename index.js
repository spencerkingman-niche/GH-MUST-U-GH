import { Navigation } from 'react-native-navigation';
import { goToStart } from 'src/navigation';

Navigation.events().registerAppLaunchedListener(() => goToStart());
