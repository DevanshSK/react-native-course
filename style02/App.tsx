import { Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import ActionCards from './components/ActionCards';
import ContactCards from './components/ContactCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
        <FancyCards />
        <FancyCards />
        <FancyCards />
        <ActionCards/>
        <ContactCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
