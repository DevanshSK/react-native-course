import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText} >Flat Cards</Text>
      <View style={styles.container}>

        <View style={[styles.card, styles.red]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.green]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.yellow]}>
          <Text>Yellow</Text>
        </View>
        <View style={[styles.card, styles.red]}>
          <Text>Red</Text>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 12,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 16,
  },
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: 100,
    borderRadius: 4,
    margin: 8
  },
  red: {
    backgroundColor: "#ef5354",
  },
  green:{
    backgroundColor: "#50dbb4"
  },
  yellow: {
    backgroundColor: "#e5fa5d",
  }
});
