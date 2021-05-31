import React, { useEffect } from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'
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
    )
}

export default AlbumScreen

const styles = StyleSheet.create({
    container: {},
})
