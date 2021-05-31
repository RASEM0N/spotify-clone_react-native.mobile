import React from 'react'
import { FlatList, ImageBackground, ScrollView, StyleSheet, View } from 'react-native'
import AlbumCategory from '../components/AlbumCategory/AlbumCategory'
import albums from '../data/albums'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={{
                    uri: 'https://cdn.hipwallpaper.com/i/17/23/Jc2f7Z.jpg',
                }}
                style={styles.image}
            />
            <FlatList
                data={albums}
                renderItem={({ item }) => (
                    <AlbumCategory id={item.id} albums={item.albums} title={item.title} />
                )}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
})
