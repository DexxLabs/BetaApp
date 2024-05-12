/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './appnew';
import appnew from './appnew';
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => appnew);
