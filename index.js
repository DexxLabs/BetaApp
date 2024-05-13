/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './appnew';
import appnew from './appnew';
//import app2 from './app2';
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => appnew);
