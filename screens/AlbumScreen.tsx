import React, { useEffect } from 'react'
import { FlatList, Text, View } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'
import albumDetails from '../data/albumDetails'
import SongListItem from '../components/SongListItem/SongListItem'

interface PropsType {}

const AlbumScreen: React.FC<PropsType> = ({}) => {
    const route = useRoute<RouteProp<{ params: { albumId: string } }, 'params'>>()
    const albumId = route.params.albumId

    useEffect(() => {}, [])

    return (
        <View>
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
            />
        </View>
    )
}

export default AlbumScreen
