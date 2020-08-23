import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo'
import HomePage from './screens/home';
import Navigator from './routes/drawer'; // default export so we can name the import whatever

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded) {
    return (
      // Stack Navigator creates a header above content automatically
      <Navigator />
    );
  }
  else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }
}