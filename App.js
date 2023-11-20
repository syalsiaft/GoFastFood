// import * as React from 'react';
// import {Home} from './src/screens';
// export default function App() {
//   return <Home />;
//}

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from './src/screens';
import Router from './src/screens/Navigation/Router';
export default function App() {
  return (
    <NavigationContainer>
     <Router/>
    </NavigationContainer>
  );
}
