import React, { useEffect, useState } from 'react'
import { FlatList, Text, View, StyleSheet, ImageBackground } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'
import albumDetails from '../data/albumDetails'
import SongListItem from '../components/SongListItem/SongListItem'
import AlbumHeader from '../components/AlbumHeader/AlbumHeader'

interface PropsType {}

const AlbumScreen: React.FC<PropsType> = ({}) => {
    const route = useRoute<RouteProp<{ params: { albumId: string } }, 'params'>>()
    const albumId = route.params.albumId

    useEffect(() => {}, [])

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.image}
                source={{
                    uri: 'https://kartinkinaden.ru/uploads/posts/2020-07/1593791692_46-p-fon-temnii-les-74.jpg',
                }}
            />
            <View style={styles.contentContainer}>
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={albumDetails.songs}
                    renderItem={({ item }) => (
                        <SongListItem
                            title={item.title}
                            imageUri={item.imageUri}
                            artist={item.artist}
                            id={item.id}
                        />
                    )}
                    ListHeaderComponent={() => (
                        <AlbumHeader
                            id={albumDetails.id}
                            by={albumDetails.by}
                            name={albumDetails.name}
                            imageUri={albumDetails.imageUri}
                            numberOfLikes={albumDetails.numberOfLikes}
                            artistsHeadline={albumDetails.artistsHeadline}
                        />
                    )}
                />
            </View>
        </View>
    )
}

export default AlbumScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        backgroundColor: 'rgba(26,26,26,0.8)',
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
})
