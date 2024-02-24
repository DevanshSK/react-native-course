import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places</Text>

            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={{
                        uri: 'https://images.unsplash.com/photo-1682687221073-53ad74c2cad7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8'
                    }}
                    style={styles.cardImage}
                    height={200}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Mountain Goat</Text>
                    <Text style={styles.cardLabel}>Leh, Ladakh</Text>
                    <Text style={styles.cardDescription}>
                        This Goat is a very rare species which are found in only one place in India and are globally close to extinction.
                    </Text>
                    <Text style={styles.cardFooter}>12 hours away</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 12
    },
    card: {
        // width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardElevated: {
        backgroundColor: "#ffffff",
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    cardImage: {
        objectFit: "fill",
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: "#000000",
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 4
    },
    cardLabel: {
        color: "#000000",
        fontSize: 14,
        marginBottom: 6
    },
    cardDescription: {
        color: "#242b2e",
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1
    },
    cardFooter: {
        color: "#000000"
    }
});