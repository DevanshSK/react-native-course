import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headingText}>ElevatedCards</Text>
            <ScrollView horizontal style={styles.container}>

                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardTitle}>Tapp</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardTitle}>me</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardTitle}>to</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardTitle}>scroll</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardTitle}>more...</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardTitle}>😊</Text>
                </View>

            </ScrollView>
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
        padding: 8,
    },
    card: {
        width: 100,
        height: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        margin: 8
    },
    cardTitle: {
        color: "#000000"
    },
    cardElevated: {
        backgroundColor: "#cad5e2",
        elevation: 8,
        shadowOffset: {
            height: 4,
            width: 4
        },
        shadowColor: "red",
        shadowOpacity: 1,
        shadowRadius: 2
    }
})