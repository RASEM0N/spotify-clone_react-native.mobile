import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native'
import AlbumCategory from '../components/AlbumCategory/AlbumCategory'
import albums from '../data/albums'

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={{
                    uri: 'https://cdn.hipwallpaper.com/i/17/23/Jc2f7Z.jpg',
                }}
                style={styles.image}
            />
            <ScrollView showsHorizontalScrollIndicator={false}>
                <AlbumCategory title="RUSSIA" albums={albums} />
                <AlbumCategory title="BAN" albums={albums} />
                <AlbumCategory title="BAN" albums={albums} />
                <AlbumCategory title="BAN" albums={albums} />
            </ScrollView>
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
