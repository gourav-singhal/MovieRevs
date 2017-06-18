import { AppRegistry } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import MovieRevs from './src';

EStyleSheet.build({
  $loginBackgroundColor: '#DCFFEE' 
});

AppRegistry.registerComponent('MovieRevs', () => MovieRevs);
