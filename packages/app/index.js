/**
 * @format
 */

import { AppRegistry, LogBox } from 'react-native';
import ConfettiExample from '../npm/src/example';
import { name as appName } from './app.json';

/* NOTE: Require cycle is caused by worklets/index.ts and hooks/index.ts.
It is not a problem so we ignore it. */
LogBox.ignoreLogs(['Require cycle:']);

AppRegistry.registerComponent(appName, () => ConfettiExample);
