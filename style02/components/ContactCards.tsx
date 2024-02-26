import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactCards() {

  const dummyData = [
    {
      uuid: 1,
      name: "John Doe",
      status: "Software Engineer",
      imageUrl: "https://avatars.githubusercontent.com/u/95367443?v=4"
    },
    {
      uuid: 2,
      name: "Jane Smith",
      status: "Frontend Developer",
      imageUrl: "https://avatars.githubusercontent.com/u/95367443?v=4"
    },
    {
      uuid: 3,
      name: "Devansh Singh Kushwah",
      status: "Mobile Developer",
      imageUrl: "https://avatars.githubusercontent.com/u/95367443?v=4"
    }
  ];

  return (
    <View>
      <Text style={styles.headingText} >ContactCards</Text>
      <ScrollView
        style={styles.container}
        scrollEnabled={false}
      >
        {dummyData.map(({ uuid, name, status, imageUrl }) => (
          <View key={uuid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl
              }}
              style={styles.userImage}
            />
            <View style={styles.cardContent}>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 12,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4
  },
  userCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
    backgroundColor: "#DAE0E2",
    padding: 8,
    borderRadius: 14
  },
  cardContent: {},
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    marginRight: 14
  },
  userName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4C4B4B"
  },
  userStatus: {
    fontSize: 12,
  }
})