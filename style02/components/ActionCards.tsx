import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCards() {
    const openWebsite = (username: string) => {
        const url = `linkedin://in/${username}`;

        // Check if the LinkedIn app is installed
        Linking.canOpenURL(url)
            .then((supported) => {
                if (supported) {
                    // Open the LinkedIn app with the profile
                    return Linking.openURL(url);
                } else {
                    // If the LinkedIn app is not installed, open the profile in the browser
                    return Linking.openURL(`https://www.linkedin.com/in/${username}`);
                }
            })
            .catch((err) => console.error('An error occurred', err));
    }

    return (
        <View>
            <Text style={styles.headingText}>Blog Cards</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's new in Javascript 23 - ES14?
                    </Text>
                </View>
                <Image
                    source={{
                        uri: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D"
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBodyContainer}>
                    <Text style={styles.cardDescription} numberOfLines={3}>
                        Just like every year, Javascript brings in new features. This year javascript is bringing 4 new features, which are almost in production rollout. I won't be wasting much more time and directly jump to code with easy to understand examples.
                    </Text>
                </View>

                <View style={styles.footerContainer}>
                    <TouchableOpacity onPress={() => openWebsite("devanshsk")}>
                        <Text style={styles.socialLinks}>Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openWebsite("devanshsk")}>
                        <Text style={styles.socialLinks}>Follow Me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 12,

    },
    card: {
        // height: 340,
        // width: 350,
        paddingBottom: 8,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    elevatedCard: {
        backgroundColor: "#EAF0F1",
        elevation: 3,
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowColor: "#333",
        shadowOpacity: 0.4
    },
    headingContainer: {
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        color: "#222",
        fontSize: 16,
        fontWeight: "600"

    },
    cardImage: {
        height: 200,
        objectFit: "cover"
    },
    cardDescription: {
        color: "#222",
    },
    cardBodyContainer: {
        padding: 12,
    },
    footerContainer: {
        padding: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    socialLinks: {
        fontSize: 16,
        color: "#000",
        backgroundColor: "#FFF",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 50
    }
})