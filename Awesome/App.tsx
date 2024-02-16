import React from 'react'

import { View, Text, SafeAreaView, Button } from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello React Native</Text>
        <Text>Hello React Native</Text>
        <Text>Hello React Native</Text>
        <Text>Hello React Native</Text>
        <Text>Hello React Native</Text>
        <Button onPress={() => console.log("Button Clicked")} title='Click Me' />
      </View>
    </SafeAreaView>
  );
}

export default App;
